import React from "react";
import { LoopCircleLoading } from "react-loadingg";
import { observer } from "mobx-react-lite";
import "../../Views/Home/index.css";
var ContainerLoading = function () { return React.createElement("div", { className: "list-container" },
    React.createElement(LoopCircleLoading, null)); };
export default observer(ContainerLoading);
//# sourceMappingURL=loading.js.map