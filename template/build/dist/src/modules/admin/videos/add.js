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
import { reSetCurrentEditorPhoto, reShowPhotoApp } from "../../../reducers/init";
import { reAddVideo } from "./reVideos";
var VideoAdd = /** @class */ (function (_super) {
    __extends(VideoAdd, _super);
    function VideoAdd(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (e) {
            var _a;
            // @ts-ignore
            _this.setState((_a = {},
                _a[e.target.name] = e.target.value,
                _a));
        };
        _this.addVideo = function () {
            var temDom = document.getElementById('img-cover-blog-preview');
            _this.props.reAddVideo(__assign({}, _this.state, { video_cover: temDom.src }));
        };
        _this.state = {
            video_name: '',
            video_uri: '',
            video_cover: '',
            video_status: 0
        };
        return _this;
    }
    VideoAdd.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-12" },
                React.createElement("div", { className: "panel" },
                    React.createElement("div", { className: "panel-toolbar" },
                        React.createElement("div", { className: "panel-heading" }, "Th\u00EAm video"),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement("div", { onClick: this.addVideo, className: "btn btn-xs btn-info" }, "L\u01B0u"))),
                    React.createElement("div", { className: "content" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-9" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " Ti\u00EAu \u0111\u1EC1")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, name: "video_name", type: "text", className: "form-control" }),
                                        " ")),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " Video")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { onChange: this.onChange, name: "video_uri", type: "text", className: "form-control" }),
                                        " "))),
                            React.createElement("div", { className: "col-sm-3" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "Tr\u1EA1ng th\u00E1i"),
                                    React.createElement("div", { className: "col-sm-12" },
                                        React.createElement("select", { onChange: this.onChange, name: "video_status", className: "form-control" },
                                            React.createElement("option", null, "Ch\u1ECDn"),
                                            React.createElement("option", { value: 0 }, "Hi\u1EC7n"),
                                            React.createElement("option", { value: 1 }, "\u1EA8n")))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "H\u00ECnh cover"),
                                    React.createElement("div", { className: "col-sm-12 cover-blog", onClick: function () {
                                            _this.props.reShowPhotoApp(true);
                                            _this.props.reSetCurrentEditorPhoto('img-cover-blog-preview');
                                        } },
                                        React.createElement("i", { className: "ti-upload" }),
                                        React.createElement("img", { id: "img-cover-blog-preview", className: "img-responsive" }))))))))));
    };
    return VideoAdd;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resAddVideo: storeState.reVideos.resAddVideo
}); };
var mapDispatchToProps = {
    reSetCurrentEditorPhoto: reSetCurrentEditorPhoto,
    reShowPhotoApp: reShowPhotoApp,
    reAddVideo: reAddVideo
};
export default connect(mapStateToProps, mapDispatchToProps)(VideoAdd);
//# sourceMappingURL=add.js.map