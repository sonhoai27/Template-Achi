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
import { reListCounter } from "./reSendGift";
import { API } from "../../../../config/const";
var ExportFileSendGift = /** @class */ (function (_super) {
    __extends(ExportFileSendGift, _super);
    function ExportFileSendGift(props) {
        var _this = _super.call(this, props) || this;
        _this.options = function () {
            if (_this.props.resListCounter.list) {
                return _this.props.resListCounter.list.map(function (element) {
                    return (React.createElement("option", { key: element.send_gift_counter, value: element.send_gift_counter }, element.send_gift_counter));
                });
            }
            return null;
        };
        return _this;
    }
    ExportFileSendGift.prototype.componentDidMount = function () {
        this.props.reListCounter();
    };
    ExportFileSendGift.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { style: { display: "block", overflow: "auto" }, className: "modal fade in order-ebook", role: "dialog", "aria-hidden": "true" },
                React.createElement("div", { className: "modal-dialog modal-sm" },
                    React.createElement("div", { className: "modal-content" },
                        React.createElement("div", { className: "modal-header" },
                            React.createElement("button", { onClick: function () { return _this.props.isShowingModal(); }, type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true" }, "\u00D7"),
                            React.createElement("h3", null, "Xu\u1EA5t danh s\u00E1ch")),
                        React.createElement("div", { className: "modal-body" },
                            React.createElement("select", { className: "form-control", onChange: function (e) {
                                    var valueOption = e.target.value;
                                    if (valueOption != 'Chọn') {
                                        if (valueOption === "-1") {
                                            window.location.href = API + '/goi-qua-tang/all';
                                        }
                                        else {
                                            window.location.href = API + '/goi-qua-tang/export/' + valueOption;
                                        }
                                    }
                                } },
                                React.createElement("option", null, "Ch\u1ECDn"),
                                React.createElement("option", { value: -1 }, "T\u1EA5t c\u1EA3"),
                                this.options()))))),
            React.createElement("div", { className: "modal-backdrop fade in" })));
    };
    return ExportFileSendGift;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListCounter: storeState.reSendGift.resListCounter
}); };
var mapDispatchToProps = {
    reListCounter: reListCounter
};
export default connect(mapStateToProps, mapDispatchToProps)(ExportFileSendGift);
//# sourceMappingURL=exportFile.js.map