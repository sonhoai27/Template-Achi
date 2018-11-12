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
import { reDetailSource, reUpdateSource } from "../source/reSource";
import { connect } from "react-redux";
import { reIsDanger, reIsSuccess, reSetCurrentEditorPhoto, reShowPhotoApp } from "../../../reducers/init";
import { alias } from "../../../utils/alias";
import { Editor } from "@tinymce/tinymce-react";
import { reListUIForSource } from "../ui/reUI";
import AddVideo from "./modal/AddVideo";
import { apiListVideoSource } from "./reVideoSource";
import UpdateVideo from "./modal/UpdateVideo";
var VideoSource = /** @class */ (function (_super) {
    __extends(VideoSource, _super);
    function VideoSource(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListUI = function () {
            if (_this.props.resListUIForSource) {
                return _this.props.resListUIForSource.map(function (element) {
                    return (React.createElement("option", { selected: _this.props.resDetailSource.source_id_ui === element.ui_id
                            ? true
                            : false, value: element.ui_id }, element.ui_name));
                });
            }
            return "";
        };
        _this.saveSource = function () {
            var tempDomImage = document.getElementById('img-cover-blog-preview');
            var tempDomImageBanner = document.getElementById('img-banner-source');
            _this.props.reUpdateSource(__assign({}, _this.state.source, { source_alias: alias(_this.state.source.source_title), source_cover: tempDomImage.src, source_banner: tempDomImageBanner.src }), _this.props.match.params.idSource);
        };
        _this.onChange = function (e) {
            var _a;
            var name = e.target.name;
            var value = e.target.value;
            _this.setState({
                source: __assign({}, _this.state.source, (_a = {}, _a[name] = value, _a))
            });
        };
        _this.renderListVideoSource = function () {
            if (_this.props.resListVideoSource.list) {
                return _this.props.resListVideoSource.list.map(function (element) {
                    return (React.createElement("li", { key: element.source_video_id, style: { marginBottom: 32 } },
                        React.createElement("h4", null,
                            React.createElement("b", null, element.source_video_name)),
                        React.createElement("div", null,
                            React.createElement("div", { onClick: function () {
                                    _this.setState({
                                        currentVideo: element
                                    }, function () {
                                        _this.setState({
                                            isShowingUpdateVideo: !_this.state.isShowingUpdateVideo
                                        });
                                    });
                                }, className: "btn btn-xs btn-info", style: { marginRight: 8 } }, "S\u1EEDa"),
                            React.createElement("div", { className: "btn btn-xs btn-danger" }, "X\u00F3a"))));
                });
            }
            return React.createElement("h4", null, "Ch\u01B0a c\u00F3");
        };
        _this.state = {
            source: {
                source_title: "",
                source_promo: "",
                source_content: "",
                source_id_ui: 0,
                source_status: 0,
                source_banner: "",
                source_is_video: 0,
                source_is_page: 0,
                source_page_url: ""
            },
            isShowingAddVideo: false,
            isShowingUpdateVideo: false,
            currentVideo: {}
        };
        return _this;
    }
    VideoSource.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (nextProps.resDetailSource != this.props.resDetailSource) {
            this.setState({
                source: {
                    source_title: nextProps.resDetailSource.source_title,
                    source_promo: nextProps.resDetailSource.source_promo,
                    source_content: nextProps.resDetailSource.source_content,
                    source_id_ui: nextProps.resDetailSource.source_id_ui,
                    source_status: nextProps.resDetailSource.source_status,
                    source_banner: nextProps.resDetailSource.source_banner,
                    source_is_video: nextProps.resDetailSource.source_is_video,
                    source_is_page: nextProps.resDetailSource.source_is_page,
                    source_page_url: nextProps.resDetailSource.source_page_url
                }
            });
        }
        if (this.props.resUpdateSource != nextProps.resUpdateSource) {
            if (nextProps.resUpdateSource.status === 200) {
                this.props.reIsSuccess(true);
                setTimeout(function () {
                    _this.props.reIsSuccess(false);
                    _this.props.reDetailSource(_this.props.match.params.idSource);
                }, 2000);
            }
            else {
                this.props.reIsDanger(true);
                setTimeout(function () {
                    _this.props.reIsDanger(false);
                    _this.props.reDetailSource(_this.props.match.params.idSource);
                }, 2000);
            }
        }
    };
    VideoSource.prototype.componentDidUpdate = function (preProps) {
    };
    VideoSource.prototype.componentDidMount = function () {
        this.props.reListUIForSource();
        this.props.reDetailSource(this.props.match.params.idSource);
        this.props.apiListVideoSource(this.props.match.params.idSource);
    };
    VideoSource.prototype.render = function () {
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
                            React.createElement("div", { onClick: function () {
                                    _this.setState({
                                        isShowingAddVideo: !_this.state.isShowingAddVideo
                                    });
                                }, style: {
                                    marginLeft: 32,
                                    marginRight: 32
                                }, className: "btn btn-sm btn-primary" }, "Th\u00EAm video v\u00E0o kh\u00F3a h\u1ECDc")),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement("div", { onClick: this.saveSource, className: "btn btn-sm btn-info" }, "C\u1EADp nh\u1EADt th\u00F4ng tin"))),
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
                                                if (e.level.content === null || e.level.content === "") {
                                                    var temp_1 = "";
                                                    (e.level.fragments).forEach(function (element) {
                                                        temp_1 += element;
                                                    });
                                                    _this.setState({
                                                        source: __assign({}, _this.state.source, { source_content: temp_1 })
                                                    });
                                                }
                                                else {
                                                    _this.setState({
                                                        source: __assign({}, _this.state.source, { source_content: e.level.content })
                                                    });
                                                }
                                            }, apiKey: "t7eqx9nyehld0fibzbgtu06aax2f3beil1q091d12j97cmfl", init: {
                                                selector: "textarea",
                                                height: 300,
                                                theme: "modern",
                                                image_advtab: true,
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
                                            } })),
                                    React.createElement("div", { className: "col-xs-12" },
                                        React.createElement("h2", { style: { marginBottom: 32, marginTop: 64 } }, "Danh s\u00E1ch video c\u1EE7a kh\u00F3a h\u1ECDc."),
                                        React.createElement("ul", { className: 'list-video-source', style: { listStyle: "none", padding: 0 } }, this.renderListVideoSource())))),
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
                                    React.createElement("label", { className: "col-sm-12" }, "Lo\u1EA1i kh\u00F3a h\u1ECDc"),
                                    React.createElement("div", { className: "col-sm-12" },
                                        React.createElement("select", { onChange: function (e) { return _this.onChange(e); }, name: "source_is_video", className: "form-control" },
                                            React.createElement("option", null, "Ch\u1ECDn"),
                                            React.createElement("option", { value: '0', selected: this.state.source.source_is_video == 0 ? true : false }, "H\u1ECDc offline"),
                                            React.createElement("option", { value: '1', selected: this.state.source.source_is_video == 1 ? true : false }, "Video online")))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "H\u00ECnh cover"),
                                    React.createElement("div", { onClick: function () {
                                            _this.props.reShowPhotoApp(true);
                                            _this.props.reSetCurrentEditorPhoto("img-cover-blog-preview");
                                        }, className: "col-sm-12 cover-blog" },
                                        React.createElement("i", { className: "ti-upload" }),
                                        React.createElement("img", { id: "img-cover-blog-preview", src: this.props.resDetailSource.source_cover, className: "img-responsive" }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "Banner kh\u00F3a h\u1ECDc"),
                                    React.createElement("div", { onClick: function () {
                                            _this.props.reShowPhotoApp(true);
                                            _this.props.reSetCurrentEditorPhoto("img-banner-source");
                                        }, className: "col-sm-12 cover-blog" },
                                        React.createElement("i", { className: "ti-upload" }),
                                        React.createElement("img", { id: "img-banner-source", src: this.props.resDetailSource.source_banner, className: "img-responsive" }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "L\u00E0 trang ri\u00EAng"),
                                    React.createElement("div", { className: "col-sm-12" },
                                        React.createElement("select", { onChange: function (e) { return _this.onChange(e); }, name: "source_is_page", className: "form-control" },
                                            React.createElement("option", null, "Ch\u1ECDn"),
                                            React.createElement("option", { value: '0', selected: this.state.source.source_is_page == 0 ? true : false }, "Kh\u00F4ng"),
                                            React.createElement("option", { value: '1', selected: this.state.source.source_is_page == 1 ? true : false }, "C\u00F3")))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "N\u1EBFu l\u00E0 Page th\u00EAm \u0111\u1ECBa ch\u1EC9"),
                                    React.createElement("div", { className: "col-sm-12" },
                                        React.createElement("input", { onChange: function (e) { return _this.onChange(e); }, type: "text", name: "source_page_url", className: "form-control", defaultValue: this.state.source.source_page_url })))))))),
            this.state.isShowingAddVideo ? React.createElement(AddVideo, { showHide: function () {
                    _this.setState({
                        isShowingAddVideo: !_this.state.isShowingAddVideo
                    });
                }, idSource: this.props.match.params.idSource }) : '',
            this.state.isShowingUpdateVideo ? React.createElement(UpdateVideo, { video: this.state.currentVideo, showHide: function () {
                    _this.setState({
                        isShowingUpdateVideo: !_this.state.isShowingUpdateVideo
                    });
                }, idSource: this.props.match.params.idSource }) : ''));
    };
    return VideoSource;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListUIForSource: storeState.reUI.resListUIForSource,
    resUpdateSource: storeState.reSource.resUpdateSource,
    resDetailSource: storeState.reSource.resDetailSource,
    resListVideoSource: storeState.reVideoSource.resListVideoSource
}); };
var mapDispatchToProps = {
    reSetCurrentEditorPhoto: reSetCurrentEditorPhoto,
    reShowPhotoApp: reShowPhotoApp,
    reListUIForSource: reListUIForSource,
    reUpdateSource: reUpdateSource,
    reDetailSource: reDetailSource,
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess,
    apiListVideoSource: apiListVideoSource
};
export default connect(mapStateToProps, mapDispatchToProps)(VideoSource);
//# sourceMappingURL=VideoSource.js.map