import  * as types from '../Services/types';
import api from '../Services/api';
import { makeAutoObservable } from 'mobx';

export class Store {
    constructor(){
        makeAutoObservable(this);
    }

    public movies: types.Movie[] = [];
    public loading: boolean = false;

    public setMovies(movies: types.Movie[]){
        this.movies = movies;
    }

    public setLoading(loading: boolean){
        this.loading = loading;
    }

    public fetch = async() =>{
        if(this.loading){
            return;
        }
        this.setLoading(true)
        try{
            const data = await api.getMovies();
            this.setMovies(data.results);
        } catch(error){
            alert("erro na requisição");
            console.log(error);
        } finally {
            this.setLoading(false);
        }
    }
}
