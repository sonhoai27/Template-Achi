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
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer(props) {
        return _super.call(this, props) || this;
    }
    Footer.prototype.render = function () {
        return (React.createElement("div", { className: "col-xs-12 client-footer" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-sm-3" }),
                        React.createElement("div", { className: "col-sm-6 list-footer-menu" },
                            React.createElement("ul", null,
                                React.createElement("li", null,
                                    React.createElement("a", { href: "" }, "About")),
                                React.createElement("li", null,
                                    React.createElement("a", { href: "" }, "Events")),
                                React.createElement("li", null,
                                    React.createElement("a", { href: "" }, "Blogs")),
                                React.createElement("li", null,
                                    React.createElement("a", { href: "" }, "Source")))),
                        React.createElement("div", { className: "col-sm-3" })),
                    React.createElement("div", { className: "row footer-intro", style: { marginTop: 32 } },
                        React.createElement("div", { className: "col-sm-3" },
                            React.createElement("h3", null, "\u0110i\u1EC1u quan tr\u1ECDng")),
                        React.createElement("div", { className: "col-sm-3" },
                            React.createElement("h3", null, "B\u00E0i vi\u1EBFt hay")),
                        React.createElement("div", { className: "col-sm-3" },
                            React.createElement("h3", null, "k\u1EBFt n\u1ED1i v\u1EDBi Mr.Share"),
                            React.createElement("ul", { className: "list-icons-social" },
                                React.createElement("li", null,
                                    React.createElement("a", { href: "" },
                                        React.createElement("i", { className: "mdi mdi-facebook-box" }))),
                                React.createElement("li", null,
                                    React.createElement("a", { href: "" },
                                        React.createElement("i", { className: "mdi mdi-youtube-play" }))),
                                React.createElement("li", null,
                                    React.createElement("a", { href: "" },
                                        React.createElement("i", { className: "mdi mdi-facebook-messenger" }))))),
                        React.createElement("div", { className: "col-sm-3" },
                            React.createElement("h3", null, "\u0110\u1ECBa ch\u1EC9"),
                            React.createElement("ul", { className: "list-icons-address" },
                                React.createElement("li", null,
                                    React.createElement("i", { className: "ti-email" }),
                                    " yoloschoolvn@gmail.com"),
                                React.createElement("li", null,
                                    React.createElement("i", { className: "icon-phone" }),
                                    " 097 7545 374"),
                                React.createElement("li", null,
                                    React.createElement("i", { className: "icon-compass" }),
                                    " 26/3 Phan Chu Trinh, Ph\u01B0\u1EDDng Hi\u1EC7p Ph\u00FA, Qu\u1EADn 9, H\u1ED3 Ch\u00ED Minh")))),
                    React.createElement("div", { className: "row", style: { marginTop: 128, marginBottom: 16 } },
                        React.createElement("div", { className: "col-xs-12", style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },
                            React.createElement("p", null, "@ 2018 - NMC"),
                            React.createElement("p", null, "made with love at sonH")))))));
    };
    return Footer;
}(React.Component));
export default Footer;
//# sourceMappingURL=Footer.js.map