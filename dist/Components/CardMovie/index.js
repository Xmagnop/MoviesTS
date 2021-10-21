import React from "react";
import { observer } from "mobx-react-lite";
import "./index.css";
import { useHistory } from "react-router";
var CardMovie = function (_a) {
    var movie = _a.movie;
    var history = useHistory();
    var img_300 = "https://image.tmdb.org/t/p/w300";
    return (React.createElement("div", { className: "movie-card", onClick: function () { return history.push("/home/" + movie.id); } },
        React.createElement("img", { alt: movie.original_title, src: img_300 + "/" + movie.poster_path, className: "movie-poster" }),
        React.createElement("b", { className: "movie-title" }, movie.title),
        React.createElement("div", { className: "movie-details" },
            React.createElement("p", { className: "movie-info", style: { color: "white" } }, movie.release_date),
            React.createElement("p", { className: "movie-info", style: { color: "#0077be" } }, movie.vote_average))));
};
export default observer(CardMovie);
//# sourceMappingURL=index.js.map