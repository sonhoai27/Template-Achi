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
import { Storage } from "../../utils/storage-util";
var CryptoJS = require("crypto-js");
var ModalContact = /** @class */ (function (_super) {
    __extends(ModalContact, _super);
    function ModalContact(props) {
        var _this = _super.call(this, props) || this;
        _this.onchange = function (e) {
            var _a;
            // @ts-ignore
            _this.setState((_a = {},
                _a[e.target.name] = e.target.value,
                _a));
        };
        _this.submit = function () {
            Storage.local.set('user_info', CryptoJS.AES.encrypt(JSON.stringify(_this.state), 'NGUYENMINHCHI@1234567890987654321!@#$%^&*()').toString());
        };
        _this.state = {
            email_email: '',
            email_name: '',
            email_name_click: '',
            email_phone: ''
        };
        return _this;
    }
    ModalContact.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { style: { display: "block" }, className: "modal fade in order-ebook", role: "dialog", "aria-hidden": "true" },
                React.createElement("div", { className: "modal-dialog modal-sm" },
                    React.createElement("div", { className: "modal-content" },
                        React.createElement("div", { className: "modal-header" },
                            React.createElement("h4", null, "Nh\u1EADp th\u00F4ng tin tr\u01B0\u1EDBc khi xem")),
                        React.createElement("div", { className: "modal-body" },
                            React.createElement("div", { className: "form-group" },
                                React.createElement("label", { className: "control-label" }, "H\u1ECD v\u00E0 t\u00EAn"),
                                React.createElement("input", { onChange: this.onchange, type: "text", className: "form-control", name: "email_name", placeholder: 'Tên của bạn' })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement("label", { className: "control-label" }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"),
                                React.createElement("input", { onChange: this.onchange, type: "text", className: "form-control", name: "email_phone", placeholder: 'Số điện thoại' })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement("label", { className: "control-label" }, "Email"),
                                React.createElement("input", { onChange: this.onchange, type: "email", className: "form-control", name: "email_email", placeholder: 'Thư điện tử' }))),
                        React.createElement("div", { className: "modal-footer" },
                            React.createElement("button", { onClick: this.submit, type: "button", className: "btn btn-danger waves-effect waves-light" }, "L\u01B0u"))))),
            React.createElement("div", { className: "modal-backdrop fade in", style: {
                    opacity: 1,
                    backgroundColor: '#1F9080'
                } })));
    };
    return ModalContact;
}(React.Component));
export default ModalContact;
//# sourceMappingURL=Contact.js.map