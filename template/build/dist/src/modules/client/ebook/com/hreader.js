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
                            React.createElement("p", null, "What is Riopagez Ebook?"),
                            React.createElement("p", null, "Trendy Landing Page To Sell Your EBook")),
                        React.createElement("button", { className: "btn btn-sm" }, "BUY NOW")),
                    React.createElement("div", { className: "col-sm-6" },
                        React.createElement("img", { style: {
                                width: '80%',
                                float: 'right'
                            }, src: RESOURCE + 'images/client/ebook2.png', alt: "" }))))));
    };
    return EbookHeader;
}(React.Component));
export default EbookHeader;
//# sourceMappingURL=hreader.js.map