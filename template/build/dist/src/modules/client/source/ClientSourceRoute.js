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
import ClientHeader from "../client-shared/Header";
import { Route } from "react-router";
import Footer from "../client-shared/Footer";
import ClientSourceHome from "./ClientSourceHome";
var ClientSourceRoute = /** @class */ (function (_super) {
    __extends(ClientSourceRoute, _super);
    function ClientSourceRoute(props) {
        return _super.call(this, props) || this;
    }
    ClientSourceRoute.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(ClientHeader, null),
            React.createElement(Route, { exact: true, path: "" + this.props.match.url, component: ClientSourceHome }),
            React.createElement(Route, { path: this.props.match.url + "/detail/:idSource", component: ClientSourceHome }),
            React.createElement(Footer, null)));
    };
    return ClientSourceRoute;
}(React.Component));
export default ClientSourceRoute;
//# sourceMappingURL=ClientSourceRoute.js.map