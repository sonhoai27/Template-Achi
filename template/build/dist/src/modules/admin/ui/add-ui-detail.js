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
import ListElement from "./modal/listElement";
import { reDetailUI, reShowListElement, reSetCurrentMatchDetailUI, reSetCurrentIdElement } from "./reUI";
import { connect } from "react-redux";
import ListElementOnDetailUI from "./detail-ui/detail-ui";
import { reIsDanger, reIsSuccess } from "../../../reducers/init";
var AddUIDetail = /** @class */ (function (_super) {
    __extends(AddUIDetail, _super);
    function AddUIDetail(props) {
        var _this = _super.call(this, props) || this;
        _this.showListElement = function (id) {
            _this.props.reShowListElement(true);
            _this.props.reSetCurrentIdElement(id);
        };
        return _this;
    }
    AddUIDetail.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.resAddCss != this.props.resAddCss) {
            alert("Thành công");
        }
    };
    AddUIDetail.prototype.componentDidUpdate = function (preProps, preState, snapsot) {
        console.log(this.props.resAddCss, snapsot);
    };
    AddUIDetail.prototype.componentDidMount = function () {
        this.props.reDetailUI(this.props.match.params.idUi);
        this.props.reSetCurrentMatchDetailUI(this.props.match);
    };
    AddUIDetail.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "row add-element-to-ui" },
            React.createElement("div", { className: "col-md-12" },
                React.createElement("div", { className: "panel" },
                    React.createElement("div", { className: "panel-toolbar" },
                        React.createElement("div", { className: "panel-heading" }, "Th\u00EAm chi ti\u1EBFt UI"),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement("button", { onClick: function () { return _this.showListElement(""); }, className: "btn btn-xs btn-info" },
                                React.createElement("i", { className: "icon-drawar" }),
                                " Th\u00EAm Element m\u1EDBi"))),
                    React.createElement("div", { className: "content-list-detail-ui" },
                        React.createElement("ul", { className: "detail-ui-element" }, React.createElement(ListElementOnDetailUI, { detail: this.props.resDetailUI.list }))))),
            this.props.showListElement ? (React.createElement(ListElement, { match: this.props.match })) : ("")));
    };
    return AddUIDetail;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resDetailUI: storeState.reUI.resDetailUI,
    showListElement: storeState.reUI.showListElement,
    currentMatchDetailUI: storeState.reUI.currentMatchDetailUI,
    currentIdElement: storeState.reUI.currentIdElement,
    resAddCss: storeState.reUI.resAddCss
}); };
var mapDispatchToProps = {
    reDetailUI: reDetailUI,
    reShowListElement: reShowListElement,
    reSetCurrentIdElement: reSetCurrentIdElement,
    reSetCurrentMatchDetailUI: reSetCurrentMatchDetailUI,
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess
};
export default connect(mapStateToProps, mapDispatchToProps)(AddUIDetail);
//# sourceMappingURL=add-ui-detail.js.map