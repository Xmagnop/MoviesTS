import * as types from "../../Services/types";
import api from "../../Services/api";
import { makeAutoObservable } from "mobx";
import { PaginatedListShelf } from "@startapp/mobx-utils";

export class Store {
	constructor() {
		makeAutoObservable(this);
	}

	public getData: PaginatedListShelf<types.Movie> = new PaginatedListShelf((page: number) => api.getMovies(page, this.title_filter));
	public total_pages = 5;
	public title_filter = "";
	public errorMessage = "";

	public setTitleFilter(title: string) {
		this.title_filter = title;
		this.getData.fetchPage(1);
	}

	public setErrorMessage(text: string) {
		this.errorMessage = text;
	}

}
