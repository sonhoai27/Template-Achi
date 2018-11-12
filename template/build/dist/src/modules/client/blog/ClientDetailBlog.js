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
import { reDetailBlogAlias, reClientListBlogCategory } from "../../admin/blog/reBlog";
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
                        React.createElement("a", { href: BASEURL + "page/blog/detail/" + element.blog_alias },
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
        if (preProps.resDetailBlogAlias != this.props.resDetailBlogAlias) {
            this.setState({
                blog: this.props.resDetailBlogAlias.list
            });
            this.props.reClientListBlogCategory(this.props.resDetailBlogAlias.list.blog_id_category);
        }
    };
    ClientDetailBlog.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
        this.props.reDetailBlogAlias(this.props.match.params.idBlog);
        axios.put(API + "blog/views", {
            key: this.props.match.params.idBlog
        });
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
                                    React.createElement("b", null, this.state.blog.blog_views)),
                                React.createElement("p", null,
                                    React.createElement("iframe", { src: 'https://www.facebook.com/plugins/like.php?href=http://nguyenminhchi.com/page/blog/detail/' + this.props.match.params.idBlog + '&width=156&layout=button_count&action=like&size=small&show_faces=false&share=true&height=46&appId=1440913602698681', width: 156, height: 46, style: { border: 'none', overflow: 'hidden' }, scrolling: "no", frameBorder: 0 }))),
                            React.createElement("div", { className: "col-xs-12 page-detail-blog_content_body", dangerouslySetInnerHTML: {
                                    __html: this.state.blog.blog_content
                                } }),
                            React.createElement("div", { className: "col-xs-12" },
                                React.createElement("div", { className: "fb-comments", "data-href": 'http://nguyenminhchi.com/page/blog/detail/' + this.props.match.params.idBlog, "data-width": '100%', "data-numposts": 5 })),
                            React.createElement("div", { className: "col-xs-12 margin-t-64" },
                                React.createElement("h4", null, "T\u00E1c gi\u1EA3:"),
                                React.createElement("div", { className: "row margin-t-32" },
                                    React.createElement("div", { className: "col-sm-3" },
                                        React.createElement("img", { src: this.state.blog.author_avatar, alt: "", className: "img-responsive", width: '90%' })),
                                    React.createElement("div", { className: "col-sm-9" },
                                        React.createElement("h2", null, this.state.blog.author_name),
                                        React.createElement("p", null, this.state.blog.author_intro))))))),
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
    resDetailBlogAlias: storeState.reBlog.resDetailBlogAlias,
    resClientListBlogCategory: storeState.reBlog.resClientListBlogCategory
}); };
var mapDispatchToProps = {
    reDetailBlogAlias: reDetailBlogAlias,
    reClientListBlogCategory: reClientListBlogCategory
};
export default connect(mapStateToProps, mapDispatchToProps)(ClientDetailBlog);
//# sourceMappingURL=ClientDetailBlog.js.map