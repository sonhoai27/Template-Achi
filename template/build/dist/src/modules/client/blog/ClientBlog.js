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
import * as React from "react";
import { connect } from "react-redux";
import { reClientListBlog, reListCategory } from "../../admin/blog/reBlog";
import Pagination from "../../shared/Pagination";
import { Link } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/lib/animated";
import { BASEURL } from "../../../config/const";
import Helmet from "react-helmet";
import CLientFooterBanner from "../home/ClientFooterBanner";
var ClientBlog = /** @class */ (function (_super) {
    __extends(ClientBlog, _super);
    function ClientBlog(props) {
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
            _this.props.reClientListBlog((page - 1) * 20, _this.makeFilter());
        };
        _this.makeFilter = function () {
            var cate = _this.props.match.params.idCategory;
            if (cate) {
                return {
                    category: parseInt(cate.split("-")[0], 10)
                };
            }
            return {
                category: 0
            };
        };
        _this.renderListBlog = function () {
            if (_this.props.resClientListBlog.list) {
                return _this.props.resClientListBlog.list.map(function (element, index) {
                    return (React.createElement(React.Fragment, null,
                        React.createElement(Helmet, { style: [
                                {
                                    cssText: "\n                  .list-blogs .post.post-" + index + " div.post-item-container:hover:before{\n                    background: " + element.category_color + "\n                  }"
                                }
                            ] }),
                        React.createElement("div", { className: index + 1 === 1 || (index + 1) % 6 === 0
                                ? "col-sm-8"
                                : "col-sm-4" },
                            React.createElement("div", { className: "post post-" + index },
                                React.createElement(Link, { style: { backgroundImage: "url(" + element.blog_cover + ")" }, className: "post-item-image", to: BASEURL + "page/blog" + "/detail/" + element.blog_id },
                                    React.createElement("div", { className: "post-item-container color3" },
                                        React.createElement("img", { className: "ico-handshake cat-icon", src: element.category_icon }))),
                                React.createElement("div", { className: "post-content" },
                                    React.createElement("h6", { className: "micro" }, element.category_name),
                                    React.createElement("div", { className: "archive_cat_line", style: { backgroundColor: "#6d166d" } }),
                                    React.createElement("h4", { className: "post-title" },
                                        React.createElement(Link, { to: BASEURL + "page/blog" + "/detail/" + element.blog_id }, element.blog_title)),
                                    React.createElement(Link, { to: BASEURL + "page/blog" + "/detail/" + element.blog_id, className: "link-more link-more-grey" }, "Xem th\u00EAm"))))));
                });
            }
            return React.createElement("h1", null, "Null");
        };
        _this.options = function () {
            if (_this.props.resListCategory.list) {
                return _this.props.resListCategory.list.map(function (item) {
                    return {
                        value: item.category_id,
                        label: item.category_name,
                        alias: item.category_alias
                    };
                });
            }
            return [];
        };
        console.log(_this.props.match);
        return _this;
    }
    ClientBlog.prototype.componentDidMount = function () {
        this.props.reListCategory();
        this.props.reClientListBlog((parseInt(this.makeCurrentPage(), 10) - 1) * 20, this.makeFilter());
    };
    ClientBlog.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "col-xs-12 page-blog" },
                React.createElement("div", { className: "row page-blog_banner" },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-6" },
                                React.createElement("h1", { className: "white", style: { marginBottom: 64 } },
                                    React.createElement("b", null, "FROM A HISTORY-MAKING STANLEY CUP FINALS TO BUILDING A PERSONAL AI")),
                                React.createElement("p", { className: "white" }, "Where has Tony been recently \u2013 and what in the world is he up to? Below is the latest edition of the Tony Tracker, where you can see highlights from his journeys and read his narration of some of his favorite experiences. Watching history being made at the Stanley Cup Finals TONIGHT\u2019S GAME IS ONE"))))),
                React.createElement("div", { className: "row" },
                    React.createElement(CLientFooterBanner, null))),
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row intro-our-blog" },
                    React.createElement("div", { className: "col-xs-12  paddingY-64 text-center" },
                        React.createElement("h2", { className: "border-bottom", style: {
                                fontSize: 32,
                                textTransform: "uppercase",
                                letterSpacing: 4,
                                fontWeight: 700,
                                marginBottom: 16
                            } },
                            React.createElement("b", null, "Nguy\u1EC5n Minh Ch\u00ED - Blog")),
                        React.createElement("p", null, "What is an extraordinary life? What does that look like to you? Starting a business and growing it to a billion-dollar company? Improving the quality of your relationships? Feeling strong and healthy? Ultimately, an extraordinary life = life on your terms. The Tony Robbins' blog is a collection of the teachings of Tony Robbins, the powerful strategies and tools he has employed over 40 years of helping others achieve their vision of an extraordinary quality of life. Discover how to achieve massive success and long-lasting fulfillment, too. Start today with the articles, videos and other resources we\u2019ve made available here to help you on your journey to the life you desire and deserve."))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-sm-12" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-4" }),
                            React.createElement("div", { className: "col-sm-4", style: {
                                    marginBottom: 32
                                } },
                                React.createElement(Select, { className: "custom-select-category", closeMenuOnSelect: false, components: makeAnimated(), onChange: function (item) {
                                        if (item.value !== 0) {
                                            window.location.href =
                                                BASEURL +
                                                    "page/blog/danh-muc/" +
                                                    item.value +
                                                    "-" +
                                                    item.alias;
                                        }
                                        else {
                                            window.location.href = BASEURL + "page/blog";
                                        }
                                    }, options: __spread(this.options(), [
                                        {
                                            value: 0,
                                            label: "Tất cả"
                                        }
                                    ]) })),
                            React.createElement("div", { className: "col-sm-4" })))),
                React.createElement("div", { className: "row list-blogs" }, this.renderListBlog()),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-xs-12" },
                        React.createElement("div", { className: "pg" },
                            React.createElement(Pagination, { initialPage: parseInt(this.makeCurrentPage(), 10), pageSize: 20, totalItems: this.props.resClientListBlog.count, onChangePage: function (e) { return _this.getMoreBlog(e.currentPage); } })))))));
    };
    return ClientBlog;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resClientListBlog: storeState.reBlog.resClientListBlog,
    resListCategory: storeState.reBlog.resListCategory
}); };
var mapDispatchToProps = {
    reClientListBlog: reClientListBlog,
    reListCategory: reListCategory
};
export default connect(mapStateToProps, mapDispatchToProps)(ClientBlog);
//# sourceMappingURL=ClientBlog.js.map