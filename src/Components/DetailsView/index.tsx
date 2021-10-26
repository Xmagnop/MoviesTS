import { observer } from "mobx-react-lite";
import React from "react";
import * as types from "../../Services/types";
import { Container, Image, Box, useMediaQuery  } from "@chakra-ui/react";
import MovieInfo from "../MovieInfo/index";

interface Iprops {
	movie: types.MovieDetails;
	video: string;
}

const DetailsView: React.FC<Iprops> = (props) => {
	const img_500 = "https://image.tmdb.org/t/p/w500";
	const [isLargerThan767] = useMediaQuery("(min-width: 767px)");


	return (
		<Container
			maxW="container.xl"
			justifyContent="space-around"
			d="flex"
			flexDirection={isLargerThan767 ? "row" : "column-reverse"}
		>
			<Box>
				<MovieInfo video={props.video} overview={props.movie.overview} genres={props.movie.genres} grade={props.movie.vote_average} title={props.movie.title} date={props.movie.release_date} />
			</Box>
			<Box>
				<Image src={`${img_500}/${props.movie.poster_path}`} />
			</Box>
		</Container>
	);
};

export default observer(DetailsView);
