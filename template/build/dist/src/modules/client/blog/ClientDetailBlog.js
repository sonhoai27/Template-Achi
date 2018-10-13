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
import axios from "axios";
import AutofitImage from "../../shared/CropImage";
import { reDetailBlog, reClientListBlogCategory } from "../../admin/blog/reBlog";
import Helmet from "react-helmet";
import { BASEURL, API } from "../../../config/const";
import CLientFooterBanner from "../home/ClientFooterBanner";
var ClientDetailBlog = /** @class */ (function (_super) {
    __extends(ClientDetailBlog, _super);
    function ClientDetailBlog(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListBlogCategory = function () {
            if (_this.props.resClientListBlogCategory.list) {
                return _this.props.resClientListBlogCategory.list.map(function (element) {
                    return (React.createElement("div", { className: "col-sm-3" },
                        React.createElement("a", { href: BASEURL + "page/blog/detail/" + element.blog_id },
                            React.createElement(AutofitImage, { clasName: "img-responsive", frameWidth: "100%", frameHeight: "200px", imgSrc: element.blog_cover }),
                            React.createElement("h4", null, element.blog_title))));
                });
            }
            return React.createElement("h1", null, "NULL");
        };
        _this.state = {
            blog: {}
        };
        return _this;
    }
    ClientDetailBlog.prototype.componentDidUpdate = function (preProps) {
        if (preProps.resDetailBlog != this.props.resDetailBlog) {
            this.setState({
                blog: this.props.resDetailBlog.list
            });
            this.props.reClientListBlogCategory(this.props.resDetailBlog.list.blog_id_category);
        }
    };
    ClientDetailBlog.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
        this.props.reDetailBlog(this.props.match.params.idBlog);
        axios.put(API + "blog/views/" + this.props.match.params.idBlog);
    };
    ClientDetailBlog.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Helmet, null,
                React.createElement("title", null, this.state.blog.blog_title)),
            React.createElement("div", { className: "col-sm-12 page-detail-blog" },
                React.createElement("div", { className: "row page-detail-blog_banner", style: {
                        backgroundImage: "url(" + this.state.blog.blog_cover + ")",
                        paddingTop: 128,
                        paddingBottom: 128,
                        backgroundAttachment: "fixed",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    } }),
                React.createElement("div", { className: "row" },
                    React.createElement(CLientFooterBanner, null)),
                React.createElement("div", { className: "row page-detail-blog_content paddingY-128" },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-xs-12 page-detail-blog_content_title" },
                                React.createElement("p", null, this.state.blog.blog_title),
                                React.createElement("p", { dangerouslySetInnerHTML: {
                                        __html: this.state.blog.blog_promo
                                    } }),
                                React.createElement("span", { className: "article-author" },
                                    "\u0110\u0103ng b\u1EDFi: ",
                                    React.createElement("b", null, this.state.blog.author_name),
                                    React.createElement("br", null),
                                    "L\u01B0\u1EE3t xem: ",
                                    React.createElement("b", null, this.state.blog.blog_views))),
                            React.createElement("div", { className: "col-xs-12 page-detail-blog_content_body", dangerouslySetInnerHTML: {
                                    __html: this.state.blog.blog_content
                                } })))),
                React.createElement("hr", null),
                React.createElement("div", { className: "row page-detail-blog_author" },
                    React.createElement("div", { className: "container paddingY-64" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-12" },
                                React.createElement("div", { className: "media", style: { border: "none" } },
                                    React.createElement("div", { className: "media-left" },
                                        React.createElement("a", null,
                                            React.createElement("img", { alt: "64x64", className: "media-object", src: "https://secure.gravatar.com/avatar/c0308f547359f5bdc519a301b32ba34c?s=96&d=mm&r=g", "data-holder-rendered": "true", style: {
                                                    width: "128px",
                                                    height: "128px",
                                                    borderRadius: "100%"
                                                } }),
                                            " ")),
                                    React.createElement("div", { className: "media-body" },
                                        React.createElement("h4", { className: "media-heading" }, "Media heading"),
                                        " Tony Robbins is an entrepreneur, bestselling author, philanthropist and the nation\u2019s #1 Life and Business Strategist. Author of five internationally bestselling books, including the recent New York Times #1 best-seller UNSHAKEABLE, Mr. Robbins has empowered more than 50 million people from 100 countries through his audio, video and life training programs. He created the #1 personal and professional development program of all time, and more than 4 million people have attended his live seminars.")))))),
                React.createElement("hr", null),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "container paddingY-64" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-xs-12" },
                                React.createElement("h3", { style: { marginBottom: 32 } }, "B\u00E0i vi\u1EBFt li\u00EAn quan"))),
                        React.createElement("div", { className: "row" }, this.renderListBlogCategory()))))));
    };
    return ClientDetailBlog;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resDetailBlog: storeState.reBlog.resDetailBlog,
    resClientListBlogCategory: storeState.reBlog.resClientListBlogCategory
}); };
var mapDispatchToProps = {
    reDetailBlog: reDetailBlog,
    reClientListBlogCategory: reClientListBlogCategory
};
export default connect(mapStateToProps, mapDispatchToProps)(ClientDetailBlog);
//# sourceMappingURL=ClientDetailBlog.js.map