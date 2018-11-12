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
import { reListSche } from "../../admin/source/reSource";
import { BASEURL } from "../../../config/const";
var MainSche = /** @class */ (function (_super) {
    __extends(MainSche, _super);
    function MainSche(props) {
        var _this = _super.call(this, props) || this;
        _this.calMoney = function (price, sale) {
            var cal = Number(price - sale);
            if (cal === 0) {
                return "MIỄN PHÍ";
            }
            else {
                return (cal.toLocaleString('vi-VN')) + 'đ';
            }
        };
        _this.renderListSche = function () {
            if (_this.props.resListSche.list) {
                return _this.props.resListSche.list.map(function (element) {
                    var price = Number(element.source_sche_price);
                    var discount = Number(element.source_sche_sale);
                    return (React.createElement("ul", { "data-id": "row_74" },
                        React.createElement("li", { "data-label": "T\u00EAn ch\u01B0\u01A1ng tr\u00ECnh" },
                            React.createElement("ul", { className: "child", style: { padding: 0 } },
                                React.createElement("li", { className: "orange" },
                                    React.createElement("b", { id: "name_74" },
                                        React.createElement("i", { className: "icon-layers" }),
                                        " ",
                                        element.source_title,
                                        " - ",
                                        element.source_sche_khoa)),
                                React.createElement("li", null,
                                    React.createElement("i", { className: "icon-microphone" }),
                                    " Trainer:",
                                    React.createElement("a", { href: BASEURL + 'page/gioi-thieu', style: { marginLeft: 8 } }, element.source_sche_teacher)),
                                React.createElement("li", null,
                                    React.createElement("i", { className: "icon-location-pin" }),
                                    "  \u0110\u1ECBa ch\u1EC9: ",
                                    React.createElement("span", { style: { marginLeft: 8 } }, element.source_sche_address)))),
                        React.createElement("li", { "data-label": "Th\u1EDDi gian" },
                            React.createElement("p", { dangerouslySetInnerHTML: { __html: element.source_date_sche } })),
                        React.createElement("li", { "data-label": "\u01AFu \u0111\u00E3i" },
                            React.createElement("p", { style: { marginRight: 10, lineHeight: "1.8", textDecoration: 'line-through' } },
                                React.createElement("b", { style: { fontWeight: 'bold' } },
                                    price.toLocaleString('vi-VN'),
                                    "\u0111")),
                            React.createElement("p", { style: { lineHeight: "1.8", color: 'red' } },
                                "- ",
                                React.createElement("b", { style: { fontWeight: 'bold' } },
                                    discount.toLocaleString('vi-VN'),
                                    "\u0111")),
                            React.createElement("p", { style: { lineHeight: "1.8", color: 'green' } },
                                React.createElement("b", { style: { fontWeight: 'bold' } },
                                    "= ",
                                    _this.calMoney(element.source_sche_price, element.source_sche_sale)))),
                        React.createElement("li", { className: "text-center", "data-label": "\u0110\u0103ng k\u00FD" },
                            React.createElement("p", { className: "red", style: { lineHeight: "1.8" }, dangerouslySetInnerHTML: { __html: element.source_sche_number } }),
                            React.createElement("p", { className: "bold-text uppercase btn btn-sm", style: {
                                    color: '#fff',
                                    background: '#F44336',
                                    textTransform: 'uppercase',
                                    display: "inline-block",
                                    padding: '12px 16px'
                                } },
                                React.createElement("i", { className: "spin fa fa-spinner", style: { marginRight: 8 } }),
                                React.createElement("a", { style: { color: '#fff', fontSize: '16px', fontWeight: 600 }, href: BASEURL + 'page/khoa-hoc/dang-ky/' + element.source_sche_id, target: "_blank" }, "\u0110\u0103ng K\u00FD Ngay")))));
                });
            }
            return React.createElement("h1", null, "NULL");
        };
        return _this;
    }
    MainSche.prototype.componentDidMount = function () {
        var url = this.props.currentMatch.params.idSource;
        var tempArr = url.split('-');
        var idSource = tempArr[tempArr.length - 1];
        this.props.reListSche(idSource);
    };
    MainSche.prototype.componentDidUpdate = function (preProps) {
    };
    MainSche.prototype.componentWillReceiveProps = function (nextProps) {
    };
    MainSche.prototype.render = function () {
        return (React.createElement("div", { className: "calendar" },
            React.createElement("div", { className: "responsive-table", id: "dkmh" },
                React.createElement("div", { className: "thead" },
                    React.createElement("ul", null,
                        React.createElement("li", null,
                            React.createElement("i", { className: "fa fa-list-alt checkout" }),
                            " T\u00EAn ch\u01B0\u01A1ng tr\u00ECnh"),
                        React.createElement("li", null,
                            React.createElement("i", { className: "fa fa-clock-o checkout" }),
                            " Th\u1EDDi gian"),
                        React.createElement("li", null,
                            React.createElement("i", { className: "fa fa-thumbs-o-up checkout" }),
                            " \u01AFu \u0111\u00E3i"),
                        React.createElement("li", null,
                            React.createElement("i", { className: "fa fa-key checkout" }),
                            " \u0110\u0103ng k\u00FD"))),
                React.createElement("div", { className: "tbody" }, this.renderListSche()))));
    };
    return MainSche;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListSche: storeState.reSource.resListSche,
    currentMatch: storeState.reInit.currentMatch
}); };
var mapDispatchToProps = {
    reListSche: reListSche
};
export default connect(mapStateToProps, mapDispatchToProps)(MainSche);
//# sourceMappingURL=MainSche.js.map