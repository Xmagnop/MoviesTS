import axios, { AxiosInstance } from "axios";
import * as types from "./types";

class API {

	private base: AxiosInstance;

	constructor() {
		this.base = axios.create({
			baseURL: "https://api.themoviedb.org/3",
		});
	}

	public getMovies = async (page: number, title?: string): Promise<types.Movie[]> => {
		const target = title ? "/search/movie" : "/movie/popular";
		const searchOrNot = title ? `&query=${title}` : "";

		const response = await this.base.get<types.MoviesList>(
			`${target}?api_key=05219aef37ad48f79afaed988d4298e6&language=en-US${searchOrNot}&page=${page}&include_adult=false`,
		);
		return response.data.results;
	};

	public getMovieDetails = async (id: string): Promise<types.MovieDetails> => {
		const response = await this.base.get<types.MovieDetails>(`/movie/${id}?api_key=05219aef37ad48f79afaed988d4298e6&language=en-US`);
		return response.data;
	};

}

const api = new API();
export default api;
