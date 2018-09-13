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
import { reListScheOrder, reListOrderBySche, reIsShowingModalExport } from "./reOrder";
var ModalExport = /** @class */ (function (_super) {
    __extends(ModalExport, _super);
    function ModalExport(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListScheOrder = function () {
            if (_this.props.resListScheOrder.list) {
                return _this.props.resListScheOrder.list.map(function (element) {
                    return (React.createElement("option", { key: element.source_sche_id, value: element.source_sche_id },
                        element.source_title,
                        " - ",
                        element.source_sche_khoa));
                });
            }
            return '';
        };
        _this.renderListOrder = function () {
            if (_this.props.resListOrderBySche.list) {
                return _this.props.resListOrderBySche.list.map(function (element, index) {
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
                        React.createElement("td", null, element.source_order_created_date)));
                });
            }
            return React.createElement("h1", null, "Null");
        };
        return _this;
    }
    ModalExport.prototype.componentDidMount = function () {
        this.props.reListScheOrder();
    };
    ModalExport.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "modal fade in", tabIndex: -1, role: "dialog", "aria-hidden": "true", style: { display: 'block', paddingRight: 17 } },
                React.createElement("div", { className: "modal-dialog modal-lg", style: { height: '100%', width: '1200px' } },
                    React.createElement("div", { className: "modal-content", style: { height: 'calc(100vh - 20%)' } },
                        React.createElement("div", { className: "modal-header" },
                            React.createElement("button", { onClick: function () { return _this.props.reIsShowingModalExport(false); }, type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true" }, "\u00D7"),
                            React.createElement("div", { className: "modal-title", style: { display: 'flex', alignItems: 'center' } },
                                React.createElement("h4", { style: { margin: 0 } }, "Xu\u1EA5t d\u1EEF li\u1EC7u"),
                                React.createElement("div", { className: "form-group", style: { margin: 0 } },
                                    React.createElement("div", { className: "col-sm-12" },
                                        React.createElement("select", { onChange: function (e) {
                                                _this.props.reListOrderBySche(e.target.value);
                                            }, className: "form-control" },
                                            React.createElement("option", null, "Kh\u00F3a h\u1ECDc - th\u1EDDi kh\u00F3a bi\u1EC3u"),
                                            this.renderListScheOrder()))),
                                React.createElement(ReactHTMLTableToExcel, { id: "test-table-xls-button", className: "download-table-xls-button btn btn-sm btn-info", table: "table-to-xls", filename: "tablexls", sheet: "tablexls", buttonText: "Export" }))),
                        React.createElement("div", { className: "modal-body", style: { height: 'calc(100% - 70px)', overflowY: 'scroll' } },
                            React.createElement("div", { className: "table-responsive" },
                                React.createElement("table", { className: "table table-hover manage-u-table", id: "table-to-xls" },
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
                                            React.createElement("th", null, "Ng\u00E0y \u0111\u0103ng k\u00FD"))),
                                    React.createElement("tbody", null, this.renderListOrder()))))))),
            React.createElement("div", { className: "modal-backdrop fade in" })));
    };
    return ModalExport;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListScheOrder: storeState.reOrder.resListScheOrder,
    resListOrderBySche: storeState.reOrder.resListOrderBySche
}); };
var mapDispatchToProps = {
    reListScheOrder: reListScheOrder,
    reListOrderBySche: reListOrderBySche,
    reIsShowingModalExport: reIsShowingModalExport
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalExport);
//# sourceMappingURL=modalExport.js.map