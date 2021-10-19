import { observer, useLocalObservable } from 'mobx-react-lite';
import React from 'react';
import { useParams } from 'react-router';
import * as types from '../../Services/types';
import { Store } from './store';
import ContainerLoading from '../../Components/Loading/loading';
import Header from '../../Components/Header/index';
import './index.css'

interface Iprops {
    movie: types.MovieDetails;
}

const DetailsPage: React.FC<Iprops> = ({ movie }) => {
    const store = useLocalObservable(() => new Store())
    type DetailsParams = {
        id: string;
    }

    const { id } = useParams<DetailsParams>();

    React.useEffect(
        () => {
            store.fetch(id);
        },
        [store, id],
    )

    const img_500: string = "https://image.tmdb.org/t/p/w500";

    return (
        <>
            <div className="page-details">
                <Header />
                {
                    store.loading
                        ? <ContainerLoading />
                        : store.movie
                            ? <div className="details-container">
                                <img alt="" className="details-poster" src={`${img_500}/${store.movie.poster_path}`} />
                                <div className="details-content">
                                    <h1 style={{ color: "white" }}>{store.movie.title}</h1>
                                    <p className="details-overview">{store.movie.overview}</p>
                                    <div className="details-info">
                                        {store.movie.genres.map((genre, index) => (
                                            <div className="genre-card" key={index}>{genre.name}</div>
                                        ))}
                                    </div>
                                    <div className="details-info">
                                        <p className="info-content" style={{ color: "white" }}>{store.movie.runtime}min</p>
                                        <p className="info-content" style={{ color: "#0077be" }}>{store.movie.vote_average}</p>
                                    </div>
                                </div>
                            </div>
                            : <h1>pagina não encontrada</h1>
                }
            </div>
        </>
    )

}

export default observer(DetailsPage);