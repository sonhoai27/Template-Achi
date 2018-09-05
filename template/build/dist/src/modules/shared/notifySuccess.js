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
var NotifySuccess = /** @class */ (function (_super) {
    __extends(NotifySuccess, _super);
    function NotifySuccess(props) {
        return _super.call(this, props) || this;
    }
    NotifySuccess.prototype.render = function () {
        return (React.createElement("div", { className: "jq-toast-single jq-has-icon jq-icon-success", style: { textAlign: "left", display: "block" } },
            React.createElement("h2", { className: "jq-toast-heading" }, "Th\u00E0nh c\u00F4ng")));
    };
    return NotifySuccess;
}(React.Component));
export default NotifySuccess;
//# sourceMappingURL=notifySuccess.js.map