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
import Footer from "../client-shared/Footer";
import { reListSourceByType } from "../../admin/source/reSource";
import { connect } from "react-redux";
import { BASEURL } from "../../../config/const";
import { Link } from "react-router-dom";
import CLientFooterBanner from "../home/ClientFooterBanner";
var ClientSourceHome = /** @class */ (function (_super) {
    __extends(ClientSourceHome, _super);
    function ClientSourceHome(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListSources = function () {
            if (_this.props.resListSourceBy0.list) {
                var dem_1 = 1;
                var list_1 = [];
                return _this.props.resListSourceBy0.list.map(function (element, index) {
                    if (index === 0) {
                        // @ts-ignore
                        list_1 = __spread(list_1, [_this.itemSource(element)]);
                    }
                    else if (dem_1 < 2) {
                        // @ts-ignore
                        list_1 = __spread(list_1, [_this.itemSource(element)]);
                        dem_1 = dem_1 + 1;
                        if (index === (_this.props.resListSourceBy0.list.length - 1)) {
                            // @ts-ignore
                            var tempList = __spread([], list_1);
                            return React.createElement("div", {
                                className: "row",
                                key: index
                            }, __spread(tempList));
                        }
                    }
                    else {
                        dem_1 = 1;
                        // @ts-ignore
                        list_1 = __spread(list_1, [_this.itemSource(element)]);
                        var tempList = __spread([], list_1);
                        list_1 = [];
                        return React.createElement("div", {
                            className: "row",
                            key: index
                        }, __spread(tempList));
                    }
                    return "";
                });
            }
            return React.createElement("h1", null, "Kh\u00F4ng c\u00F3.");
        };
        _this.itemSource = function (element) {
            return (React.createElement("div", { className: "col-sm-4", key: element.source_alias },
                React.createElement("div", { className: "panel sales-page-listing" },
                    React.createElement("img", { src: element.source_cover, alt: "", className: "img-responsive" }),
                    React.createElement("div", { className: "panel-body" },
                        React.createElement("h3", { style: { fontWeight: 600 }, className: "title text-dark" }, element.source_is_page == 1 ? (React.createElement("a", { target: "blank", href: element.source_page_url }, element.source_title)) : (React.createElement(Link, { to: BASEURL +
                                "page/khoa-hoc/" +
                                element.source_alias +
                                "-" +
                                element.source_id_ui +
                                "-" +
                                element.source_id }, element.source_title))),
                        React.createElement("p", { className: "desc", style: { fontSize: 15 } }, element.source_promo),
                        element.source_is_page == 1 ? (React.createElement("a", { style: { background: "#1f9080" }, target: "blank", className: "btn btn-primary learn-more", href: element.source_page_url }, "Xem th\u00EAm")) : (React.createElement(Link, { style: { background: "#1f9080" }, className: "btn btn-primary learn-more", to: BASEURL +
                                "page/khoa-hoc/" +
                                element.source_alias +
                                "-" +
                                element.source_id_ui +
                                "-" +
                                element.source_id }, "Xem th\u00EAm"))))));
        };
        _this.renderListVideos = function () {
            if (_this.props.resListSourceBy1.list) {
                return _this.props.resListSourceBy1.list.map(function (element) {
                    return (React.createElement("div", { className: "col-sm-4", key: element.source_alias },
                        React.createElement("div", { className: "panel sales-page-listing" },
                            React.createElement("img", { src: element.source_cover, alt: "", className: "img-responsive" }),
                            React.createElement("div", { className: "panel-body" },
                                React.createElement("h3", { className: "title text-dark", style: { fontWeight: 600 } },
                                    React.createElement(Link, { to: BASEURL +
                                            "page/khoa-hoc/video/" +
                                            element.source_id +
                                            "-" +
                                            element.source_alias }, element.source_title)),
                                React.createElement("p", { className: "desc", style: { fontSize: 15 } }, element.source_promo),
                                React.createElement(Link, { style: { background: "#1f9080" }, className: "btn btn-primary learn-more", to: BASEURL +
                                        "page/khoa-hoc/video/" +
                                        element.source_id +
                                        "-" +
                                        element.source_alias, "kjb-settings-id": "language_learn_more" }, "Xem th\u00EAm")))));
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
                React.createElement("div", { className: "row page-source_banner", style: {
                        backgroundImage: "url(http://nguyenminhchi.com/api/uploads/images/4476bdd2a0fd060b490d1539450000000.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    } },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-6" },
                                React.createElement("h1", { className: "white" }, "NGUYENMINHCHI.COM"),
                                React.createElement("p", { className: "white" }, "KH\u00C1M PH\u00C1 T\u1EA4T C\u1EA2 C\u00C1C CH\u01AF\u01A0NG TR\u00CCNH \u0110\u00C0O T\u1EA0O GI\u00DAP B\u1EA0N \u0110\u1ED8T PH\u00C1 B\u1EA2N TH\u00C2N"))))),
                React.createElement("div", { className: "row" },
                    React.createElement(CLientFooterBanner, null)),
                React.createElement("div", { className: "page-source_list-source" },
                    React.createElement("div", { className: "container paddingY-64" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-xs-12 page-source_title" },
                                React.createElement("h2", { style: {} },
                                    React.createElement("b", null,
                                        React.createElement("i", { className: "fa fa-star" }),
                                        " Kh\u00F3a h\u1ECDc \u0111\u1EA7y t\u1EF1 h\u00E0o")),
                                React.createElement("hr", { style: { background: "#444" } })),
                            this.renderListSources()),
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-xs-12 page-source_title" },
                                React.createElement("h2", null,
                                    React.createElement("b", null,
                                        React.createElement("i", { className: "fa fa-star" }),
                                        " Kh\u00F3a h\u1ECDc online")),
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