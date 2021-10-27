import React from "react";
import { observer } from "mobx-react-lite";
import * as types from "../../Services/types";
import { useHistory } from "react-router";
import { Flex, Badge } from "@chakra-ui/react";

interface IProps {
	movie: types.Movie;
}

const CardMovie: React.FC<IProps> = ({ movie }) => {
	const history = useHistory();
	const img_300 = "https://image.tmdb.org/t/p/w300";

	return (
		<Flex
			flexDirection="column"
			bgImg={`${img_300}/${movie.poster_path}`}
			bgSize="cover"
			bgPos="center"
			onClick={() => history.push(`/home/${movie.id}`)}
			cursor="pointer"
			alignItems="center"
			h="md"
		>
			<Flex
				h="full"
				w="full"
				alignItems="flex-end"
				justifyContent="flex-end"
				p={1}
			>
				<Badge
					ml="1"
					colorScheme="red"
				>
					{movie.vote_average}
				</Badge>
			</Flex>
		</Flex>
	);
};

export default observer(CardMovie);
