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
import { Route } from "react-router-dom";
import BlogAdd from "./add";
import Header from "../shared/header";
import BreadCrumd from "../shared/breadcrumb";
import BlogList from "./list";
import BlogDetail from "./detail";
import Category from "./category/category";
import Author from "./author/author";
var breadCrumb = [
    {
        title: "Admin",
        uri: "",
        active: false
    },
    {
        title: "Blog",
        uri: "",
        active: true
    }
];
var BlogRouter = /** @class */ (function (_super) {
    __extends(BlogRouter, _super);
    function BlogRouter(props) {
        return _super.call(this, props) || this;
    }
    BlogRouter.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Header, null),
            React.createElement("div", { id: "page-wrapper" },
                React.createElement("div", { className: "container-fluid" },
                    React.createElement(BreadCrumd, { uri: breadCrumb, title: "B\u00E0i vi\u1EBFt" }),
                    React.createElement(Route, { exact: true, path: "" + this.props.match.url, component: BlogList }),
                    React.createElement(Route, { path: this.props.match.url + "/add", component: BlogAdd }),
                    React.createElement(Route, { path: this.props.match.url + "/detail/:idBlog", component: BlogDetail }),
                    React.createElement(Route, { path: this.props.match.url + "/category", component: Category }),
                    React.createElement(Route, { path: this.props.match.url + "/author", component: Author })))));
    };
    return BlogRouter;
}(React.Component));
export default BlogRouter;
//# sourceMappingURL=router.js.map