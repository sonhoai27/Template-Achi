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
import { reSetCurrentEditorPhoto, reShowPhotoApp } from "../../../reducers/init";
import { reDetailGift, reUpdateGift } from "./reGift";
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
            var temDom = document.getElementById('img-cover-blog-preview');
            var tempGift = _this.state.gift;
            delete tempGift.gift_id;
            _this.props.reUpdateGift(__assign({}, tempGift, { gift_cover: temDom.src }), _this.props.match.params.idGift);
        };
        _this.state = {
            gift: {
                gift_id: 0,
                gift_active: 0,
                gift_cover: '',
                gift_name: '',
                gift_promo: '',
                gift_uri_file: ''
            }
        };
        return _this;
    }
    GiftDetail.prototype.componentDidUpdate = function (preProps) {
        if (preProps.resDetailGift != this.props.resDetailGift) {
            this.setState({
                gift: {
                    gift_id: this.props.resDetailGift.list.gift_id,
                    gift_active: this.props.resDetailGift.list.gift_active,
                    gift_cover: this.props.resDetailGift.list.gift_cover,
                    gift_name: this.props.resDetailGift.list.gift_name,
                    gift_promo: this.props.resDetailGift.list.gift_promo,
                    gift_uri_file: this.props.resDetailGift.list.gift_uri_file
                }
            });
        }
    };
    GiftDetail.prototype.componentDidMount = function () {
        this.props.reDetailGift(this.props.match.params.idGift);
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
                                                selector: "textarea",
                                                spellchecker_language: 'vi-VN',
                                                height: 500,
                                                theme: "modern",
                                                plugins: "print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount tinymcespellchecker a11ychecker imagetools mediaembed  linkchecker contextmenu colorpicker textpattern help",
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
                                            } })))),
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
                                            _this.props.reSetCurrentEditorPhoto('img-cover-blog-preview');
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
    reUpdateGift: reUpdateGift
};
export default connect(mapStateToProps, mapDispatchToProps)(GiftDetail);
//# sourceMappingURL=detail.js.map