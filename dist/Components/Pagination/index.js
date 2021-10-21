import React from "react";
import { observer } from "mobx-react-lite";
import "./index.css";
import { Pagination } from "@mui/material";
var CustomPagination = function (props) {
    var handleChangePage = function (page) {
        props.setPage(page);
    };
    return (React.createElement("div", { className: "pagination_container" },
        React.createElement(Pagination, { hideNextButton: false, hidePrevButton: false, count: props.pages_total, page: props.page_current, shape: "rounded", color: "secondary", size: "small", onChange: function (event, page) { return handleChangePage(page); } })));
};
export default observer(CustomPagination);
//# sourceMappingURL=index.js.map