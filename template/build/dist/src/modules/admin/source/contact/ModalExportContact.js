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
import DatePicker from 'react-date-picker';
import { API } from "../../../../config/const";
var ModalExportContact = /** @class */ (function (_super) {
    __extends(ModalExportContact, _super);
    function ModalExportContact(props) {
        var _this = _super.call(this, props) || this;
        _this.handleDayClick = function (day) {
            var date = new Date(day);
            _this.setState({
                date: (date.getMonth() + 1) + "-" + date.getFullYear(),
                onlineDate: day
            });
        };
        _this.getExcel = function () {
            window.location.href = API + 'contact/export/excel/' + _this.state.date;
        };
        _this.state = {
            date: '',
            onlineDate: ''
        };
        return _this;
    }
    ModalExportContact.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { style: { display: "block" }, className: "modal fade in order-ebook", role: "dialog", "aria-hidden": "true" },
                React.createElement("div", { className: "modal-dialog modal-sm" },
                    React.createElement("div", { className: "modal-content" },
                        React.createElement("div", { className: "modal-header" },
                            React.createElement("button", { onClick: function () { return _this.props.showHide(); }, type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true" }, "\u00D7"),
                            React.createElement("h4", null, "Xu\u1EA5t d\u1EEF li\u1EC7u")),
                        React.createElement("div", { className: "modal-body" },
                            React.createElement("p", null, "Vui l\u00F2ng ch\u1ECDn th\u00E1ng n\u0103m."),
                            React.createElement(DatePicker, { onChange: this.handleDayClick, value: this.state.onlineDate })),
                        React.createElement("div", { className: "modal-footer" },
                            React.createElement("button", { onClick: function () { return _this.props.showHide(); }, type: "button", className: "btn btn-default waves-effect", "data-dismiss": "modal" }, "Tho\u00E1t"),
                            React.createElement("button", { onClick: this.getExcel, type: "button", className: "btn btn-danger waves-effect waves-light" }, "Xu\u1EA5t file"))))),
            React.createElement("div", { className: "modal-backdrop fade in" })));
    };
    return ModalExportContact;
}(React.Component));
export default ModalExportContact;
//# sourceMappingURL=ModalExportContact.js.map