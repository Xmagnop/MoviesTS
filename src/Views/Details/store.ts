import * as types from '../../Services/types';
import api from '../../Services/api';
import { makeAutoObservable } from 'mobx';

export class Store {
    constructor() {
        makeAutoObservable(this);
    }
    public movie: types.MovieDetails | null = null;
    public loading: boolean = false;
    public id: string = "";

    public setMovie(movie: types.MovieDetails) {
        this.movie = movie;
    }

    public setLoading(loading: boolean) {
        this.loading = loading;
    }

    public setId(id: string){
        this.id = id;
    }

    public fetch = async (id: string) => {
        if (this.loading) {
            return;
        }
        this.setLoading(true)
        try {
            const data = await api.getMovieDetails(id);
            this.setMovie(data);
            console.log(this.movie);
        } catch (error) {
            alert("erro na requisição");
            console.log(error);
        } finally {
            this.setLoading(false);
        }
    }
}