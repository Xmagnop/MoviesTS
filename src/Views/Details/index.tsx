import { observer, useLocalObservable } from "mobx-react-lite";
import React from "react";
import { useParams } from "react-router";
import { Store } from "./store";
import ContainerLoading from "../../Components/Loading/loading";
import { ILoadableProps } from "../../Components/Loading/loadable";
import Fetchable from "../../Components/Fetchable";
import Header from "../../Components/Header/index";
import "./index.css";
import DetailsView from "../../Components/DetailsView";

const DetailsPage: React.FC = () => {
	interface DetailsParams {
		id: string;
	}

	const { id } = useParams<DetailsParams>();
	const store = useLocalObservable(() => new Store(id));

	const propsLoadable: ILoadableProps = {
		isLoading: !!store.modelShelf?.loader.isLoading,
		loadingComponent: <ContainerLoading />,
	};

	return (
		<>
			<div className="page-details">
				<Header />
				<Fetchable loadableProps={propsLoadable} errorComponent={<h1>{store.errorMessage}</h1>} hasError={!!store.errorMessage} >
					{
						store.modelShelf._model
							? <DetailsView movie={store.modelShelf.model} />
							: <h1>pagina não econtrada</h1>
					}
				</Fetchable>
			</div>
		</>
	);

};

export default observer(DetailsPage);
