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
import { reAddUI, reListUI } from "./reUI";
import { reIsDanger, reIsSuccess } from "../../../reducers/init";
var AddUi = /** @class */ (function (_super) {
    __extends(AddUi, _super);
    function AddUi(props) {
        var _this = _super.call(this, props) || this;
        _this.onChage = function (e) {
            var _a;
            // @ts-ignore
            _this.setState((_a = {},
                _a[e.target.name] = e.target.value,
                _a));
        };
        _this.onAdd = function () {
            _this.props.reAddUI(_this.state);
        };
        _this.state = {
            ui_name: "",
            ui_type: -1
        };
        return _this;
    }
    AddUi.prototype.componentDidUpdate = function (preProps) {
        var _this = this;
        if (this.props.resAddUi != preProps.resAddUi) {
            if (this.props.resAddUi.status === 200) {
                this.props.reIsSuccess(true);
                setTimeout(function () {
                    _this.props.reIsSuccess(false);
                    _this.props.reListUI();
                    _this.props.showHide();
                }, 2000);
            }
            else {
                this.props.reIsDanger(true);
                setTimeout(function () {
                    _this.props.reIsDanger(false);
                    _this.props.showHide();
                }, 2000);
            }
        }
    };
    AddUi.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "modal fade in", tabIndex: -1, role: "dialog", "aria-hidden": "true", style: { display: "block" } },
                React.createElement("div", { className: "modal-dialog modal-lg" },
                    React.createElement("div", { className: "modal-content" },
                        React.createElement("div", { className: "modal-header" },
                            React.createElement("button", { onClick: function () { return _this.props.showHide(); }, type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true" }, "\u00D7"),
                            React.createElement("div", { className: "modal-title" },
                                React.createElement("h4", null, "Th\u00EAm m\u1EDBi UI"))),
                        React.createElement("div", { className: "modal-body", style: { display: 'inline-block', width: '100%' } },
                            React.createElement("div", { className: "col-sm-6" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("div", { className: "col-xs-12" },
                                        React.createElement("label", null, "T\u00EAn")),
                                    React.createElement("div", { className: "col-xs-12" },
                                        React.createElement("input", { onChange: this.onChage, name: "ui_name", className: "form-control" })))),
                            React.createElement("div", { className: "col-sm-6" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("div", { className: "col-xs-12" },
                                        React.createElement("label", null, "Lo\u1EA1i")),
                                    React.createElement("div", { className: "col-xs-12" },
                                        React.createElement("select", { onChange: this.onChage, name: "ui_type", className: "form-control" },
                                            React.createElement("option", null, "Ch\u1ECDn"),
                                            React.createElement("option", { value: 0 }, "Kh\u00F3a h\u1ECDc"),
                                            React.createElement("option", { value: 1 }, "Trang")))))),
                        React.createElement("div", { className: "modal-footer" },
                            React.createElement("button", { type: "button", onClick: this.onAdd, className: "btn btn-info waves-effect text-left", "data-dismiss": "modal" }, "L\u01B0u"))))),
            React.createElement("div", { className: "modal-backdrop fade in" })));
    };
    return AddUi;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resAddUi: storeState.reUI.resAddUi
}); };
var mapDispatchToProps = {
    reAddUI: reAddUI,
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess,
    reListUI: reListUI
};
export default connect(mapStateToProps, mapDispatchToProps)(AddUi);
//# sourceMappingURL=addUi.js.map