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
var NotifyDanger = /** @class */ (function (_super) {
    __extends(NotifyDanger, _super);
    function NotifyDanger(props) {
        return _super.call(this, props) || this;
    }
    NotifyDanger.prototype.render = function () {
        return (React.createElement("div", { className: "jq-toast-single jq-has-icon jq-icon-error", style: { textAlign: 'left', display: 'block' } },
            React.createElement("span", { className: "jq-toast-loader jq-toast-loaded", style: {
                    WebkitTransition: 'width 3.1s ease-in',
                    OTransition: 'width 3.1s ease-in',
                    transition: 'width 3.1s ease-in',
                    backgroundColor: '#ff6849'
                } }),
            React.createElement("span", { className: "close-jq-toast-single" }, "\u00D7"),
            React.createElement("h2", { className: "jq-toast-heading" }, "Welcome to my Elite admin"),
            "Use the predefined ones, or specify a custom position object."));
    };
    return NotifyDanger;
}(React.Component));
export default NotifyDanger;
//# sourceMappingURL=notifyInfo.1.js.map