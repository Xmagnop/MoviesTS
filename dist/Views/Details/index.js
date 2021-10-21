import { observer, useLocalObservable } from "mobx-react-lite";
import React from "react";
import { useParams } from "react-router";
import { Store } from "./store";
import ContainerLoading from "../../Components/Loading/loading";
import Fetchable from "../../Components/Fetchable";
import Header from "../../Components/Header/index";
import "./index.css";
var DetailsPage = function () {
    var id = useParams().id;
    var store = useLocalObservable(function () { return new Store(id); });
    var img_500 = "https://image.tmdb.org/t/p/w500";
    var propsLoadable = {
        isLoading: store.loading._loading,
        loadingComponent: React.createElement(ContainerLoading, null),
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "page-details" },
            React.createElement(Header, null),
            React.createElement(Fetchable, { loadableProps: propsLoadable, errorComponent: React.createElement("h1", null, store.errorMessage) }, store.movie
                && React.createElement("div", { className: "details-container" },
                    React.createElement("img", { alt: "", className: "details-poster", src: img_500 + "/" + store.movie.poster_path }),
                    React.createElement("div", { className: "details-content" },
                        React.createElement("h1", { style: { color: "white" } }, store.movie.title),
                        React.createElement("p", { className: "details-overview" }, store.movie.overview),
                        React.createElement("div", { className: "details-info" }, store.movie.genres.map(function (genre, index) { return (React.createElement("div", { className: "genre-card", key: index }, genre.name)); })),
                        React.createElement("div", { className: "details-info" },
                            React.createElement("p", { className: "info-content", style: { color: "white" } },
                                store.movie.runtime,
                                "min"),
                            React.createElement("p", { className: "info-content", style: { color: "#0077be" } }, store.movie.vote_average))))))));
};
export default observer(DetailsPage);
//# sourceMappingURL=index.js.map