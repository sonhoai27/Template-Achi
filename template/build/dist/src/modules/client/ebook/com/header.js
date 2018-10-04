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
import { RESOURCE } from "../../../../config/const";
var EbookHeader = /** @class */ (function (_super) {
    __extends(EbookHeader, _super);
    function EbookHeader(props) {
        return _super.call(this, props) || this;
    }
    EbookHeader.prototype.render = function () {
        return (React.createElement("div", { className: "container-fluid client-ebook-header" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-sm-6 buy-now" },
                        React.createElement("div", null,
                            React.createElement("p", null, "\u201CM\u1ED9t cu\u1ED9c s\u1ED1ng x\u1EE9ng \u0111\u00E1ng kh\u00F4ng t\u1EF1 nhi\u00EAn sinh ra m\u00E0 \u0111\u01B0\u1EE3c gieo tr\u1ED3ng, cu\u1ED1n da n\u00E0y s\u1EBD ch\u1EC9 d\u1EABn r\u1EA5t chi ti\u1EBFt v\u00E0 b\u01B0\u1EDBc \u0111i c\u00F9ng b\u1EA1n tr\u00EAn h\u00E0nh tr\u00ECnh \u0111\u00F3\u201D"),
                            React.createElement("p", null))),
                    React.createElement("div", { className: "col-sm-6" },
                        React.createElement("img", { style: {
                                width: "80%",
                                float: "right"
                            }, src: RESOURCE + "images/client/ebook2.png", alt: "" }))))));
    };
    return EbookHeader;
}(React.Component));
export default EbookHeader;
//# sourceMappingURL=header.js.map