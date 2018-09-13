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
var CLientFooterBanner = /** @class */ (function (_super) {
    __extends(CLientFooterBanner, _super);
    function CLientFooterBanner(props) {
        return _super.call(this, props) || this;
    }
    CLientFooterBanner.prototype.render = function () {
        return (React.createElement("div", { className: "footer-banner col-xs-12" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-sm-3 footer-banner-img" },
                        React.createElement("img", { src: "https://brendon.com/wp-content/uploads/2018/02/Brendon-Burchard-Four-Breakthroughs_tablet.png", alt: "", className: "img-responsive" })),
                    React.createElement("div", { className: "col-sm-9" },
                        React.createElement("h2", null, "Free Access to Brendon\u2019s \u201CFour Breakthroughs\u201D:"),
                        React.createElement("h4", null, "Join 2 million subscribers! Get 4 new strategies every week on how to be more productive, confident, and happy."),
                        React.createElement("div", { className: "form-get-access" },
                            React.createElement("input", { type: "text", placeholder: "H\u1ECD v\u00E0 t\u00EAn" }),
                            React.createElement("input", { type: "email", placeholder: "email" }),
                            React.createElement("div", { className: "get-access btn btn-sm btn-info" },
                                "\u0110\u0103ng k\u00FD ",
                                React.createElement("i", { className: "ti-angle-right" }))))))));
    };
    return CLientFooterBanner;
}(React.Component));
export default CLientFooterBanner;
//# sourceMappingURL=ClientFooterBanner.js.map