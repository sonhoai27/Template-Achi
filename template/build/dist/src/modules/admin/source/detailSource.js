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
import { Editor } from "@tinymce/tinymce-react";
import { connect } from "react-redux";
import { reShowPhotoApp, reSetCurrentEditorPhoto } from "../../../reducers/init";
import { reListUI } from "../ui/reUI";
// declare var $: any;
import { reUpdateSource, reDetailSource } from "./reSource";
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";
var DetailSource = /** @class */ (function (_super) {
    __extends(DetailSource, _super);
    function DetailSource(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListUI = function () {
            if (_this.props.resListUI) {
                return _this.props.resListUI.map(function (element) {
                    return (React.createElement("option", { selected: _this.props.resDetailSource.source_id_ui === element.ui_id
                            ? true
                            : false, value: element.ui_id }, element.ui_name));
                });
            }
            return "";
        };
        _this.saveSource = function () {
            // const tempDomImage: any = document.getElementById('img-cover-blog-preview')
            // this.props.reAddSource({
            //   ...this.state.source,
            //   source_alias: alias(this.state.source.source_title),
            //   source_cover: tempDomImage.src
            // })
        };
        _this.onChange = function (e) {
            var _a;
            var name = e.target.name;
            var value = e.target.value;
            // @ts-ignore
            _this.setState({
                source: __assign({}, _this.state.source, (_a = {}, _a[name] = value, _a))
            });
        };
        _this.state = {
            source: {
                source_title: "",
                source_promo: "",
                source_content: "",
                source_id_ui: 0,
                source_status: 0
            }
        };
        return _this;
    }
    DetailSource.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.resDetailSource != this.props.resDetailSource) {
            this.setState({
                source: {
                    source_title: nextProps.resDetailSource.source_title,
                    source_promo: nextProps.resDetailSource.source_promo,
                    source_content: nextProps.resDetailSource.source_content,
                    source_id_ui: nextProps.resDetailSource.source_id_ui,
                    source_status: nextProps.resDetailSource.source_status
                }
            });
        }
    };
    DetailSource.prototype.componentDidMount = function () {
        this.props.reListUI();
        this.props.reDetailSource(this.props.match.params.id);
    };
    DetailSource.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-12" },
                React.createElement("div", { className: "panel" },
                    React.createElement("div", { className: "panel-toolbar" },
                        React.createElement("div", { className: "panel-heading", style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            } },
                            React.createElement("h3", null, "Th\u00F4ng tin kh\u00F3a h\u1ECDc"),
                            React.createElement(Link, { to: BASEURLADMIN + 'source/list-sche/' + this.props.match.params.id },
                                React.createElement("div", { style: {
                                        marginLeft: 32,
                                        marginRight: 32
                                    }, className: "btn btn-sm btn-primary" }, "Th\u1EDDi kho\u00E1 bi\u1EC3u")),
                            React.createElement(Link, { to: BASEURLADMIN + 'source/ui-source/' + this.state.source.source_id_ui + '/' + this.props.match.params.id },
                                React.createElement("div", { className: "btn btn-sm btn-primary" }, "Landing Page"))),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement("div", { onClick: this.saveSource, className: "btn btn-sm btn-info" }, "L\u01B0u"))),
                    React.createElement("div", { className: "content" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-9" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " Ti\u00EAu \u0111\u1EC1")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: function (e) { return _this.onChange(e); }, name: "source_title", type: "text", className: "form-control", value: this.state.source.source_title }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " T\u00F3m t\u1EAFt")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: function (e) { return _this.onChange(e); }, type: "text", name: "source_promo", className: "form-control", value: this.state.source.source_promo }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement(Editor, { initialValue: this.state.source.source_content, onChange: function (e) {
                                                // @ts-ignore
                                                _this.setState({
                                                    source: __assign({}, _this.state.source, { source_content: e.level.content })
                                                });
                                            }, apiKey: "t7eqx9nyehld0fibzbgtu06aax2f3beil1q091d12j97cmfl", init: {
                                                selector: "textarea",
                                                height: 500,
                                                theme: "modern",
                                                image_advtab: true,
                                                plugins: "print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount tinymcespellchecker a11ychecker imagetools mediaembed  linkchecker contextmenu colorpicker textpattern help",
                                                toolbar1: "fontsizeselect formatselect | bold italic strikethrough forecolor backcolor | link addImage blockquote | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat",
                                                fontsize_formats: "10pt 11pt 12pt 14pt 16pt 18pt 20pt 24pt 26pt 28pt 36pt 48pt 72pt",
                                                setup: function (editor) {
                                                    editor.addButton("addImage", {
                                                        icon: "image",
                                                        tooltip: "Add Image",
                                                        onclick: function () {
                                                            _this.props.reShowPhotoApp(true);
                                                            _this.props.reSetCurrentEditorPhoto(editor);
                                                        }
                                                    });
                                                }
                                            } })))),
                            React.createElement("div", { className: "col-sm-3" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "Giao di\u1EC7n"),
                                    React.createElement("div", { className: "col-sm-12" },
                                        React.createElement("select", { onChange: function (e) { return _this.onChange(e); }, name: "source_id_ui", className: "form-control" },
                                            React.createElement("option", null, "Ch\u1ECDn"),
                                            this.renderListUI()))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "Tr\u1EA1ng th\u00E1i"),
                                    React.createElement("div", { className: "col-sm-12" },
                                        React.createElement("select", { onChange: function (e) { return _this.onChange(e); }, name: "source_status", className: "form-control" },
                                            React.createElement("option", null, "Ch\u1ECDn"),
                                            React.createElement("option", { selected: this.props.resDetailSource.source_status == 0
                                                    ? true
                                                    : false, value: "0" }, "Hi\u1EC7n"),
                                            React.createElement("option", { selected: this.props.resDetailSource.source_status == 1
                                                    ? true
                                                    : false, value: "1" }, "\u1EA8n")))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "H\u00ECnh cover"),
                                    React.createElement("div", { onClick: function () {
                                            _this.props.reShowPhotoApp(true);
                                            _this.props.reSetCurrentEditorPhoto("img-cover-blog-preview");
                                        }, className: "col-sm-12 cover-blog" },
                                        React.createElement("i", { className: "ti-upload" }),
                                        React.createElement("img", { id: "img-cover-blog-preview", src: this.props.resDetailSource.source_cover, className: "img-responsive" }))))))))));
    };
    return DetailSource;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListUI: storeState.reUI.resListUI,
    resUpdateSource: storeState.reSource.resUpdateSource,
    resDetailSource: storeState.reSource.resDetailSource
}); };
var mapDispatchToProps = {
    reSetCurrentEditorPhoto: reSetCurrentEditorPhoto,
    reShowPhotoApp: reShowPhotoApp,
    reListUI: reListUI,
    reUpdateSource: reUpdateSource,
    reDetailSource: reDetailSource
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailSource);
//# sourceMappingURL=detailSource.js.map