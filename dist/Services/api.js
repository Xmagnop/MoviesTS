import { __awaiter, __generator } from "tslib";
import axios from "axios";
var API = /** @class */ (function () {
    function API() {
        var _this = this;
        this.getMovies = function (page) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.base.get("/movie/popular?api_key=05219aef37ad48f79afaed988d4298e6&language=en-US&page=" + page)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        }); };
        this.getFilteredMovies = function (title, page) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.base.get("/search/movie?api_key=05219aef37ad48f79afaed988d4298e6&language=en-US&query=" + title + "&page=" + page + "&include_adult=false")];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        }); };
        this.getMovieDetails = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.base.get("/movie/" + id + "?api_key=05219aef37ad48f79afaed988d4298e6&language=en-US")];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        }); };
        this.base = axios.create({
            baseURL: "https://api.themoviedb.org/3",
        });
    }
    return API;
}());
var api = new API();
export default api;
//# sourceMappingURL=api.js.map