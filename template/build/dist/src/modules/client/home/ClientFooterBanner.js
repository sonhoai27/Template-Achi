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
import { API, BASEURL } from './../../../config/const';
import axios from 'axios';
import { connect } from "react-redux";
import { reIsSuccess, reIsDanger, reIsLoading } from "../../../reducers/init";
var CLientFooterBanner = /** @class */ (function (_super) {
    __extends(CLientFooterBanner, _super);
    function CLientFooterBanner(props) {
        var _this = _super.call(this, props) || this;
        _this.getFullDate = function () {
            var date = new Date();
            return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        };
        _this.onSendGift = function () {
            _this.props.reIsLoading(!_this.props.isLoading);
            if (_this.state.user.send_gift_email !== "" && _this.state.user.send_gift_name != "" && _this.state.user.send_gift_phone != "") {
                axios.post(API + 'goi-qua-tang/add/', {
                    gift: _this.state.gift,
                    user: _this.state.user
                })
                    .then(function (result) {
                    if (result.data.status === 200) {
                        _this.props.reIsSuccess(true);
                        setTimeout(function () {
                            _this.props.reIsSuccess(false);
                            _this.setNull();
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
                _this.props.reIsLoading(!_this.props.isLoading);
                alert("Vui lòng nhập đầy đủ thông tin.");
            }
        };
        _this.setNull = function () {
            $("#send_gift_email").val('');
            $("#send_gift_name").val('');
            $("#send_gift_phone").val('');
        };
        _this.onChange = function (e) {
            var _a;
            // @ts-ignore
            _this.setState({
                user: __assign({}, _this.state.user, (_a = {}, _a[e.target.name] = e.target.value, _a))
            });
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
    CLientFooterBanner.prototype.componentDidMount = function () {
        var _this = this;
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
    CLientFooterBanner.prototype.render = function () {
        return (React.createElement("div", { className: "footer-banner col-xs-12" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-sm-3 footer-banner-img" },
                        React.createElement("img", { src: this.state.gift.gift_cover, alt: "", className: "img-responsive" })),
                    React.createElement("div", { className: "col-sm-6" },
                        React.createElement("h2", null, this.state.gift.gift_name),
                        React.createElement("h4", { dangerouslySetInnerHTML: { __html: this.state.gift.gift_promo } })),
                    React.createElement("div", { className: "col-sm-3" },
                        React.createElement("div", { className: "form-get-access" },
                            React.createElement("input", { type: "text", placeholder: "H\u1ECD v\u00E0 t\u00EAn", onChange: this.onChange, id: "send_gift_name", name: "send_gift_name" }),
                            React.createElement("input", { type: "mail", placeholder: "Email", onChange: this.onChange, id: "send_gift_email", name: "send_gift_email" }),
                            React.createElement("input", { type: "number", placeholder: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", onChange: this.onChange, id: "send_gift_phone", name: "send_gift_phone" }),
                            React.createElement("div", { className: "get-access btn btn-sm btn-info", onClick: this.onSendGift },
                                "Nh\u1EADn qu\u00E0 ",
                                React.createElement("i", { className: "ti-angle-right" }))))))));
    };
    return CLientFooterBanner;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    isLoading: storeState.reInit.isLoading
}); };
var mapDispatchToProps = {
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess,
    reIsLoading: reIsLoading
};
export default connect(mapStateToProps, mapDispatchToProps)(CLientFooterBanner);
//# sourceMappingURL=ClientFooterBanner.js.map