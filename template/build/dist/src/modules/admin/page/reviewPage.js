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
import { connect } from "react-redux";
import { reListPageUI } from "./rePage";
import ItemReviewPage from './reviewPage/item';
import Helmet from 'react-helmet';
import { RESOURCE } from "../../../config/const";
var ReviewPage = /** @class */ (function (_super) {
    __extends(ReviewPage, _super);
    function ReviewPage(props) {
        return _super.call(this, props) || this;
    }
    ReviewPage.prototype.componentDidMount = function () {
        document.body.style.overflow = "hidden";
        this.props.reListPageUI(this.props.match.params.idPage);
    };
    ReviewPage.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Helmet, null,
                React.createElement("link", { rel: "stylesheet", href: RESOURCE + "css/client.css" })),
            React.createElement("div", { id: "review-lading-page" },
                React.createElement(ItemReviewPage, { items: this.props.resListPageUI.list }))));
    };
    return ReviewPage;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListPageUI: storeState.rePage.resListPageUI
}); };
var mapDispatchToProps = {
    reListPageUI: reListPageUI
};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewPage);
//# sourceMappingURL=reviewPage.js.map