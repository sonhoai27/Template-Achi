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
import { connect } from "react-redux";
import { reOrderEbook } from "../reEbook";
import { reIsDanger, reIsSuccess } from "../../../../reducers/init";
var OrderEbook = /** @class */ (function (_super) {
    __extends(OrderEbook, _super);
    function OrderEbook(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (e) {
            var _a;
            // @ts-ignore
            _this.setState({
                order: __assign({}, _this.state.order, (_a = {}, _a[e.target.name] = e.target.value, _a))
            });
        };
        _this.onBuy = function () {
            if (_this.state.order.order_ebook_name != "" &&
                _this.state.order.order_ebook_email != "" &&
                _this.state.order.order_ebook_phone != "" &&
                _this.validateEmail(_this.state.order.order_ebook_email)) {
                _this.props.reOrderEbook(_this.state.order);
            }
            else {
                _this.setState({
                    stateNull: !_this.state.stateNull
                }, function () {
                    setTimeout(function () {
                        _this.setState({
                            stateNull: !_this.state.stateNull
                        });
                    }, 2000);
                });
            }
        };
        _this.validateEmail = function (email) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        };
        _this.onExit = function () {
            _this.props.exit();
        };
        _this.state = {
            order: {
                order_ebook_name: "",
                order_ebook_email: "",
                order_ebook_phone: "",
                order_ebook_package: _this.props.package,
                order_ebook_discount: "",
                order_ebook_price: _this.props.price
            },
            stateNull: false
        };
        return _this;
    }
    OrderEbook.prototype.componentDidUpdate = function (preProps) {
        var _this = this;
        if (this.props.resOrderEbook != preProps.resOrderEbook) {
            console.log(this.props.resOrderEbook.status);
            if (this.props.resOrderEbook.status === 200) {
                this.props.reIsSuccess(true);
                setTimeout(function () {
                    _this.props.reIsSuccess(false);
                    _this.props.exit();
                }, 2000);
            }
            else {
                this.props.reIsDanger(true);
                setTimeout(function () {
                    _this.props.exit();
                    _this.props.reIsDanger(false);
                }, 2000);
            }
        }
    };
    OrderEbook.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { style: { display: "block" }, className: "modal fade in order-ebook", role: "dialog", "aria-hidden": "true" },
                React.createElement("div", { className: "modal-dialog modal-lg" },
                    React.createElement("div", { className: "modal-content" },
                        React.createElement("div", { className: "modal-header" },
                            React.createElement("button", { onClick: this.onExit, type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true" }, "\u00D7"),
                            React.createElement("h4", { className: "modal-title" },
                                React.createElement("b", { style: { fontWeight: 700 } },
                                    "\u0110\u0103ng k\u00FD mua S\u00E1ch: G\u00F3i ",
                                    this.state.order.order_ebook_package,
                                    " ",
                                    "Cu\u1ED1n"))),
                        React.createElement("div", { className: "modal-body" },
                            React.createElement("div", { className: "form-group" },
                                React.createElement("label", { className: "control-label" }, "H\u1ECD v\u00E0 t\u00EAn"),
                                React.createElement("input", { type: "text", onChange: this.onChange, className: "form-control", name: "order_ebook_name" })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement("label", { className: "control-label" }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"),
                                React.createElement("input", { type: "text", onChange: this.onChange, className: "form-control", name: "order_ebook_phone" })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement("label", { className: "control-label" }, "Email"),
                                React.createElement("input", { type: "email", onChange: this.onChange, className: "form-control", name: "order_ebook_email" })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement("label", { className: "control-label" }, "M\u00E3 gi\u1EA3m gi\u00E1"),
                                React.createElement("input", { type: "text", onChange: this.onChange, className: "form-control", name: "order_ebook_discount" })),
                            this.state.stateNull ? (React.createElement("p", { className: "order_ebook-warning" }, "Vui l\u00F2ng xem l\u1EA1i")) : ("")),
                        React.createElement("div", { className: "modal-footer" },
                            React.createElement("button", { onClick: this.onExit, type: "button", className: "btn btn-default waves-effect", "data-dismiss": "modal" }, "Tho\u00E1t"),
                            React.createElement("button", { onClick: this.onBuy, type: "button", className: "btn btn-danger waves-effect waves-light" }, "\u0110\u0103ng k\u00FD"))))),
            React.createElement("div", { className: "modal-backdrop fade in" })));
    };
    return OrderEbook;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resOrderEbook: storeState.reOrderEbook.resOrderEbook
}); };
var mapDispatchToProps = {
    reOrderEbook: reOrderEbook,
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderEbook);
//# sourceMappingURL=orderEbook.js.map