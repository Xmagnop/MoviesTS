import * as types from "../../Services/types";
import api from "../../Services/api";
import { makeAutoObservable } from "mobx";
import { ModelShelf } from "@startapp/mobx-utils";

export class Store {
	public movie: types.MovieDetails | null = null;
	public errorMessage = "";
	public modelShelf: ModelShelf<types.MovieDetails> | null = null;

	constructor() {
		makeAutoObservable(this);
	}

	public setErrorMessage = (text: string) => {
		this.errorMessage = text;
	};

	public fetch = (id?: string) => {
		if (id) {
			if (!this.modelShelf) {
				this.modelShelf = new ModelShelf(id, api.getMovieDetails, { onModelFetchError: this.setErrorMessage });
			} else {
				this.modelShelf.fetchModel();
			}
		}
	};
	// public fetch = async (id: string) => {

	//     this.loading.tryStart();

	//     try {
	//         const data = await api.getMovieDetails(id);
	//         this.setMovie(data);
	//         console.log(this.movie);
	//     } catch (error) {
	//         alert("erro na requisição");
	//         this.setErrorMessage(JSON.stringify(error));
	//         console.log(error);
	//     } finally {
	//         this.loading.end();
	//     }
	// }
}
