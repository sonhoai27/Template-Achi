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
var NotifyInfo = /** @class */ (function (_super) {
    __extends(NotifyInfo, _super);
    function NotifyInfo(props) {
        return _super.call(this, props) || this;
    }
    NotifyInfo.prototype.render = function () {
        return (React.createElement("div", { className: "jq-toast-single jq-has-icon jq-icon-info", style: { textAlign: 'left', display: 'block' } },
            React.createElement("span", { className: "jq-toast-loader jq-toast-loaded", style: { WebkitTransition: 'width 2.6s ease-in', OTransition: 'width 2.6s ease-in', transition: 'width 2.6s ease-in', backgroundColor: '#ff6849' } }),
            React.createElement("span", { className: "close-jq-toast-single" }, "\u00D7"),
            React.createElement("h2", { className: "jq-toast-heading" }, "Welcome to my Elite admin"),
            "Use the predefined ones, or specify a custom position object."));
    };
    return NotifyInfo;
}(React.Component));
export default NotifyInfo;
//# sourceMappingURL=notifyInfo.js.map