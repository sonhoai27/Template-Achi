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
import Header from "./shared/header";
import axios from "axios";
import { API } from "../../config/const";
import Web from "./traffic/web";
import Blog from "./traffic/blog";
import Gift from "./traffic/gift";
import Source from "./traffic/source";
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        var _this = _super.call(this, props) || this;
        _this.datePickerYear = function () {
            $(function () {
                $(".datepicker-year").datepicker({
                    dateFormat: "mm-yy",
                    inline: true,
                    changeMonth: true,
                    changeYear: true,
                    showButtonPanel: true,
                    onClose: function (dateText, inst) {
                        $(this).datepicker("setDate", new Date(inst.selectedYear, inst.selectedMonth, 1));
                    }
                });
            });
        };
        _this.renderListSche = function () {
            if (_this.state.sche.list) {
                return _this.state.sche.list.map(function (element, index) {
                    return (React.createElement("tr", { key: element.source_sche_khoa },
                        React.createElement("td", { className: "text-center", role: "row" }, index + 1),
                        React.createElement("td", null, element.source_title),
                        React.createElement("td", null, element.source_sche_khoa),
                        React.createElement("td", null, element.counter)));
                });
            }
        };
        _this.state = {
            blog: {},
            web: {},
            gift: "",
            source: "",
            sche: ""
        };
        return _this;
    }
    Home.prototype.componentDidMount = function () {
        var _this = this;
        // web
        axios.get(API + "thong-ke/web/danh-sach-url").then(function (result) {
            _this.setState({
                web: result.data
            });
        });
        axios.get(API + "thong-ke/blog/danh-sach-bai-viet").then(function (result) {
            _this.setState({
                blog: result.data
            });
        });
        axios.get(API + "thong-ke/qua-tang/tong-quat").then(function (result) {
            _this.setState({
                gift: result.data
            });
        });
        axios.get(API + "thong-ke/khoa-hoc/tong-quat").then(function (result) {
            _this.setState({
                source: result.data
            });
        });
        axios.get(API + "thong-ke/khoa-hoc/thoi-khoa-bieu").then(function (result) {
            _this.setState({
                sche: result.data
            });
        });
        this.datePickerYear();
    };
    Home.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Header, null),
            React.createElement("div", { id: "page-wrapper" },
                React.createElement("div", { className: "container-fluid" },
                    React.createElement("div", { className: "col-md-12" },
                        React.createElement("div", { className: "panel", style: { padding: 16, background: '#f1f1f1' } },
                            React.createElement("div", { className: "row" },
                                React.createElement("div", { className: "col-sm-12" },
                                    React.createElement("h3", null, "T\u1ED5ng qu\u00E1t")),
                                React.createElement("div", { className: "col-sm-3" },
                                    React.createElement("div", { className: "white-box analytics-info sh-card" },
                                        React.createElement("h3", { className: "box-title" }, "L\u01B0\u1EE3t truy c\u1EADp"),
                                        React.createElement("ul", { className: "list-inline two-part" },
                                            React.createElement("li", { className: "text-right", style: { width: '100%' } },
                                                React.createElement("span", { className: "counter num text-success" },
                                                    this.state.web.counter,
                                                    " l\u01B0\u1EE3t"))))),
                                React.createElement("div", { className: "col-sm-3" },
                                    React.createElement("div", { className: "white-box analytics-info sh-card" },
                                        React.createElement("h3", { className: "box-title" }, "Xem blog"),
                                        React.createElement("ul", { className: "list-inline two-part" },
                                            React.createElement("li", { className: "text-right", style: { width: '100%' } },
                                                React.createElement("span", { className: "counter num text-success" },
                                                    this.state.blog.counter,
                                                    " l\u01B0\u1EE3t"))))),
                                React.createElement("div", { className: "col-sm-3" },
                                    React.createElement("div", { className: "white-box analytics-info sh-card" },
                                        React.createElement("h3", { className: "box-title" }, "Kh\u00F3a h\u1ECDc"),
                                        React.createElement("ul", { className: "list-inline two-part" },
                                            React.createElement("li", { className: "text-right", style: { width: '100%' } },
                                                React.createElement("span", { className: "counter num text-success" },
                                                    this.state.source.list,
                                                    " l\u01B0\u1EE3t"))))),
                                React.createElement("div", { className: "col-sm-3" },
                                    React.createElement("div", { className: "white-box analytics-info sh-card" },
                                        React.createElement("h3", { className: "box-title" }, "Nh\u1EADn qu\u00E0"),
                                        React.createElement("ul", { className: "list-inline two-part" },
                                            React.createElement("li", { className: "text-right", style: { width: '100%' } },
                                                React.createElement("span", { className: "counter num text-success" },
                                                    this.state.gift.list,
                                                    " l\u01B0\u1EE3t")))))),
                            React.createElement(Web, null),
                            React.createElement(Blog, null),
                            React.createElement(Gift, null),
                            React.createElement(Source, null),
                            React.createElement("div", { className: "row margin-t-72" },
                                React.createElement("div", { className: "col-xs-12" },
                                    React.createElement("h3", null, "S\u1ED1 l\u01B0\u1EE3ng \u0111\u0103ng k\u00FD kh\u00F3a h\u1ECDc")),
                                React.createElement("div", { className: "col-xs-12" },
                                    React.createElement("div", { className: "list-sche" },
                                        React.createElement("div", { className: "table-responsive", style: { background: "#fff" } },
                                            React.createElement("table", { className: "table table-hover" },
                                                React.createElement("thead", null,
                                                    React.createElement("tr", null,
                                                        React.createElement("th", { className: "text-center", role: "row" }, "#"),
                                                        React.createElement("th", null, "Kh\u00F3a h\u1ECDc"),
                                                        React.createElement("th", null, "Th\u1EDDi kh\u00F3a bi\u1EC3u"),
                                                        React.createElement("th", null, "T\u1ED5ng l\u01B0\u1EE3t \u0111\u0103ng k\u00FD"))),
                                                React.createElement("tbody", null, this.renderListSche()))))))))))));
    };
    return Home;
}(React.Component));
export default Home;
//# sourceMappingURL=home.js.map