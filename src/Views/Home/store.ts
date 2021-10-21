import  * as types from "../../Services/types";
import api from "../../Services/api";
import { makeAutoObservable } from "mobx";
import { LoaderShelf } from "@startapp/mobx-utils";

export class Store {
	constructor(){
		makeAutoObservable(this);
	}

	public movies: types.Movie[] = [];
	public loading = new LoaderShelf();
	public total_pages = 0;
	public current_page = 1;
	public title_filter = "";
	public errorMessage = "";

	public setMovies(movies: types.Movie[]){
		this.movies = movies;
	}

	public setTotalPages(totalpages: number){
		this.total_pages = totalpages;
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

	public setErrorMessage(text: string){
		this.errorMessage = text;
	}

	public fetch = async() =>{
		let data: types.MoviesList;

		this.loading.tryStart();

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
			this.setErrorMessage(JSON.stringify(error));
		} finally {
			this.loading.end();
		}
	};
}
