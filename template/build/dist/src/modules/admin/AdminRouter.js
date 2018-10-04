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
import GiftRouter from "./gift/router";
import UIRouter from "./ui/uiRouter";
import SourceRouter from "./source/sourceRouter";
import { connect } from "react-redux";
import Photo from "../shared/photo";
import NotifySuccess from "../shared/notifySuccess";
import NotifyDanger from "../shared/notifyDanger";
import Helmet from 'react-helmet';
import { RESOURCE } from "../../config/const";
import OrderEbookRouter from "./order-ebook/orderEbookRouter";
import Loading from "./shared/loading";
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
            React.createElement(Helmet, null,
                React.createElement("link", { rel: "stylesheet", href: RESOURCE + 'css/custom.css' })),
            React.createElement(Route, { exact: true, path: "" + this.props.match.url, component: Home }),
            React.createElement(Route, { path: this.props.match.url + "/blog", component: BlogRouter }),
            React.createElement(Route, { path: this.props.match.url + "/video", component: VideoRouter }),
            React.createElement(Route, { path: this.props.match.url + "/gift", component: GiftRouter }),
            React.createElement(Route, { path: this.props.match.url + "/ui", component: UIRouter }),
            React.createElement(Route, { path: this.props.match.url + "/source", component: SourceRouter }),
            React.createElement(Route, { path: this.props.match.url + "/order-ebook", component: OrderEbookRouter }),
            this.props.isShowPhotoApp ? React.createElement(Photo, null) : '',
            React.createElement("div", { className: "jq-toast-wrap top-right" },
                this.props.isSuccess ? React.createElement(NotifySuccess, null) : '',
                this.props.isDanger ? React.createElement(NotifyDanger, null) : ''),
            this.props.isLoading ? React.createElement(Loading, null) : ''));
    };
    return AdminRouter;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    isShowPhotoApp: storeState.reInit.isShowPhotoApp,
    isSuccess: storeState.reInit.isSuccess,
    isDanger: storeState.reInit.isDanger,
    isLoading: storeState.reInit.isLoading
}); };
var mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(AdminRouter);
//# sourceMappingURL=AdminRouter.js.map