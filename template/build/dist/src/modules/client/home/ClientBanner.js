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
import CLientFooterBanner from "./ClientFooterBanner";
var ClientBanner = /** @class */ (function (_super) {
    __extends(ClientBanner, _super);
    function ClientBanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClientBanner.prototype.render = function () {
        return (React.createElement("div", { className: "banner" },
            React.createElement("div", { className: "home-banner-video" },
                React.createElement("h1", null, "HEADLINE T300X"),
                React.createElement("video", { autoPlay: true, loop: true, id: "video-background", poster: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148422/screencap-wheel.png", muted: true },
                    React.createElement("source", { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148422/Vienna-SD.mp4", type: "video/mp4" }))),
            React.createElement(CLientFooterBanner, null)));
    };
    return ClientBanner;
}(React.Component));
export default ClientBanner;
//# sourceMappingURL=ClientBanner.js.map