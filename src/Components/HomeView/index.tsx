import { Container, Box, Text, VStack, Flex, HStack } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React from "react";

import * as types from "../../Services/types";
import CardMovie from "../CardMovie/index";

interface IProps {
	movie: types.Movie[];
}

const HomeView: React.FC<IProps> = (props) => (
	<>
		<Container
			d="flex"
			flexDirection="column"
			paddingInline={0}
			minWidth="100%"
		>
			{
				props.movie[0]
				&& <Flex
					minH="50vh"
					justifyContent="center"
					alignItems="center"
					bgSize="cover"
					bgPos="center"
					bgImg={`https://image.tmdb.org/t/p/original/${props.movie[0].backdrop_path}`}
				>
					<VStack bgColor="blackAlpha.200">
						<Box>
							<Text
								fontWeight="bold"
								fontSize="6xl"
								color="whiteAlpha.800"
							>{props.movie[0].title}</Text>
						</Box>
						<Box>
							<Text
								fontSize="2xl"
								color="whiteAlpha.800"
							>{props.movie[0].release_date.split("-")[0]}</Text>
						</Box>
						<Box>
							<Text
								fontSize="2xl"
								color="red.300"
							>{props.movie[0].vote_average}</Text>
						</Box>
					</VStack>
				</Flex>
			}
		</Container>
		<HStack justifyContent="center" wrap="wrap">
			{
				props.movie.map((movie, index) => (
					<CardMovie movie={movie} key={index} />
				))
			}
		</HStack>
	</>
);

export default observer(HomeView);
