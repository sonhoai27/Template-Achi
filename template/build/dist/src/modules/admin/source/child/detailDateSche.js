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
import { Editor } from "@tinymce/tinymce-react";
import { reUpdateDateSche, reListDateSche } from "../reSource";
var DetailDateSche = /** @class */ (function (_super) {
    __extends(DetailDateSche, _super);
    function DetailDateSche(props) {
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
        _this.updateDateSche = function () {
            _this.props.reUpdateDateSche(_this.state, _this.props.dateSche.date_source_id);
        };
        _this.state = {
            date_source_time: _this.props.dateSche.date_source_time,
            date_source_stt: _this.props.dateSche.date_source_stt
        };
        console.log(_this.props.dateSche);
        return _this;
    }
    DetailDateSche.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.resUpdateDateSche != this.props.resUpdateDateSche) {
            if (nextProps.resUpdateDateSche.status === 200) {
                alert('Ok');
                this.props.reListDateSche(this.props.dateSche.idSche);
            }
        }
    };
    DetailDateSche.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { id: "update-date-sche", className: "modal fade in", role: "dialog", style: { display: 'block' } },
            React.createElement("div", { className: "modal-dialog" },
                React.createElement("div", { className: "modal-content" },
                    React.createElement("div", { className: "modal-header" },
                        React.createElement("button", { type: "button", className: "close", onClick: this.props.onclick }, "\u00D7"),
                        React.createElement("h4", { className: "modal-title" }, "S\u1EEDa th\u1EDDi gian")),
                    React.createElement("div", { className: "modal-body" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-xs-12" },
                                React.createElement("div", { className: "form-group", style: { display: 'inline-block', width: '100%' } },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " Th\u1EDDi gian")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement(Editor, { onChange: function (e) {
                                                _this.setState(__assign({}, _this.state, { date_source_time: e.level.content }));
                                            }, initialValue: this.state.date_source_time, apiKey: "t7eqx9nyehld0fibzbgtu06aax2f3beil1q091d12j97cmfl", init: {
                                                spellchecker_language: 'vi-VN',
                                                selector: "textarea",
                                                height: 100,
                                                theme: "modern",
                                                plugins: "print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount tinymcespellchecker a11ychecker imagetools mediaembed  linkchecker contextmenu colorpicker textpattern help",
                                                toolbar1: "fontsizeselect formatselect | bold italic strikethrough forecolor backcolor | link blockquote | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat",
                                                fontsize_formats: "10pt 11pt 12pt 14pt 16pt 18pt 20pt 24pt 26pt 28pt 36pt 48pt 72pt",
                                            } }))),
                                React.createElement("div", { className: "form-group", style: { marginTop: 16, display: 'inline-block', width: '100%' } },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " V\u1ECB tr\u00ED - \u0111\u1ED9 \u01B0u ti\u00EAn hi\u1EC3n th\u1ECB")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, type: "number", name: "date_source_stt", className: "form-control", value: this.state.date_source_stt })))))),
                    React.createElement("div", { className: "modal-footer" },
                        React.createElement("button", { onClick: this.updateDateSche, type: "button", className: "btn btn-primary" }, "L\u01B0u"))))));
    };
    return DetailDateSche;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resUpdateDateSche: storeState.reSource.resUpdateDateSche
}); };
var mapDispatchToProps = {
    reUpdateDateSche: reUpdateDateSche,
    reListDateSche: reListDateSche
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailDateSche);
//# sourceMappingURL=detailDateSche.js.map