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
import { reListPageUI } from "../admin/page/rePage";
import ItemPage from '../DynamicPage/item';
import ClientHeader from "./client-shared/Header";
import Footer from "./client-shared/Footer";
import { Helmet } from "react-helmet";
var IDPAGE = 4;
var ClientAboutPage = /** @class */ (function (_super) {
    __extends(ClientAboutPage, _super);
    function ClientAboutPage(props) {
        return _super.call(this, props) || this;
    }
    ClientAboutPage.prototype.componentDidMount = function () {
        this.props.reListPageUI(IDPAGE);
    };
    ClientAboutPage.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Helmet, null,
                React.createElement("title", null, "Gi\u1EDBi thi\u1EC7u - Nguy\u1EC5n Minh Ch\u00ED")),
            React.createElement(ClientHeader, null),
            React.createElement("div", { className: "row" },
                React.createElement(ItemPage, { items: this.props.resListPageUI.list })),
            React.createElement(Footer, null)));
    };
    return ClientAboutPage;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListPageUI: storeState.rePage.resListPageUI
}); };
var mapDispatchToProps = {
    reListPageUI: reListPageUI
};
export default connect(mapStateToProps, mapDispatchToProps)(ClientAboutPage);
//# sourceMappingURL=About.js.map