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
                            React.createElement("a", { href: "tel://1-800-488-6040", className: "phonenumber" },
                                React.createElement("span", { className: "mm-phone-number" }, "1-800-488-6040"))),
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                React.createElement("a", { href: "https://www.facebook.com/TonyRobbins/", target: "_blank" },
                                    React.createElement("i", { className: "icon-social-facebook" }))),
                            React.createElement("li", null,
                                React.createElement("a", { href: "https://twitter.com/tonyrobbins", target: "_blank" },
                                    React.createElement("i", { className: " icon-social-youtube" }))))),
                    React.createElement("div", { className: "nav-utilities" },
                        React.createElement("ul", null,
                            React.createElement("li", { className: "nav-item hidden-xs hidden-sm", id: "login" },
                                React.createElement("a", { href: "#", className: "login-trigger", id: "members-portal" }, "Login")))))),
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
                                React.createElement("a", { href: "/" },
                                    React.createElement("img", { src: "https://www.tonyrobbins.com/wp-content/themes/tonyrobbins2016/images/tr-logo-blk-on-wht.svg" })))),
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
                                React.createElement("a", { title: "Ask Tony", href: "/ask-tony/" },
                                    "Ask Tony ",
                                    React.createElement("i", { className: "fa fa-angle-down" })),
                                React.createElement("ul", { className: "menu-sub" },
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "Ask Tony Anything", href: "/ask-tony/" }, "Ask Tony Anything")))),
                            React.createElement("li", { className: "menu-item" },
                                React.createElement("a", { title: "About", href: "/biography/" },
                                    "About ",
                                    React.createElement("i", { className: "fa fa-angle-down" })),
                                React.createElement("ul", { className: "menu-sub" },
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "About Tony Robbins", href: "https://www.tonyrobbins.com/biography/" }, "About Tony Robbins")),
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "Company Culture", href: "/company-culture/" }, "Company Culture")),
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "Contribution", href: "https://www.tonyrobbins.com/giving-back/" }, "Contribution")))),
                            React.createElement("li", { className: "menu-item" },
                                React.createElement("a", { title: "Store", href: "https://store.tonyrobbins.com" },
                                    "Store ",
                                    React.createElement("i", { className: "fa fa-angle-down" })),
                                React.createElement("ul", { className: "menu-sub" },
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "All Products", href: "http://store.tonyrobbins.com/collections/all/" }, "All Products")),
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "Training Systems", href: "https://store.tonyrobbins.com/collections/breakthrough-app" }, "Training Systems")))),
                            React.createElement("li", { className: "menu-item" },
                                React.createElement("a", { title: "Experiences", href: "/events/" },
                                    "Experiences ",
                                    React.createElement("i", { className: "fa fa-angle-down" })),
                                React.createElement("ul", { className: "menu-sub" },
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "All Upcoming Events", href: "/events/" }, "All Upcoming Events")),
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "Unleash the Power Within", href: "/events/unleash-the-power-within/new-york-area-11-08-2018/" }, "Unleash the Power Within")),
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "Date With Destiny", href: "/events/date-with-destiny/florida-12-07-2018/" }, "Date With Destiny")),
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "Life & Wealth Mastery", href: "/events/life-wealth-mastery/" }, "Life & Wealth Mastery")),
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "Leadership Academy", href: "/events/leadership-academy/san-diego-08-26-2018/" }, "Leadership Academy")),
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "Business Mastery", href: "/events/business-mastery/palm-beach/" }, "Business Mastery")),
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "Business Results Training", href: "https://www.tonyrobbins.com/business-results-training/" }, "Business Results Training")),
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "Platinum Partnership", href: "/platinum-partnership/" }, "Platinum Partnership")),
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "Become a Crew Member", href: "/community/" }, "Become a Crew Member")))),
                            React.createElement("li", { className: "menu-item" },
                                React.createElement("a", { title: "Coaching", href: "/coaching/" },
                                    "Coaching ",
                                    React.createElement("i", { className: "fa fa-angle-down" })),
                                React.createElement("ul", { className: "menu-sub" },
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "Results Coaching", href: "/coaching/results-coaching/" }, "Results Coaching")))),
                            React.createElement("li", { className: "menu-item" },
                                React.createElement("a", { title: "Blog", href: "/blog/" },
                                    "Blog ",
                                    React.createElement("i", { className: "fa fa-angle-down" })),
                                React.createElement("ul", { className: "menu-sub" },
                                    React.createElement("li", { className: "menu-item" },
                                        React.createElement("a", { title: "Read All Blogs", href: "/blog/" }, "Read All Blogs")))))),
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