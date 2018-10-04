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
import ClientBlog from "./ClientBlog";
import { Route } from "react-router";
import ClientDetailBlog from "./ClientDetailBlog";
import ClientHeader from "../client-shared/Header";
import Footer from "../client-shared/Footer";
var ClientBlogRoute = /** @class */ (function (_super) {
    __extends(ClientBlogRoute, _super);
    function ClientBlogRoute(props) {
        return _super.call(this, props) || this;
    }
    ClientBlogRoute.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(ClientHeader, null),
            React.createElement(Route, { exact: true, path: "" + this.props.match.url, component: ClientBlog }),
            React.createElement(Route, { path: this.props.match.url + "/detail/:idBlog", component: ClientDetailBlog }),
            React.createElement(Route, { path: this.props.match.url + "/danh-muc/:idCategory", component: ClientBlog }),
            React.createElement(Footer, null)));
    };
    return ClientBlogRoute;
}(React.Component));
export default ClientBlogRoute;
//# sourceMappingURL=ClientBlogRoute.js.map