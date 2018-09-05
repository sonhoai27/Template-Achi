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
import { BASEURL, RESOURCE } from "../../config/const";
import EbookLadingPage from "./ebook/ebook";
import { Helmet } from "react-helmet";
var ClientRouter = /** @class */ (function (_super) {
    __extends(ClientRouter, _super);
    function ClientRouter(props) {
        return _super.call(this, props) || this;
    }
    ClientRouter.prototype.componentDidMount = function () {
        var doc = document.body;
        doc.classList.add("client-page");
    };
    ClientRouter.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Helmet, null,
                React.createElement("link", { rel: "stylesheet", href: RESOURCE + "css/client.css" })),
            React.createElement(Route, { exact: true, path: BASEURL, component: EbookLadingPage })));
    };
    return ClientRouter;
}(React.Component));
export default ClientRouter;
//# sourceMappingURL=clientRouter.js.map