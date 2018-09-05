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
var NotifyWarning = /** @class */ (function (_super) {
    __extends(NotifyWarning, _super);
    function NotifyWarning(props) {
        return _super.call(this, props) || this;
    }
    NotifyWarning.prototype.render = function () {
        return (React.createElement("div", { className: "jq-toast-single jq-has-icon jq-icon-warning", style: { textAlign: 'left', display: 'block' } },
            React.createElement("h2", { className: "jq-toast-heading" }, "C\u1EA3nh b\u00E1o, vui l\u00F2ng xem l\u1EA1i h\u00E0nh \u0111\u1ED9ng v\u1EEBa th\u1EF1c hi\u1EC7n.")));
    };
    return NotifyWarning;
}(React.Component));
export default NotifyWarning;
//# sourceMappingURL=notifyWarning.js.map