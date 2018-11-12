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
import { reSetCurrentEditorPhoto, reShowPhotoApp, reIsDanger, reIsSuccess } from "../../../reducers/init";
import { reDetailGift, reUpdateGift } from "./reGift";
import { alias } from "./../../../../build/dist/src/utils/alias";
import { RESOURCE } from "../../../config/const";
var GiftDetail = /** @class */ (function (_super) {
    __extends(GiftDetail, _super);
    function GiftDetail(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (e) {
            var _a;
            _this.setState({
                gift: __assign({}, _this.state.gift, (_a = {}, _a[e.target.name] = e.target.value, _a))
            });
        };
        _this.updateGift = function () {
            var temDom = document.getElementById("img-cover-blog-preview");
            var tempGift = _this.state.gift;
            var data = CKEDITOR.instances.editor1.getData();
            delete tempGift.gift_id;
            _this.props.reUpdateGift(__assign({}, tempGift, { gift_cover: temDom.src, gift_alias: alias(_this.state.gift.gift_name), gift_content: data }), _this.props.match.params.idGift);
        };
        _this.state = {
            gift: {
                gift_id: 0,
                gift_active: 0,
                gift_cover: "",
                gift_name: "",
                gift_promo: "",
                gift_uri_file: "",
                gift_alias: "",
                gift_content: ""
            }
        };
        return _this;
    }
    GiftDetail.prototype.componentDidUpdate = function (preProps) {
        var _this = this;
        if (preProps.resDetailGift != this.props.resDetailGift) {
            this.setState({
                gift: {
                    gift_id: this.props.resDetailGift.list.gift_id,
                    gift_active: this.props.resDetailGift.list.gift_active,
                    gift_cover: this.props.resDetailGift.list.gift_cover,
                    gift_name: this.props.resDetailGift.list.gift_name,
                    gift_promo: this.props.resDetailGift.list.gift_promo,
                    gift_uri_file: this.props.resDetailGift.list.gift_uri_file,
                    gift_alias: this.props.resDetailGift.list.gift_alias,
                    gift_content: this.props.resDetailGift.list.gift_content
                }
            });
        }
        if (this.props.resUpdateGift != preProps.resUpdateGift) {
            if (this.props.resUpdateGift.status === 200) {
                this.props.reIsSuccess(true);
                setTimeout(function () {
                    _this.props.reIsSuccess(false);
                    _this.props.reDetailGift(_this.props.match.params.idGift);
                }, 2000);
            }
            else {
                this.props.reIsDanger(true);
                setTimeout(function () {
                    _this.props.reIsDanger(false);
                    _this.props.reDetailGift(_this.props.match.params.idGift);
                }, 2000);
            }
        }
    };
    GiftDetail.prototype.componentDidMount = function () {
        var _this = this;
        this.props.reDetailGift(this.props.match.params.idGift);
        try {
            CKEDITOR.plugins.add("insertimage", {
                init: function (editor) {
                    editor.addCommand("insertImage", {
                        exec: function (editor) {
                            _this.props.reShowPhotoApp(true);
                            _this.props.reSetCurrentEditorPhoto({
                                type: "ck",
                                editor: editor
                            });
                            // var timestamp = new Date();
                            // editor.insertHtml( 'The current date and time is: <em>' + timestamp.toString() + '</em>' );
                        }
                    });
                    editor.ui.addButton("insertimage", {
                        label: "Insert Image",
                        command: "insertImage",
                        icon: RESOURCE + "images/icon/picture-24.png"
                    });
                }
            });
        }
        catch (e) { }
        CKEDITOR.plugins.addExternal("fontawesome", RESOURCE + "ckeditor/plugins/fontawesome/", "plugin.js");
        CKEDITOR.replace("editor1", {
            toolbar: [
                {
                    name: "document",
                    groups: ["mode", "document", "doctools"],
                    items: ["Source"]
                },
                {
                    name: "basicstyles",
                    groups: ["basicstyles", "cleanup"],
                    items: [
                        "Bold",
                        "Italic",
                        "Underline",
                        "Strike",
                        "Subscript",
                        "Superscript",
                        "-",
                        "CopyFormatting",
                        "RemoveFormat"
                    ]
                },
                { name: "styles", items: ["Styles", "Format", "Font", "FontSize"] },
                { name: "colors", items: ["TextColor", "BGColor"] },
                {
                    name: "paragraph",
                    groups: ["list", "indent", "blocks", "align", "bidi"],
                    items: [
                        "NumberedList",
                        "BulletedList",
                        "-",
                        "Outdent",
                        "Indent",
                        "-",
                        "Blockquote",
                        "CreateDiv",
                        "-",
                        "JustifyLeft",
                        "JustifyCenter",
                        "JustifyRight",
                        "JustifyBlock",
                        "-",
                        "BidiLtr",
                        "BidiRtl",
                        "Language"
                    ]
                },
                { name: "links", items: ["Link", "Unlink", "Anchor"] },
                {
                    name: "insert",
                    items: [
                        "Table",
                        "HorizontalRule",
                        "Smiley",
                        "SpecialChar",
                        "PageBreak",
                        "Iframe"
                    ]
                },
                { name: "FontAwesome", items: ["FontAwesome", "insertimage", "Image"] }
            ],
            extraAllowedContent: "i;span;ul;li;table;td;style;*[id];*(*);*{*}",
            allowedContent: true,
            extraPlugins: "fontawesome,insertimage",
            htmlEncodeOutput: false,
            entities: false,
            contentsCss: RESOURCE + "ckeditor/plugins/fontawesome/css/font-awesome.min.css"
        });
    };
    GiftDetail.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-12" },
                React.createElement("div", { className: "panel" },
                    React.createElement("div", { className: "panel-toolbar" },
                        React.createElement("div", { className: "panel-heading" }, "Th\u00EAm qu\u00E0 t\u1EB7ng"),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement("div", { className: "btn btn-xs btn-info", onClick: this.updateGift }, "L\u01B0u"))),
                    React.createElement("div", { className: "content" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-9" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " T\u00EAn")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, name: "gift_name", type: "text", className: "form-control", defaultValue: this.state.gift.gift_name }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " Link qu\u00E0 t\u1EB7ng")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { defaultValue: this.state.gift.gift_uri_file, onChange: this.onChange, name: "gift_uri_file", type: "text", className: "form-control" }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " T\u00F3m t\u1EAFt")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement(Editor, { initialValue: this.state.gift.gift_promo, onChange: function (e) {
                                                var html = e.level.content;
                                                _this.setState({
                                                    gift: __assign({}, _this.state.gift, { gift_promo: html })
                                                });
                                            }, apiKey: "t7eqx9nyehld0fibzbgtu06aax2f3beil1q091d12j97cmfl", init: {
                                                mode: "exact",
                                                spellchecker_language: "vi-VN",
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
                                                            alert("KAKKA");
                                                        }
                                                    });
                                                }
                                            } }))),
                                React.createElement("div", { className: "form-group", style: { display: "inline-block", width: "100%" } },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " N\u1ED9i dung")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("textarea", { cols: 80, id: "editor1", name: "editor1", rows: 10, value: this.state.gift.gift_content })))),
                            React.createElement("div", { className: "col-sm-3" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "T\u1EB7ng? - m\u1EB7c \u0111\u1ECBnh l\u00E0 kh\u00F4ng t\u1EB7ng."),
                                    React.createElement("div", { className: "col-sm-12" },
                                        React.createElement("select", { className: "form-control", onChange: this.onChange, name: "gift_active" },
                                            React.createElement("option", null, "Ch\u1ECDn"),
                                            React.createElement("option", { value: 0, selected: this.state.gift.gift_active == 0 ? true : false }, "Kh\u00F4ng"),
                                            React.createElement("option", { value: 1, selected: this.state.gift.gift_active == 1 ? true : false }, "C\u00F3")))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "H\u00ECnh cover"),
                                    React.createElement("div", { className: "col-sm-12 cover-blog", onClick: function () {
                                            _this.props.reShowPhotoApp(true);
                                            _this.props.reSetCurrentEditorPhoto("img-cover-blog-preview");
                                        } },
                                        React.createElement("i", { className: "ti-upload" }),
                                        React.createElement("img", { id: "img-cover-blog-preview", className: "img-responsive", src: this.state.gift.gift_cover }))))))))));
    };
    return GiftDetail;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resDetailGift: storeState.reGift.resDetailGift,
    resUpdateGift: storeState.reGift.resUpdateGift
}); };
var mapDispatchToProps = {
    reSetCurrentEditorPhoto: reSetCurrentEditorPhoto,
    reShowPhotoApp: reShowPhotoApp,
    reDetailGift: reDetailGift,
    reUpdateGift: reUpdateGift,
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess
};
export default connect(mapStateToProps, mapDispatchToProps)(GiftDetail);
//# sourceMappingURL=detail.js.map