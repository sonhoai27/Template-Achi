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
import { BASEURLADMIN } from "../../../config/const";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { reIsSuccess, reIsDanger } from "../../../reducers/init";
import { reListUI } from "./reUI";
import AddUi from "./addUi";
var UI = /** @class */ (function (_super) {
    __extends(UI, _super);
    function UI(props) {
        var _this = _super.call(this, props) || this;
        _this.showHide = function () {
            _this.setState({
                isShowingModal: !_this.state.isShowingModal
            });
        };
        _this.renderListUI = function () {
            if (_this.props.resListUI) {
                return _this.props.resListUI.map(function (element) {
                    return (React.createElement("tr", null,
                        React.createElement("td", { className: "text-center" }, element.ui_id),
                        React.createElement("td", null,
                            React.createElement(Link, { to: BASEURLADMIN + "ui/add-detail-ui/" + element.ui_id },
                                React.createElement("span", { className: "text-muted" }, element.ui_name))),
                        React.createElement("td", null, element.ui_type == 0 ? "Khóa học" : "Trang")));
                });
            }
            return null;
        };
        _this.state = {
            isShowingModal: false
        };
        return _this;
    }
    UI.prototype.componentDidMount = function () {
        this.props.reListUI();
    };
    UI.prototype.render = function () {
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-8" },
                React.createElement("div", { className: "panel" },
                    React.createElement("div", { className: "panel-toolbar" },
                        React.createElement("div", { className: "panel-heading" }, "Danh s\u00E1ch UI"),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement("div", { className: "btn btn-xs btn-info", onClick: this.showHide }, "Th\u00EAm m\u1EDBi"))),
                    React.createElement("div", { className: "table-responsive" },
                        React.createElement("table", { className: "table table-hover manage-u-table" },
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("th", { className: "text-center" }, "#"),
                                    React.createElement("th", null, "T\u00EAn"),
                                    React.createElement("td", null, "Lo\u1EA1i"))),
                            React.createElement("tbody", null, this.renderListUI()))))),
            this.state.isShowingModal ? React.createElement(AddUi, { showHide: this.showHide }) : ''));
    };
    return UI;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListUI: storeState.reUI.resListUI
}); };
var mapDispatchToProps = {
    reListUI: reListUI,
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess
};
export default connect(mapStateToProps, mapDispatchToProps)(UI);
//# sourceMappingURL=ui.js.map