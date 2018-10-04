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
            React.createElement("h2", { className: "jq-toast-heading" }, "Th\u1EA5t b\u1EA1i, vui l\u00F2ng xem l\u1EA1i h\u00E0nh \u0111\u1ED9ng v\u1EEBa th\u1EF1c hi\u1EC7n.")));
    };
    return NotifyDanger;
}(React.Component));
export default NotifyDanger;
//# sourceMappingURL=notifyDanger.js.map