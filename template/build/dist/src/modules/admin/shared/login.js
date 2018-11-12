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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import Helmet from 'react-helmet';
import { RESOURCE, BASEURLADMIN } from "../../../config/const";
import { connect } from "react-redux";
import { reUserLogin } from "../../../reducers/init";
import { Storage } from "../../../utils/storage-util";
import { BASEURL } from './../../../config/const';
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (e) {
            var _a;
            //@ts-ignore
            _this.setState(__assign({}, _this.state, { user: __assign({}, _this.state.user, (_a = {}, _a[e.target.name] = e.target.value, _a)) }));
        };
        _this.login = function () {
            _this.props.reUserLogin(_this.state.user);
        };
        _this.state = {
            user: {
                user_name: '',
                user_password: ''
            },
            token: ""
        };
        return _this;
    }
    Login.prototype.componentDidUpdate = function (preProps) {
        if (preProps.resUserLogin != this.props.resUserLogin) {
            if (this.props.resUserLogin.status === 202) {
                Storage.local.set('user_token', this.props.resUserLogin.token);
                this.setState({
                    token: this.props.resUserLogin.token
                }, function () {
                    window.location.href = BASEURLADMIN;
                });
            }
            else {
                window.location.href = BASEURL + 'login';
            }
        }
    };
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
                                React.createElement("input", { onChange: this.onChange, className: "form-control", type: "text", name: "user_name", required: true, placeholder: "User Name" }))),
                        React.createElement("div", { className: "form-group" },
                            React.createElement("div", { className: "col-xs-12" },
                                React.createElement("input", { onChange: this.onChange, className: "form-control", name: "user_password", type: "password", required: true, placeholder: "Password" }))),
                        React.createElement("div", { className: "form-group text-center m-t-20" },
                            React.createElement("div", { className: "col-xs-12" },
                                React.createElement("button", { onClick: this.login, className: "btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" }, "Log In"))))))));
    };
    return Login;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resUserLogin: storeState.reInit.resUserLogin
}); };
var mapDispatchToProps = {
    reUserLogin: reUserLogin
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
//# sourceMappingURL=login.js.map