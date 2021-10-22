import { observer } from "mobx-react-lite";
import React from "react";
import * as types from "../../Services/types";
import "./index.css";

interface Gprops {
	genres: types.genre[];
}

const GenreList: React.FC<Gprops> = (props) => (
	<div className="details-info">
		{
			props.genres.map((genre, index) => (
				<div className="genre-card" key={index}>{genre.name}</div>
			))
		}
	</div>
);

interface Dprops {
	runtime: number;
	vote_average: number;
}

const DetailsInfo: React.FC<Dprops> = (props) => (
	<div className="details-info">
		<p className="info-content" style={{ color: "white" }}>{props.runtime}min</p>
		<p className="info-content" style={{ color: "#0077be" }}>{props.vote_average}</p>
	</div>
);

interface DCprops {
	title: string;
	overview: string;
	genres: types.genre[];
	runtime: number;
	vote_average: number;
}

const DetailsContent: React.FC<DCprops> = (props) => (
	<div className="details-content">
		<h1 style={{ color: "white" }}>{props.title}</h1>
		<p className="details-overview">{props.overview}</p>
		<GenreList genres={props.genres} />
		<DetailsInfo runtime={props.runtime} vote_average={props.vote_average} />
	</div>
);

interface Iprops {
	movie: types.MovieDetails;
}

const DetailsView: React.FC<Iprops> = ({ movie }) => {
	const img_500 = "https://image.tmdb.org/t/p/w500";

	return (
		<div className="details-container">
			<img alt="" className="details-poster" src={`${img_500}/${movie.poster_path}`} />
			<DetailsContent
				title={movie.title}
				overview={movie.overview}
				genres={movie.genres}
				runtime={movie.runtime}
				vote_average={movie.vote_average}
			/>
		</div>
	);
};

export default observer(DetailsView);
