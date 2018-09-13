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
import { BASEURLADMIN } from "../../../config/const";
var Error = /** @class */ (function (_super) {
    __extends(Error, _super);
    function Error() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Error.prototype.render = function () {
        return (React.createElement("section", { id: "wrapper", className: "error-page" },
            React.createElement("div", { className: "error-box" },
                React.createElement("div", { className: "error-body text-center" },
                    React.createElement("h1", { className: "text-danger" }, "400"),
                    React.createElement("h3", { className: "text-uppercase" }, "Page Not Found !"),
                    React.createElement("p", { className: "text-muted m-t-30 m-b-30" }, "YOU SEEM TO BE TRYING TO FIND HIS WAY HOME"),
                    React.createElement("a", { href: BASEURLADMIN, className: "btn btn-danger btn-rounded waves-effect waves-light m-b-40" }, "Back to home")),
                React.createElement("footer", { className: "footer text-center" }, "2018 \u00A9 NMC Admin."))));
    };
    return Error;
}(React.Component));
export default Error;
//# sourceMappingURL=error.js.map