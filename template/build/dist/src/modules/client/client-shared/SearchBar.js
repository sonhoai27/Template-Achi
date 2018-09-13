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
var SearchBar = /** @class */ (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchBar.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "hidden-search", style: { display: "block" } },
                React.createElement("h3", null, "What can we help you find?"),
                React.createElement("div", { className: "search-bar" },
                    React.createElement("div", { className: "content-search" },
                        React.createElement("input", { type: "text", placeholder: "B\u1EA1n mu\u1ED1n t\u00ECm g\u00EC?" }),
                        React.createElement("i", { className: "fa fa-search" }))),
                React.createElement("div", { className: "hot-blog" },
                    React.createElement("ul", null,
                        React.createElement("li", null, "K\u1EF9 n\u0103ng s\u1ED1ng"),
                        React.createElement("li", null, "Ca h\u00E1t"),
                        React.createElement("li", null, "Ti\u1EBFng anh"),
                        React.createElement("li", null, "Ph\u00E1t tri\u1EC3n b\u1EA3n th\u00E2n"))))));
    };
    return SearchBar;
}(React.Component));
export default SearchBar;
//# sourceMappingURL=SearchBar.js.map