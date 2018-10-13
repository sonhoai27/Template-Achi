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
import { RESOURCE } from './../../../config/const';
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
                        React.createElement("img", { src: RESOURCE + 'images/home/keys.jpg', alt: "", className: "img-responsive" })),
                    React.createElement("div", { className: "col-sm-6" },
                        React.createElement("h2", null, "Nh\u1EADn mi\u1EC5n ph\u00ED: 7 ch\u00ECa kh\u00F3a v\u00E0ng \u0111\u1EC3 s\u1ED1ng x\u1EE9ng \u0111\u00E1ng v\u1EDBi nh\u1EEFng \u201Cth\u00E1ng n\u0103m r\u1EF1c r\u1EE1\u201D."),
                        React.createElement("h4", null, "H\u01A1n 3.000 ngh\u00ECn ng\u01B0\u1EDDi \u0111\u00E3 \u0111\u0103ng k\u00FD nh\u1EADn \u0111\u1EC3 s\u1EDF h\u1EEFu cu\u1ED9c s\u1ED1ng x\u1EE9ng \u0111\u00E1ng v\u1EDBi tu\u1ED5i tr\u1EBB c\u1EE7a m\u00ECnh.")),
                    React.createElement("div", { className: "col-sm-3" },
                        React.createElement("div", { className: "form-get-access" },
                            React.createElement("input", { type: "text", placeholder: "H\u1ECD v\u00E0 t\u00EAn" }),
                            React.createElement("input", { type: "email", placeholder: "Email" }),
                            React.createElement("div", { className: "get-access btn btn-sm btn-info" },
                                "Nh\u1EADn qu\u00E0 ",
                                React.createElement("i", { className: "ti-angle-right" }))))))));
    };
    return CLientFooterBanner;
}(React.Component));
export default CLientFooterBanner;
//# sourceMappingURL=ClientFooterBanner.js.map