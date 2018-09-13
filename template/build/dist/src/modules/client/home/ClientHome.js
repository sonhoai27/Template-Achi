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
import ClientBanner from "./ClientBanner";
import ClientIntroProfile from "./ClientIntroProfile";
import ClientListTopSen from "./ClientListTopSen";
import ClientFollow from "./ClientFollow";
import ClientHomeBlog from "./ClientHomeBlog";
import ClientHomeSource from "./ClientHomeSourceEbook";
import CLientFooterBanner from "./ClientFooterBanner";
import Footer from "../client-shared/Footer";
import { RESOURCE } from "../../../config/const";
import { Helmet } from "react-helmet";
var ClientHome = /** @class */ (function (_super) {
    __extends(ClientHome, _super);
    function ClientHome(props) {
        return _super.call(this, props) || this;
    }
    ClientHome.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Helmet, null,
                React.createElement("link", { rel: "stylesheet", href: RESOURCE + "css/client.css" }),
                React.createElement("link", { rel: "stylesheet", href: RESOURCE + "css/mobile.css", media: "screen and (max-width: 769px)" })),
            React.createElement(ClientHeader, null),
            React.createElement(ClientBanner, null),
            React.createElement(ClientIntroProfile, null),
            React.createElement("div", { className: "bg-gradient-grey" },
                React.createElement(ClientListTopSen, null),
                React.createElement(ClientFollow, null)),
            React.createElement(ClientHomeBlog, null),
            React.createElement(ClientHomeSource, null),
            React.createElement("div", { className: "banner" },
                React.createElement(CLientFooterBanner, null)),
            React.createElement(Footer, null)));
    };
    return ClientHome;
}(React.Component));
export default ClientHome;
//# sourceMappingURL=ClientHome.js.map