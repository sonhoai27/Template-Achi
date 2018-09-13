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
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import PrivateRouter from "../config/PrivateRouter";
import Loadable from "react-loadable";
import { connect } from "react-redux";
import { reCheckLogin } from "../reducers/init";
import Login from "./admin/shared/login";
import Error from "./admin/shared/error";
import { BASEURL } from "../config/const";
import ClientHome from "./client/home/ClientHome";
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            user: {}
        };
        return _this;
    }
    App.prototype.componentDidUpdate = function (preProps) {
        if (preProps.resCheckLogin != this.props.resCheckLogin) {
            this.setState({
                user: this.props.resCheckLogin
            });
        }
    };
    App.prototype.componentDidMount = function () {
        this.props.reCheckLogin();
    };
    App.prototype.render = function () {
        return (React.createElement(Router, null,
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, path: BASEURL, component: ClientHome }),
                React.createElement(Route, { path: BASEURL + 'page', component: Loadable({
                        loader: function () {
                            return import(/*webpackChunkName: "client"*/ "./client/clientRouter");
                        },
                        loading: function () { return React.createElement("h1", null, "Loading...."); }
                    }) }),
                this.state.user.status === 404 ? (React.createElement(Route, { path: BASEURL + 'login', component: Login })) : (React.createElement(Route, { path: BASEURL + 'login', component: Error })),
                this.state.user.status ? (React.createElement(PrivateRouter, { resCheckLogin: this.props.resCheckLogin, path: BASEURL + "admin", component: Loadable({
                        loader: function () {
                            return import(/*webpackChunkName: "admin"*/ "./admin/AdminRouter");
                        },
                        loading: function () { return React.createElement("h1", null, "Loading...."); }
                    }) })) : (""))));
    };
    return App;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resCheckLogin: storeState.reInit.resCheckLogin
}); };
var mapDispatchToProps = {
    reCheckLogin: reCheckLogin
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=App.js.map