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
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { connect } from "react-redux";
import { reListOrderEbookByPackage, reIsShowingModalExportOrderEbook, reListPackage, reListAllOrderEbook } from "./reOrderEbook";
var ModalExportOrderEbook = /** @class */ (function (_super) {
    __extends(ModalExportOrderEbook, _super);
    function ModalExportOrderEbook(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListScheOrder = function () {
            if (_this.props.resListPackage.list) {
                return _this.props.resListPackage.list.map(function (element) {
                    return (React.createElement("option", { key: element.package_ebook_id, value: element.package_ebook_id }, element.package_ebook_name));
                });
            }
            return '';
        };
        _this.renderListOrder = function () {
            if (_this.props.resListOrderEbookByPackage.list) {
                return _this.props.resListOrderEbookByPackage.list.map(function (element, index) {
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
    ModalExportOrderEbook.prototype.componentDidMount = function () {
        this.props.reListPackage();
        this.props.reListAllOrderEbook();
    };
    ModalExportOrderEbook.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "modal fade in", tabIndex: -1, role: "dialog", "aria-hidden": "true", style: { display: 'block', paddingRight: 17 } },
                React.createElement("div", { className: "modal-dialog modal-lg", style: { height: '100%', width: '1200px' } },
                    React.createElement("div", { className: "modal-content", style: { height: 'calc(100vh - 20%)' } },
                        React.createElement("div", { className: "modal-header" },
                            React.createElement("button", { onClick: function () { return _this.props.reIsShowingModalExportOrderEbook(false); }, type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true" }, "\u00D7"),
                            React.createElement("div", { className: "modal-title", style: { display: 'flex', alignItems: 'center' } },
                                React.createElement("h4", { style: { margin: 0 } }, "Xu\u1EA5t d\u1EEF li\u1EC7u"),
                                React.createElement("div", { className: "form-group", style: { margin: 0 } },
                                    React.createElement("div", { className: "col-sm-12" },
                                        React.createElement("select", { onChange: function (e) {
                                                if (e.target.value != -1) {
                                                    _this.props.reListOrderEbookByPackage(e.target.value);
                                                }
                                                else {
                                                    _this.props.reListAllOrderEbook();
                                                }
                                            }, className: "form-control" },
                                            React.createElement("option", { value: -1 }, "G\u00F3i - t\u1EA5t c\u1EA3"),
                                            this.renderListScheOrder()))),
                                React.createElement(ReactHTMLTableToExcel, { id: "test-table-xls-button", className: "download-table-xls-button btn btn-sm btn-info", table: "table-to-xls", filename: "tablexls", sheet: "tablexls", buttonText: "Export" }))),
                        React.createElement("div", { className: "modal-body", style: { height: 'calc(100% - 70px)', overflowY: 'scroll' } },
                            React.createElement("div", { className: "table-responsive" },
                                React.createElement("table", { className: "table table-hover manage-u-table", id: "table-to-xls" },
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
                                    React.createElement("tbody", null, this.renderListOrder()))))))),
            React.createElement("div", { className: "modal-backdrop fade in" })));
    };
    return ModalExportOrderEbook;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListPackage: storeState.reOrderEbookAdmin.resListPackage,
    resListOrderEbookByPackage: storeState.reOrderEbookAdmin.resListOrderEbookByPackage,
    isShowingModalExportOrderModal: storeState.reOrderEbookAdmin.isShowingModalExportOrderModal,
}); };
var mapDispatchToProps = {
    reListPackage: reListPackage,
    reIsShowingModalExportOrderEbook: reIsShowingModalExportOrderEbook,
    reListOrderEbookByPackage: reListOrderEbookByPackage,
    reListAllOrderEbook: reListAllOrderEbook
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalExportOrderEbook);
//# sourceMappingURL=modalExportOrderEbook.js.map