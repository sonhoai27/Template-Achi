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
import { reIsDanger, reIsSuccess } from "../../../../reducers/init";
import { connect } from "react-redux";
import { apiAddVideoSource, apiListVideoSource } from "../reVideoSource";
var AddVideo = /** @class */ (function (_super) {
    __extends(AddVideo, _super);
    function AddVideo(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (e) {
            var _a;
            // @ts-ignore
            _this.setState((_a = {},
                _a[e.target.name] = e.target.value,
                _a));
        };
        _this.addVideo = function () {
            _this.props.apiAddVideoSource(__assign({}, _this.state, { source_video_id_source: _this.props.idSource }));
        };
        _this.state = {
            source_video_name: "",
            source_video_url: ""
        };
        return _this;
    }
    AddVideo.prototype.componentDidUpdate = function (preProps) {
        var _this = this;
        if (this.props.resAddVideoSourceVideo != preProps.resAddVideoSourceVideo) {
            if (this.props.resAddVideoSourceVideo.status === 200) {
                this.props.reIsSuccess(true);
                setTimeout(function () {
                    _this.props.reIsSuccess(false);
                    _this.props.apiListVideoSource(_this.props.idSource);
                    _this.props.showHide();
                }, 2000);
            }
            else {
                this.props.reIsDanger(true);
                setTimeout(function () {
                    _this.props.reIsDanger(false);
                    _this.props.apiListVideoSource(_this.props.idSource);
                    _this.props.showHide();
                }, 2000);
            }
        }
    };
    AddVideo.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "modal fade in", tabIndex: -1, role: "dialog", "aria-hidden": "true", style: { display: 'block', paddingRight: 17 } },
                React.createElement("div", { className: "modal-dialog modal-lg" },
                    React.createElement("div", { className: "modal-content" },
                        React.createElement("div", { className: "modal-header" },
                            React.createElement("button", { onClick: function () {
                                    _this.props.showHide();
                                }, type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true" }, "\u00D7"),
                            React.createElement("div", { className: "modal-title", style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },
                                React.createElement("h4", { style: { margin: 0 } }, "Th\u00EAm video"))),
                        React.createElement("div", { className: "modal-body", style: { display: 'inline-block', width: '100%' } },
                            React.createElement("div", { className: "form-group", style: { width: "100%", marginBottom: 32, display: 'inline-block' } },
                                React.createElement("label", { className: "col-sm-12" }, "T\u00EAn video"),
                                React.createElement("div", { className: "col-sm-12" },
                                    React.createElement("input", { onChange: this.onChange, name: "source_video_name", type: "text", placeholder: "T\u00EAn video", className: "form-control" }))),
                            React.createElement("div", { className: "form-group", style: { width: "100%", display: 'inline-block' } },
                                React.createElement("label", { className: "col-sm-12" }, "\u0110\u1ECBa ch\u1EC9 video"),
                                React.createElement("div", { className: "col-sm-12" },
                                    React.createElement("input", { onChange: this.onChange, name: "source_video_url", type: "text", placeholder: "\u0110\u1ECBa ch\u1EC9 video", className: "form-control" })))),
                        React.createElement("div", { className: "modal-footer" },
                            React.createElement("button", { onClick: this.addVideo, type: "button", className: "btn btn-danger waves-effect waves-light" }, "Th\u00EAm"))))),
            React.createElement("div", { className: "modal-backdrop fade in" })));
    };
    return AddVideo;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resAddVideoSourceVideo: storeState.reVideoSource.resAddVideoSourceVideo
}); };
var mapDispatchToProps = {
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess,
    apiAddVideoSource: apiAddVideoSource,
    apiListVideoSource: apiListVideoSource
};
export default connect(mapStateToProps, mapDispatchToProps)(AddVideo);
//# sourceMappingURL=AddVideo.js.map