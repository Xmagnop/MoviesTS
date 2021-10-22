import * as types from "../../Services/types";
import api from "../../Services/api";
import { makeAutoObservable } from "mobx";
import { PaginatedListShelf } from "@startapp/mobx-utils";

export class Store {
	constructor() {
		makeAutoObservable(this);
	}

	public getData: PaginatedListShelf<types.Movie> = new PaginatedListShelf(api.getMovies);
	public total_pages = 0;
	public title_filter = "";
	public errorMessage = "";

	public setTotalPages = async (page?: number) => {
		if (page) {
			this.total_pages = page;
		} else {
			this.total_pages = await api.getTotalPages();
		}
	};

	public setItems(items: types.Movie[]) {
		this.getData.items = items;
	}

	public setTitleFilter(title: string) {
		this.title_filter = title;
		this.doFilter(1);
	}

	public handleChangePage(page: number){
		if(this.title_filter === ""){
			this.getData.fetchPage(page);
		}else {
			this.getData.page = page;
			this.doFilter(page);
		}
	}

	public doFilter = async(page: number) => {
		try {
			if (this.title_filter === "") {
				this.getData.fetchPage(1);
			} else {
				this.getData.loader.tryStart();
				const data = await api.getFilteredMovies(this.title_filter, page);
				this.setItems(data.results);
				this.setTotalPages(data.total_pages);
				this.getData.page = page;
			}
		} catch (error) {
			this.setErrorMessage(JSON.stringify(error));
		} finally {
			this.getData.loader.end();
		}
	};

	public setErrorMessage(text: string) {
		this.errorMessage = text;
	}

}
