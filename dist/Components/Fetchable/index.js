// MARK: React
import React from "react";
// Mark: Styles
import { observer } from "mobx-react-lite";
// MARK: Components
import Loadable from "../Loading/loadable";
var Fetchable = function (props) {
    var children = props.children, errorComponent = props.errorComponent, hasError = props.hasError, loadableProps = props.loadableProps;
    return (React.createElement(Loadable, { isLoading: loadableProps.isLoading, loadingComponent: loadableProps.loadingComponent }, (hasError) ? (errorComponent) : (children)));
};
export default observer(Fetchable);
//# sourceMappingURL=index.js.map