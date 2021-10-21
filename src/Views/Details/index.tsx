import { observer, useLocalObservable } from "mobx-react-lite";
import React from "react";
import { useParams } from "react-router";
import { Store } from "./store";
import ContainerLoading from "../../Components/Loading/loading";
import { ILoadableProps } from "../../Components/Loading/loadable";
import Fetchable from "../../Components/Fetchable";
import Header from "../../Components/Header/index";
import "./index.css";

const DetailsPage: React.FC = () => {
	interface DetailsParams {
		id: string;
	}

	const { id } = useParams<DetailsParams>();
	const store = useLocalObservable(() => new Store());
	const img_500 = "https://image.tmdb.org/t/p/w500";

	const propsLoadable: ILoadableProps = {
		isLoading: !!store.modelShelf?.loader.isLoading,
		loadingComponent: <ContainerLoading />,
	};

	React.useEffect(
		() => {
			store.fetch(id);
		},
		[store, id],
	);

	console.log(JSON.stringify(store.modelShelf));

	return (
		<>
			<div className="page-details">
				<Header />
				<Fetchable loadableProps={propsLoadable} errorComponent={<h1>{store.errorMessage}</h1>} hasError={!!store.errorMessage} >
					{
						(store.modelShelf && store.modelShelf.model)
						&& <div className="details-container">
							<img alt="" className="details-poster" src={`${img_500}/${store.modelShelf.model.poster_path}`} />
							<div className="details-content">
								<h1 style={{ color: "white" }}>{store.modelShelf.model.title}</h1>
								<p className="details-overview">{store.modelShelf.model.overview}</p>
								<div className="details-info">
									{store.modelShelf.model.genres.map((genre, index) => (
										<div className="genre-card" key={index}>{genre.name}</div>
									))}
								</div>
								<div className="details-info">
									<p className="info-content" style={{ color: "white" }}>{store.modelShelf.model.runtime}min</p>
									<p className="info-content" style={{ color: "#0077be" }}>{store.modelShelf.model.vote_average}</p>
								</div>
							</div>
						</div>
					}
				</Fetchable>
			</div>
		</>
	);

};

export default observer(DetailsPage);
