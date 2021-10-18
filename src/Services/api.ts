import axios from 'axios';
import * as types from './types';

class API {

    private base;

    constructor(){
        this.base = axios.create({
            baseURL: "https://api.themoviedb.org/3",
        });
    }

    public async getMovies(): Promise<types.MoviesList>{
        const response = await this.base.get<types.MoviesList>("/movie/popular?api_key=05219aef37ad48f79afaed988d4298e6&language=en-US&page=1")
        return response.data;
    }

}

const api = new API();
export default api;