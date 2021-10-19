import { observer, useLocalObservable } from 'mobx-react-lite';
import React from 'react';
import Header from '../Components/Header';
import './index.css';
import CardMovie from '../Components/CardMovie';
import { Store } from './store';
import CustomPagination from '../Components/Pagination';
import ContainerLoading from '../Components/loading';

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
                <Header setFilterTitle={(title: string) => store.setTitleFilter(title)} />
                {
                    store.loading ? 
                            <div className="list-container">
                                <ContainerLoading />
                            </div>
                        : (
                            <div className="list-container">
                                {store.movies.map((movie, index) => (
                                    <CardMovie movie={movie} key={index} />
                                ))}
                            </div>
                        )

                }
                <CustomPagination pages_total={store.total_pages} page_current={store.current_page} setPage={(page: number) => store.setCurrentPage(page)} />
            </div>
        </>
    )

}

export default observer(HomePage);