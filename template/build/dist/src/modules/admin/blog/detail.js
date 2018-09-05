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
import { Editor } from "@tinymce/tinymce-react";
var BlogDetail = /** @class */ (function (_super) {
    __extends(BlogDetail, _super);
    function BlogDetail(props) {
        return _super.call(this, props) || this;
    }
    BlogDetail.prototype.render = function () {
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-12" },
                React.createElement("div", { className: "panel" },
                    React.createElement("div", { className: "panel-toolbar" },
                        React.createElement("div", { className: "panel-heading" }, "Th\u00EAm b\u00E0i vi\u1EBFt"),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement("div", { className: "btn btn-xs btn-info" }, "L\u01B0u"))),
                    React.createElement("div", { className: "content" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-9" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        "Default Text ",
                                        React.createElement("span", { className: "help" }, " Ti\u00EAu \u0111\u1EC1")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { type: "text", className: "form-control", defaultValue: "George deo..." }),
                                        " ")),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        "Default Text ",
                                        React.createElement("span", { className: "help" }, " T\u00F3m t\u1EAFt")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { type: "text", className: "form-control", defaultValue: "George deo..." }),
                                        " ")),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement(Editor, { apiKey: "t7eqx9nyehld0fibzbgtu06aax2f3beil1q091d12j97cmfl", init: {
                                                selector: "textarea",
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
                                    React.createElement("label", { className: "col-sm-12" }, "Tr\u1EA1ng th\u00E1i"),
                                    React.createElement("div", { className: "col-sm-12" },
                                        React.createElement("select", { className: "form-control" },
                                            React.createElement("option", null, "1"),
                                            React.createElement("option", null, "2"),
                                            React.createElement("option", null, "3"),
                                            React.createElement("option", null, "4"),
                                            React.createElement("option", null, "5")))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "H\u00ECnh cover"),
                                    React.createElement("div", { className: "col-sm-12 cover-blog" },
                                        React.createElement("i", { className: "ti-upload" }),
                                        React.createElement("img", { id: "img-cover-blog-preview" }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "T\u00E1c gi\u1EA3"),
                                    React.createElement("div", { className: "col-sm-12" },
                                        React.createElement("select", { className: "form-control" },
                                            React.createElement("option", null, "1"),
                                            React.createElement("option", null, "2"),
                                            React.createElement("option", null, "3"),
                                            React.createElement("option", null, "4"),
                                            React.createElement("option", null, "5")))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "Danh m\u1EE5c"),
                                    React.createElement("div", { className: "col-sm-12" },
                                        React.createElement("select", { className: "form-control" },
                                            React.createElement("option", null, "1"),
                                            React.createElement("option", null, "2"),
                                            React.createElement("option", null, "3"),
                                            React.createElement("option", null, "4"),
                                            React.createElement("option", null, "5")))))))))));
    };
    return BlogDetail;
}(React.Component));
export default BlogDetail;
//# sourceMappingURL=detail.js.map