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
import { Route } from "react-router-dom";
import { RESOURCE } from "../../config/const";
import { Helmet } from "react-helmet";
import Error from "../admin/shared/error";
import ClientBlogRoute from "./blog/ClientBlogRoute";
import ClientSourceRoute from "./source/ClientSourceRoute";
var ClientRouter = /** @class */ (function (_super) {
    __extends(ClientRouter, _super);
    function ClientRouter(props) {
        var _this = _super.call(this, props) || this;
        console.log(_this.props.match);
        return _this;
    }
    ClientRouter.prototype.componentDidMount = function () {
        var doc = document.body;
        doc.classList.add("client-page");
    };
    ClientRouter.prototype.render = function () {
        return (React.createElement("div", { className: "margin-top" },
            React.createElement(Helmet, null,
                React.createElement("link", { rel: "stylesheet", href: RESOURCE + "css/client.css" }),
                React.createElement("link", { rel: "stylesheet", href: RESOURCE + "css/mobile.css", media: "screen and (max-width: 769px)" })),
            React.createElement(Route, { exact: true, path: "" + this.props.match.url, component: Error }),
            React.createElement(Route, { path: this.props.match.url + "/blog", component: ClientBlogRoute }),
            React.createElement(Route, { path: this.props.match.url + "/khoa-hoc", component: ClientSourceRoute })));
    };
    return ClientRouter;
}(React.Component));
export default ClientRouter;
//# sourceMappingURL=clientRouter.js.map