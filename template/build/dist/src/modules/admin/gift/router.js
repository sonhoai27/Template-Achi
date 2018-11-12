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
import VideoList from "./list";
import detail from "./detail";
import add from "./add";
import Customer from './customers';
var breadCrumb = [
    {
        title: "Admin",
        uri: "",
        active: false
    },
    {
        title: "Video",
        uri: "",
        active: true
    }
];
var VideoRouter = /** @class */ (function (_super) {
    __extends(VideoRouter, _super);
    function VideoRouter(props) {
        return _super.call(this, props) || this;
    }
    VideoRouter.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Header, null),
            React.createElement("div", { id: "page-wrapper" },
                React.createElement("div", { className: "container-fluid" },
                    React.createElement(BreadCrumd, { uri: breadCrumb, title: "Video" }),
                    React.createElement(Route, { exact: true, path: "" + this.props.match.url, component: VideoList }),
                    React.createElement(Route, { path: this.props.match.url + "/add", component: add }),
                    React.createElement(Route, { path: this.props.match.url + "/customers", component: Customer }),
                    React.createElement(Route, { path: this.props.match.url + "/detail/:idGift", component: detail })))));
    };
    return VideoRouter;
}(React.Component));
export default VideoRouter;
//# sourceMappingURL=router.js.map