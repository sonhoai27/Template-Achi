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
        title: 'Admin',
        uri: '',
        active: false
    },
    {
        title: 'Blog',
        uri: '',
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
            React.createElement("div", { id: "wrapper" },
                React.createElement("div", { className: "container-fluid" },
                    React.createElement(BreadCrumd, { uri: breadCrumb, title: "B\u00E0i vi\u1EBFt" })))));
    };
    return Home;
}(React.Component));
export default Home;
//# sourceMappingURL=home.js.map