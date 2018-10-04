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
import Footer from "../client-shared/Footer";
import { reListSourceByType } from "../../admin/source/reSource";
import { connect } from "react-redux";
import AutofitImage from "../../shared/CropImage";
import { BASEURL } from "../../../config/const";
import { Link } from "react-router-dom";
var ClientSourceHome = /** @class */ (function (_super) {
    __extends(ClientSourceHome, _super);
    function ClientSourceHome(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListSources = function () {
            if (_this.props.resListSourceBy0.list) {
                return _this.props.resListSourceBy0.list.map(function (element) {
                    return (React.createElement("div", { className: "col-sm-4" },
                        React.createElement("div", { className: "panel sales-page-listing" },
                            React.createElement(AutofitImage, { frameWidth: "100%", frameHeight: "400px", imgSrc: element.source_cover }),
                            React.createElement("div", { className: "panel-body" },
                                React.createElement("h3", { className: "title text-dark" }, element.source_is_page == 1 ?
                                    React.createElement("a", { target: 'blank', href: element.source_page_url }, element.source_title) : React.createElement(Link, { to: BASEURL + 'page/khoa-hoc/video/' + element.source_id + '.' + element.source_alias }, element.source_title)),
                                React.createElement("p", { className: "desc", style: { fontSize: 15 } }, element.source_promo),
                                element.source_is_page == 1 ?
                                    React.createElement("a", { target: 'blank', className: "btn btn-primary learn-more", href: element.source_page_url }, "Xem") :
                                    React.createElement(Link, { className: "btn btn-primary learn-more", to: BASEURL + 'page/khoa-hoc/video/' + element.source_id + '.' + element.source_alias }, "Xem")))));
                });
            }
            return React.createElement("h1", null, "Kh\u00F4ng c\u00F3.");
        };
        _this.renderListVideos = function () {
            if (_this.props.resListSourceBy1.list) {
                return _this.props.resListSourceBy1.list.map(function (element) {
                    return (React.createElement("div", { className: "col-sm-4" },
                        React.createElement("div", { className: "panel sales-page-listing" },
                            React.createElement(AutofitImage, { frameWidth: "100%", frameHeight: "400px", imgSrc: element.source_cover }),
                            React.createElement("div", { className: "panel-body" },
                                React.createElement("h3", { className: "title text-dark" },
                                    React.createElement(Link, { to: BASEURL + 'page/khoa-hoc/video/' + element.source_id + '.' + element.source_alias }, element.source_title)),
                                React.createElement("p", { className: "desc", style: { fontSize: 15 } }, element.source_promo),
                                React.createElement(Link, { className: "btn btn-primary learn-more", to: BASEURL + 'page/khoa-hoc/video/' + element.source_id + '.' + element.source_alias, "kjb-settings-id": "language_learn_more" }, "Xem")))));
                });
            }
            return React.createElement("h1", null, "Kh\u00F4ng c\u00F3.");
        };
        return _this;
    }
    ClientSourceHome.prototype.componentDidMount = function () {
        this.props.reListSourceByType(0);
        this.props.reListSourceByType(1);
    };
    ClientSourceHome.prototype.render = function () {
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
                React.createElement("div", { className: "row page-source_list-source" },
                    React.createElement("div", { className: "container paddingY-128" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-xs-12 page-source_title" },
                                React.createElement("h2", { style: {} },
                                    React.createElement("b", null, "C\u00F3 ph\u00ED")),
                                React.createElement("hr", { style: { background: "#444" } })),
                            this.renderListSources()),
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-xs-12 page-source_title" },
                                React.createElement("h2", null,
                                    React.createElement("b", null, "H\u1ECDc online")),
                                React.createElement("hr", { style: { background: "#444" } })),
                            this.renderListVideos())))),
            React.createElement(Footer, null)));
    };
    return ClientSourceHome;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListSourceBy1: storeState.reSource.resListSourceBy1,
    resListSourceBy0: storeState.reSource.resListSourceBy0
}); };
var mapDispatchToProps = {
    reListSourceByType: reListSourceByType
};
export default connect(mapStateToProps, mapDispatchToProps)(ClientSourceHome);
//# sourceMappingURL=ClientSourceHome.js.map