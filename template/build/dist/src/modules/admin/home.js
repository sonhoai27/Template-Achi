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
import BreadCrumd from "./shared/breadcrumb";
var breadCrumb = [
    {
        title: "Admin",
        uri: "",
        active: false
    },
    {
        title: "Home",
        uri: "",
        active: true
    }
];
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        return _super.call(this, props) || this;
    }
    Home.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Header, null),
            React.createElement("div", { id: "page-wrapper" },
                React.createElement("div", { className: "container-fluid" },
                    React.createElement(BreadCrumd, { uri: breadCrumb, title: "Trang ch\u1EE7" }),
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-4" },
                                React.createElement("div", { className: "white-box analytics-info" },
                                    React.createElement("h3", { className: "box-title" }, "Li\u00EAn h\u1EC7 h\u00F4m nay"),
                                    React.createElement("ul", { className: "list-inline two-part" },
                                        React.createElement("li", null,
                                            React.createElement("div", { id: "sparklinedash" },
                                                React.createElement("i", { className: "ti-stats-up text-success num" }))),
                                        React.createElement("li", { className: "text-right" },
                                            React.createElement("span", { className: "counter num text-success" }, "659"))))),
                            React.createElement("div", { className: "col-sm-4" },
                                React.createElement("div", { className: "white-box analytics-info" },
                                    React.createElement("h3", { className: "box-title" }, "\u0110\u0103ng k\u00FD h\u00F4m nay"),
                                    React.createElement("ul", { className: "list-inline two-part" },
                                        React.createElement("li", null,
                                            React.createElement("div", { id: "sparklinedash" },
                                                React.createElement("i", { className: "ti-stats-up text-success num" }))),
                                        React.createElement("li", { className: "text-right" },
                                            React.createElement("span", { className: "counter num text-success" }, "659"))))),
                            React.createElement("div", { className: "col-sm-4" },
                                React.createElement("div", { className: "white-box analytics-info" },
                                    React.createElement("h3", { className: "box-title" }, "Xem Blog"),
                                    React.createElement("ul", { className: "list-inline two-part" },
                                        React.createElement("li", null,
                                            React.createElement("div", { id: "sparklinedash" },
                                                React.createElement("i", { className: "ti-stats-up text-success num" }))),
                                        React.createElement("li", { className: "text-right" },
                                            React.createElement("span", { className: "counter num text-success" }, "659")))))),
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-4" },
                                React.createElement("div", { className: "white-box analytics-info" },
                                    React.createElement("h3", { className: "box-title" }, "\u0110\u0103ng k\u00FD kh\u00F3a h\u1ECDc"))),
                            React.createElement("div", { className: "col-sm-4" },
                                React.createElement("div", { className: "white-box analytics-info" },
                                    React.createElement("h3", { className: "box-title" }, "Nh\u1EADn qu\u00E0"))),
                            React.createElement("div", { className: "col-sm-4" },
                                React.createElement("div", { className: "white-box analytics-info" },
                                    React.createElement("h3", { className: "box-title" }, "Li\u00EAn h\u1EC7")))))))));
    };
    return Home;
}(React.Component));
export default Home;
//# sourceMappingURL=home.js.map