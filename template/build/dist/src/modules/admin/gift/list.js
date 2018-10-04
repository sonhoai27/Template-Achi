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
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";
import { connect } from "react-redux";
import { reListGift, reUpdateGift } from "./reGift";
import Pagination from "../../shared/Pagination";
import { reIsSuccess, reIsDanger } from "../../../reducers/init";
import ModalSendGift from './modalSendGift';
var GiftList = /** @class */ (function (_super) {
    __extends(GiftList, _super);
    function GiftList(props) {
        var _this = _super.call(this, props) || this;
        _this.hiddenModalSendGift = function () {
            _this.setState({
                isShowingModalSendGift: !_this.state.isShowingModalSendGift
            });
        };
        _this.makeCurrentPage = function () {
            var page = window.location.href.split("page=")[1];
            if (page != undefined || page != null) {
                return page;
            }
            else {
                return "1";
            }
        };
        _this.getMoreGift = function (page) {
            _this.props.reListGift((page - 1) * 20);
        };
        _this.setActiveGift = function (gift) {
            _this.props.reUpdateGift(__assign({}, gift, { gift_active: (gift.gift_active == 1 ? 0 : 1) }), gift.gift_id);
        };
        _this.renderListGifts = function () {
            if (_this.props.resListGift.list) {
                return _this.props.resListGift.list.map(function (element, index) {
                    return (React.createElement("tr", null,
                        React.createElement("td", { className: "text-center" }, index + 1),
                        React.createElement("td", null,
                            React.createElement(Link, { to: BASEURLADMIN + 'gift/detail/' + element.gift_id },
                                React.createElement("h4", null, element.gift_name))),
                        React.createElement("td", null, element.gift_uri_file),
                        React.createElement("td", null,
                            React.createElement("div", { className: 'btn btn-xs ' + (element.gift_active == 0 ? 'btn-info' : 'btn-danger'), onClick: function () { return _this.setActiveGift(element); } }, element.gift_active == 0 ? 'Ưu tiên' : 'Hủy ưu tiên'))));
                });
            }
            return '';
        };
        _this.state = {
            isShowingModalSendGift: false
        };
        return _this;
    }
    GiftList.prototype.componentDidMount = function () {
        this.props.reListGift((parseInt(this.makeCurrentPage(), 10) - 1) * 20);
    };
    GiftList.prototype.componentDidUpdate = function (preProps) {
        var _this = this;
        if (this.props.resUpdateGift != preProps.resUpdateGift) {
            if (this.props.resUpdateGift.status === 200) {
                this.props.reIsSuccess(true);
                setTimeout(function () {
                    _this.props.reIsSuccess(false);
                    _this.props.reListGift((parseInt(_this.makeCurrentPage(), 10) - 1) * 20);
                }, 2000);
            }
            else {
                this.props.reIsDanger(true);
                setTimeout(function () {
                    _this.props.reIsDanger(false);
                    _this.props.reListGift((parseInt(_this.makeCurrentPage(), 10) - 1) * 20);
                }, 2000);
            }
        }
    };
    GiftList.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-12" },
                    React.createElement("div", { className: "panel" },
                        React.createElement("div", { className: "panel-toolbar" },
                            React.createElement("div", { className: "panel-heading" }, "Qu\u1EA3n l\u00ED qu\u00E0 t\u1EB7ng"),
                            React.createElement("div", { className: "panel-action-bar" },
                                React.createElement("div", { className: "btn btn-xs btn-info", onClick: function () {
                                        _this.setState({
                                            isShowingModalSendGift: true
                                        });
                                    }, style: {
                                        marginRight: 16
                                    } },
                                    React.createElement("i", { className: "ti-gift" }),
                                    " G\u1EDFi qu\u00E0"),
                                React.createElement(Link, { to: BASEURLADMIN + 'gift/add' },
                                    React.createElement("div", { className: "btn btn-xs btn-info" }, "Th\u00EAm m\u1EDBi")))),
                        React.createElement("div", { className: "table-responsive" },
                            React.createElement("table", { className: "table table-hover manage-u-table" },
                                React.createElement("thead", null,
                                    React.createElement("tr", null,
                                        React.createElement("th", { className: "text-center" }, "#"),
                                        React.createElement("th", null, "T\u00EAn"),
                                        React.createElement("th", null, "File"),
                                        React.createElement("th", null, "\u01AFu ti\u00EAn"))),
                                React.createElement("tbody", null, this.renderListGifts()))),
                        React.createElement("div", { className: "pg" },
                            React.createElement(Pagination, { initialPage: parseInt(this.makeCurrentPage(), 10), pageSize: 20, totalItems: this.props.resListGift.count, onChangePage: function (e) { return _this.getMoreGift(e.currentPage); } }))))),
            this.state.isShowingModalSendGift ? React.createElement(ModalSendGift, { isShowingModal: this.hiddenModalSendGift }) : ''));
    };
    return GiftList;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListGift: storeState.reGift.resListGift,
    resUpdateGift: storeState.reGift.resUpdateGift
}); };
var mapDispatchToProps = {
    reListGift: reListGift,
    reUpdateGift: reUpdateGift,
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess
};
export default connect(mapStateToProps, mapDispatchToProps)(GiftList);
//# sourceMappingURL=list.js.map