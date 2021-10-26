import { observer, useLocalObservable } from "mobx-react-lite";
import React from "react";
import Header from "../../Components/Header/index";
import "./index.css";
// import CardMovie from "../../Components/CardMovie/index";
import { Store } from "./store";
import CustomPagination from "../../Components/Pagination";
import ContainerLoading from "../../Components/Loading/loading";
import Fetchable from "../../Components/Fetchable";
import { ILoadableProps } from "../../Components/Loading/loadable";
import { Box } from "@chakra-ui/react";
import HomeView from "../../Components/HomeView";

const HomePage: React.FC = () => {
	const store = useLocalObservable(() => new Store());

	React.useEffect(
		() => {
			store.getData.fetchPage(1);
		},
		[store],
	);

	const propsLoader: ILoadableProps = {
		isLoading: store.getData.loader.isLoading,
		loadingComponent: <ContainerLoading />,
	};

	return (
		<>
			<Box size="full" bgColor="#0d253f">
				<Header setFilterTitle={(title: string) => store.setTitleFilter(title)} />
				<Fetchable loadableProps={propsLoader} errorComponent={<h1>{store.errorMessage}</h1>}>
					<HomeView movie={store.getData.items}/>
					<CustomPagination goNextPage={() => store.getData.nextPage()} goPreviousPage={() => store.getData.previousPage()} />
				</Fetchable>
			</Box>
			{/* <div className="page-home" >
				<Header setFilterTitle={(title: string) => store.setTitleFilter(title)} />
				<Fetchable loadableProps={propsLoader} errorComponent={<h1>{store.errorMessage}</h1>}>
					<div className="list-container">
						{
							store.getData.items.map((movie, index) => (
								<CardMovie movie={movie} key={index} />
							))
						}
					</div>
					<CustomPagination goNextPage={() => store.getData.nextPage()} goPreviousPage={() => store.getData.previousPage()} />
				</Fetchable>
			</div> */}
		</>
	);
};

export default observer(HomePage);
