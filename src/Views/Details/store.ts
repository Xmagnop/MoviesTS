import * as types from "../../Services/types";
import api from "../../Services/api";
import { makeAutoObservable } from "mobx";
import { ModelShelf } from "@startapp/mobx-utils";

export class Store {
	public movie: types.MovieDetails | null = null;
	public errorMessage = "";
	public modelShelf: ModelShelf<types.MovieDetails>;

	constructor(id: string) {
		this.modelShelf = new ModelShelf(id, api.getMovieDetails, { onModelFetchError: this.setErrorMessage });
		makeAutoObservable(this);
	}

	public setErrorMessage = (text: string) => {
		this.errorMessage = text;
	};
}
