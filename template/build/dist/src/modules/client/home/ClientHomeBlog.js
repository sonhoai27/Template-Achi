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
import axios from 'axios';
import { API } from "../../../config/const";
import { BASEURL } from './../../../config/const';
import AutofitImage from "../../shared/CropImage";
var ClientHomeBlog = /** @class */ (function (_super) {
    __extends(ClientHomeBlog, _super);
    function ClientHomeBlog(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListBlogs = function () {
            if (_this.state.blogs.list) {
                return _this.state.blogs.list.map(function (element) {
                    return (React.createElement("div", { className: "item col-sm-4" },
                        React.createElement("div", { className: "social-callout" },
                            React.createElement(AutofitImage, { frameWidth: "100%", frameHeight: "200px", imgSrc: element.blog_cover }),
                            React.createElement("h4", { style: { marginTop: 32, fontWeight: 600 } },
                                React.createElement("a", { title: element.blog_title, href: BASEURL + 'page/blog/detail/' + element.blog_id }, element.blog_title)))));
                });
            }
            return '';
        };
        _this.state = {
            blogs: []
        };
        return _this;
    }
    ClientHomeBlog.prototype.componentDidMount = function () {
        var _this = this;
        axios.get(API + 'blog/all/home')
            .then(function (result) {
            console.log(result.data);
            _this.setState({
                blogs: result.data
            });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ClientHomeBlog.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "row section-heading" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-sm-3" },
                            React.createElement("h2", { style: { marginBottom: 0, fontWeight: 600, color: "#fff" } }, "Blog")),
                        React.createElement("div", { className: "col-sm-9" },
                            React.createElement("h2", { className: "text-center", style: { marginBottom: 0, fontWeight: 600, color: "#fff" } }, "BLOG C\u1EE6A MR.SHARE"))))),
            React.createElement("div", { className: "container list-blog", style: { marginTop: 64, marginBottom: 64 } },
                React.createElement("div", { className: "row" }, this.renderListBlogs()))));
    };
    return ClientHomeBlog;
}(React.Component));
export default ClientHomeBlog;
//# sourceMappingURL=ClientHomeBlog.js.map