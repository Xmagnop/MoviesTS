import React from "react";
import * as types from "../../Services/types";
import { HStack, Flex, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

interface IProps {
	genres: types.genre[];
}

const GenreList: React.FC<IProps> = (props) => (
	<HStack spacing="15px" flexFlow="row" alignItems="center">
		{
			props.genres.map((genre, index) => (
				<Flex key={index}>
					<Text fontWeight="bold" color="gray.400" >{genre.name}</Text>
				</Flex>
			))
		}
	</HStack>
);

export default observer(GenreList);
