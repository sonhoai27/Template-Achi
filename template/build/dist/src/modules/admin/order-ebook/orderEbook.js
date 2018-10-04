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
import { reIsDanger, reIsSuccess } from "../../../reducers/init";
import { reIsShowingModalExportOrderEbook, reListOrderEbook } from "./reOrderEbook";
import Pagination from "../../shared/Pagination";
import ModalExportOrderEbook from "./modalExportOrderEbook";
var OrderEbook = /** @class */ (function (_super) {
    __extends(OrderEbook, _super);
    function OrderEbook(props) {
        var _this = _super.call(this, props) || this;
        _this.getMoreProduct = function (page) {
            _this.props.reListOrderEbook((page - 1) * 20);
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
            if (_this.props.resListOrderEbook.list) {
                return _this.props.resListOrderEbook.list.map(function (element, index) {
                    return (React.createElement("tr", { key: element.order_ebook_id },
                        React.createElement("td", { className: "text-center" }, index + 1),
                        React.createElement("td", null, element.order_ebook_id),
                        React.createElement("td", null, element.order_ebook_name),
                        React.createElement("td", null, element.order_ebook_email),
                        React.createElement("td", null, element.order_ebook_phone),
                        React.createElement("td", null, element.package_ebook_name),
                        React.createElement("td", null, element.package_ebook_price),
                        React.createElement("td", null, element.order_ebook_created_date)));
                });
            }
            return React.createElement("h1", null, "Null");
        };
        return _this;
    }
    OrderEbook.prototype.componentDidMount = function () {
        this.props.reListOrderEbook((parseInt(this.makeCurrentPage(), 10) - 1) * 20);
    };
    OrderEbook.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-12" },
                    React.createElement("div", { className: "panel" },
                        React.createElement("div", { className: "panel-toolbar" },
                            React.createElement("div", { className: "panel-heading" }, "Danh s\u00E1ch \u0111\u0103ng k\u00FD mua s\u00E1ch"),
                            React.createElement("div", { className: "panel-action-bar" },
                                React.createElement("div", { style: { marginRight: 16 }, className: "btn btn-sm btn-primary" },
                                    React.createElement("i", { className: "icon-drawar" }),
                                    " Qu\u1EA3n l\u00FD G\u00F3i"),
                                React.createElement("div", { className: "btn btn-sm btn-primary", onClick: function () {
                                        _this.props.reIsShowingModalExportOrderEbook(true);
                                    } },
                                    React.createElement("i", { className: " icon-cloud-download" }),
                                    " Export"))),
                        React.createElement("div", { className: "table-responsive" },
                            React.createElement("table", { className: "table table-hover manage-u-table" },
                                React.createElement("thead", null,
                                    React.createElement("tr", null,
                                        React.createElement("th", { className: "text-center" }, "STT"),
                                        React.createElement("th", null, "Id Order"),
                                        React.createElement("th", null, "H\u1ECD v\u00E0 t\u00EAn"),
                                        React.createElement("th", null, "Email"),
                                        React.createElement("th", null, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"),
                                        React.createElement("th", null, "G\u00F3i"),
                                        React.createElement("th", null, "Gi\u00E1"),
                                        React.createElement("th", null, "Ng\u00E0y \u0111\u0103ng k\u00FD"))),
                                React.createElement("tbody", null, this.renderListOrder()))),
                        React.createElement("div", { className: "pg" },
                            React.createElement(Pagination, { initialPage: parseInt(this.makeCurrentPage(), 10), pageSize: 20, totalItems: this.props.resListOrderEbook.count, onChangePage: function (e) { return _this.getMoreProduct(e.currentPage); } }))))),
            this.props.isShowingModalExportOrderModal ? React.createElement(ModalExportOrderEbook, null) : ''));
    };
    return OrderEbook;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListOrderEbook: storeState.reOrderEbookAdmin.resListOrderEbook,
    isShowingModalExportOrderModal: storeState.reOrderEbookAdmin.isShowingModalExportOrderModal,
}); };
var mapDispatchToProps = {
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess,
    reListOrderEbook: reListOrderEbook,
    reIsShowingModalExportOrderEbook: reIsShowingModalExportOrderEbook
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderEbook);
//# sourceMappingURL=orderEbook.js.map