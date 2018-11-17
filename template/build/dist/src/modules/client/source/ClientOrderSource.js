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
import { reIsDanger, reIsSuccess, reIsLoading } from "../../../reducers/init";
import DatePicker from 'react-date-picker';
import Helmet from "react-helmet";
import { reAddOrder } from "../../admin/source/order/reOrder";
import { reDetailSche } from "../../admin/source/reSource";
import { BASEURL } from "../../../config/const";
import { addTraffic } from "../../shared/traffic";
var ClientOrderSource = /** @class */ (function (_super) {
    __extends(ClientOrderSource, _super);
    function ClientOrderSource(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (e) {
            var _a;
            _this.setState({
                order: __assign({}, _this.state.order, (_a = {}, _a[e.target.name] = e.target.value, _a))
            });
        };
        _this.getFullDate = function () {
            var date = new Date();
            return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        };
        _this.addOrder = function () {
            _this.props.reIsLoading(!_this.props.isLoading);
            if (!_this.validateEmail(_this.state.order.source_order_email)
                || _this.state.order.source_order_email === ""
                || _this.state.order.source_order_ten === ""
                || _this.state.order.source_order_ho === ""
                || _this.state.order.source_order_number_phone === ""
                || _this.state.order.source_order_gender === "") {
                _this.props.reIsDanger(true);
                setTimeout(function () {
                    _this.props.reIsDanger(false);
                    _this.props.reIsLoading(!_this.props.isLoading);
                }, 2000);
            }
            else {
                _this.props.reAddOrder(__assign({}, _this.state.order, { source_order_birthday: _this.makeDateText(_this.state.order.source_order_birthday), source_order_created_date: _this.getFullDate() }));
            }
        };
        _this.makeDateText = function (day) {
            var date = new Date(day);
            return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        };
        _this.handleDayClick = function (day) {
            _this.setState({
                order: __assign({}, _this.state.order, { source_order_birthday: day })
            });
        };
        _this.validateEmail = function (email) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        };
        _this.state = {
            order: {
                source_order_id: Date.now() + "",
                source_order_id_source: 0,
                source_order_ten: "",
                source_order_email: "",
                source_order_birthday: new Date(),
                source_order_number_phone: "",
                source_order_ho: "",
                source_order_gender: "",
                source_order_price: 0
            },
            source: {}
        };
        return _this;
    }
    ClientOrderSource.prototype.componentDidMount = function () {
        addTraffic({
            type: 0,
            url: window.location.href
        });
        this.props.reDetailSche(this.props.match.params.idSche);
    };
    ClientOrderSource.prototype.componentDidUpdate = function (preProps) {
        var _this = this;
        if (preProps.resDetailSche != this.props.resDetailSche) {
            this.setState({
                source: this.props.resDetailSche.list,
                order: __assign({}, this.state.order, { source_order_id_source: this.props.resDetailSche.list.source_sche_id, source_order_price: (this.props.resDetailSche.list.source_sche_price - this.props.resDetailSche.list.source_sche_sale) })
            });
        }
        if (this.props.resAddOrder != preProps.resAddOrder) {
            if (this.props.resAddOrder.status === 200) {
                this.props.reIsSuccess(true);
                setTimeout(function () {
                    _this.props.reIsSuccess(false);
                    _this.props.reIsLoading(!_this.props.isLoading);
                    window.location.href = BASEURL + 'page/dang-ky-khoa-hoc/' + _this.props.match.params.idSche;
                }, 2000);
            }
            else {
                this.props.reIsDanger(true);
                setTimeout(function () {
                    _this.props.reIsDanger(false);
                    window.location.href = BASEURL + 'page/dang-ky-khoa-hoc/' + _this.props.match.params.idSche;
                }, 2000);
            }
        }
    };
    ClientOrderSource.prototype.render = function () {
        var price = Number(this.state.source.source_sche_price);
        var sale = Number(this.state.source.source_sche_sale);
        var discount = price - sale;
        return (React.createElement(React.Fragment, null,
            React.createElement(Helmet, { style: [
                    {
                        cssText: "\n                .margin-top {\n                    margin-top: 0px!important;\n                }\n            "
                    }
                ] }),
            React.createElement("div", { className: "container order-source" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-sm-12" },
                        React.createElement("img", { src: this.state.source.source_banner, alt: "", className: "img-responsive", width: "100%" }))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-sm-12" },
                        React.createElement("h2", { style: { fontWeight: 600, marginTop: 32 } },
                            this.state.source.source_title,
                            "\u00A0-\u00A0",
                            this.state.source.source_sche_khoa),
                        React.createElement("hr", { style: {
                                backgroundColor: "#999",
                                marginTop: 32,
                                marginBottom: 32
                            } })),
                    React.createElement("div", { className: "col-sm-12 time" },
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                React.createElement("p", null, "\u0110\u1ECBa \u0111i\u1EC3m di\u1EC5n ra: "),
                                React.createElement("p", null, this.state.source.source_sche_address)),
                            React.createElement("li", null,
                                React.createElement("p", null, "M\u1EE9c ph\u00ED: "),
                                React.createElement("p", { style: { textDecoration: 'line-through' } },
                                    price.toLocaleString('VN'),
                                    "\u0111")),
                            React.createElement("li", null,
                                React.createElement("p", null, "\u01AFu \u0111\u00E3i hi\u1EC7n t\u1EA1i: "),
                                React.createElement("p", { style: { color: 'red' } },
                                    discount.toLocaleString('VN'),
                                    "\u0111")),
                            React.createElement("li", null,
                                React.createElement("p", null, "Th\u1EDDi gian: "),
                                React.createElement("p", { dangerouslySetInnerHTML: { __html: this.state.source.source_date_sche } }))),
                        React.createElement("div", { dangerouslySetInnerHTML: { __html: this.state.source.source_sche_uu_dai } }),
                        React.createElement("hr", { style: {
                                backgroundColor: "#999",
                                marginTop: 32,
                                marginBottom: 32
                            } })),
                    React.createElement("div", { className: "col-sm-12" },
                        React.createElement("b", { style: { color: 'red' } }, "CH\u00DA \u00DD"),
                        ": ",
                        React.createElement("b", null, "Nh\u1EADp ch\u00EDnh x\u00E1c c\u00E1c th\u00F4ng tin \u0111\u0103ng k\u00FD"),
                        " (theo  m\u1EABu b\u00EAn d\u01B0\u1EDBi) sau \u0111\u00F3 ",
                        React.createElement("b", null, "check email"),
                        " \u0111\u0103ng k\u00FD \u0111\u1EC3 ki\u1EC3m tra l\u1EA1i th\u00F4ng tin \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o ch\u00EDnh x\u00E1c (n\u1EBFu sai h\u00E3y \u0111\u0103ng k\u00FD l\u1EA1i th\u00EAm l\u1EA7n n\u1EEFa), sau \u0111\u00F3 x\u00E1c nh\u1EADn email v\u00E0 l\u00E0m theo h\u01B0\u1EDBng d\u1EABn t\u1EEB S\u1ED1ng X\u1EE9ng \u0110\u00E1ng.",
                        React.createElement("br", null),
                        React.createElement("b", { style: { color: 'red' } }, "Hotline h\u1ED7 tr\u1EE3"),
                        ": ",
                        React.createElement("b", null, " 0977 545 374"),
                        " \u0111\u1EC3 \u0111\u01B0\u1EE3c gi\u1EA3i \u0111\u00E1p th\u00EAm th\u00F4ng tin.",
                        React.createElement("br", null),
                        "Tr\u00E2n tr\u1ECDng,")),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-sm-12 form-order-source" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-4" },
                                React.createElement("h3", { style: { color: '#1f9080' } },
                                    React.createElement("i", { className: "icon-user" }),
                                    " H\u1ECDc vi\u00EAn")),
                            React.createElement("div", { className: "col-sm-4 text-center", style: { marginTop: 8, color: '#1f9080' } }, "\u0110i\u1EC1n ch\u00EDnh x\u00E1c th\u00F4ng tin b\u00EAn d\u01B0\u1EDBi"),
                            React.createElement("div", { className: "col-sm-4" })),
                        React.createElement("div", { className: "row form-order-source_form" },
                            React.createElement("div", { className: "col-sm-4" }),
                            React.createElement("div", { className: "col-sm-4" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, "* Email")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, name: "source_order_email", type: "email", className: "form-control", placeholder: "Email" })),
                                    React.createElement("div", { className: "col-sm-12", style: {
                                            fontWeight: 300,
                                            fontSize: 12
                                        } })),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, "* S\u1ED1 \u0111i\u1EC7n tho\u1EA1i")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, name: "source_order_number_phone", type: "number", className: "form-control", placeholder: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i" }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, "* H\u1ECD")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, name: "source_order_ho", type: "text", className: "form-control", placeholder: "H\u1ECD" }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, "* T\u00EAn l\u00F3t v\u00E0 t\u00EAn")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, name: "source_order_ten", type: "text", className: "form-control", placeholder: "T\u00EAn l\u00F3t v\u00E0 t\u00EAn" }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, "* Gi\u1EDBi t\u00EDnh")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("select", { name: "source_order_gender", onChange: this.onChange, className: "form-control" },
                                            React.createElement("option", null, "Ch\u1ECDn"),
                                            React.createElement("option", { value: "Nam" }, "Nam"),
                                            React.createElement("option", { value: "N\u1EEF" }, "N\u1EEF"),
                                            React.createElement("option", { value: "Kh\u00E1c" }, "Kh\u00E1c")))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, "* Ng\u00E0y sinh")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement(DatePicker, { onChange: this.handleDayClick, value: this.state.order.source_order_birthday }))),
                                React.createElement("div", { className: "text-center" },
                                    React.createElement("div", { className: "btn btn-sm", onClick: this.addOrder }, "\u0110\u0103ng k\u00FD"))),
                            React.createElement("div", { className: "col-sm-4" })))))));
    };
    return ClientOrderSource;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resAddOrder: storeState.reOrder.resAddOrder,
    resDetailSche: storeState.reSource.resDetailSche,
    isLoading: storeState.reInit.isLoading
}); };
var mapDispatchToProps = {
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess,
    reAddOrder: reAddOrder,
    reDetailSche: reDetailSche,
    reIsLoading: reIsLoading
};
export default connect(mapStateToProps, mapDispatchToProps)(ClientOrderSource);
//# sourceMappingURL=ClientOrderSource.js.map