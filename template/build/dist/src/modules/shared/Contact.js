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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import { Storage } from "../../utils/storage-util";
import { connect } from "react-redux";
import { reIsDanger, reIsSuccess } from "../../reducers/init";
import { reAddContact } from "../admin/source/reSource";
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
            var _a;
            var _b = _this.state, email_email = _b.email_email, email_name = _b.email_name, email_phone = _b.email_phone;
            if (email_email !== "" && email_phone !== "" && email_name !== "") {
                var enc = CryptoJS.AES.encrypt(JSON.stringify(_this.state), 'NGUYENMINHCHI@1234567890987654321!@#$%^&*()').toString();
                _this.props.reAddContact(_this.state);
                Storage.local.set('user_info', __assign({}, Storage.local.get('user_info'), (_a = {}, _a[_this.props.code] = enc, _a)));
            }
            else {
                _this.props.reIsDanger(true);
                setTimeout(function () {
                    _this.props.reIsDanger(false);
                }, 1000);
            }
        };
        _this.state = {
            email_email: '',
            email_name: '',
            email_name_click: '',
            email_phone: ''
        };
        return _this;
    }
    ModalContact.prototype.componentDidMount = function () {
        this.setState({
            email_name_click: this.props.name
        });
    };
    ModalContact.prototype.componentDidUpdate = function (preProps) {
        var _this = this;
        if (preProps.resAddContact != this.props.resAddContact) {
            if (this.props.resAddContact.status === 200) {
                this.props.reIsSuccess(true);
                setTimeout(function () {
                    _this.props.reIsSuccess(false);
                    _this.props.showHide();
                }, 2000);
            }
            else {
                this.props.reIsDanger(true);
                setTimeout(function () {
                    _this.props.reIsDanger(false);
                }, 2000);
            }
        }
    };
    ModalContact.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { style: { display: "block" }, className: "modal fade in order-ebook", role: "dialog", "aria-hidden": "true" },
                React.createElement("div", { className: "modal-dialog modal-sm" },
                    React.createElement("div", { className: "modal-content" },
                        React.createElement("div", { className: "modal-header" },
                            React.createElement("h4", null, "Th\u00F4ng tin \u0111\u0103ng k\u00FD")),
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
                            React.createElement("button", { onClick: this.submit, type: "button", className: "btn btn-danger waves-effect waves-light" }, "\u0110\u0103ng k\u00FD"))))),
            React.createElement("div", { className: "modal-backdrop fade in", style: {
                    background: '#009688',
                    opacity: 1
                } })));
    };
    return ModalContact;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resAddContact: storeState.reSource.resAddContact
}); };
var mapDispatchToProps = {
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess,
    reAddContact: reAddContact
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalContact);
//# sourceMappingURL=Contact.js.map