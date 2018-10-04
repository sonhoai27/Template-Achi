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
import { reIsSuccess, reIsDanger, reIsLoading } from "../../../reducers/init";
import { reListGift, reListContact, reSendGift } from "./reGift";
import { Editor } from "@tinymce/tinymce-react";
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';
var ModalSendGift = /** @class */ (function (_super) {
    __extends(ModalSendGift, _super);
    function ModalSendGift(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListGifts = function () {
            if (_this.props.resListGift.list) {
                return _this.props.resListGift.list.map(function (element) {
                    return (React.createElement("option", { value: element.gift_uri_file }, element.gift_name));
                });
            }
            return null;
        };
        _this.options = function () {
            if (_this.props.resListContact.list) {
                return _this.props.resListContact.list.map(function (item) {
                    return { value: item.email_email, label: item.email_email, name: item.email_name };
                });
            }
            return [];
        };
        _this.send = function () {
            _this.props.reIsLoading(!_this.props.isLoading);
            _this.props.reSendGift({
                listEmails: _this.state.listEmail,
                content: _this.state.content,
                name: _this.state.name
            });
        };
        _this.state = {
            listEmail: [],
            content: "",
            editor: {},
            name: ''
        };
        return _this;
    }
    ModalSendGift.prototype.componentDidMount = function () {
        this.props.reListContact();
    };
    ModalSendGift.prototype.componentDidUpdate = function (preProps) {
        var _this = this;
        if (this.props.resSendGift != preProps.resSendGift) {
            console.log(this.props.resSendGift.status);
            if (this.props.resSendGift.status === 200) {
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
                                            React.createElement("label", { className: "col-sm-12" }, "Danh s\u00E1ch email"),
                                            React.createElement("div", { className: "col-sm-12" },
                                                React.createElement(Select, { closeMenuOnSelect: false, components: makeAnimated(), isMulti: true, onChange: function (item) {
                                                        _this.setState({
                                                            listEmail: item
                                                        });
                                                    }, options: this.options() }))),
                                        React.createElement("div", { className: "form-group col-sm-6" },
                                            React.createElement("label", { className: "col-sm-12" }, "Danh s\u00E1ch qu\u00E0"),
                                            React.createElement("div", { className: "col-sm-12" },
                                                React.createElement("select", { onChange: function (e) {
                                                        _this.state.editor.insertContent("<a href=\"" + e.target.value + ("\">" + e.target.textContent + "</a>"));
                                                    }, className: "form-control" },
                                                    React.createElement("option", null, "Ch\u1ECDn qu\u00E0"),
                                                    this.renderListGifts()))),
                                        React.createElement("div", { className: "form-group col-sm-6" },
                                            React.createElement("label", { className: "col-sm-12" }, "Ti\u00EAu \u0111\u1EC1"),
                                            React.createElement("div", { className: "col-sm-12" },
                                                React.createElement("input", { className: "form-control", onChange: function (e) {
                                                        _this.setState({
                                                            name: e.target.value
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
                                                        toolbar1: "fontsizeselect formatselect | bold italic strikethrough forecolor backcolor | link blockquote | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat",
                                                        fontsize_formats: "10pt 11pt 12pt 14pt 16pt 18pt 20pt 24pt 26pt 28pt 36pt 48pt 72pt",
                                                        setup: function (editor) {
                                                            _this.setState({
                                                                editor: editor
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
    resSendGift: storeState.reGift.resSendGift,
    resListContact: storeState.reGift.resListContact,
    resListGift: storeState.reGift.resListGift,
    isLoading: storeState.reInit.isLoading
}); };
var mapDispatchToProps = {
    reListGift: reListGift,
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess,
    reListContact: reListContact,
    reSendGift: reSendGift,
    reIsLoading: reIsLoading
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalSendGift);
//# sourceMappingURL=modalSendGift.js.map