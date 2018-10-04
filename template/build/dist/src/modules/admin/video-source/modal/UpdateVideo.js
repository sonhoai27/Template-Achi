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
import { reIsDanger, reIsSuccess } from "../../../../reducers/init";
import { connect } from "react-redux";
import { apiUpdateVideoSource, apiListVideoSource } from "../reVideoSource";
var UpdateVideo = /** @class */ (function (_super) {
    __extends(UpdateVideo, _super);
    function UpdateVideo(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (e) {
            var _a;
            // @ts-ignore
            _this.setState((_a = {},
                _a[e.target.name] = e.target.value,
                _a));
        };
        _this.updateVideo = function () {
            _this.props.apiUpdateVideoSource(_this.state, _this.props.video.source_video_id);
        };
        _this.state = {
            source_video_name: _this.props.video.source_video_name,
            source_video_url: _this.props.video.source_video_url,
            source_video_id: _this.props.video.source_video_id,
            source_video_id_source: _this.props.video.source_video_id_source
        };
        return _this;
    }
    UpdateVideo.prototype.componentDidMount = function () {
        console.log(this.props.video);
        this.setState({
            source_video_name: this.props.video.source_video_name,
            source_video_url: this.props.video.source_video_url,
            source_video_id: this.props.video.source_video_id,
            source_video_id_source: this.props.video.source_video_id_source
        });
    };
    UpdateVideo.prototype.componentDidUpdate = function (preProps) {
        var _this = this;
        if (this.props.resUpdateVideoSourceVideo != preProps.resUpdateVideoSourceVideo) {
            if (this.props.resUpdateVideoSourceVideo.status === 200) {
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
    UpdateVideo.prototype.render = function () {
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
                                React.createElement("h4", { style: { margin: 0 } }, "S\u1EEDa video"))),
                        React.createElement("div", { className: "modal-body", style: { display: 'inline-block', width: '100%' } },
                            React.createElement("div", { className: "form-group", style: { width: "100%", marginBottom: 32, display: 'inline-block' } },
                                React.createElement("label", { className: "col-sm-12" }, "T\u00EAn video"),
                                React.createElement("div", { className: "col-sm-12" },
                                    React.createElement("input", { onChange: this.onChange, name: "source_video_name", type: "text", defaultValue: this.state.source_video_name, className: "form-control" }))),
                            React.createElement("div", { className: "form-group", style: { width: "100%", display: 'inline-block' } },
                                React.createElement("label", { className: "col-sm-12" }, "\u0110\u1ECBa ch\u1EC9 video"),
                                React.createElement("div", { className: "col-sm-12" },
                                    React.createElement("input", { onChange: this.onChange, name: "source_video_url", type: "text", defaultValue: this.state.source_video_url, className: "form-control" })))),
                        React.createElement("div", { className: "modal-footer" },
                            React.createElement("button", { onClick: this.updateVideo, type: "button", className: "btn btn-danger waves-effect waves-light" }, "L\u01B0u"))))),
            React.createElement("div", { className: "modal-backdrop fade in" })));
    };
    return UpdateVideo;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resUpdateVideoSourceVideo: storeState.reVideoSource.resUpdateVideoSourceVideo
}); };
var mapDispatchToProps = {
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess,
    apiUpdateVideoSource: apiUpdateVideoSource,
    apiListVideoSource: apiListVideoSource
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdateVideo);
//# sourceMappingURL=UpdateVideo.js.map