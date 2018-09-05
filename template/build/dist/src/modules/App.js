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
import { BASEURL } from "../config/const";
import ClientRouter from "./client/clientRouter";
import Loadable from 'react-loadable';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(Router, null,
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, path: BASEURL, component: ClientRouter }),
                React.createElement(PrivateRouter, { path: BASEURL + "admin", component: Loadable({
                        loader: function () { return import(/*webpackChunkName: "admin"*/ './admin/AdminRouter'); },
                        loading: function () { return React.createElement("h1", null, "Loading...."); },
                    }) }))));
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=App.js.map