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
import { BASEURL } from "../../../config/const";
var NewMenu = /** @class */ (function (_super) {
    __extends(NewMenu, _super);
    function NewMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.eventSearch = function (e) {
            var value = e.target.value;
            if (e.keyCode === 13 && value !== "") {
                window.location.assign(BASEURL + 'page' + ("/tim-kiem/" + value));
            }
            return '';
        };
        _this.state = {
            isShowingSearch: false
        };
        return _this;
    }
    NewMenu.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            this.state.isShowingSearch ? (React.createElement("div", { className: "search-bar row" },
                React.createElement("div", { className: "col-sm-4" }),
                React.createElement("div", { className: "col-sm-4" },
                    React.createElement("input", { autoFocus: true, placeholder: "B\u1EA1n mu\u1ED1n t\u00ECm g\u00EC", onKeyUp: function (e) { return _this.eventSearch(e); } })),
                React.createElement("div", { className: "col-sm-4" },
                    React.createElement("i", { className: "ti-close", onClick: function () {
                            _this.setState({
                                isShowingSearch: !_this.state.isShowingSearch
                            });
                        } })))) : (""),
            React.createElement("div", { className: "new-version-menu navbar-fixed-top" },
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
                                        React.createElement("i", { className: " icon-social-youtube" }))),
                                React.createElement("li", { className: "search" },
                                    React.createElement("i", { className: "icon-magnifier", onClick: function () {
                                            _this.setState({
                                                isShowingSearch: !_this.state.isShowingSearch
                                            });
                                        } })))),
                        React.createElement("div", { className: "nav-utilities" },
                            React.createElement("ul", null,
                                React.createElement("li", { className: "nav-item hidden-xs hidden-sm white", id: "login" }, "Ph\u1EE5ng s\u1EF1 tu\u1ED5i tr\u1EBB Vi\u1EC7t"))))),
                React.createElement("div", { className: "container" },
                    React.createElement("nav", { className: "navbar navbar-default" },
                        React.createElement("div", { className: "container-fluid" },
                            React.createElement("div", { className: "navbar-header" },
                                React.createElement("a", { className: "navbar-brand", href: BASEURL },
                                    React.createElement("img", { src: "http://nguyenminhchi.com/template/public/images/home/1-logo-mrshare.png", alt: "Nguy\u1EC5n Minh Ch\u00ED" })),
                                React.createElement("button", { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navbar1" },
                                    React.createElement("span", { className: "sr-only" }, "Toggle navigation"),
                                    React.createElement("span", { className: "icon-bar" }),
                                    React.createElement("span", { className: "icon-bar" }),
                                    React.createElement("span", { className: "icon-bar" }))),
                            React.createElement("div", { id: "navbar1", className: "navbar-collapse collapse" },
                                React.createElement("ul", { className: "nav navbar-nav" },
                                    React.createElement("li", { className: "dropdown" },
                                        React.createElement("a", { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-expanded": "false" },
                                            "Gi\u1EDBi thi\u1EC7u ",
                                            React.createElement("span", { className: "caret" })),
                                        React.createElement("ul", { className: "dropdown-menu", role: "menu" },
                                            React.createElement("li", null,
                                                React.createElement("a", { title: "Ask Tony Anything", href: BASEURL + "page/gioi-thieu" }, "V\u1EC1 Mr.Share")))),
                                    React.createElement("li", { className: "dropdown" },
                                        React.createElement("a", { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-expanded": "false" },
                                            "Kh\u00F3a h\u1ECDc ",
                                            React.createElement("span", { className: "caret" })),
                                        React.createElement("ul", { className: "dropdown-menu", role: "menu" },
                                            React.createElement("li", null,
                                                React.createElement("a", { title: "T\u1EA5t c\u1EA3 kh\u00F3a h\u1ECDc", href: BASEURL + "page/khoa-hoc" }, "T\u1EA5t c\u1EA3 kh\u00F3a h\u1ECDc")))),
                                    React.createElement("li", null,
                                        React.createElement("a", { title: "L\u1ECBch s\u1EF1 ki\u1EC7n", href: BASEURL + "page/lich-su-kien" }, "L\u1ECBch s\u1EF1 ki\u1EC7n")),
                                    React.createElement("li", { className: "dropdown" },
                                        React.createElement("a", { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-expanded": "false" },
                                            "Video ",
                                            React.createElement("span", { className: "caret" })),
                                        React.createElement("ul", { className: "dropdown-menu", role: "menu" },
                                            React.createElement("li", null,
                                                React.createElement("a", { title: "T\u1EA5t c\u1EA3 video", href: BASEURL + "page/video" }, "T\u1EA5t c\u1EA3 video")))),
                                    React.createElement("li", null,
                                        React.createElement("a", { title: "S\u1ED5 tay", href: "http://sotay.songxungdang.com" }, "S\u1ED5 tay")),
                                    React.createElement("li", { className: "dropdown" },
                                        React.createElement("a", { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-expanded": "false" },
                                            "Blog ",
                                            React.createElement("span", { className: "caret" })),
                                        React.createElement("ul", { className: "dropdown-menu", role: "menu" },
                                            React.createElement("li", null,
                                                React.createElement("a", { title: "T\u1EA5t c\u1EA3 blog", href: BASEURL + "page/blog" }, "T\u1EA5t c\u1EA3 blog")))),
                                    React.createElement("li", { className: "dropdown" },
                                        React.createElement("a", { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-expanded": "false" },
                                            "Qu\u00E0 t\u1EB7ng ",
                                            React.createElement("span", { className: "caret" })),
                                        React.createElement("ul", { className: "dropdown-menu", role: "menu" },
                                            React.createElement("li", null,
                                                React.createElement("a", { title: "T\u1EA5t c\u1EA3 qu\u00E0 t\u1EB7ng", href: BASEURL + "page/qua-tang" }, "T\u1EA5t c\u1EA3 qu\u00E0 t\u1EB7ng"))))))))))));
    };
    return NewMenu;
}(React.Component));
export default NewMenu;
//# sourceMappingURL=NewMenu.js.map