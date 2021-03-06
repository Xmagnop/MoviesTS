export interface Movie {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface MoviesList {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
}

export interface genre {
	id: number;
	name: string;
}

interface company {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}

interface country {
	iso_3166_1: string;
	name: string;
}

interface language {
	english_name: string;
	iso_639_1: string;
	name: string;
}

export interface MovieDetails {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: {
		id: string;
		name: string;
		poster_path: string;
		backdrop_path: string;
	};
	budget: number;
	genres: genre[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: company[];
	production_countries: country[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: language[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

interface TrailerInfo {
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	published_at: string;
	id: string;
}

export interface MovieTrailer {
	id: string;
	results: TrailerInfo[];
}
