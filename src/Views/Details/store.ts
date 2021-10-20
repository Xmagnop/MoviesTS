import * as types from '../../Services/types';
import api from '../../Services/api';
import { makeAutoObservable } from 'mobx';
import { LoaderShelf,  /* ModelShelf */ } from '@startapp/mobx-utils';

export class Store {
    constructor() {
        makeAutoObservable(this);
    }
    public movie: types.MovieDetails | null = null;
    public loading = new LoaderShelf();
    public id: string = "";
    public errorMessage: string = "";
    // public request = new ModelShelf(this.id, api.getMovieDetails);

    public setMovie(movie: types.MovieDetails) {
        this.movie = movie;
    }

    public setId(id: string){
        this.id = id;
    }

    public setErrorMessage(text: string){
        this.errorMessage = text;
    }

    // public fetch = async () => {
    //     this.request.fetchModel();
    //     this.movie = this.request._getModel();
    // }

    public fetch = async (id: string) => {
        
        this.loading.tryStart();

        try {
            const data = await api.getMovieDetails(id);
            this.setMovie(data);
            console.log(this.movie);
        } catch (error) {
            alert("erro na requisição");
            this.setErrorMessage(JSON.stringify(error));
            console.log(error);
        } finally {
            this.loading.end();
        }
    }
}