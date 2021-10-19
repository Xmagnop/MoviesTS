import  * as types from '../Services/types';
import api from '../Services/api';
import { makeAutoObservable } from 'mobx';

export class Store {
    constructor(){
        makeAutoObservable(this);
    }

    public movies: types.Movie[] = [];
    public loading: boolean = false;
    public total_pages: number = 0;
    public current_page: number = 1;
    public title_filter: string = "";

    public setMovies(movies: types.Movie[]){
        this.movies = movies;
    }

    public setLoading(loading: boolean){
        this.loading = loading;
    }

    public setTotalPages(totalpages: number){
        this.total_pages = totalpages;
    }

    public fetch = async() =>{
        let data: types.MoviesList;
        if(this.loading){
            return;
        }
        this.setLoading(true)
        try{
            if(this.title_filter === ""){
                data = await api.getMovies(this.current_page);
            }else {
                data = await api.getFilteredMovies(this.title_filter, this.current_page);
            }
            this.setMovies(data.results);
            this.setTotalPages(data.total_pages);
        } catch(error){
            alert("erro na requisição");
            console.log(error);
        } finally {
            this.setLoading(false);
        }
    }

    public setTitleFilter(title: string){
        this.title_filter = title;
        this.current_page = 1;
        this.fetch();
    }

    public setCurrentPage(page: number){
        this.current_page = page;
        this.fetch();
    }
}
