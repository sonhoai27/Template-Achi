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
import BreadCrumd from "../shared/breadcrumb";
import { Route } from "react-router";
import orderEbook from "./orderEbook";
import Header from "../shared/header";
var breadCrumb = [
    {
        title: "Admin",
        uri: "",
        active: false
    },
    {
        title: "Blog",
        uri: "",
        active: true
    }
];
var OrderEbookRouter = /** @class */ (function (_super) {
    __extends(OrderEbookRouter, _super);
    function OrderEbookRouter(props) {
        var _this = _super.call(this, props) || this;
        console.log(_this.props.match);
        return _this;
    }
    OrderEbookRouter.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Header, null),
            React.createElement("div", { id: "page-wrapper" },
                React.createElement("div", { className: "container-fluid" },
                    React.createElement(BreadCrumd, { uri: breadCrumb, title: "\u0110\u0103ng k\u00FD s\u00E1ch" }),
                    React.createElement(Route, { exact: true, path: "" + this.props.match.url, component: orderEbook }),
                    React.createElement(Route, { path: this.props.match.url + "/package", component: orderEbook }),
                    React.createElement(Route, { path: this.props.match.url + "/package/add", component: orderEbook })))));
    };
    return OrderEbookRouter;
}(React.Component));
export default OrderEbookRouter;
//# sourceMappingURL=orderEbookRouter.js.map