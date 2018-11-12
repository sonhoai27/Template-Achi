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
import Error from "../admin/shared/error";
import ClientBlogRoute from "./blog/ClientBlogRoute";
import ClientSourceRoute from "./source/ClientSourceRoute";
import EbookLadingPage from "./ebook/ebook";
import { connect } from "react-redux";
import NotifySuccess from "../shared/notifySuccess";
import NotifyDanger from "../shared/notifyDanger";
import ClientVideo from "./video/ClientVideo";
import ClientGift from "./gift";
import ClientAboutPage from "./About";
import ScheEvents from "./ScheEvents";
import SuggestGift from './../shared/components/suggestGift';
import SuggestKH from './../shared/components/suggestKH';
import Search from "./search";
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
            React.createElement("div", { className: "margin-top" },
                React.createElement(Route, { exact: true, path: "" + this.props.match.url, component: Error }),
                React.createElement(Route, { path: this.props.match.url + "/blog", component: ClientBlogRoute }),
                React.createElement(Route, { path: this.props.match.url + "/khoa-hoc", component: ClientSourceRoute }),
                React.createElement(Route, { path: this.props.match.url + "/sach", component: EbookLadingPage }),
                React.createElement(Route, { path: this.props.match.url + "/video", component: ClientVideo }),
                React.createElement(Route, { path: this.props.match.url + "/qua-tang", component: ClientGift }),
                React.createElement(Route, { path: this.props.match.url + "/gioi-thieu", component: ClientAboutPage }),
                React.createElement(Route, { path: this.props.match.url + "/lich-su-kien", component: ScheEvents }),
                React.createElement(Route, { path: this.props.match.url + "/nhan-qua/:idGift", component: SuggestGift }),
                React.createElement(Route, { path: this.props.match.url + "/dang-ky-khoa-hoc/:idSource", component: SuggestKH }),
                React.createElement(Route, { path: this.props.match.url + "/tim-kiem/:key", component: Search }),
                React.createElement("div", { className: "jq-toast-wrap top-right" },
                    this.props.isSuccess ? React.createElement(NotifySuccess, null) : "",
                    this.props.isDanger ? React.createElement(NotifyDanger, null) : ""))));
    };
    return ClientRouter;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    isSuccess: storeState.reInit.isSuccess,
    isDanger: storeState.reInit.isDanger,
    isLoading: storeState.reInit.isLoading
}); };
var mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(ClientRouter);
//# sourceMappingURL=clientRouter.js.map