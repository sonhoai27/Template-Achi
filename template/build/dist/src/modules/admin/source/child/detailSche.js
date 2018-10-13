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
import { reDetailSche, reUpdateSche } from "../reSource";
import { reIsDanger, reIsSuccess } from "../../../../reducers/init";
import { Editor } from "@tinymce/tinymce-react";
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
            source_sche_address: "",
            source_sche_teacher: "",
            source_sche_status: 0,
            source_sche_khoa: "",
            source_date_sche: ""
        };
        return _this;
    }
    DetailSche.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.resDetailSche != this.props.resDetailSche) {
            this.setState({
                source_sche_id: nextProps.resDetailSche.list.source_sche_id,
                source_sche_id_source: nextProps.resDetailSche.list.source_sche_id_source,
                source_sche_number: nextProps.resDetailSche.list.source_sche_number,
                source_sche_price: nextProps.resDetailSche.list.source_sche_price,
                source_sche_sale: nextProps.resDetailSche.list.source_sche_sale,
                source_sche_address: nextProps.resDetailSche.list.source_sche_address,
                source_sche_teacher: nextProps.resDetailSche.list.source_sche_teacher,
                source_sche_status: nextProps.resDetailSche.list.source_sche_status,
                source_sche_khoa: nextProps.resDetailSche.list.source_sche_khoa,
                source_date_sche: nextProps.resDetailSche.list.source_date_sche
            });
        }
    };
    DetailSche.prototype.componentDidUpdate = function (preProps) {
        var _this = this;
        if (preProps.resUpdateSche != this.props.resUpdateSche) {
            if (this.props.resUpdateSche.status === 200) {
                this.props.reIsSuccess(true);
                setTimeout(function () {
                    _this.props.reIsSuccess(false);
                    window.location.href = _this.props.match.url;
                }, 2000);
            }
            else {
                this.props.reIsDanger(true);
                setTimeout(function () {
                    _this.props.reIsDanger(false);
                    window.location.href = _this.props.match.url;
                }, 2000);
            }
        }
    };
    DetailSche.prototype.componentDidMount = function () {
        this.props.reDetailSche(this.props.match.params.idSche);
    };
    DetailSche.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-12" },
                React.createElement("div", { className: "panel" },
                    React.createElement("div", { className: "panel-toolbar" },
                        React.createElement("div", { className: "panel-heading" }, "Chi ti\u1EBFt l\u1ECBch h\u1ECDc"),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement("div", { onClick: this.updateSche, className: "btn btn-xs btn-info" }, "C\u1EADp nh\u1EADt"))),
                    React.createElement("div", { className: "content" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-12" },
                                React.createElement("div", { className: "row" },
                                    React.createElement("div", { className: "col-sm-6" },
                                        React.createElement("div", { className: "form-group" },
                                            React.createElement("label", { className: "col-md-12" },
                                                React.createElement("span", { className: "help" }, " Kh\u00F3a")),
                                            React.createElement("div", { className: "col-md-12" },
                                                React.createElement("input", { onChange: this.onChange, type: "text", name: "source_sche_khoa", className: "form-control", value: this.state.source_sche_khoa })))),
                                    React.createElement("div", { className: "col-sm-6" },
                                        React.createElement("div", { className: "form-group" },
                                            React.createElement("label", { className: "col-md-12" },
                                                React.createElement("span", { className: "help" }, " S\u1ED1 l\u01B0\u1EE3ng")),
                                            React.createElement("div", { className: "col-md-12" },
                                                React.createElement("input", { onChange: this.onChange, type: "number", name: "source_sche_number", className: "form-control", value: this.state.source_sche_number })))),
                                    React.createElement("div", { className: "col-sm-6" },
                                        React.createElement("div", { className: "form-group" },
                                            React.createElement("label", { className: "col-md-12" },
                                                React.createElement("span", { className: "help" }, " Gi\u00E1")),
                                            React.createElement("div", { className: "col-md-12" },
                                                React.createElement("input", { onChange: this.onChange, type: "number", name: "source_sche_price", className: "form-control", value: this.state.source_sche_price })))),
                                    React.createElement("div", { className: "col-sm-6" },
                                        React.createElement("div", { className: "form-group" },
                                            React.createElement("label", { className: "col-md-12" },
                                                React.createElement("span", { className: "help" }, " Gi\u1EA3m gi\u00E1")),
                                            React.createElement("div", { className: "col-md-12" },
                                                React.createElement("input", { onChange: this.onChange, type: "number", name: "source_sche_sale", className: "form-control", value: this.state.source_sche_sale })))),
                                    React.createElement("div", { className: "col-sm-6" },
                                        React.createElement("div", { className: "form-group" },
                                            React.createElement("label", { className: "col-md-12" },
                                                React.createElement("span", { className: "help" }, " \u0110\u1ECBa ch\u1EC9 h\u1ECDc")),
                                            React.createElement("div", { className: "col-md-12" },
                                                React.createElement("input", { onChange: this.onChange, type: "text", name: "source_sche_address", className: "form-control", value: this.state.source_sche_address })))),
                                    React.createElement("div", { className: "col-sm-6" },
                                        React.createElement("div", { className: "form-group" },
                                            React.createElement("label", { className: "col-md-12" },
                                                React.createElement("span", { className: "help" }, " Gi\u00E1o vi\u00EAn")),
                                            React.createElement("div", { className: "col-md-12" },
                                                React.createElement("input", { onChange: this.onChange, type: "text", name: "source_sche_teacher", className: "form-control", value: this.state.source_sche_teacher })))),
                                    React.createElement("div", { className: "col-sm-6" },
                                        React.createElement("div", { className: "form-group" },
                                            React.createElement("label", { className: "col-md-12" },
                                                React.createElement("span", { className: "help" }, " Tr\u1EA1ng th\u00E1i")),
                                            React.createElement("div", { className: "col-md-12" },
                                                React.createElement("select", { onChange: this.onChange, name: "source_sche_status", className: "form-control" },
                                                    React.createElement("option", null, "Ch\u1ECDn"),
                                                    React.createElement("option", { selected: this.state.source_sche_status == 0
                                                            ? true
                                                            : false, value: "0" }, "\u1EA8n"),
                                                    React.createElement("option", { selected: this.state.source_sche_status == 1
                                                            ? true
                                                            : false, value: "1" }, "Hi\u1EC7n"))))),
                                    React.createElement("div", { className: "col-sm-6" },
                                        React.createElement("div", { className: "form-group", style: { display: "inline-block", width: "100%" } },
                                            React.createElement("label", { className: "col-md-12" },
                                                React.createElement("span", { className: "help" }, " Th\u1EDDi gian")),
                                            React.createElement("div", { className: "col-md-12" },
                                                React.createElement(Editor, { initialValue: this.state.source_date_sche, onChange: function (e) {
                                                        _this.setState(__assign({}, _this.state, { source_date_sche: e.level.content }));
                                                    }, apiKey: "t7eqx9nyehld0fibzbgtu06aax2f3beil1q091d12j97cmfl", init: {
                                                        selector: "textarea",
                                                        height: 100,
                                                        theme: "modern",
                                                        plugins: "print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help",
                                                        toolbar1: "fontsizeselect formatselect | bold italic strikethrough forecolor backcolor | link blockquote | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat",
                                                        fontsize_formats: "10pt 11pt 12pt 14pt 16pt 18pt 20pt 24pt 26pt 28pt 36pt 48pt 72pt"
                                                    } }))))))))))));
    };
    return DetailSche;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resDetailSche: storeState.reSource.resDetailSche,
    resUpdateSche: storeState.reSource.resUpdateSche
}); };
var mapDispatchToProps = {
    reDetailSche: reDetailSche,
    reUpdateSche: reUpdateSche,
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailSche);
//# sourceMappingURL=detailSche.js.map