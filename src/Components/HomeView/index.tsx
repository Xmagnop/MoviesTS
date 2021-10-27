import { Container, Text, VStack, Flex, SimpleGrid } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React from "react";
import { useHistory } from "react-router";

import * as types from "../../Services/types";
import CardMovie from "../CardMovie/index";

interface IProps {
	movie: types.Movie[];
	frontMovie: types.Movie;
}

const HomeView: React.FC<IProps> = (props) => {
	const history = useHistory();

	return (
		<>
			<Container
				d="flex"
				flexDirection="column"
				paddingInline={0}
				minWidth="100%"
			>
				{
					props.frontMovie
					&& <Flex
						minH="50vh"
						bgSize="cover"
						bgPos="center"
						bgImg={`https://image.tmdb.org/t/p/original/${props.frontMovie.backdrop_path}`}
						onClick={() => history.push(`/home/${props.frontMovie.id}`)}
						cursor="pointer"
					>
						<Flex
							w="full"
							h="50vh"
							alignItems="center"
							justifyContent="center"
							bgColor="blackAlpha.400"
						>
							<VStack>
								<Text
									fontWeight="bold"
									fontSize="3xl"
									color="whiteAlpha.900"
								>
									{props.frontMovie.title}
								</Text>
								<Text
									fontSize="2xl"
									color="whiteAlpha.900"
								>
									{props.frontMovie.release_date.split("-")[0]}
								</Text>
								<Text
									fontSize="2xl"
									color="red.200"
									fontWeight="bold"
								>
									{props.frontMovie.vote_average}
								</Text>
							</VStack>
						</Flex>
					</Flex>
				}
			</Container>
			<SimpleGrid
				minChildWidth="280px"
			>
				{
					props.movie.map((movie, index) => (
						<CardMovie movie={movie} key={index} />
					))
				}
			</SimpleGrid>
		</>
	);

};

export default observer(HomeView);
