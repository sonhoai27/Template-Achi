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
import SearchBar from "./SearchBar";
import { BASEURL, RESOURCE } from "../../../config/const";
var ClientHeader = /** @class */ (function (_super) {
    __extends(ClientHeader, _super);
    function ClientHeader(props) {
        var _this = _super.call(this, props) || this;
        _this.showMenu = function () {
            if (_this.state.isShowingMenu === false) {
                document.body.style.overflowY = 'hidden';
            }
            else {
                document.body.style.overflowY = 'auto';
            }
            _this.setState({
                isShowingMenu: !_this.state.isShowingMenu
            });
        };
        _this.state = {
            isShowingMenu: false,
            isShowingSearch: false
        };
        return _this;
    }
    ClientHeader.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { id: "header-bar-desktop", className: "header-bar" },
                React.createElement("div", { className: "header-container" },
                    React.createElement("div", { className: "header-socials" },
                        React.createElement("p", { className: "phone" },
                            React.createElement("a", { href: "mailto://info.songxungdang@gmail.com", className: "phonenumber" },
                                React.createElement("span", { className: "mm-phone-number" }, "info.songxungdang@gmail.com"))),
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                React.createElement("a", { href: "https://www.facebook.com/NguyenMinhChi.MrShare/", target: "_blank" },
                                    React.createElement("i", { className: "icon-social-facebook" }))),
                            React.createElement("li", null,
                                React.createElement("a", { href: "https://www.youtube.com/channel/UCHCeMi9tGx9VCMSHHbscrLg?sub_confirmation=1", target: "_blank" },
                                    React.createElement("i", { className: " icon-social-youtube" }))))),
                    React.createElement("div", { className: "nav-utilities" },
                        React.createElement("ul", null,
                            React.createElement("li", { className: "nav-item hidden-xs hidden-sm white", id: "login" }, "Ph\u1EE5ng s\u1EF1 tu\u1ED5i tr\u1EBB vi\u1EC7t"))))),
            React.createElement("nav", { id: "desktop-nav", className: "clearfix" },
                React.createElement("div", { className: "header-container" },
                    React.createElement("div", null,
                        React.createElement("div", { className: "mobile-nav nav-item hidden-md hidden-lg", onClick: this.showMenu },
                            React.createElement("a", { id: "hamburger" },
                                React.createElement("span", null),
                                React.createElement("span", null),
                                React.createElement("span", null))),
                        React.createElement("ul", { className: "nav-logo" },
                            React.createElement("li", null,
                                React.createElement("a", { href: BASEURL },
                                    React.createElement("img", { src: RESOURCE + 'images/home/1-logo-mrshare.png' })))),
                        React.createElement("div", { className: "nav-right search search-header-icon" },
                            React.createElement("div", { className: "nav-item left", onClick: function () {
                                    _this.setState({
                                        isShowingSearch: !_this.state.isShowingSearch
                                    });
                                } },
                                React.createElement("a", { id: "search" },
                                    React.createElement("i", { className: "fa fa-fw fa-lg fa-search" }))))),
                    React.createElement("div", { className: "main-nav-wrapper" },
                        React.createElement("ul", { id: "menu-main-nav", className: 'nav-link hidden-xs hidden-sm ' + (this.state.isShowingMenu ? 'show' : '') },
                            React.createElement("li", { className: "menu-item" },
                                React.createElement("a", null,
                                    "Gi\u1EDBi thi\u1EC7u ",
                                    React.createElement("i", { className: "fa fa-angle-down" })),
                                React.createElement("ul", { className: "menu-sub" },
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "Ask Tony Anything", href: BASEURL + 'page/gioi-thieu' }, "V\u1EC1 Mr.Share")))),
                            React.createElement("li", { className: "menu-item" },
                                React.createElement("a", { title: "Kh\u00F3a h\u1ECDc" },
                                    "Kh\u00F3a h\u1ECDc ",
                                    React.createElement("i", { className: "fa fa-angle-down" })),
                                React.createElement("ul", { className: "menu-sub" },
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "T\u1EA5t c\u1EA3 kh\u00F3a h\u1ECDc", href: BASEURL + 'page/khoa-hoc' }, "T\u1EA5t c\u1EA3 kh\u00F3a h\u1ECDc")))),
                            React.createElement("li", { className: "menu-item" },
                                React.createElement("a", { title: "L\u1ECBch s\u1EF1 ki\u1EC7n", href: BASEURL + 'page/lich-su-kien' }, "L\u1ECBch s\u1EF1 ki\u1EC7n")),
                            React.createElement("li", { className: "menu-item" },
                                React.createElement("a", { title: "Video" },
                                    "Video ",
                                    React.createElement("i", { className: "fa fa-angle-down" })),
                                React.createElement("ul", { className: "menu-sub" },
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "T\u1EA5t c\u1EA3 video", href: BASEURL + 'page/video' }, "T\u1EA5t c\u1EA3 video")))),
                            React.createElement("li", { className: "menu-item" },
                                React.createElement("a", { title: "S\u1ED5 tay", href: BASEURL + 'page/sach' }, "S\u1ED5 tay")),
                            React.createElement("li", { className: "menu-item" },
                                React.createElement("a", { title: "Blog" },
                                    "Blog ",
                                    React.createElement("i", { className: "fa fa-angle-down" })),
                                React.createElement("ul", { className: "menu-sub" },
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "T\u1EA5t c\u1EA3 blog", href: BASEURL + 'page/blog' }, "T\u1EA5t c\u1EA3 blog")))),
                            React.createElement("li", { className: "menu-item" },
                                React.createElement("a", { title: "Qu\u00E0 t\u1EB7ng" },
                                    "Qu\u00E0 t\u1EB7ng ",
                                    React.createElement("i", { className: "fa fa-angle-down" })),
                                React.createElement("ul", { className: "menu-sub" },
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "T\u1EA5t c\u1EA3 qu\u00E0 t\u1EB7ng", href: BASEURL + 'page/qua-tang' }, "T\u1EA5t c\u1EA3 qu\u00E0 t\u1EB7ng")))))),
                    React.createElement("div", { className: "nav-right search search-header-icon" },
                        React.createElement("div", { className: "nav-item hidden-xs hidden-sm left", onClick: function () {
                                _this.setState({
                                    isShowingSearch: !_this.state.isShowingSearch
                                });
                            } },
                            React.createElement("a", { id: "search" },
                                React.createElement("i", { className: "fa fa-fw fa-lg fa-search" }))))),
                this.state.isShowingSearch ? React.createElement(SearchBar, null) : '')));
    };
    return ClientHeader;
}(React.Component));
export default ClientHeader;
//# sourceMappingURL=Header.js.map