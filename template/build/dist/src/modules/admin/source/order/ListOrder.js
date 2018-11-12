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
import { reListOrder, reIsShowingModalExport } from "./reOrder";
import Pagination from "../../../shared/Pagination";
import ModalExport from './modalExport';
import { reDeleteSourceOrder } from './../reSource';
var ListOrder = /** @class */ (function (_super) {
    __extends(ListOrder, _super);
    function ListOrder(props) {
        var _this = _super.call(this, props) || this;
        _this.getMoreProduct = function (page) {
            _this.props.reListOrder((page - 1) * 20);
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
        _this.renderListOrder = function () {
            if (_this.props.resListOrder.list) {
                return _this.props.resListOrder.list.map(function (element, index) {
                    return (React.createElement("tr", { key: element.source_order_id },
                        React.createElement("td", { className: "text-center" }, index + 1),
                        React.createElement("td", null, element.source_order_id),
                        React.createElement("td", null, element.source_order_ho),
                        React.createElement("td", null, element.source_order_ten),
                        React.createElement("td", null, element.source_order_gender),
                        React.createElement("td", null, element.source_order_birthday),
                        React.createElement("td", null, element.source_order_number_phone),
                        React.createElement("td", null, element.source_order_email),
                        React.createElement("td", null,
                            element.source_title,
                            " - ",
                            element.source_sche_khoa),
                        React.createElement("td", null, element.source_order_price),
                        React.createElement("td", null,
                            React.createElement("div", { className: "btn btn-xs btn-danger", onClick: function () {
                                    _this.props.reDeleteSourceOrder(element.source_order_id);
                                } }, "X\u00F3a"))));
                });
            }
            return React.createElement("h1", null, "Null");
        };
        return _this;
    }
    ListOrder.prototype.componentDidMount = function () {
        this.props.reListOrder((parseInt(this.makeCurrentPage(), 10) - 1) * 20);
    };
    ListOrder.prototype.componentDidUpdate = function (preProps) {
        if (this.props.resDeleteSourceOrder != preProps.resDeleteSourceOrder) {
            if (this.props.resDeleteSourceOrder.status === 200) {
                this.props.reListOrder((parseInt(this.makeCurrentPage(), 10) - 1) * 20);
            }
        }
    };
    ListOrder.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "row order" },
            React.createElement("div", { className: "col-md-12" },
                React.createElement("div", { className: "panel" },
                    React.createElement("div", { className: "panel-toolbar" },
                        React.createElement("div", { className: "panel-heading" }, "Danh s\u00E1ch \u0111\u0103ng k\u00FD h\u1ECDc"),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement("div", { className: "btn btn-sm btn-primary", onClick: function () {
                                    _this.props.reIsShowingModalExport(true);
                                } },
                                React.createElement("i", { className: " icon-cloud-download" }),
                                " Export"))),
                    React.createElement("div", { className: "table-responsive" },
                        React.createElement("table", { className: "table table-hover manage-u-table" },
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("th", { className: "text-center" }, "STT"),
                                    React.createElement("th", null, "Id Order"),
                                    React.createElement("th", null, "H\u1ECD"),
                                    React.createElement("th", null, "T\u00EAn l\u00F3t & T\u00EAn"),
                                    React.createElement("th", null, "Gi\u1EDBi t\u00EDnh"),
                                    React.createElement("th", null, "Ng\u00E0y sinh"),
                                    React.createElement("th", null, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"),
                                    React.createElement("th", null, "Email"),
                                    React.createElement("th", null, "Kh\u00F3a h\u1ECDc - TKB"),
                                    React.createElement("th", null, "Gi\u00E1"),
                                    React.createElement("th", null, "H\u00E0nh \u0111\u1ED9ng"))),
                            React.createElement("tbody", null, this.renderListOrder()))),
                    React.createElement("div", { className: "pg" },
                        React.createElement(Pagination, { initialPage: parseInt(this.makeCurrentPage(), 10), pageSize: 20, totalItems: this.props.resListOrder.count, onChangePage: function (e) { return _this.getMoreProduct(e.currentPage); } })))),
            this.props.isShowingModalExport ? React.createElement(ModalExport, null) : ''));
    };
    return ListOrder;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListOrder: storeState.reOrder.resListOrder,
    isShowingModalExport: storeState.reOrder.isShowingModalExport,
    resDeleteSourceOrder: storeState.reSource.resDeleteSourceOrder
}); };
var mapDispatchToProps = {
    reListOrder: reListOrder,
    reIsShowingModalExport: reIsShowingModalExport,
    reDeleteSourceOrder: reDeleteSourceOrder
};
export default connect(mapStateToProps, mapDispatchToProps)(ListOrder);
//# sourceMappingURL=ListOrder.js.map