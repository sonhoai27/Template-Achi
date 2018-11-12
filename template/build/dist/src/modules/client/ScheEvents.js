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
import { reListSourceByType } from "../admin/source/reSource";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CLientFooterBanner from "./home/ClientFooterBanner";
import Footer from "./client-shared/Footer";
import ClientHeader from "./client-shared/Header";
import { BASEURL } from "../../config/const";
var ScheEvents = /** @class */ (function (_super) {
    __extends(ScheEvents, _super);
    function ScheEvents(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListSources = function () {
            if (_this.props.resListSourceBy0.list) {
                return _this.props.resListSourceBy0.list.map(function (element) {
                    return (React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "col-xs-12" },
                            React.createElement("div", { className: "row list-courses__item", style: { marginBottom: 64, width: '100%' } },
                                React.createElement("div", { className: "col-sm-4 wow bounceInLeft", "data-wow-duration": "2s" },
                                    React.createElement("img", { src: element.source_cover, className: "img-responsive" })),
                                React.createElement("div", { className: "col-sm-8" },
                                    React.createElement("h2", null,
                                        React.createElement("b", null, element.source_title)),
                                    React.createElement("p", null, element.source_promo),
                                    React.createElement("div", { className: "get-link btn", style: { marginTop: 32, float: "right" } }, element.source_is_page == 1 ? (React.createElement("a", { target: "blank", href: element.source_page_url }, "Xem th\u00EAm")) : (React.createElement(Link, { to: BASEURL +
                                            "page/khoa-hoc/" +
                                            element.source_alias +
                                            "-" +
                                            element.source_id_ui +
                                            "-" +
                                            element.source_id }, "Xem th\u00EAm"))))))));
                });
            }
            return React.createElement("h1", null, "Kh\u00F4ng c\u00F3.");
        };
        return _this;
    }
    ScheEvents.prototype.componentDidMount = function () {
        this.props.reListSourceByType(0);
    };
    ScheEvents.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(ClientHeader, null),
            React.createElement("div", { className: "col-xs-12 page-source list-course" },
                React.createElement("div", { className: "row page-source_banner", style: {
                        backgroundImage: 'url(http://nguyenminhchi.com/api/uploads/images/302d805c8eeb049bb9a71539622800000.jpg)'
                    } },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-6" },
                                React.createElement("h2", { className: "white" },
                                    React.createElement("b", null, "L\u1ECACH S\u1EF0 KI\u1EC6N C\u00C1C KH\u00D3A H\u1ECCC")),
                                React.createElement("p", { className: "white" }, "Xem l\u1ECBch s\u1EF1 ki\u1EC7n c\u00E1c kh\u00F3a h\u1ECDc \u0111\u1EA7y t\u1EF1 h\u00E0o c\u1EE7a Mr.Share"))))),
                React.createElement("div", { className: "row" },
                    React.createElement(CLientFooterBanner, null)),
                React.createElement("div", { className: "row page-source_list-source lich-su-kien" },
                    React.createElement("div", { className: "container paddingY-64" },
                        React.createElement("div", { className: "row" }, this.renderListSources())))),
            React.createElement(Footer, null)));
    };
    return ScheEvents;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListSourceBy0: storeState.reSource.resListSourceBy0
}); };
var mapDispatchToProps = {
    reListSourceByType: reListSourceByType
};
export default connect(mapStateToProps, mapDispatchToProps)(ScheEvents);
//# sourceMappingURL=ScheEvents.js.map