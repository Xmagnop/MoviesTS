import React from "react";
import Logo from "../../Images/logo-movies.png";
import "./index.css";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router";
var Header = function (props) {
    var history = useHistory();
    var handleChangeFilter = function (e) {
        if (props.setFilterTitle) {
            props.setFilterTitle(e.target.value);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "header" },
            React.createElement("img", { alt: "logo", src: Logo, className: "Logo-img", onClick: function () { return history.push("/home"); } }),
            props.setFilterTitle && React.createElement("input", { className: "search-input", onChange: handleChangeFilter, placeholder: "Pesquisar" }))));
};
export default observer(Header);
//# sourceMappingURL=index.js.map