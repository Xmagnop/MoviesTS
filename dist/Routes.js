import React from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./Views/Home/index";
import DetailsPage from "./Views/Details/index";
var Routes = function () { return (React.createElement(BrowserRouter, null,
    React.createElement(Switch, null,
        React.createElement(Route, { exact: true, path: "/home", component: HomePage }),
        React.createElement(Route, { exact: true, path: "/home/:id", component: DetailsPage }),
        React.createElement(Route, null,
            React.createElement(Redirect, { to: "/home" }))))); };
export default observer(Routes);
//# sourceMappingURL=Routes.js.map