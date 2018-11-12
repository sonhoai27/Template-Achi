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
import { BASEURL, API } from './../../../config/const';
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListBlogs = function () {
            if (_this.state.blogs.list) {
                return _this.state.blogs.list.map(function (element, index) {
                    if (index < 4) {
                        return (React.createElement("div", { key: element.blog_id },
                            React.createElement("h5", { style: { marginTop: 16, fontWeight: 300, lineHeight: 1.4, fontSize: 17 } },
                                React.createElement("a", { className: "white", title: element.blog_title, href: BASEURL + 'page/blog/detail/' + element.blog_alias }, element.blog_title)),
                            React.createElement("hr", null)));
                    }
                    return '';
                });
            }
            return '';
        };
        _this.state = {
            blogs: {}
        };
        return _this;
    }
    Footer.prototype.componentDidMount = function () {
        var _this = this;
        axios.get(API + 'blog/all/home')
            .then(function (result) {
            _this.setState({
                blogs: result.data
            });
        })
            .catch(function (err) {
        });
    };
    Footer.prototype.render = function () {
        return (React.createElement("div", { className: "col-xs-12 client-footer" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-sm-3" }),
                        React.createElement("div", { className: "col-sm-6 list-footer-menu" },
                            React.createElement("ul", null,
                                React.createElement("li", null,
                                    React.createElement("a", { href: BASEURL + 'page/gioi-thieu' }, "Gi\u1EDBi thi\u1EC7u")),
                                React.createElement("li", null,
                                    React.createElement("a", { href: BASEURL + 'page/khoa-hoc' }, "Kh\u00F3a h\u1ECDc")),
                                React.createElement("li", null,
                                    React.createElement("a", { href: BASEURL + 'page/blog' }, "Blog")),
                                React.createElement("li", null,
                                    React.createElement("a", { href: 'http://sotay.songxungdang.com' }, "S\u1ED5 tay")))),
                        React.createElement("div", { className: "col-sm-3" })),
                    React.createElement("div", { className: "row footer-intro", style: { marginTop: 32 } },
                        React.createElement("div", { className: "col-sm-3" },
                            React.createElement("h3", null, "\u0110i\u1EC1u quan tr\u1ECDng"),
                            React.createElement("ul", null,
                                React.createElement("li", null,
                                    React.createElement("a", { href: BASEURL + 'page/blog' },
                                        React.createElement("i", { className: "fa fa-chevron-right" }),
                                        " \u0110\u1ECDc Blog")),
                                React.createElement("li", null,
                                    React.createElement("a", { href: BASEURL + 'page/video' },
                                        React.createElement("i", { className: "fa fa-chevron-right" }),
                                        " Video")),
                                React.createElement("li", null,
                                    React.createElement("a", { href: BASEURL + 'page/qua-tang' },
                                        React.createElement("i", { className: "fa fa-chevron-right" }),
                                        " Qu\u00E0 T\u1EB7ng")),
                                React.createElement("li", null,
                                    React.createElement("a", { href: 'http://sotay.songxungdang.com' },
                                        React.createElement("i", { className: "fa fa-chevron-right" }),
                                        " S\u1ED5 Tay")),
                                React.createElement("li", null,
                                    React.createElement("a", { href: BASEURL + 'page/khoa-hoc' },
                                        React.createElement("i", { className: "fa fa-chevron-right" }),
                                        " C\u00E1c Kh\u00F3a H\u1ECDc \u0110\u1EA7y T\u1EF1 H\u00E0o")))),
                        React.createElement("div", { className: "col-sm-3" },
                            React.createElement("h3", null, "B\u00E0i vi\u1EBFt hay"),
                            this.renderListBlogs()),
                        React.createElement("div", { className: "col-sm-3" },
                            React.createElement("h3", null, "k\u1EBFt n\u1ED1i v\u1EDBi Mr.Share"),
                            React.createElement("iframe", { src: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNguyenMinhChi.MrShare%2F&tabs&width=340&height=154&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=1440913602698681", width: '100%', height: 154, style: { border: "none", overflow: "hidden" }, scrolling: "no", frameBorder: 0, allowTransparency: true }),
                            React.createElement("ul", { className: "list-icons-social margin-t-16" },
                                React.createElement("li", null,
                                    React.createElement("a", { href: "https://www.facebook.com/NguyenMinhChi.MrShare/", target: "_blank" },
                                        React.createElement("i", { className: "icon-social-facebook" }))),
                                React.createElement("li", null,
                                    React.createElement("a", { href: "https://www.youtube.com/channel/UCHCeMi9tGx9VCMSHHbscrLg?sub_confirmation=1", target: "_blank" },
                                        React.createElement("i", { className: "icon-social-youtube" }))),
                                React.createElement("li", null,
                                    React.createElement("a", { href: "https://www.facebook.com/groups/MatMaThoiSinhVien/", target: "_blank" },
                                        React.createElement("i", { className: "icon-paper-plane" }))))),
                        React.createElement("div", { className: "col-sm-3" },
                            React.createElement("h3", null, "H\u1ECDc vi\u1EC7n th\u1EBF h\u1EC7 s\u1ED1ng x\u1EE9ng \u0111\u00E1ng"),
                            React.createElement("ul", { className: "list-icons-address" },
                                React.createElement("li", null, "info.songxungdang@gmail.com"),
                                React.createElement("li", null, " 097 7545 374"),
                                React.createElement("li", null, "26/3 Phan Chu Trinh, Ph\u01B0\u1EDDng Hi\u1EC7p Ph\u00FA, Qu\u1EADn 9, H\u1ED3 Ch\u00ED Minh")))),
                    React.createElement("div", { className: "row", style: { marginTop: 128, marginBottom: 16 } },
                        React.createElement("div", { className: "col-xs-12", style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            } },
                            React.createElement("p", null, "@ 2018 | Nguy\u1EC5n Minh Ch\u00ED - Mr.Share"),
                            React.createElement("p", null, "\u2764 sonH")))))));
    };
    return Footer;
}(React.Component));
export default Footer;
//# sourceMappingURL=Footer.js.map