import axios from 'axios';
import * as types from './types';

class API {

    private base;

    constructor(){
        this.base = axios.create({
            baseURL: "https://api.themoviedb.org/3",
        });
    }

    public async getMovies(page: number): Promise<types.MoviesList>{
        const response = await this.base.get<types.MoviesList>(`/movie/popular?api_key=05219aef37ad48f79afaed988d4298e6&language=en-US&page=${page}`)
        return response.data;
    }

    public async getFilteredMovies(title: string, page: number): Promise<types.MoviesList>{
        const response = await this.base.get<types.MoviesList>(`/search/movie?api_key=05219aef37ad48f79afaed988d4298e6&language=en-US&query=${title}&page=${page}&include_adult=false`)
        return response.data;
    }

    public async getMovieDetails(id: string): Promise<types.MovieDetails>{
        const response = await this.base.get<types.MovieDetails>(`/movie/${id}?api_key=05219aef37ad48f79afaed988d4298e6&language=en-US`)
        return response.data;
    }

}

const api = new API();
export default api;