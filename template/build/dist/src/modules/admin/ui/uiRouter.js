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
import Header from "../shared/header";
import BreadCrumd from "../shared/breadcrumb";
import UI from "./ui";
import AddUIDetail from "./add-ui-detail";
var breadCrumb = [
    {
        title: "Admin",
        uri: "",
        active: false
    },
    {
        title: "UI",
        uri: "",
        active: true
    }
];
var UIRouter = /** @class */ (function (_super) {
    __extends(UIRouter, _super);
    function UIRouter(props) {
        return _super.call(this, props) || this;
    }
    UIRouter.prototype.componentDidMount = function () {
        var doc = document.body;
        doc.classList.add('fix-header');
    };
    UIRouter.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Header, null),
            React.createElement("div", { id: "page-wrapper" },
                React.createElement("div", { className: "container-fluid" },
                    React.createElement(BreadCrumd, { uri: breadCrumb, title: "UI" }),
                    React.createElement(Route, { exact: true, path: "" + this.props.match.url, component: UI }),
                    React.createElement(Route, { path: this.props.match.url + "/add-detail-ui/:idUi", component: AddUIDetail })))));
    };
    return UIRouter;
}(React.Component));
export default UIRouter;
//# sourceMappingURL=uiRouter.js.map