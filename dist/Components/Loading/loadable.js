// MARK: React
import React from "react";
// MARK: Mobx
import { observer } from "mobx-react-lite";
var Loadable = function (props) {
    var children = props.children, isLoading = props.isLoading, loadingComponent = props.loadingComponent;
    return (isLoading
        ? loadingComponent
        : (React.createElement(React.Fragment, null, children)));
};
export default observer(Loadable);
//# sourceMappingURL=loadable.js.map