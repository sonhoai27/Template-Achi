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
                React.createElement("video", { autoPlay: true, loop: true, id: "video-background", poster: "http://nguyenminhchi.com/api/uploads/images/0c70204d9323542f870e1540141200000.png", muted: true },
                    React.createElement("source", { src: "http://nguyenminhchi.com/template/public/images/intro.MP4", type: "video/mp4" }))),
            React.createElement(CLientFooterBanner, null)));
    };
    return ClientBanner;
}(React.Component));
export default ClientBanner;
//# sourceMappingURL=ClientBanner.js.map