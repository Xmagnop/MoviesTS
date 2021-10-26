import * as types from "../../Services/types";
import api from "../../Services/api";
import { makeAutoObservable } from "mobx";
import { ModelShelf } from "@startapp/mobx-utils";

export class Store {
	public trailer_info: types.MovieTrailer | null = null;
	public video = "";
	public errorMessage = "";
	public color = "";
	public modelShelf: ModelShelf<types.MovieDetails>;

	constructor(id: string) {
		this.modelShelf = new ModelShelf(id, api.getMovieDetails, { onModelFetchError: this.setErrorMessage });
		makeAutoObservable(this);
	}

	public setErrorMessage = (text: string) => {
		this.errorMessage = text;
	};
	public setVideo = (text: string) => {
		this.video = text;
	};
	public setTrailerInfo(trailerInfo: types.MovieTrailer) {
		this.trailer_info = trailerInfo;
	}
	public setColors(colors: string) {
		this.color = colors;
	}
	public fetchTrailer = async (id: string) => {
		try {
			const data = await api.getMovieTrailer(id);
			this.setTrailerInfo(data);
		} catch (error) {
			this.setErrorMessage(JSON.stringify(error));
		} finally {
			if (this.trailer_info?.results[0]) {
				this.setVideo(this.trailer_info.results[0].key);
			} else {
				this.setVideo("indisponível");
			}
		}
	};
}
