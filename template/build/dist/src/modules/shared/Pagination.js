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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
import * as React from 'react';
var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    function Pagination(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            pager: {},
            isOne: false
        };
        return _this;
    }
    Pagination.prototype.componentWillMount = function () {
        // set page if items array isn't empty
        if (this.props.totalItems) {
            this.setPage(this.props.initialPage);
        }
    };
    Pagination.prototype.componentDidUpdate = function (prevProps, prevState) {
        // reset page if items array has changed
        if (this.props.totalItems !== prevProps.totalItems) {
            this.setPage(this.props.initialPage);
        }
    };
    Pagination.prototype.setPage = function (page) {
        var _a = this.props, totalItems = _a.totalItems, pageSize = _a.pageSize;
        var pager = this.state.pager;
        if (page < 1 || page > pager.totalPages) {
            return;
        }
        // get new pager object for specified page
        pager = this.getPager(totalItems, page, pageSize);
        // update state
        this.setState({ pager: pager });
        // // call change page function in parent component
        if (this.state.isOne === true && page == 1) {
            this.props.onChangePage(pager);
        }
        else if (page > 1) {
            this.props.onChangePage(pager);
            this.setState({
                isOne: true
            });
        }
    };
    Pagination.prototype.getPager = function (totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;
        // default page size is 10
        pageSize = pageSize || 10;
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = __spread(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    Pagination.prototype.render = function () {
        var _this = this;
        var pager = this.state.pager;
        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }
        return (React.createElement("nav", { "aria-label": "Page navigation" },
            React.createElement("ul", { className: "pagination justify-content-center pagination-separate pagination-curved pagination-flat mb-1" },
                React.createElement("li", { className: pager.currentPage === 1 ? 'page-item' : 'page-item' },
                    React.createElement("a", { className: "page-link", onClick: function () { return _this.setPage(1); } }, "Trang \u0111\u1EA7u")),
                React.createElement("li", { className: pager.currentPage === 1 ? 'page-item' : 'page-item' },
                    React.createElement("a", { className: "page-link", onClick: function () { return _this.setPage(pager.currentPage - 1); } }, "L\u00F9i")),
                pager.pages.map(function (page, index) {
                    return React.createElement("li", { key: index, className: pager.currentPage === page ? 'page-item active' : 'page-item' },
                        React.createElement("a", { className: "page-link", onClick: function () { return _this.setPage(page); } }, page));
                }),
                React.createElement("li", { className: pager.currentPage === pager.totalPages ? 'page-item' : 'page-item' },
                    React.createElement("a", { className: "page-link", onClick: function () { return _this.setPage(pager.currentPage + 1); } }, "Ti\u1EBFn")),
                React.createElement("li", { className: pager.currentPage === pager.totalPages ? 'page-item' : 'page-item' },
                    React.createElement("a", { className: "page-link", onClick: function () { return _this.setPage(pager.totalPages); } }, "Trang cu\u1ED1i")))));
    };
    Pagination.defaultProps = {
        initialPage: 1,
        pageSize: 10
    };
    return Pagination;
}(React.Component));
export default Pagination;
//# sourceMappingURL=Pagination.js.map