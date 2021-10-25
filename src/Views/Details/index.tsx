import { observer, useLocalObservable } from "mobx-react-lite";
import React from "react";
import { useParams } from "react-router";
import { Store } from "./store";
import ContainerLoading from "../../Components/Loading/loading";
import { ILoadableProps } from "../../Components/Loading/loadable";
import Fetchable from "../../Components/Fetchable";
import "./index.css";
import DetailsView from "../../Components/DetailsView";
import { Box } from "@chakra-ui/layout";
// import { ColorExtractor } from "react-color-extractor";


const DetailsPage: React.FC = () => {
	interface DetailsParams {
		id: string;
	}

	const { id } = useParams<DetailsParams>();
	const store = useLocalObservable(() => new Store(id));

	React.useEffect(
		() => {
			store.fetchTrailer(id);
		},
		[store],
	);

	const propsLoadable: ILoadableProps = {
		isLoading: !!store.modelShelf?.loader.isLoading,
		loadingComponent: <ContainerLoading />,
	};

	return (
		<>
			<Box d="flex" minH="100vh" alignItems="center" bgGradient="linear(to-l, #6d67b6, #000000)" >
				<Fetchable loadableProps={propsLoadable} errorComponent={<h1>{store.errorMessage}</h1>} hasError={!!store.errorMessage} >
					{
						store.modelShelf._model
							? <>
								{/* {console.log(store.color)}
								<ColorExtractor src={`https://image.tmdb.org/t/p/w500/${store.modelShelf.model.poster_path}`} maxColors={1} getColors={(colors: string)=>store.setColors(colors)}/> */}
								<DetailsView video={store.video} movie={store.modelShelf.model} />
							</>
							: <h1>pagina não econtrada</h1>
					}
				</Fetchable>
			</Box>
		</>
	);

};

export default observer(DetailsPage);
