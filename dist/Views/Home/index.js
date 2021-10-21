import { observer, useLocalObservable } from "mobx-react-lite";
import React from "react";
import Header from "../../Components/Header/index";
import "./index.css";
import CardMovie from "../../Components/CardMovie/index";
import { Store } from "./store";
import CustomPagination from "../../Components/Pagination";
import ContainerLoading from "../../Components/Loading/loading";
import Fetchable from "../../Components/Fetchable";
var HomePage = function () {
    var store = useLocalObservable(function () { return new Store(); });
    React.useEffect(function () {
        store.fetch();
    }, [store]);
    var propsLoader = {
        isLoading: store.loading._loading,
        loadingComponent: React.createElement(ContainerLoading, null),
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "page-home" },
            React.createElement(Header, { setFilterTitle: function (title) { return store.setTitleFilter(title); } }),
            React.createElement(Fetchable, { loadableProps: propsLoader, errorComponent: React.createElement("h1", null, store.errorMessage) },
                React.createElement("div", { className: "list-container" },
                    store.movies.map(function (movie, index) { return (React.createElement(CardMovie, { movie: movie, key: index })); }),
                    React.createElement(CustomPagination, { pages_total: store.total_pages, page_current: store.current_page, setPage: function (page) { return store.setCurrentPage(page); } }))))));
};
export default observer(HomePage);
//# sourceMappingURL=index.js.map