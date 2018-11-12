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
import { connect } from "react-redux";
import ClientHeader from "../client-shared/Header";
import Footer from "../client-shared/Footer";
import { reDetailSource } from "../../admin/source/reSource";
import { reIsDanger, reIsSuccess } from "../../../reducers/init";
import { apiListVideoSource } from "../../admin/video-source/reVideoSource";
import { Storage } from "../../../utils/storage-util";
import ModalContact from "../../shared/Contact";
var ClientVideoSource = /** @class */ (function (_super) {
    __extends(ClientVideoSource, _super);
    function ClientVideoSource(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListVideo = function () {
            if (_this.props.resListVideoSource.list) {
                return _this.props.resListVideoSource.list.map(function (element) {
                    return (React.createElement("li", { key: element.source_video_id, onClick: function () {
                            _this.setState({
                                currentVideo: element
                            }, function () {
                                _this.setState({
                                    isShowingPlayer: !_this.state.isShowingPlayer
                                });
                                window.scrollTo(10, 500);
                            });
                        } },
                        React.createElement("i", { className: "icon-social-youtube" }),
                        " ",
                        element.source_video_name));
                });
            }
            return React.createElement("li", null, "Kh\u00F4ng c\u00F3");
        };
        _this.makeIframe = function (link) {
            return (React.createElement("iframe", { width: 853, height: 480, src: "https://www.youtube.com/embed/" + (link !== "" ? link.split('v=')[1] : ''), 
                // @ts-ignore
                frameBorder: "0", allow: "autoplay; encrypted-media", allowFullScreen: true }));
        };
        _this.state = {
            currentVideo: "",
            isShowingPlayer: false,
            isShowingModalContact: false,
            currentCode: {},
            currentName: {}
        };
        return _this;
    }
    ClientVideoSource.prototype.componentDidMount = function () {
        var url = this.props.match.params.idSource;
        var tempArr = url.split('-');
        var idSource = tempArr[0];
        this.props.reDetailSource(idSource);
        this.props.apiListVideoSource(idSource);
        window.scrollTo(0, 0);
    };
    ClientVideoSource.prototype.componentDidUpdate = function (preProps) {
        if (preProps.resDetailSource != this.props.resDetailSource) {
            this.forceUpdate();
            if (!Storage.local.get('user_info') || Storage.local.get('user_info')[this.props.resDetailSource.source_alias] == undefined) {
                this.setState({
                    isShowingModalContact: !this.state.isShowingModalContact,
                    currentCode: this.props.resDetailSource.source_alias,
                    currentName: this.props.resDetailSource.source_title
                });
            }
        }
        if (preProps.resListVideoSource != this.props.resListVideoSource) {
            this.setState({
                currentVideo: this.props.resListVideoSource.list[0]
            });
        }
    };
    ClientVideoSource.prototype.render = function () {
        var _this = this;
        var detail = this.props.resDetailSource;
        // @ts-ignore
        // @ts-ignore
        return (React.createElement(React.Fragment, null,
            React.createElement(ClientHeader, null),
            React.createElement("div", { className: "margin-top detail-video" },
                React.createElement("div", { className: "row detail-video__banner paddingY-128", style: {
                        backgroundImage: 'url(' + detail.source_banner + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed'
                    } }),
                React.createElement("div", { className: "row paddingY-32 detail-video__head" },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "row" },
                            React.createElement("h1", { style: { fontSize: 64 }, className: 'white' }, detail.source_title),
                            React.createElement("p", { className: 'white' }, detail.source_promo)))),
                React.createElement("div", { className: "row paddingY-32 detail-video__main" },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { style: { textAlign: 'justify' }, className: "col-xs-12 detail-video__intro", dangerouslySetInnerHTML: { __html: detail.source_content } })))),
                React.createElement("div", { className: "row detail-video__list-video", style: { paddingBottom: 32 } },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-xs-12" },
                                React.createElement("div", { className: "item" },
                                    React.createElement("h2", { className: "white", style: { fontWeight: 700, marginLeft: 8 } },
                                        React.createElement("i", { className: "fa fa-star" }),
                                        " Danh s\u00E1ch video"),
                                    React.createElement("ul", null, this.renderListVideo()))))))),
            React.createElement(Footer, null),
            this.state.isShowingModalContact ? React.createElement(ModalContact, { code: this.state.currentCode, name: this.state.currentName, showHide: function () {
                    _this.setState({
                        isShowingModalContact: !_this.state.isShowingModalContact
                    });
                } }) : '',
            this.state.isShowingPlayer ? (React.createElement(React.Fragment, null,
                React.createElement("div", { style: { display: "block" }, className: "modal fade in play-video", role: "dialog", "aria-hidden": "true" },
                    React.createElement("div", { className: "modal-dialog modal-lg" },
                        React.createElement("div", { className: "modal-content" },
                            React.createElement("div", { className: "modal-header" },
                                React.createElement("button", { onClick: function () {
                                        _this.setState({
                                            isShowingPlayer: !_this.state.isShowingPlayer
                                        });
                                    }, type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true" }, "\u00D7")),
                            React.createElement("div", { className: "modal-body" },
                                React.createElement("div", { className: "video-container" }, this.makeIframe(this.state.currentVideo.source_video_url)))))),
                React.createElement("div", { className: "modal-backdrop fade in" }))) : ''));
    };
    return ClientVideoSource;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resDetailSource: storeState.reSource.resDetailSource,
    resListVideoSource: storeState.reVideoSource.resListVideoSource
}); };
var mapDispatchToProps = {
    reDetailSource: reDetailSource,
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess,
    apiListVideoSource: apiListVideoSource
};
export default connect(mapStateToProps, mapDispatchToProps)(ClientVideoSource);
//# sourceMappingURL=ClientVideoSource.js.map