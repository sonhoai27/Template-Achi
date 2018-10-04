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
import { reShowPhotoApp, reSetCurrentEditorPhoto, reIsDanger, reIsSuccess } from "../../../reducers/init";
import { reListUIForSource } from "../ui/reUI";
import { reAddSource } from "./reSource";
import { alias } from "../../../utils/alias";
var AddSource = /** @class */ (function (_super) {
    __extends(AddSource, _super);
    function AddSource(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListUI = function () {
            if (_this.props.resListUIForSource) {
                return _this.props.resListUIForSource.map((function (element) {
                    return (React.createElement("option", { value: element.ui_id }, element.ui_name));
                }));
            }
            return '';
        };
        _this.addSource = function () {
            var tempDomImage = document.getElementById('img-cover-blog-preview');
            var tempDomImageBanner = document.getElementById('img-banner-source');
            _this.props.reAddSource(__assign({}, _this.state.source, { source_alias: alias(_this.state.source.source_title), source_cover: tempDomImage.src, source_banner: tempDomImageBanner.src }));
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
                source_title: '',
                source_promo: '',
                source_content: '',
                source_id_ui: 0,
                source_status: 0,
                source_banner: "",
                source_is_video: 0,
                source_is_page: 0,
                source_page_url: ""
            }
        };
        return _this;
    }
    AddSource.prototype.componentDidMount = function () {
        this.props.reListUIForSource();
    };
    AddSource.prototype.componentDidUpdate = function (preProps) {
    };
    AddSource.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-12" },
                React.createElement("div", { className: "panel" },
                    React.createElement("div", { className: "panel-toolbar" },
                        React.createElement("div", { className: "panel-heading" }, "Th\u00EAm kh\u00F3a h\u1ECDc"),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement("div", { onClick: this.addSource, className: "btn btn-xs btn-info" }, "L\u01B0u"))),
                    React.createElement("div", { className: "content" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-9" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " Ti\u00EAu \u0111\u1EC1")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: function (e) { return _this.onChange(e); }, name: "source_title", type: "text", className: "form-control", placeholder: "Ti\u00EAu \u0111\u1EC1" }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " T\u00F3m t\u1EAFt")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: function (e) { return _this.onChange(e); }, type: "text", name: "source_promo", className: "form-control", placeholder: "T\u00F3m t\u1EAFt" }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement(Editor, { onChange: function (e) {
                                                // @ts-ignore
                                                _this.setState({
                                                    source: __assign({}, _this.state.source, { source_content: e.level.content })
                                                });
                                            }, apiKey: "t7eqx9nyehld0fibzbgtu06aax2f3beil1q091d12j97cmfl", init: {
                                                selector: "textarea",
                                                spellchecker_language: 'vi-VN',
                                                height: 500,
                                                theme: "modern",
                                                plugins: "print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help",
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
                                            React.createElement("option", { value: '0' }, "Hi\u1EC7n"),
                                            React.createElement("option", { value: '1' }, "\u1EA8n")))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "Lo\u1EA1i kh\u00F3a h\u1ECDc"),
                                    React.createElement("div", { className: "col-sm-12" },
                                        React.createElement("select", { onChange: function (e) { return _this.onChange(e); }, name: "source_is_video", className: "form-control" },
                                            React.createElement("option", null, "Ch\u1ECDn"),
                                            React.createElement("option", { value: '0' }, "H\u1ECDc offline"),
                                            React.createElement("option", { value: '1' }, "Video online")))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "H\u00ECnh cover"),
                                    React.createElement("div", { onClick: function () {
                                            _this.props.reShowPhotoApp(true);
                                            _this.props.reSetCurrentEditorPhoto('img-cover-blog-preview');
                                        }, className: "col-sm-12 cover-blog" },
                                        React.createElement("i", { className: "ti-upload" }),
                                        React.createElement("img", { id: "img-cover-blog-preview", className: "img-responsive" }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "H\u00ECnh Banner"),
                                    React.createElement("div", { onClick: function () {
                                            _this.props.reShowPhotoApp(true);
                                            _this.props.reSetCurrentEditorPhoto('img-banner-source');
                                        }, className: "col-sm-12 cover-blog" },
                                        React.createElement("i", { className: "ti-upload" }),
                                        React.createElement("img", { id: "img-banner-source", className: "img-responsive" }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "L\u00E0 trang ri\u00EAng"),
                                    React.createElement("div", { className: "col-sm-12" },
                                        React.createElement("select", { onChange: function (e) { return _this.onChange(e); }, name: "source_is_page", className: "form-control" },
                                            React.createElement("option", null, "Ch\u1ECDn"),
                                            React.createElement("option", { value: '0' }, "Kh\u00F4ng"),
                                            React.createElement("option", { value: '1' }, "C\u00F3")))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "N\u1EBFu l\u00E0 Page th\u00EAm \u0111\u1ECBa ch\u1EC9"),
                                    React.createElement("div", { className: "col-sm-12" },
                                        React.createElement("input", { onChange: function (e) { return _this.onChange(e); }, type: "text", name: "source_page_url", className: "form-control", placeholder: "\u0110\u1ECBa ch\u1EC9" }))))))))));
    };
    return AddSource;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListUIForSource: storeState.reUI.resListUIForSource,
    resAddSource: storeState.reSource.resAddSource
}); };
var mapDispatchToProps = {
    reSetCurrentEditorPhoto: reSetCurrentEditorPhoto,
    reShowPhotoApp: reShowPhotoApp,
    reListUIForSource: reListUIForSource,
    reAddSource: reAddSource,
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess
};
export default connect(mapStateToProps, mapDispatchToProps)(AddSource);
//# sourceMappingURL=addSource.js.map