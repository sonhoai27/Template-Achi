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
var BreadCrumd = /** @class */ (function (_super) {
    __extends(BreadCrumd, _super);
    function BreadCrumd(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListUri = function () {
            return _this.props.uri.map(function (element) {
                return (React.createElement("li", { key: element.title, className: element.active ? 'active' : '' }, element.active ? element.title : React.createElement("a", { href: element.uri }, element.title)));
            });
        };
        return _this;
    }
    BreadCrumd.prototype.render = function () {
        return (React.createElement("div", { className: "row bg-title" },
            React.createElement("div", { className: "col-lg-3 col-md-4 col-sm-4 col-xs-12" },
                React.createElement("h4", { className: "page-title" }, this.props.title),
                " "),
            React.createElement("div", { className: "col-lg-9 col-sm-8 col-md-8 col-xs-12" },
                React.createElement("ol", { className: "breadcrumb" }, this.renderListUri()))));
    };
    return BreadCrumd;
}(React.Component));
export default BreadCrumd;
//# sourceMappingURL=breadcrumb.js.map