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
import { connect } from "react-redux";
import { reListUIForPage } from "../ui/reUI";
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListPageUI = function () {
            if (_this.props.resListUIForPage) {
                return _this.props.resListUIForPage.map(function (element) {
                    return (React.createElement("tr", null,
                        React.createElement("td", { className: "text-center" }, element.ui_id),
                        React.createElement("td", null,
                            React.createElement(Link, { to: BASEURLADMIN + "ui/page/detail/" + element.ui_id },
                                React.createElement("span", { className: "text-muted" }, element.ui_name))),
                        React.createElement("td", null, element.ui_type == 0 ? "Khóa học" : "Trang")));
                });
            }
            return null;
        };
        return _this;
    }
    Page.prototype.componentDidMount = function () {
        this.props.reListUIForPage();
    };
    Page.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-8" },
                    React.createElement("div", { className: "panel" },
                        React.createElement("div", { className: "panel-toolbar" },
                            React.createElement("div", { className: "panel-heading" }, "Danh s\u00E1ch Page")),
                        React.createElement("div", { className: "table-responsive" },
                            React.createElement("table", { className: "table table-hover manage-u-table" },
                                React.createElement("thead", null,
                                    React.createElement("tr", null,
                                        React.createElement("th", { className: "text-center" }, "#"),
                                        React.createElement("th", null, "T\u00EAn"),
                                        React.createElement("td", null, "Lo\u1EA1i"))),
                                React.createElement("tbody", null, this.renderListPageUI()))))))));
    };
    return Page;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListUIForPage: storeState.reUI.resListUIForPage
}); };
var mapDispatchToProps = {
    reListUIForPage: reListUIForPage
};
export default connect(mapStateToProps, mapDispatchToProps)(Page);
//# sourceMappingURL=page.js.map