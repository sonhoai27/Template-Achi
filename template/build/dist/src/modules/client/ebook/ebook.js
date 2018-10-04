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
import ClientHeader from "../client-shared/Header";
import Footer from "../client-shared/Footer";
import { Helmet } from "react-helmet";
import { reListPageUI } from "../../admin/page/rePage";
import { connect } from "react-redux";
import ItemPage from "../../DynamicPage/item";
import EbookPreview from "./com/preview";
import Customer from "./com/customer";
import OptionEbook from "./com/optionEbook";
var IDPAGE = 5;
var listCom = {
    EBOOKPREVIEW: React.createElement(EbookPreview, null),
    CUSTOMER: React.createElement(Customer, null),
    ORDEREBOOK: React.createElement(OptionEbook, null)
};
var EbookLadingPage = /** @class */ (function (_super) {
    __extends(EbookLadingPage, _super);
    function EbookLadingPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isShowingModalOrder: false,
            currentPackage: -1,
            price: 0
        };
        return _this;
    }
    EbookLadingPage.prototype.componentDidMount = function () {
        this.props.reListPageUI(IDPAGE);
    };
    EbookLadingPage.prototype.componentDidUpdate = function (preProps) {
        var myToggle = function (e) {
            e.target.classList.toggle("active");
            var content = e.target.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            }
            else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        };
        var coll = document.getElementsByClassName("collapsible");
        var i;
        console.log(coll);
        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", myToggle, false);
        }
    };
    EbookLadingPage.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Helmet, null,
                React.createElement("link", { rel: "stylesheet", type: "text/css", href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" }),
                React.createElement("link", { rel: "stylesheet", type: "text/css", href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" })),
            React.createElement(ClientHeader, null),
            React.createElement("div", { className: "row" },
                React.createElement(ItemPage, { coms: listCom, items: this.props.resListPageUI.list })),
            React.createElement(Footer, null)));
    };
    return EbookLadingPage;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListPageUI: storeState.rePage.resListPageUI
}); };
var mapDispatchToProps = {
    reListPageUI: reListPageUI
};
export default connect(mapStateToProps, mapDispatchToProps)(EbookLadingPage);
//# sourceMappingURL=ebook.js.map