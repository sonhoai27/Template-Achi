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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
import * as React from "react";
import ClientHeader from "../client-shared/Header";
import { connect } from "react-redux";
import { reListVideo } from "../../admin/videos/reVideos";
import Pagination from "../../shared/Pagination";
import Footer from "../client-shared/Footer";
import ClientFollow from "../home/ClientFollow";
import AutofitImage from "../../shared/CropImage";
import CLientFooterBanner from "../home/ClientFooterBanner";
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
        _this.onPlay = function (video) {
            _this.setState({
                currentLinkVideo: video.video_uri,
                showPlayer: !_this.state.showPlayer
            });
        };
        _this.makeIframe = function (link) {
            return (React.createElement("iframe", { width: 853, height: 480, src: "https://www.youtube.com/embed/" + (link !== "" ? link.split('v=')[1] : ''), 
                // @ts-ignore
                frameBorder: "0", allow: "autoplay; encrypted-media", allowFullScreen: true }));
        };
        _this.renderListVideo = function () {
            if (_this.props.resListVideo.list) {
                var dem_1 = 1;
                var list_1 = [];
                return _this.props.resListVideo.list.map(function (element, index) {
                    if (index === 0) {
                        // @ts-ignore
                        list_1 = __spread(list_1, [_this.itemVideo(element)]);
                    }
                    else if (dem_1 <= 2) {
                        console.log(dem_1);
                        // @ts-ignore
                        list_1 = __spread(list_1, [_this.itemVideo(element)]);
                        dem_1 = dem_1 + 1;
                        console.log(list_1);
                    }
                    else {
                        console.log('a', dem_1);
                        dem_1 = 1;
                        // @ts-ignore
                        list_1 = __spread(list_1, [_this.itemVideo(element)]);
                        var tempList = __spread([], list_1);
                        list_1 = [];
                        console.log(list_1);
                        return React.createElement('div', {
                            classname: 'row'
                        }, __spread(tempList));
                    }
                    return "";
                });
            }
            return "";
        };
        _this.itemVideo = function (element) {
            return (React.createElement("div", { className: "col-sm-4 margin-b-32" },
                React.createElement("div", { className: "item" },
                    React.createElement("a", { onClick: function () { return _this.onPlay(element); }, style: { width: '100%' } },
                        React.createElement(AutofitImage, { clasName: "img-responsive", frameWidth: "100%", frameHeight: "200px", imgSrc: element.video_cover }),
                        React.createElement("p", { style: {
                                marginTop: "16px",
                                fontSize: "18px",
                                color: "#333",
                                textAlign: 'center'
                            } }, element.video_name)))));
        };
        _this.state = {
            showPlayer: false,
            currentLinkVideo: ''
        };
        return _this;
    }
    ClientVideo.prototype.componentDidMount = function () {
        this.props.reListVideo((parseInt(this.makeCurrentPage(), 10) - 1) * 20);
    };
    ClientVideo.prototype.componentDidUpdate = function (preProps) {
        var _this = this;
        if (preProps.resAddContact != this.props.resAddContact) {
            if (this.props.resAddContact.status === 200) {
                setTimeout(function () {
                    _this.setState({
                        showPlayer: !_this.state.showPlayer
                    });
                }, 1500);
            }
        }
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
                React.createElement("div", { className: "row" },
                    React.createElement(CLientFooterBanner, null)),
                React.createElement("div", { className: "row paddingY-32" },
                    React.createElement("h1", { className: "text-center", style: { marginTop: 64 } }, "Subscribe to Minh Chi Nguyen\u2019s YouTube Channel"),
                    React.createElement("div", { className: "col-sm-4" }),
                    React.createElement("div", { className: "col-sm-4" },
                        React.createElement("div", { className: "social-callout", style: {
                                marginTop: 64
                            } },
                            React.createElement("h3", { className: "text-center" }, "K\u00EAnh Youtube b\u00E0i h\u1ECDc"),
                            React.createElement("div", { className: "g-ytsubscribe", "data-channelid": "UCHCeMi9tGx9VCMSHHbscrLg", "data-layout": "default", "data-count": "default" }))),
                    React.createElement("div", { className: "col-sm-4" })),
                React.createElement("div", { className: "row page-source_list-source page-video" },
                    React.createElement("div", { className: "container paddingY-128" },
                        this.renderListVideo(),
                        React.createElement("div", { className: "pg" },
                            React.createElement(Pagination, { initialPage: parseInt(this.makeCurrentPage(), 10), pageSize: 20, totalItems: this.props.resListVideo.count, onChangePage: function (e) { return _this.getMoreVideo(e.currentPage); } })))),
                React.createElement(ClientFollow, null)),
            this.state.showPlayer ? (React.createElement(React.Fragment, null,
                React.createElement("div", { style: { display: "block" }, className: "modal fade in play-video", role: "dialog", "aria-hidden": "true" },
                    React.createElement("div", { className: "modal-dialog modal-lg" },
                        React.createElement("div", { className: "modal-content" },
                            React.createElement("div", { className: "modal-header" },
                                React.createElement("button", { onClick: function () {
                                        _this.setState({
                                            showPlayer: !_this.state.showPlayer
                                        });
                                    }, type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true" }, "\u00D7")),
                            React.createElement("div", { className: "modal-body" },
                                React.createElement("div", { className: "video-container" }, this.makeIframe(this.state.currentLinkVideo)))))),
                React.createElement("div", { className: "modal-backdrop fade in" }))) : '',
            React.createElement(Footer, null)));
    };
    return ClientVideo;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    isSuccess: storeState.reInit.isSuccess,
    isDanger: storeState.reInit.isDanger,
    resListVideo: storeState.reVideos.resListVideo,
    resAddContact: storeState.reSource.resAddContact
}); };
var mapDispatchToProps = {
    reListVideo: reListVideo
};
export default connect(mapStateToProps, mapDispatchToProps)(ClientVideo);
//# sourceMappingURL=ClientVideo.js.map