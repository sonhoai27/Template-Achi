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
import ClientHeader from "../client-shared/Header";
import { connect } from "react-redux";
import { reListVideo } from "../../admin/videos/reVideos";
import Pagination from "../../shared/Pagination";
var ClientVideo = /** @class */ (function (_super) {
    __extends(ClientVideo, _super);
    function ClientVideo(props) {
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
                    return (React.createElement("div", { className: "col-sm-3" },
                        React.createElement("div", { className: "item" },
                            React.createElement("a", { href: element.video_uri, target: "_blank" },
                                React.createElement("img", { src: element.video_cover, alt: element.video_name, className: "img-responsive" }),
                                React.createElement("p", { style: {
                                        marginTop: "16px",
                                        fontSize: "18px",
                                        color: "#333"
                                    } }, element.video_name)))));
                });
            }
            return "";
        };
        return _this;
    }
    ClientVideo.prototype.componentDidMount = function () {
        this.props.reListVideo((parseInt(this.makeCurrentPage(), 10) - 1) * 20);
    };
    ClientVideo.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement(ClientHeader, null),
            React.createElement("div", { className: "col-xs-12 page-source" },
                React.createElement("div", { className: "row page-source_banner" },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-6" },
                                React.createElement("h1", { className: "white", style: { marginBottom: 64 } },
                                    React.createElement("b", null, "FROM A HISTORY-MAKING STANLEY CUP FINALS TO BUILDING A PERSONAL AI")),
                                React.createElement("p", { className: "white" }, "Where has Tony been recently \u2013 and what in the world is he up to? Below is the latest edition of the Tony Tracker, where you can see highlights from his journeys and read his narration of some of his favorite experiences. Watching history being made at the Stanley Cup Finals TONIGHT\u2019S GAME IS ONE"))))),
                React.createElement("div", { className: "row page-source_list-source page-video" },
                    React.createElement("div", { className: "container paddingY-128" },
                        this.renderListVideo(),
                        React.createElement("div", { className: "pg" },
                            React.createElement(Pagination, { initialPage: parseInt(this.makeCurrentPage(), 10), pageSize: 20, totalItems: this.props.resListVideo.count, onChangePage: function (e) { return _this.getMoreVideo(e.currentPage); } })))))));
    };
    return ClientVideo;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    isSuccess: storeState.reInit.isSuccess,
    isDanger: storeState.reInit.isDanger,
    resListVideo: storeState.reVideos.resListVideo
}); };
var mapDispatchToProps = {
    reListVideo: reListVideo
};
export default connect(mapStateToProps, mapDispatchToProps)(ClientVideo);
//# sourceMappingURL=ClientVideo.js.map