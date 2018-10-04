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
var ClientGift = /** @class */ (function (_super) {
    __extends(ClientGift, _super);
    function ClientGift(props) {
        return _super.call(this, props) || this;
    }
    ClientGift.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("form", { action: "https://app.getresponse.com/add_subscriber.html", acceptCharset: "utf-8", method: "post" },
                "email: ",
                React.createElement("input", { type: "text", name: "email" }),
                React.createElement("br", null),
                React.createElement("input", { type: "hidden", name: "campaign_token", defaultValue: "6xTmh" }),
                React.createElement("input", { type: "submit", defaultValue: "Subscribe" }))));
    };
    return ClientGift;
}(React.Component));
export default ClientGift;
//# sourceMappingURL=gift.js.map