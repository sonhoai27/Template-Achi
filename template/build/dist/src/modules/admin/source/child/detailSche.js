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
import { reDetailSche, reUpdateSche } from "../reSource";
import ListDateSche from "./listDateSche";
import AddDateSche from "./addDateSche";
var DetailSche = /** @class */ (function (_super) {
    __extends(DetailSche, _super);
    function DetailSche(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (e) {
            var _a;
            var name = e.target.name;
            var value = e.target.value;
            // @ts-ignore
            _this.setState((_a = {},
                _a[name] = value,
                _a));
        };
        _this.updateSche = function () {
            _this.props.reUpdateSche(_this.state, _this.state.source_sche_id);
        };
        _this.state = {
            source_sche_id: 0,
            source_sche_id_source: 0,
            source_sche_number: 0,
            source_sche_price: 0,
            source_sche_sale: 0,
            source_sche_address: '',
            source_sche_teacher: '',
            source_sche_status: 0
        };
        return _this;
    }
    DetailSche.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.resDetailSche != this.props.resDetailSche) {
            this.setState({
                source_sche_id: nextProps.resDetailSche.source_sche_id,
                source_sche_id_source: nextProps.resDetailSche.source_sche_id_source,
                source_sche_number: nextProps.resDetailSche.source_sche_number,
                source_sche_price: nextProps.resDetailSche.source_sche_price,
                source_sche_sale: nextProps.resDetailSche.source_sche_sale,
                source_sche_address: nextProps.resDetailSche.source_sche_address,
                source_sche_teacher: nextProps.resDetailSche.source_sche_teacher,
                source_sche_status: nextProps.resDetailSche.source_sche_status
            });
        }
    };
    DetailSche.prototype.componentDidMount = function () {
        this.props.reDetailSche(this.props.match.params.idSche);
    };
    DetailSche.prototype.render = function () {
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-8" },
                React.createElement("div", { className: "panel" },
                    React.createElement("div", { className: "panel-toolbar" },
                        React.createElement("div", { className: "panel-heading" }, "Chi ti\u1EBFt l\u1ECBch h\u1ECDc"),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement("div", { onClick: this.updateSche, className: "btn btn-xs btn-info" }, "C\u1EADp nh\u1EADt"))),
                    React.createElement("div", { className: "content" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-12" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " S\u1ED1 l\u01B0\u1EE3ng")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, type: "number", name: "source_sche_number", className: "form-control", value: this.state.source_sche_number }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " Gi\u00E1")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, type: "number", name: "source_sche_price", className: "form-control", value: this.state.source_sche_price }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " Gi\u1EA3m gi\u00E1")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, type: "number", name: "source_sche_sale", className: "form-control", value: this.state.source_sche_sale }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " \u0110\u1ECBa ch\u1EC9 h\u1ECDc")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, type: "text", name: "source_sche_address", className: "form-control", value: this.state.source_sche_address }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " Gi\u00E1o vi\u00EAn")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, type: "text", name: "source_sche_teacher", className: "form-control", value: this.state.source_sche_teacher }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " Tr\u1EA1ng th\u00E1i")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("select", { onChange: this.onChange, name: "source_sche_status", className: "form-control" },
                                            React.createElement("option", null, "Ch\u1ECDn"),
                                            React.createElement("option", { selected: this.state.source_sche_status == 0 ? true : false, value: "0" }, "\u1EA8n"),
                                            React.createElement("option", { selected: this.state.source_sche_status == 1 ? true : false, value: "1" }, "Hi\u1EC7n"))))))))),
            React.createElement("div", { className: "col-md-4" },
                React.createElement("div", { className: "panel" },
                    React.createElement("div", { className: "panel-toolbar" },
                        React.createElement("div", { className: "panel-heading" }, "Th\u1EDDi gian di\u1EC5n ra"),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement("div", { "data-toggle": "modal", "data-target": "#add-date-sche", className: "btn btn-xs btn-info" }, "Th\u00EAm m\u1EDBi"))),
                    React.createElement("div", { className: "content" },
                        React.createElement(ListDateSche, { currentIdSche: this.props.match.params.idSche })))),
            React.createElement(AddDateSche, { currentIdSche: this.props.match.params.idSche })));
    };
    return DetailSche;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resDetailSche: storeState.reSource.resDetailSche,
    resUpdateSche: storeState.reSource.resUpdateSche
}); };
var mapDispatchToProps = {
    reDetailSche: reDetailSche,
    reUpdateSche: reUpdateSche
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailSche);
//# sourceMappingURL=detailSche.js.map