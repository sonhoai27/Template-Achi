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
import { BASEURLADMIN } from "../../../../config/const";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { reListSche } from "../reSource";
var ListSche = /** @class */ (function (_super) {
    __extends(ListSche, _super);
    function ListSche(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListSche = function () {
            if (_this.props.resListSche.list) {
                return _this.props.resListSche.list.map(function (element) {
                    return (React.createElement("tr", null,
                        React.createElement("td", { className: "text-center" }, element.source_sche_id),
                        React.createElement("td", null,
                            React.createElement(Link, { to: BASEURLADMIN + "source/detail-sche/" + element.source_sche_id },
                                React.createElement("h4", { style: { marginBottom: 0, marginTop: 0 } },
                                    element.source_title,
                                    " - kh\u00F3a ",
                                    element.source_sche_id))),
                        React.createElement("td", null, element.source_sche_price),
                        React.createElement("td", null, element.source_sche_number)));
                });
            }
            return '';
        };
        return _this;
    }
    ListSche.prototype.componentDidMount = function () {
        this.props.reListSche(this.props.match.params.idSource);
    };
    ListSche.prototype.render = function () {
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-12" },
                React.createElement("div", { className: "panel" },
                    React.createElement("div", { className: "panel-toolbar" },
                        React.createElement("div", { className: "panel-heading" }, "Danh s\u00E1ch l\u1ECBch h\u1ECDc"),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement(Link, { to: BASEURLADMIN + 'source/add-sche/' + this.props.match.params.idSource },
                                React.createElement("div", { className: "btn btn-xs btn-info" }, "Th\u00EAm l\u1ECBch h\u1ECDc")))),
                    React.createElement("div", { className: "content" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-12" },
                                React.createElement("div", { className: "table-responsive" },
                                    React.createElement("table", { className: "table table-hover manage-u-table" },
                                        React.createElement("thead", null,
                                            React.createElement("tr", null,
                                                React.createElement("th", { className: "text-center" }, "#"),
                                                React.createElement("th", null, "T\u00EAn"),
                                                React.createElement("th", null, "Gi\u00E1"),
                                                React.createElement("th", null, "S\u1ED1 l\u01B0\u1EE3ng"))),
                                        React.createElement("tbody", null, this.renderListSche()))))))))));
    };
    return ListSche;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListSche: storeState.reSource.resListSche
}); };
var mapDispatchToProps = {
    reListSche: reListSche
};
export default connect(mapStateToProps, mapDispatchToProps)(ListSche);
//# sourceMappingURL=listSche.js.map