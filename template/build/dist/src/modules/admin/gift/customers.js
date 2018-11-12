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
import { reCustomerList, reDeleteCustomer } from "./reGift";
import { BASEURLADMIN } from "../../../config/const";
import Pagination from "../../shared/Pagination";
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(props) {
        var _this = _super.call(this, props) || this;
        _this.makeCurrentPage = function () {
            var page = window.location.href.split("page=")[1];
            if (page != undefined || page != null) {
                return page;
            }
            else {
                return "1";
            }
        };
        _this.getMoreCustomer = function (page) {
            _this.props.reCustomerList((page - 1) * 40);
            window.history.pushState("", "", BASEURLADMIN + 'gift/customers/' + "?page=" + page);
        };
        _this.renderCustomerList = function () {
            if (_this.props.resCustomerList.list) {
                return _this.props.resCustomerList.list.map(function (element, index) {
                    return (React.createElement("tr", { key: element.blog_id },
                        React.createElement("td", { className: "text-center", role: "row" }, index + 1),
                        React.createElement("td", null, element.send_gift_name),
                        React.createElement("td", null, element.send_gift_email),
                        React.createElement("td", null, element.send_gift_counter),
                        React.createElement("td", null, element.send_gift_title),
                        React.createElement("td", null,
                            React.createElement("div", { onClick: function () {
                                    _this.props.reDeleteCustomer(element.send_gift_id);
                                }, className: "btn btn-sm btn-danger" }, "X\u00F3a"))));
                });
            }
            return React.createElement("h1", null, "NULL");
        };
        return _this;
    }
    Customer.prototype.componentDidUpdate = function (preProps) {
        if (this.props.resDeleteCustomer != preProps.resDeleteCustomer) {
            this.props.reCustomerList((parseInt(this.makeCurrentPage(), 10) - 1) * 40);
        }
    };
    Customer.prototype.componentDidMount = function () {
        this.props.reCustomerList((parseInt(this.makeCurrentPage(), 10) - 1) * 40);
    };
    Customer.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-12" },
                    React.createElement("div", { className: "panel" },
                        React.createElement("div", { className: "panel-toolbar" },
                            React.createElement("div", { className: "panel-heading" }, "Danh s\u00E1ch danh \u0111\u0103ng k\u00FD"),
                            React.createElement("div", { className: "panel-action-bar" },
                                React.createElement("div", { className: "btn btn-xs btn-info" }, "T\u1EA3i l\u00EAn"))),
                        React.createElement("div", { className: "content" },
                            React.createElement("div", { className: "row" },
                                React.createElement("div", { className: "col-sm-12" },
                                    React.createElement("div", { className: "table-responsive" },
                                        React.createElement("table", { className: "table table-hover" },
                                            React.createElement("thead", null,
                                                React.createElement("tr", null,
                                                    React.createElement("th", { className: "text-center", role: "row" }, "#"),
                                                    React.createElement("th", null, "T\u00EAn"),
                                                    React.createElement("th", null, "Email"),
                                                    React.createElement("th", null, "L\u1EA7n g\u1EDFi qu\u00E0"),
                                                    React.createElement("th", null, "Qu\u00E0 t\u1EB7ng"),
                                                    React.createElement("th", null, "Action"))),
                                            React.createElement("tbody", null, this.renderCustomerList())))))),
                        React.createElement("div", { className: "pg" },
                            React.createElement(Pagination, { initialPage: parseInt(this.makeCurrentPage(), 10), pageSize: 40, totalItems: this.props.resCustomerList.count, onChangePage: function (e) { return _this.getMoreCustomer(e.currentPage); } })))))));
    };
    return Customer;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resDeleteCustomer: storeState.reGift.resDeleteCustomer,
    resCustomerList: storeState.reGift.resCustomerList
}); };
var mapDispatchToProps = {
    reCustomerList: reCustomerList,
    reDeleteCustomer: reDeleteCustomer
};
export default connect(mapStateToProps, mapDispatchToProps)(Customer);
//# sourceMappingURL=customers.js.map