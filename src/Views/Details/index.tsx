import { observer, useLocalObservable } from "mobx-react-lite";
import React from "react";
import { useParams } from "react-router";
import { Store } from "./store";
import ContainerLoading from "../../Components/Loading/loading";
import { ILoadableProps } from "../../Components/Loading/loadable";
import Fetchable from "../../Components/Fetchable";
import DetailsView from "../../Components/DetailsView";
import { Box } from "@chakra-ui/layout";
import { Palette } from "react-palette";


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
			<Box minHeight="100vh" bgColor="#0d253f">
				<Fetchable loadableProps={propsLoadable} errorComponent={<h1>{store.errorMessage}</h1>} hasError={!!store.errorMessage}>
					{
						store.modelShelf._model
							? <>
								<Palette src={`https://image.tmdb.org/t/p/w500/${store.modelShelf.model.poster_path}`} >
									{({ data }) => (
										<Box d="flex" minH="100vh" alignItems="center" bgGradient={`radial-gradient( ${data.darkVibrant!}, ${data.darkMuted!})`} >
											<DetailsView video={store.video} movie={store.modelShelf.model} />
										</Box>
									)}
								</Palette>
							</>
							: <h1>pagina não econtrada</h1>
					}
				</Fetchable>
			</Box>
		</>
	);

};

export default observer(DetailsPage);
