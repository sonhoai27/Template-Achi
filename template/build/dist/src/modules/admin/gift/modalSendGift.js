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
import { reIsSuccess, reIsDanger, reIsLoading, reShowPhotoApp, reSetCurrentEditorPhoto } from "../../../reducers/init";
import { reListGift } from "./reGift";
import { Editor } from "@tinymce/tinymce-react";
import { reAddSendGift, reListCounter } from "./send-gift/reSendGift";
var ModalSendGift = /** @class */ (function (_super) {
    __extends(ModalSendGift, _super);
    function ModalSendGift(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListGifts = function () {
            if (_this.props.resListGift.list) {
                return _this.props.resListGift.list.map(function (element) {
                    return (React.createElement("option", { key: element.gift_uri_file, value: element.gift_uri_file }, element.gift_name));
                });
            }
            return null;
        };
        _this.options = function () {
            if (_this.props.resListCounter.list) {
                return _this.props.resListCounter.list.map(function (element) {
                    return (React.createElement("option", { key: element.send_gift_counter, value: element.send_gift_counter }, element.send_gift_counter));
                });
            }
            return null;
        };
        _this.send = function () {
            _this.props.reIsLoading(!_this.props.isLoading);
            _this.props.reAddSendGift({
                titleEmail: _this.state.titleEmail,
                contentEmail: _this.state.content
            }, _this.state.count);
        };
        _this.state = {
            content: "",
            editor: {},
            titleEmail: '',
            count: 0,
            nameGift: ""
        };
        return _this;
    }
    ModalSendGift.prototype.componentDidMount = function () {
        this.props.reListCounter();
    };
    ModalSendGift.prototype.componentDidUpdate = function (preProps) {
        var _this = this;
        if (this.props.resAddSendGift != preProps.resAddSendGift) {
            if (this.props.resAddSendGift.status === 200) {
                this.props.reIsSuccess(true);
                setTimeout(function () {
                    _this.props.reIsSuccess(false);
                    _this.props.reIsLoading(!_this.props.isLoading);
                    _this.props.isShowingModal();
                }, 2000);
            }
            else {
                this.props.reIsDanger(true);
                setTimeout(function () {
                    _this.props.reIsDanger(false);
                    _this.props.reIsLoading(!_this.props.isLoading);
                    _this.props.isShowingModal();
                }, 2000);
            }
        }
    };
    ModalSendGift.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { style: { display: "block", overflow: "auto" }, className: "modal fade in order-ebook", role: "dialog", "aria-hidden": "true" },
                React.createElement("div", { className: "modal-dialog modal-lg" },
                    React.createElement("div", { className: "modal-content" },
                        React.createElement("div", { className: "modal-header" },
                            React.createElement("button", { onClick: function () { return _this.props.isShowingModal(); }, type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true" }, "\u00D7"),
                            React.createElement("h4", { className: "modal-title" }, "G\u1EDFi qu\u00E0 t\u1EB7ng")),
                        React.createElement("div", { className: "modal-body" },
                            React.createElement("div", { className: "row" },
                                React.createElement("div", { className: "col-sm-12" },
                                    React.createElement("div", { className: "row" },
                                        React.createElement("div", { className: "form-group col-sm-12" },
                                            React.createElement("label", { className: "col-sm-12" }, "S\u1ED1 l\u1EA7n \u0111\u00E3 g\u1EDFi"),
                                            React.createElement("div", { className: "col-sm-12" },
                                                React.createElement("select", { className: 'form-control', onChange: function (e) {
                                                        _this.setState({
                                                            count: e.target.value
                                                        });
                                                    } },
                                                    React.createElement("option", null, "Ch\u1ECDn"),
                                                    this.options()))),
                                        React.createElement("div", { className: "form-group col-sm-6" },
                                            React.createElement("label", { className: "col-sm-12" }, "Danh s\u00E1ch qu\u00E0"),
                                            React.createElement("div", { className: "col-sm-12" },
                                                React.createElement("select", { onChange: function (e) {
                                                        var click = e.target.options;
                                                        _this.setState({
                                                            nameGift: click[click.selectedIndex].text
                                                        });
                                                        _this.state.editor.insertContent("<a href=\"" + e.target.value + ("\">" + click[click.selectedIndex].text + "</a>"));
                                                    }, className: "form-control" },
                                                    React.createElement("option", { value: '' }, "Ch\u1ECDn qu\u00E0"),
                                                    this.renderListGifts()))),
                                        React.createElement("div", { className: "form-group col-sm-6" },
                                            React.createElement("label", { className: "col-sm-12" }, "Ti\u00EAu \u0111\u1EC1"),
                                            React.createElement("div", { className: "col-sm-12" },
                                                React.createElement("input", { className: "form-control", onChange: function (e) {
                                                        _this.setState({
                                                            titleEmail: e.target.value
                                                        });
                                                    }, placeholder: "Ti\u00EAu \u0111\u1EC1" }))),
                                        React.createElement("div", { className: "form-group col-sm-12" },
                                            React.createElement("label", { className: "col-sm-12" }, "N\u1ED9i dung"),
                                            React.createElement("div", { className: "col-sm-12" },
                                                React.createElement(Editor, { onChange: function (e) {
                                                        if (e.level.content === null ||
                                                            e.level.content === "") {
                                                            var temp_1 = "";
                                                            e.level.fragments.forEach(function (element) {
                                                                temp_1 += element;
                                                            });
                                                            _this.setState({
                                                                content: temp_1
                                                            });
                                                        }
                                                        else {
                                                            _this.setState({
                                                                content: e.level.content
                                                            });
                                                        }
                                                    }, cloudChannel: "dev", apiKey: "t7eqx9nyehld0fibzbgtu06aax2f3beil1q091d12j97cmfl", init: {
                                                        selector: "textarea",
                                                        spellchecker_language: "vi-VN",
                                                        height: 500,
                                                        theme: "modern",
                                                        plugins: "print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help",
                                                        toolbar1: "fontsizeselect formatselect | addImage | bold italic strikethrough forecolor backcolor | link blockquote | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat",
                                                        fontsize_formats: "10pt 11pt 12pt 14pt 16pt 18pt 20pt 24pt 26pt 28pt 36pt 48pt 72pt",
                                                        setup: function (editor) {
                                                            _this.setState({
                                                                editor: editor
                                                            });
                                                            editor.addButton("addImage", {
                                                                icon: "image",
                                                                tooltip: "Add Image",
                                                                onclick: function () {
                                                                    _this.props.reShowPhotoApp(true);
                                                                    _this.props.reSetCurrentEditorPhoto(editor);
                                                                }
                                                            });
                                                        }
                                                    } }))))))),
                        React.createElement("div", { className: "modal-footer" },
                            React.createElement("button", { onClick: function () { return _this.props.isShowingModal(); }, type: "button", className: "btn btn-default waves-effect", "data-dismiss": "modal" }, "Tho\u00E1t"),
                            React.createElement("button", { type: "button", onClick: this.send, className: "btn btn-danger waves-effect waves-light" }, "G\u1EDFi qu\u00E0"))))),
            React.createElement("div", { className: "modal-backdrop fade in" })));
    };
    return ModalSendGift;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resAddSendGift: storeState.reSendGift.resAddSendGift,
    resListCounter: storeState.reSendGift.resListCounter,
    resListContact: storeState.reSendGift.resListContact,
    resListGift: storeState.reGift.resListGift,
    isLoading: storeState.reInit.isLoading
}); };
var mapDispatchToProps = {
    reListGift: reListGift,
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess,
    reIsLoading: reIsLoading,
    reAddSendGift: reAddSendGift,
    reListCounter: reListCounter,
    reSetCurrentEditorPhoto: reSetCurrentEditorPhoto,
    reShowPhotoApp: reShowPhotoApp,
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalSendGift);
//# sourceMappingURL=modalSendGift.js.map