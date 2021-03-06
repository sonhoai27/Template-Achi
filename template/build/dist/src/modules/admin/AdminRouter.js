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
import Home from "./home";
import BlogRouter from "./blog/router";
import VideoRouter from "./videos/router";
import UIRouter from "./ui/uiRouter";
import SourceRouter from "./source/sourceRouter";
import { connect } from "react-redux";
import Photo from "../shared/photo";
import NotifySuccess from "../shared/notifySuccess";
var AdminRouter = /** @class */ (function (_super) {
    __extends(AdminRouter, _super);
    function AdminRouter(props) {
        return _super.call(this, props) || this;
    }
    AdminRouter.prototype.componentDidMount = function () {
        var doc = document.body;
        doc.classList.add('fix-header');
    };
    AdminRouter.prototype.render = function () {
        return (React.createElement("div", { id: "wrapper" },
            React.createElement(Route, { exact: true, path: "" + this.props.match.url, component: Home }),
            React.createElement(Route, { path: this.props.match.url + "/blog", component: BlogRouter }),
            React.createElement(Route, { path: this.props.match.url + "/video", component: VideoRouter }),
            React.createElement(Route, { path: this.props.match.url + "/ui", component: UIRouter }),
            React.createElement(Route, { path: this.props.match.url + "/source", component: SourceRouter }),
            this.props.isShowPhotoApp ? React.createElement(Photo, null) : '',
            React.createElement("div", { className: "jq-toast-wrap top-right" },
                React.createElement(NotifySuccess, null))));
    };
    return AdminRouter;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    isShowPhotoApp: storeState.reInit.isShowPhotoApp,
}); };
var mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(AdminRouter);
//# sourceMappingURL=AdminRouter.js.map