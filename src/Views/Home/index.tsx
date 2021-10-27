import { observer, useLocalObservable } from "mobx-react-lite";
import React from "react";
import Header from "../../Components/Header/index";
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
			<Box w="100%" bgColor="#0d253f">
				<Header setFilterTitle={(title: string) => store.setTitleFilter(title)} doFilter={()=> store.doFilter()} />
				<Fetchable loadableProps={propsLoader} errorComponent={<h1>{store.errorMessage}</h1>}>
					<HomeView movie={store.getData.items} frontMovie={store.getData.items[0]}/>
					<CustomPagination goNextPage={() => store.getData.nextPage()} goPreviousPage={() => store.getData.previousPage()} />
				</Fetchable>
			</Box>
		</>
	);
};

export default observer(HomePage);
