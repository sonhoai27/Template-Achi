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
import ClientHeader from "./client-shared/Header";
import Footer from "./client-shared/Footer";
import CLientFooterBanner from "./home/ClientFooterBanner";
import axios from 'axios';
import { API, BASEURL } from "../../config/const";
import Helmet from 'react-helmet';
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search(props) {
        var _this = _super.call(this, props) || this;
        _this.makeUrl = function (element) {
            if (typeof element.url == 'string' && element.url !== "" && !Number(element.url)) {
                return (React.createElement("a", { href: element.url }, "XEM TH\u00CAM"));
            }
            else if (element.url == "" && Number(element.is_blog) && element.is_video == "1") {
                return React.createElement("a", { href: BASEURL + 'page/khoa-hoc/video/' + element.alias }, "XEM TH\u00CAM");
            }
            else if (element.url == "" && Number(element.is_blog) && element.is_video == "0") {
                return React.createElement("a", { href: BASEURL + 'page/khoa-hoc/' + element.alias + '-' + element.is_blog + "-" + element.source_id }, "XEM TH\u00CAM");
            }
            return (React.createElement("a", { href: BASEURL + 'page/blog/detail/' + element.alias }, "XEM TH\u00CAM"));
        };
        _this.renderList = function () {
            return _this.state.list.map(function (element) {
                return (React.createElement("div", { key: element.alias },
                    React.createElement("div", { className: "col-xs-12" },
                        React.createElement("div", { className: "row list-courses__item", style: { marginBottom: 64, width: '100%' } },
                            React.createElement("div", { className: "col-sm-4", "data-wow-duration": "2s" },
                                React.createElement("img", { src: element.image, className: "img-responsive" })),
                            React.createElement("div", { className: "col-sm-8" },
                                React.createElement("h2", null,
                                    React.createElement("b", null, element.title)),
                                React.createElement("p", null, element.promo),
                                React.createElement("div", { className: "get-link btn", style: { marginTop: 32, float: "right" } }, _this.makeUrl(element)))))));
            });
        };
        _this.state = {
            list: []
        };
        return _this;
    }
    Search.prototype.componentDidMount = function () {
        var _this = this;
        axios.get(API + 'blog/search/' + this.props.match.params.key)
            .then(function (result) {
            console.log(result);
            _this.setState({
                list: result.data.list
            });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    Search.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Helmet, null,
                React.createElement("title", null, "T\u00ECm ki\u1EBFm - Nguy\u1EC5n Minh Ch\u00ED | S\u1ED1ng X\u1EE9ng \u0110\u00E1ng")),
            React.createElement(ClientHeader, null),
            React.createElement("div", { className: "col-xs-12 page-source list-course" },
                React.createElement("div", { className: "row page-source_banner", style: {
                        backgroundImage: 'url(http://nguyenminhchi.com/api/uploads/images/302d805c8eeb049bb9a71539622800000.jpg)'
                    } },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-6" },
                                React.createElement("h2", { className: "white" },
                                    React.createElement("b", null,
                                        "T\u00ECm ki\u1EBFm cho '",
                                        this.props.match.params.key,
                                        "'")))))),
                React.createElement("div", { className: "row" },
                    React.createElement(CLientFooterBanner, null)),
                React.createElement("div", { className: "row page-source_list-source lich-su-kien" },
                    React.createElement("div", { className: "container paddingY-64" },
                        React.createElement("div", { className: "row" }, this.renderList())))),
            React.createElement(Footer, null)));
    };
    return Search;
}(React.Component));
export default Search;
//# sourceMappingURL=search.js.map