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
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";
import { connect } from "react-redux";
import { reListBlog } from "./reBlog";
import Pagination from "../../shared/Pagination";
var BlogList = /** @class */ (function (_super) {
    __extends(BlogList, _super);
    function BlogList(props) {
        var _this = _super.call(this, props) || this;
        _this.makeCurrentPage = function () {
            var page = window.location.href.split("page=")[1];
            if (page != undefined || page != null) {
                return page;
            }
            else {
                return "1";
            }
        };
        _this.getMoreBlog = function (page) {
            _this.props.reListBlog((page - 1) * 20);
        };
        _this.renderListBlog = function () {
            if (_this.props.resListBlog.list) {
                return _this.props.resListBlog.list.map(function (element, index) {
                    return (React.createElement("tr", { key: element.blog_id },
                        React.createElement("td", { className: "text-center", role: "row" }, index + 1),
                        React.createElement("td", null,
                            React.createElement(Link, { to: BASEURLADMIN + 'blog/detail/' + element.blog_id }, element.blog_title)),
                        React.createElement("td", null, element.blog_promo),
                        React.createElement("td", null, element.blog_created_date)));
                });
            }
            return React.createElement("h1", null, "Null");
        };
        return _this;
    }
    BlogList.prototype.componentDidMount = function () {
        this.props.reListBlog((parseInt(this.makeCurrentPage(), 10) - 1) * 20);
    };
    BlogList.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-12" },
                React.createElement("div", { className: "panel" },
                    React.createElement("div", { className: "panel-toolbar" },
                        React.createElement("div", { className: "panel-heading" }, "Qu\u1EA3n l\u00ED b\u00E0i vi\u1EBFt"),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement(Link, { to: BASEURLADMIN + 'blog/add' },
                                React.createElement("div", { className: "btn btn-xs btn-info" }, "Th\u00EAm m\u1EDBi")))),
                    React.createElement("div", { className: "content" },
                        React.createElement("div", { className: "table-responsive" },
                            React.createElement("table", { className: "table table-hover" },
                                React.createElement("thead", null,
                                    React.createElement("tr", null,
                                        React.createElement("th", { className: "text-center", role: "row" }, "#"),
                                        React.createElement("th", null, "T\u00EAn"),
                                        React.createElement("th", null, "Promo"),
                                        React.createElement("th", null, "Ng\u00E0y t\u1EA1o"))),
                                React.createElement("tbody", null, this.renderListBlog())))),
                    React.createElement("div", { className: "pg" },
                        React.createElement(Pagination, { initialPage: parseInt(this.makeCurrentPage(), 10), pageSize: 20, totalItems: this.props.resListBlog.count, onChangePage: function (e) { return _this.getMoreBlog(e.currentPage); } }))))));
    };
    return BlogList;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListBlog: storeState.reBlog.resListBlog
}); };
var mapDispatchToProps = {
    reListBlog: reListBlog
};
export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
//# sourceMappingURL=list.js.map