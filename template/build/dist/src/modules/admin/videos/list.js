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
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";
import { connect } from "react-redux";
import { reListVideo, reDeleteVideo } from "./reVideos";
import Pagination from "../../shared/Pagination";
import { reIsSuccess, reIsDanger } from "../../../reducers/init";
var VideoList = /** @class */ (function (_super) {
    __extends(VideoList, _super);
    function VideoList(props) {
        var _this = _super.call(this, props) || this;
        _this.makeCurrentPage = function () {
            var page = window.location.href.split("page=")[1];
            if (page != undefined || page != null) {
                return page;
            }
            else {
                return "1";
            }
        };
        _this.getMoreVideo = function (page) {
            _this.props.reListVideo((page - 1) * 20);
        };
        _this.renderListVideo = function () {
            if (_this.props.resListVideo.list) {
                return _this.props.resListVideo.list.map(function (element, index) {
                    return (React.createElement("tr", null,
                        React.createElement("td", { className: "text-center" }, index + 1),
                        React.createElement("td", null,
                            React.createElement(Link, { to: BASEURLADMIN + 'video/detail/' + element.video_id },
                                React.createElement("span", null, element.video_name))),
                        React.createElement("td", null,
                            React.createElement("a", { href: element.video_uri, target: "_blank" }, element.video_uri)),
                        React.createElement("td", null,
                            React.createElement("div", { onClick: function () {
                                    _this.props.reDeleteVideo(element.video_id);
                                }, className: "btn btn-sm btn-danger" }, "X\u00F3a"))));
                });
            }
            return '';
        };
        return _this;
    }
    VideoList.prototype.componentDidMount = function () {
        this.props.reListVideo((parseInt(this.makeCurrentPage(), 10) - 1) * 20);
    };
    VideoList.prototype.componentDidUpdate = function (preProps) {
        var _this = this;
        if (this.props.resDeleteVideo != preProps.resDeleteVideo) {
            if (this.props.resDeleteVideo.status === 200) {
                this.props.reIsSuccess(true);
                setTimeout(function () {
                    _this.props.reIsSuccess(false);
                    _this.props.reListVideo((parseInt(_this.makeCurrentPage(), 10) - 1) * 20);
                }, 2000);
            }
            else {
                this.props.reIsDanger(true);
                setTimeout(function () {
                    _this.props.reIsDanger(false);
                    _this.props.reListVideo((parseInt(_this.makeCurrentPage(), 10) - 1) * 20);
                }, 2000);
            }
        }
    };
    VideoList.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-12" },
                React.createElement("div", { className: "panel" },
                    React.createElement("div", { className: "panel-toolbar" },
                        React.createElement("div", { className: "panel-heading" }, "Qu\u1EA3n l\u00ED video"),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement(Link, { to: BASEURLADMIN + 'video/add' },
                                React.createElement("div", { className: "btn btn-xs btn-info" }, "Th\u00EAm m\u1EDBi")))),
                    React.createElement("div", { className: "content" },
                        React.createElement("div", { className: "table-responsive" },
                            React.createElement("table", { className: "table table-hover manage-u-table" },
                                React.createElement("thead", null,
                                    React.createElement("tr", null,
                                        React.createElement("th", { className: "text-center" }, "#"),
                                        React.createElement("th", null, "T\u00EAn"),
                                        React.createElement("th", null, "Video"),
                                        React.createElement("th", null, "H\u00E0nh \u0111\u1ED9ng"))),
                                React.createElement("tbody", null, this.renderListVideo()))),
                        React.createElement("div", { className: "pg" },
                            React.createElement(Pagination, { initialPage: parseInt(this.makeCurrentPage(), 10), pageSize: 20, totalItems: this.props.resListVideo.count, onChangePage: function (e) { return _this.getMoreVideo(e.currentPage); } })))))));
    };
    return VideoList;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListVideo: storeState.reVideos.resListVideo,
    resDeleteVideo: storeState.reVideos.resDeleteVideo
}); };
var mapDispatchToProps = {
    reListVideo: reListVideo,
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess,
    reDeleteVideo: reDeleteVideo
};
export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
//# sourceMappingURL=list.js.map