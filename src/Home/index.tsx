import { observer, useLocalObservable } from 'mobx-react-lite';
import React from 'react';
import Header from '../Components/Header';
import './index.css';
import CardMovie from '../Components/CardMovie';
import { Store } from './store';

const HomePage: React.FC = () => {
    const store = useLocalObservable(() => new Store());

    React.useEffect(
        () => {
            store.fetch();
        },
        [store],
    )

    return (
        <>
            <div className="page-home" >
                <Header />
                {
                    store.loading ? <p>Carreagndo</p>
                        : (
                            <div className="list-container">
                                {store.movies.map((movie, index) => (
                                    <CardMovie movie={movie} key={index} />
                                ))}
                            </div>
                        )

                }
            </div>
        </>
    )

}

export default observer(HomePage);