import React from "react";
import * as types from "../../Services/types";
import { HStack, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

interface IProps {
	genres: types.genre[];
}

const GenreList: React.FC<IProps> = (props) => (
	<HStack d="flex" wrap="wrap" spacing={3}>
		{
			props.genres.map((genre, index) => (
				<Text fontWeight="bold" color="gray.400" key={index} >{genre.name}</Text>
			))
		}
	</HStack>
);

export default observer(GenreList);
