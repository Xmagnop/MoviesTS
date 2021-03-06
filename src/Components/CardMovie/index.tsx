import React from "react";
import { observer } from "mobx-react-lite";
import * as types from "../../Services/types";
import "./index.css";
import { useHistory } from "react-router";

interface IProps {
	movie: types.Movie;
}

const CardMovie: React.FC<IProps> = ({ movie }) => {
	const history = useHistory();
	const img_300 = "https://image.tmdb.org/t/p/w300";

	return (
		<div className="movie-card" onClick={()=>history.push(`/home/${movie.id}`)} >
			<img alt={movie.original_title} src={`${img_300}/${movie.poster_path}`} className="movie-poster" />
			<b className="movie-title">{movie.title}</b>
			<div className="movie-details">
				<p className="movie-info" style={{ color: "white" }} >{movie.release_date}</p>
				<p className="movie-info" style={{ color: "#0077be" }} >{movie.vote_average}</p>
			</div>
		</div>
	);
};

export default observer(CardMovie);
