import React from "react";
import { HStack, Text, Heading, Container, VStack, Box, Link } from "@chakra-ui/layout";
import { observer } from "mobx-react-lite";
import GenreList from "../GenreList/index";
import * as types from "../../Services/types";
import { Button } from "@chakra-ui/button";
import { FaYoutube } from "react-icons/fa";

interface IProps {
	title: string;
	date: string;
	grade: number;
	genres: types.genre[];
	overview: string;
	video: string;
}

const MovieInfo: React.FC<IProps> = (props) => (
	<Container
		d="flex"
		p={5}
		flexDirection="column"
	>
		<VStack spacing="25px">
			<Box d="flex" flexDirection="column" w="100%" justifyContent="flex-start" >
				<Text bgColor="blackAlpha.300" p={1} alignSelf="self-start" fontSize="lg" fontWeight="bold" color="red.500">{props.grade}</Text>
				<HStack spacing="15px">
					<Heading color="whiteAlpha.800">{props.title}</Heading>
					<Text color="whiteAlpha.800">{props.date.split("-")[0]}</Text>
				</HStack>
				<GenreList genres={props.genres} />
			</Box>
			<Box>
				<Text textAlign="justify" color="whiteAlpha.700">{props.overview}</Text>
			</Box>
			<Box w="100%" >
				<Link href={`https://www.youtube.com/watch?v=${props.video}`} target="_blank" ><Button w="100%" size="lg" leftIcon={<FaYoutube />} colorScheme="red" >Trailer</Button></Link>
			</Box>
		</VStack>
	</Container>
);

export default observer(MovieInfo);
