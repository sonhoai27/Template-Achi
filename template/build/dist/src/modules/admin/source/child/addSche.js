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
import { connect } from "react-redux";
import { reAddSche } from "../reSource";
var AddSche = /** @class */ (function (_super) {
    __extends(AddSche, _super);
    function AddSche(props) {
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
        _this.addSche = function () {
            _this.props.reAddSche(__assign({}, _this.state, { source_sche_id_source: _this.props.match.params.idSource }));
        };
        _this.state = {
            source_sche_number: 0,
            source_sche_price: 0,
            source_sche_sale: 0,
            source_sche_address: '',
            source_sche_teacher: '',
            source_sche_status: 0
        };
        return _this;
    }
    AddSche.prototype.render = function () {
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-12" },
                React.createElement("div", { className: "panel" },
                    React.createElement("div", { className: "panel-toolbar" },
                        React.createElement("div", { className: "panel-heading" }, "Th\u00EAm l\u1ECBch h\u1ECDc"),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement("div", { onClick: this.addSche, className: "btn btn-xs btn-info" }, "L\u01B0u"))),
                    React.createElement("div", { className: "content" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-12" },
                                React.createElement("div", { className: "form-group", style: { width: '50%', float: 'left' } },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " S\u1ED1 l\u01B0\u1EE3ng")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, type: "number", name: "source_sche_number", className: "form-control", placeholder: "S\u1ED1 l\u01B0\u1EE3ng" }))),
                                React.createElement("div", { className: "form-group", style: { width: '50%', float: 'left' } },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " Gi\u00E1")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, type: "number", name: "source_sche_price", className: "form-control", placeholder: "Gi\u00E1" }))),
                                React.createElement("div", { className: "form-group", style: { width: '50%', float: 'left' } },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " Gi\u1EA3m gi\u00E1")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, type: "number", name: "source_sche_sale", className: "form-control", placeholder: "Gi\u1EA3m gi\u00E1" }))),
                                React.createElement("div", { className: "form-group", style: { width: '50%', float: 'left' } },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " \u0110\u1ECBa ch\u1EC9 h\u1ECDc")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, type: "text", name: "source_sche_address", className: "form-control", placeholder: "\u0110\u1ECBa ch\u1EC9 h\u1ECDc" }))),
                                React.createElement("div", { className: "form-group", style: { width: '50%', float: 'left' } },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " Gi\u00E1o vi\u00EAn")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, type: "text", name: "source_sche_teacher", className: "form-control", placeholder: "Gi\u00E1o vi\u00EAn" }))),
                                React.createElement("div", { className: "form-group", style: { width: '50%', float: 'left' } },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " Tr\u1EA1ng th\u00E1i")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("select", { onChange: this.onChange, name: "source_sche_status", className: "form-control" },
                                            React.createElement("option", null, "Ch\u1ECDn"),
                                            React.createElement("option", { value: "0" }, "\u1EA8n"),
                                            React.createElement("option", { value: "1" }, "Hi\u1EC7n")))))))))));
    };
    return AddSche;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resAddSche: storeState.reSource.resAddSche
}); };
var mapDispatchToProps = {
    reAddSche: reAddSche
};
export default connect(mapStateToProps, mapDispatchToProps)(AddSche);
//# sourceMappingURL=addSche.js.map