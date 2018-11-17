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
import ClientHeader from "./client-shared/Header";
import Footer from "./client-shared/Footer";
import axios from 'axios';
import { API } from "../../config/const";
import Helmet from 'react-helmet';
import { reIsDanger, reIsSuccess, reIsLoading } from "../../reducers/init";
import { BASEURL } from './../../config/const';
import { addTraffic } from './../shared/traffic';
var ClientGift = /** @class */ (function (_super) {
    __extends(ClientGift, _super);
    function ClientGift(props) {
        var _this = _super.call(this, props) || this;
        _this.getFullDate = function () {
            var date = new Date();
            return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        };
        _this.onchange = function (e) {
            var _a;
            // @ts-ignore
            _this.setState({
                user: __assign({}, _this.state.user, (_a = {}, _a[e.target.name] = e.target.value, _a))
            });
        };
        _this.validateEmail = function (email) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        };
        _this.onSendGift = function () {
            if (_this.state.user.send_gift_email !== "" && _this.validateEmail(_this.state.user.send_gift_email) && _this.state.user.send_gift_name != "" && _this.state.user.send_gift_phone != "") {
                _this.props.reIsLoading(!_this.props.isLoading);
                axios.post(API + 'goi-qua-tang/add/', {
                    gift: _this.state.gift,
                    user: _this.state.user
                })
                    .then(function (result) {
                    console.log(result);
                    if (result.data.status === 200) {
                        _this.props.reIsSuccess(true);
                        setTimeout(function () {
                            _this.props.reIsSuccess(false);
                            window.location.href = BASEURL + 'page/nhan-qua/' + _this.state.gift.gift_id;
                        }, 2000);
                    }
                    else {
                        _this.props.reIsDanger(true);
                        setTimeout(function () {
                            _this.props.reIsLoading(!_this.props.isLoading);
                            _this.props.reIsDanger(false);
                        }, 2000);
                    }
                })
                    .catch(function (err) {
                });
            }
            else {
                alert("Vui lòng nhập đủ thông tin.");
            }
        };
        _this.state = {
            gift: {},
            user: {
                send_gift_email: "",
                send_gift_name: "",
                send_gift_title: "",
                send_gift_phone: "",
                created_date: _this.getFullDate()
            }
        };
        return _this;
    }
    ClientGift.prototype.componentDidMount = function () {
        var _this = this;
        addTraffic({
            type: 0,
            url: window.location.href
        });
        axios.get(API + 'gift/detail/active')
            .then(function (result) {
            _this.setState({
                gift: result.data.list,
                user: __assign({}, _this.state.user, { send_gift_title: result.data.list.gift_name })
            });
        })
            .catch(function (err) {
        });
    };
    ClientGift.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Helmet, null,
                React.createElement("title", null, "Qu\u00E0 T\u1EB7ng | Nguy\u1EC5n Minh Ch\u00ED")),
            React.createElement(ClientHeader, null),
            React.createElement("div", { className: "col-xs-12 qua-tang page-source" },
                React.createElement("div", { className: "row page-source_banner", style: {
                        backgroundImage: "url(http://nguyenminhchi.com/api/uploads/images/196050fbecd7a4d6f3801539450000000.jpg)"
                    } },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-6" },
                                React.createElement("h1", { className: "white" },
                                    React.createElement("b", null, "NGUYENMINHCHI.COM")),
                                React.createElement("p", { className: "white" }, "S\u1EDF h\u1EEFu qu\u00E0 t\u1EB7ng t\u1EEB Mr.Share"))))),
                React.createElement("div", { className: "container paddingY-64" },
                    React.createElement("div", { className: "row flex-ver" },
                        React.createElement("div", { className: "col-sm-6 flex-ver" },
                            React.createElement("img", { width: "100%", src: this.state.gift.gift_cover, alt: "", className: "img-responsive" })),
                        React.createElement("div", { className: "col-sm-6", style: { fontSize: 18 } },
                            React.createElement("h2", null, this.state.gift.gift_name),
                            React.createElement("p", { dangerouslySetInnerHTML: { __html: this.state.gift.gift_promo } }),
                            React.createElement("p", { style: { marginTop: 32 }, dangerouslySetInnerHTML: { __html: this.state.gift.gift_content } })))),
                React.createElement("div", { className: "row paddingY-128 form-send-gift", style: {
                        backgroundImage: "url(https://eraweb.co/attachment/images/bg/install-bg.jpg)"
                    } },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-3" }),
                            React.createElement("div", { className: "col-sm-6" },
                                React.createElement("div", { className: "gift-body" },
                                    React.createElement("div", { className: "col-xs-12 margin-b-32" },
                                        React.createElement("h2", { className: "text-center" }, "Th\u00F4ng Tin \u0110\u0103ng K\u00FD")),
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("label", { className: "control-label" }, "H\u1ECD v\u00E0 t\u00EAn"),
                                        React.createElement("input", { onChange: this.onchange, type: "text", className: "form-control", name: "send_gift_name", placeholder: "Tên của bạn" })),
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("label", { className: "control-label" }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"),
                                        React.createElement("input", { onChange: this.onchange, type: "text", className: "form-control", name: "send_gift_phone", placeholder: "Số điện thoại" })),
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("label", { className: "control-label" }, "Email"),
                                        React.createElement("input", { onChange: this.onchange, type: "email", className: "form-control", name: "send_gift_email", placeholder: "Email" })),
                                    React.createElement("div", { className: "text-center" },
                                        React.createElement("div", { className: "btn", onClick: this.onSendGift }, "Nh\u1EADn qu\u00E0")))),
                            React.createElement("div", { className: "col-sm-6" }))))),
            React.createElement(Footer, null)));
    };
    return ClientGift;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    isSuccess: storeState.reInit.isSuccess,
    isDanger: storeState.reInit.isDanger,
    resAddContact: storeState.reSource.resAddContact,
    isLoading: storeState.reInit.isLoading
}); };
var mapDispatchToProps = {
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess,
    reIsLoading: reIsLoading
};
export default connect(mapStateToProps, mapDispatchToProps)(ClientGift);
//# sourceMappingURL=gift.js.map