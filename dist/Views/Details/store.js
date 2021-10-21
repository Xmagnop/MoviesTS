import api from "../../Services/api";
import { makeAutoObservable } from "mobx";
import { LoaderShelf, ModelShelf } from "@startapp/mobx-utils";
var Store = /** @class */ (function () {
    // public request = new ModelShelf(this.id, api.getMovieDetails);
    function Store(id) {
        this.movie = null;
        this.loading = new LoaderShelf();
        this.errorMessage = "";
        this.modelShelf = new ModelShelf(id, api.getMovieDetails);
        makeAutoObservable(this);
    }
    Store.prototype.setMovie = function (movie) {
        this.movie = movie;
    };
    Store.prototype.setErrorMessage = function (text) {
        this.errorMessage = text;
    };
    return Store;
}());
export { Store };
//# sourceMappingURL=store.js.map