var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import Helmet from 'react-helmet';
import { RESOURCE } from "../../../config/const";
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        return _super.call(this, props) || this;
    }
    Login.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Helmet, null,
                React.createElement("link", { rel: "stylesheet", href: RESOURCE + "css/custom.css" })),
            React.createElement("section", { id: "wrapper", className: "login-register", style: { height: "100vh" } },
                React.createElement("div", { className: "login-box login-sidebar" },
                    React.createElement("div", { className: "white-box" },
                        React.createElement("a", { className: "text-center db" },
                            React.createElement("h1", null, "Nguyen Minh Chi")),
                        React.createElement("div", { className: "form-group m-t-40" },
                            React.createElement("div", { className: "col-xs-12" },
                                React.createElement("input", { className: "form-control", type: "email", required: true, placeholder: "Email" }))),
                        React.createElement("div", { className: "form-group" },
                            React.createElement("div", { className: "col-xs-12" },
                                React.createElement("input", { className: "form-control", type: "password", required: true, placeholder: "Password" }))),
                        React.createElement("div", { className: "form-group text-center m-t-20" },
                            React.createElement("div", { className: "col-xs-12" },
                                React.createElement("button", { className: "btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light", type: "submit" }, "Log In"))))))));
    };
    return Login;
}(React.Component));
export default Login;
//# sourceMappingURL=login.js.map