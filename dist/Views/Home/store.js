import { __awaiter, __generator } from "tslib";
import api from "../../Services/api";
import { makeAutoObservable } from "mobx";
import { LoaderShelf } from "@startapp/mobx-utils";
var Store = /** @class */ (function () {
    function Store() {
        var _this = this;
        this.movies = [];
        this.loading = new LoaderShelf();
        this.total_pages = 0;
        this.current_page = 1;
        this.title_filter = "";
        this.errorMessage = "";
        this.fetch = function () { return __awaiter(_this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading.tryStart();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, 7, 8]);
                        if (!(this.title_filter === "")) return [3 /*break*/, 3];
                        return [4 /*yield*/, api.getMovies(this.current_page)];
                    case 2:
                        data = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, api.getFilteredMovies(this.title_filter, this.current_page)];
                    case 4:
                        data = _a.sent();
                        _a.label = 5;
                    case 5:
                        this.setMovies(data.results);
                        this.setTotalPages(data.total_pages);
                        return [3 /*break*/, 8];
                    case 6:
                        error_1 = _a.sent();
                        alert("erro na requisição");
                        this.setErrorMessage(JSON.stringify(error_1));
                        return [3 /*break*/, 8];
                    case 7:
                        this.loading.end();
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        }); };
        makeAutoObservable(this);
    }
    Store.prototype.setMovies = function (movies) {
        this.movies = movies;
    };
    Store.prototype.setTotalPages = function (totalpages) {
        this.total_pages = totalpages;
    };
    Store.prototype.setTitleFilter = function (title) {
        this.title_filter = title;
        this.current_page = 1;
        this.fetch();
    };
    Store.prototype.setCurrentPage = function (page) {
        this.current_page = page;
        this.fetch();
    };
    Store.prototype.setErrorMessage = function (text) {
        this.errorMessage = text;
    };
    return Store;
}());
export { Store };
//# sourceMappingURL=store.js.map