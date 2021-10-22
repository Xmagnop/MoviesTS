import { observer, useLocalObservable } from "mobx-react-lite";
import React from "react";
import Header from "../../Components/Header/index";
import "./index.css";
import CardMovie from "../../Components/CardMovie/index";
import { Store } from "./store";
import CustomPagination from "../../Components/Pagination";
import ContainerLoading from "../../Components/Loading/loading";
import Fetchable from "../../Components/Fetchable";
import { ILoadableProps } from "../../Components/Loading/loadable";

const HomePage: React.FC = () => {
	const store = useLocalObservable(() => new Store());

	React.useEffect(
		() => {
			store.getData.fetchPage(1);
			// store.setTotalPages();
		},
		[store],
	);

	const propsLoader: ILoadableProps = {
		isLoading: store.getData.loader.isLoading,
		loadingComponent: <ContainerLoading />,
	};

	return (
		<>
			<div className="page-home" >
				<Header setFilterTitle={(title: string) => store.setTitleFilter(title)} />
				<Fetchable loadableProps={propsLoader} errorComponent={<h1>{store.errorMessage}</h1>}>
					<div className="list-container">
						{
							(store.getData.items)
							&& store.getData.items.map((movie, index) => (
								<CardMovie movie={movie} key={index} />
							))
						}
						<CustomPagination pages_total={store.total_pages} page_current={store.getData.page} setPage={(page: number) => store.getData.fetchPage(page)} />
					</div>
				</Fetchable>
			</div>
		</>
	);
};

export default observer(HomePage);
