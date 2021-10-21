import axios, { AxiosInstance } from "axios";
import * as types from "./types";

class API {

	private base: AxiosInstance;

	constructor(){
		this.base = axios.create({
			baseURL: "https://api.themoviedb.org/3",
		});
	}

	public getMovies = async(page: number): Promise<types.MoviesList> => {
		const response = await this.base.get<types.MoviesList>(`/movie/popular?api_key=05219aef37ad48f79afaed988d4298e6&language=en-US&page=${page}`);
		return response.data;
	};

	public getFilteredMovies = async(title: string, page: number): Promise<types.MoviesList> => {
		const response = await this.base.get<types.MoviesList>(`/search/movie?api_key=05219aef37ad48f79afaed988d4298e6&language=en-US&query=${title}&page=${page}&include_adult=false`);
		return response.data;
	};

	public getMovieDetails = async(id: string): Promise<types.MovieDetails> => {
		const response = await this.base.get<types.MovieDetails>(`/movie/${id}?api_key=05219aef37ad48f79afaed988d4298e6&language=en-US`);
		return response.data;
	};

}

const api = new API();
export default api;
