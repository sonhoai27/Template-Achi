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
import Source from "./source";
import AddSource from "./addSource";
import DetailSource from "./detailSource";
import AddContentUISource from "./addContentUISource";
import ReviewLadingPage from "./child/review";
import ListSche from "./child/listSche";
import AddSche from "./child/addSche";
import detailSche from "./child/detailSche";
var breadCrumb = [
    {
        title: "Admin",
        uri: "",
        active: false
    },
    {
        title: "Source",
        uri: "",
        active: true
    }
];
var SourceRouter = /** @class */ (function (_super) {
    __extends(SourceRouter, _super);
    function SourceRouter(props) {
        return _super.call(this, props) || this;
    }
    SourceRouter.prototype.componentDidMount = function () {
        var doc = document.body;
        doc.classList.add('fix-header');
    };
    SourceRouter.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Header, null),
            React.createElement("div", { id: "page-wrapper" },
                React.createElement("div", { className: "container-fluid" },
                    React.createElement(BreadCrumd, { uri: breadCrumb, title: "Source" }),
                    React.createElement(Route, { exact: true, path: "" + this.props.match.url, component: Source }),
                    React.createElement(Route, { path: this.props.match.url + "/add-source", component: AddSource }),
                    React.createElement(Route, { path: this.props.match.url + "/detail-source/:id", component: DetailSource }),
                    React.createElement(Route, { path: this.props.match.url + "/ui-source/:idUI/:idSource", component: AddContentUISource }),
                    React.createElement(Route, { path: this.props.match.url + "/review-landing-page/:idUI/:idSource", component: ReviewLadingPage }),
                    React.createElement(Route, { path: this.props.match.url + "/add-sche/:idSource", component: AddSche }),
                    React.createElement(Route, { path: this.props.match.url + "/list-sche/:idSource", component: ListSche }),
                    React.createElement(Route, { path: this.props.match.url + "/detail-sche/:idSche", component: detailSche })))));
    };
    return SourceRouter;
}(React.Component));
export default SourceRouter;
//# sourceMappingURL=sourceRouter.js.map