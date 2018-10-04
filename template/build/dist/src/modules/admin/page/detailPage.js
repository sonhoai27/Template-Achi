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
import ListElementDetailUIPage from "./detail-ui/detail-ui";
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";
import { reIsDanger, reIsSuccess } from "../../../reducers/init";
import ModalEditContentElement from "./detail-ui/ModalEditContentElement";
import { reShowEditContent } from "../source/reSource";
var DetailPage = /** @class */ (function (_super) {
    __extends(DetailPage, _super);
    function DetailPage(props) {
        return _super.call(this, props) || this;
    }
    DetailPage.prototype.componentDidMount = function () {
        this.props.reListPageUI(this.props.match.params.idPage);
    };
    DetailPage.prototype.componentDidUpdate = function (preProps) {
        var _this = this;
        if (this.props.resSaveContent != preProps.resSaveContent) {
            if (this.props.resSaveContent.status === 200) {
                this.props.reIsSuccess(true);
                setTimeout(function () {
                    _this.props.reIsSuccess(false);
                    _this.props.reListPageUI(_this.props.match.params.idPage);
                }, 2000);
            }
            else {
                this.props.reIsDanger(true);
                setTimeout(function () {
                    _this.props.reIsDanger(false);
                    _this.props.reListPageUI(_this.props.match.params.idPage);
                }, 2000);
            }
        }
    };
    DetailPage.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "row add-element-to-ui add-content-ui-source" },
                React.createElement("div", { className: "col-md-12" },
                    React.createElement("div", { className: "panel" },
                        React.createElement("div", { className: "panel-toolbar" },
                            React.createElement("div", { className: "panel-heading", style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                } }, "Chi ti\u1EBFt Landing Page"),
                            React.createElement("div", { className: "panel-action-bar" },
                                React.createElement(Link, { target: "_blank", to: BASEURLADMIN +
                                        "ui/page/review/" +
                                        this.props.match.params.idPage },
                                    React.createElement("div", { className: "btn btn-sm btn-info" },
                                        React.createElement("i", { className: "ti-eye" }),
                                        " Xem th\u1EED")))),
                        React.createElement("div", { className: "content" }, this.props.resListPageUI.list ? (React.createElement(ListElementDetailUIPage, { match: this.props.match, detail: this.props.resListPageUI.list })) : (""))))),
            this.props.resShowEditContent ? React.createElement(ModalEditContentElement, null) : ''));
    };
    return DetailPage;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListPageUI: storeState.rePage.resListPageUI,
    resSaveContent: storeState.rePage.resSaveContent,
    resShowEditContent: storeState.reSource.resShowEditContent
}); };
var mapDispatchToProps = {
    reListPageUI: reListPageUI,
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess,
    reShowEditContent: reShowEditContent
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
//# sourceMappingURL=detailPage.js.map