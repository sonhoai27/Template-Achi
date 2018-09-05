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
import EbookHeader from "./com/hreader";
var EbookLadingPage = /** @class */ (function (_super) {
    __extends(EbookLadingPage, _super);
    function EbookLadingPage(props) {
        return _super.call(this, props) || this;
    }
    EbookLadingPage.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(EbookHeader, null)));
    };
    return EbookLadingPage;
}(React.Component));
export default EbookLadingPage;
//# sourceMappingURL=ebook.js.map