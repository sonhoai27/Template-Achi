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
import { reDetailBlog, reUpdateBlog, reListAuthor, reListCategory, reListStatus } from "./reBlog";
import { alias } from './../../../utils/alias';
var BlogDetail = /** @class */ (function (_super) {
    __extends(BlogDetail, _super);
    function BlogDetail(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (e) {
            var _a;
            // @ts-ignore
            _this.setState((_a = {},
                _a[e.target.name] = e.target.value,
                _a));
        };
        _this.renderListAuthor = function () {
            if (_this.props.resListAuthor.list) {
                return _this.props.resListAuthor.list.map(function (element) {
                    return (React.createElement("option", { value: element.author_id, selected: element.author_id === _this.state.blog_id_author ? true : false }, element.author_name));
                });
            }
            return '';
        };
        _this.renderListCategory = function () {
            if (_this.props.resListCategory.list) {
                return _this.props.resListCategory.list.map(function (element) {
                    return (React.createElement("option", { value: element.category_id, selected: element.category_id === _this.state.blog_id_category ? true : false }, element.category_name));
                });
            }
            return '';
        };
        _this.renderListStatus = function () {
            if (_this.props.resListStatus.list) {
                return _this.props.resListStatus.list.map(function (element) {
                    return (React.createElement("option", { value: element.status_id, selected: element.status_id === _this.state.blog_id_status ? true : false }, element.status_name));
                });
            }
            return '';
        };
        _this.updateBlog = function () {
            var temp = document.getElementById('img-cover-blog-preview');
            _this.props.reUpdateBlog(__assign({}, _this.state, { blog_cover: temp.src, blog_alias: alias(_this.state.blog_title) }), _this.props.match.params.idBlog);
        };
        _this.state = {
            blog_id_category: 0,
            blog_id_author: 0,
            blog_title: '',
            blog_promo: '',
            blog_cover: '',
            blog_content: '',
            blog_id_status: 0
        };
        return _this;
    }
    BlogDetail.prototype.componentDidMount = function () {
        this.props.reDetailBlog(this.props.match.params.idBlog);
        this.props.reListAuthor();
        this.props.reListCategory();
        this.props.reListStatus();
    };
    BlogDetail.prototype.componentDidUpdate = function (preProps) {
        var _this = this;
        if (preProps.resDetailBlog != this.props.resDetailBlog) {
            this.setState({
                blog_id_category: this.props.resDetailBlog.list.blog_id_category,
                blog_id_author: this.props.resDetailBlog.list.blog_id_author,
                blog_title: this.props.resDetailBlog.list.blog_title,
                blog_promo: this.props.resDetailBlog.list.blog_promo,
                blog_cover: this.props.resDetailBlog.list.blog_cover,
                blog_content: this.props.resDetailBlog.list.blog_content,
                blog_id_status: this.props.resDetailBlog.list.blog_id_status
            });
        }
        if (preProps.resUpdateBlog != this.props.resUpdateBlog) {
            this.props.reDetailBlog(this.props.match.params.idBlog);
            if (this.props.resUpdateBlog.status === 200) {
                this.props.reIsSuccess(true);
                setTimeout(function () {
                    _this.props.reIsSuccess(false);
                }, 2000);
            }
            else {
                this.props.reIsDanger(true);
                setTimeout(function () {
                    _this.props.reIsDanger(false);
                }, 2000);
            }
        }
    };
    BlogDetail.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-12" },
                React.createElement("div", { className: "panel" },
                    React.createElement("div", { className: "panel-toolbar" },
                        React.createElement("div", { className: "panel-heading" }, "Th\u00EAm b\u00E0i vi\u1EBFt"),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement("div", { onClick: this.updateBlog, className: "btn btn-xs btn-info" }, "L\u01B0u"))),
                    React.createElement("div", { className: "content" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-9" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " Ti\u00EAu \u0111\u1EC1")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, type: "text", name: "blog_title", className: "form-control", defaultValue: this.state.blog_title }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " T\u00F3m t\u1EAFt")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, type: "text", name: "blog_promo", className: "form-control", defaultValue: this.state.blog_promo }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement(Editor, { initialValue: this.state.blog_content, onChange: function (e) {
                                                if (e.level.content === null || e.level.content === "") {
                                                    var temp_1 = "";
                                                    (e.level.fragments).forEach(function (element) {
                                                        temp_1 += element;
                                                    });
                                                    _this.setState(__assign({}, _this.state, { blog_content: temp_1 }));
                                                }
                                                else {
                                                    _this.setState(__assign({}, _this.state, { blog_content: e.level.content }));
                                                }
                                            }, apiKey: "t7eqx9nyehld0fibzbgtu06aax2f3beil1q091d12j97cmfl", init: {
                                                selector: "textarea",
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
                                    React.createElement("label", { className: "col-sm-12" }, "Tr\u1EA1ng th\u00E1i"),
                                    React.createElement("div", { className: "col-sm-12" },
                                        React.createElement("select", { onChange: this.onChange, name: "blog_id_status", className: "form-control" },
                                            React.createElement("option", null, "Ch\u1ECDn"),
                                            this.renderListStatus()))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "H\u00ECnh cover"),
                                    React.createElement("div", { className: "col-sm-12 cover-blog", onClick: function () {
                                            _this.props.reShowPhotoApp(true);
                                            _this.props.reSetCurrentEditorPhoto('img-cover-blog-preview');
                                        } },
                                        React.createElement("i", { className: "ti-upload" }),
                                        React.createElement("img", { id: "img-cover-blog-preview", className: "img-responsive", src: this.state.blog_cover }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "T\u00E1c gi\u1EA3"),
                                    React.createElement("div", { className: "col-sm-12" },
                                        React.createElement("select", { onChange: this.onChange, name: "blog_id_author", className: "form-control" },
                                            React.createElement("option", null, "Ch\u1ECDn"),
                                            this.renderListAuthor()))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "Danh m\u1EE5c"),
                                    React.createElement("div", { className: "col-sm-12" },
                                        React.createElement("select", { onChange: this.onChange, name: "blog_id_category", className: "form-control" },
                                            React.createElement("option", null, "Ch\u1ECDn"),
                                            this.renderListCategory()))))))))));
    };
    return BlogDetail;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListUI: storeState.reUI.resListUI,
    resAddSource: storeState.reSource.resAddSource,
    resDetailBlog: storeState.reBlog.resDetailBlog,
    resUpdateBlog: storeState.reBlog.resUpdateBlog,
    resListCategory: storeState.reBlog.resListCategory,
    resListAuthor: storeState.reBlog.resListAuthor,
    resListStatus: storeState.reBlog.resListStatus
}); };
var mapDispatchToProps = {
    reSetCurrentEditorPhoto: reSetCurrentEditorPhoto,
    reShowPhotoApp: reShowPhotoApp,
    reUpdateBlog: reUpdateBlog,
    reDetailBlog: reDetailBlog,
    reListCategory: reListCategory,
    reListAuthor: reListAuthor,
    reListStatus: reListStatus,
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess
};
export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);
//# sourceMappingURL=detail.js.map