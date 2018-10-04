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
import { reDetailVideo, reUpdateVideo } from "./reVideos";
import { reSetCurrentEditorPhoto, reShowPhotoApp, reIsSuccess, reIsDanger } from "../../../reducers/init";
var VideoDetail = /** @class */ (function (_super) {
    __extends(VideoDetail, _super);
    function VideoDetail(props) {
        var _this = _super.call(this, props) || this;
        _this.updateVideo = function () {
            var tempDom = document.getElementById('img-cover-blog-preview');
            _this.props.reUpdateVideo(__assign({}, _this.state.video, { video_cover: tempDom.src }), _this.state.video.video_id);
        };
        _this.onChange = function (e) {
            var _a;
            _this.setState({
                video: __assign({}, _this.state.video, (_a = {}, _a[e.target.name] = e.target.value, _a))
            });
        };
        _this.state = {
            video: {
                video_id: -1,
                video_name: '',
                video_cover: '',
                video_status: -1,
                video_uri: ''
            }
        };
        return _this;
    }
    VideoDetail.prototype.componentDidUpdate = function (preProps) {
        var _this = this;
        if (this.props.resDetailVideo != preProps.resDetailVideo) {
            this.setState({
                video: {
                    video_id: this.props.resDetailVideo.video_id,
                    video_name: this.props.resDetailVideo.video_name,
                    video_uri: this.props.resDetailVideo.video_uri,
                    video_cover: this.props.resDetailVideo.video_cover,
                    video_status: this.props.resDetailVideo.video_status
                }
            });
        }
        if (this.props.resUpdateVideo != preProps.resUpdateVideo) {
            if (this.props.resUpdateVideo.status === 200) {
                this.props.reIsSuccess(true);
                setTimeout(function () {
                    _this.props.reIsSuccess(false);
                    window.location.href = _this.props.match.url;
                }, 2000);
            }
            else {
                this.props.reIsDanger(true);
                setTimeout(function () {
                    _this.props.reIsDanger(false);
                    window.location.href = _this.props.match.url;
                }, 2000);
            }
        }
    };
    VideoDetail.prototype.componentDidMount = function () {
        this.props.reDetailVideo(this.props.match.params.idVideo);
    };
    VideoDetail.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-12" },
                React.createElement("div", { className: "panel" },
                    React.createElement("div", { className: "panel-toolbar" },
                        React.createElement("div", { className: "panel-heading" }, "Th\u00EAm video"),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement("div", { className: "btn btn-xs btn-danger" }, "X\u00F3a"),
                            React.createElement("div", { className: "btn btn-xs btn-info", onClick: this.updateVideo }, "L\u01B0u"))),
                    React.createElement("div", { className: "content" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-9" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " Ti\u00EAu \u0111\u1EC1")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, defaultValue: this.state.video.video_name, type: "text", name: "video_name", className: "form-control" }))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " Video")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, defaultValue: this.state.video.video_uri, type: "text", name: "video_uri", className: "form-control" })))),
                            React.createElement("div", { className: "col-sm-3" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "Tr\u1EA1ng th\u00E1i"),
                                    React.createElement("div", { className: "col-sm-12" },
                                        React.createElement("select", { onChange: this.onChange, name: "video_status", className: "form-control" },
                                            React.createElement("option", null, "Ch\u1ECDn"),
                                            React.createElement("option", { selected: this.state.video.video_status == 0 ? true : false, value: 0 }, "Hi\u1EC7n"),
                                            React.createElement("option", { selected: this.state.video.video_status == 1 ? true : false, value: 1 }, "\u1EA8n")))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "H\u00ECnh cover"),
                                    React.createElement("div", { className: "col-sm-12 cover-blog", onClick: function () {
                                            _this.props.reShowPhotoApp(true);
                                            _this.props.reSetCurrentEditorPhoto('img-cover-blog-preview');
                                        } },
                                        React.createElement("i", { className: "ti-upload" }),
                                        React.createElement("img", { id: "img-cover-blog-preview", className: "img-responsive", src: this.state.video.video_cover }))))))))));
    };
    return VideoDetail;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resDetailVideo: storeState.reVideos.resDetailVideo,
    resUpdateVideo: storeState.reVideos.resUpdateVideo
}); };
var mapDispatchToProps = {
    reDetailVideo: reDetailVideo,
    reUpdateVideo: reUpdateVideo,
    reSetCurrentEditorPhoto: reSetCurrentEditorPhoto,
    reShowPhotoApp: reShowPhotoApp,
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess
};
export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);
//# sourceMappingURL=detail.js.map