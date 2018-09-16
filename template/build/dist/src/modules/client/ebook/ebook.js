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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import EbookHeader from "./com/header";
import ClientHeader from "../client-shared/Header";
import { RESOURCE } from "../../../config/const";
import Footer from "../client-shared/Footer";
import { Helmet } from "react-helmet";
import Collapse from 'rc-collapse';
import Slider from "react-slick";
var Panel = Collapse.Panel;
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
};
var EbookLadingPage = /** @class */ (function (_super) {
    __extends(EbookLadingPage, _super);
    function EbookLadingPage(props) {
        return _super.call(this, props) || this;
    }
    EbookLadingPage.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Helmet, null,
                React.createElement("link", { rel: "stylesheet", type: "text/css", href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" }),
                React.createElement("link", { rel: "stylesheet", type: "text/css", href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" })),
            React.createElement(ClientHeader, null),
            React.createElement(EbookHeader, null),
            React.createElement("div", { className: "col-xs-12 ebook-intro paddingY-128" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-xs-12" },
                                React.createElement("p", { className: "text justify" }, "M\u1EBFn ch\u00E0o b\u1EA1n,"),
                                React.createElement("p", { className: "text justify" }, "B\u1EA1n l\u00E0 m\u1ED9t ng\u01B0\u1EDDi khao kh\u00E1t, n\u1ED7 l\u1EF1c c\u00F3 m\u1ED9t cu\u1ED9c s\u1ED1ng ch\u1EA5t l\u01B0\u1EE3ng nh\u01B0ng hi\u1EC7n t\u1EA1i:"),
                                React.createElement("p", { className: "text justify" }, "B\u1EA1n th\u1EE9c d\u1EADy t\u1EEBng ng\u00E0y v\u00E0 ch\u1EC9 quanh qu\u1EA9n l\u00E0m nh\u1EEFng vi\u1EC7c m\u00ECnh th\u01B0\u1EDDng l\u00E0m, c\u1EA3m th\u1EA5y r\u1EA5t t\u1EBB nh\u1EA1t, kh\u00F4ng th\u1EA5y gi\u00E1 tr\u1ECB c\u1EE7a b\u1EA3n th\u00E2n, ng\u00E0y qua ng\u00E0y v\u00E0 d\u1EA7n c\u1EA3m th\u1EA5y th\u00F4i b\u00E2y gi\u1EDD s\u1ED1ng \u201Csao c\u0169ng \u0111\u01B0\u1EE3c\u201D."),
                                React.createElement("p", { className: "text justify" }, "\u0110\u00E3 nhi\u1EC1u l\u1EA7n b\u1EA1n \u00FD th\u1EE9c r\u1EB1ng m\u00ECnh c\u1EA7n ph\u1EA3i s\u1EAFp x\u1EBFp l\u1EA1i cu\u1ED9c s\u1ED1ng t\u1ED1t h\u01A1n, s\u1ED1ng c\u00F3 k\u1EF7 lu\u1EADt m\u1ED7i ng\u00E0y nh\u01B0ng r\u1ED3i m\u1ED9t m\u1EDBi h\u1ED7n \u0111\u1ED9n nh\u01B0 t\u00F4 m\u00EC t\u00F4m c\u1EE9 qu\u00E2y quanh l\u1EA5y b\u1EA1n kh\u00F4ng tha l\u00E0m b\u1EA1n ki\u1EC7t qu\u1EC7 s\u1EE9c l\u1EF1c."),
                                React.createElement("p", { className: "text justify" }, "B\u1EA1n \u0111ang c\u1ED1 g\u1EAFng t\u1EF1 \u0111\u1ED9ng vi\u00EAn m\u00ECnh m\u1ED7i ng\u00E0y ph\u1EA3i s\u1ED1ng \u201Cch\u1EA5t\u201D h\u01A1n, k\u1EF7 lu\u1EADt \u0111\u01B0\u1EE3c m\u1ED9t v\u00E0i ng\u00E0y r\u1ED3i b\u1EA1n l\u1EA1i \u0111\u1EC3 \u201Ccon qu\u1EF7 b\u00EAn trong\u201D ng\u1EF1 tr\u1ECB b\u1EA1n, m\u1ECDi th\u1EE9 d\u1EA7n nh\u01B0 \u201Cch\u1EE9ng n\u00E0o t\u1EADt n\u1EA5y\u201D."),
                                React.createElement("p", { className: "text justify" }, "B\u1EA1n \u0111ang khao kh\u00E1t t\u00ECm ki\u1EBFm m\u1ED9t c\u00F4ng c\u1EE5 \u0111\u1EC3 ki\u1EBFn t\u1EA1o cu\u1ED9c s\u1ED1ng ch\u1EA5t l\u01B0\u1EE3ng, k\u1EF7 lu\u1EADt v\u1EDBi b\u1EA3n th\u00E2n, t\u1EA1o cho m\u00ECnh nh\u1EEFng th\u00F3i quen t\u1ED1t, c\u00F3 ni\u1EC1m vui, s\u1EF1 h\u1EA1nh ph\u00FAc, s\u1ED1ng c\u00F3 m\u1EE5c \u0111\u00EDch m\u1ED7i m\u1ED9t ng\u00E0y. R\u1EA5t c\u00F3 th\u1EC3 th\u1EE9 b\u1EA1n \u0111ang t\u00ECm ki\u1EBFm n\u1EB1m b\u00EAn d\u01B0\u1EDBi\u2026.")))))),
            React.createElement("div", { className: "col-xs-12 about-ebook paddingY-128" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-xs-12" },
                            React.createElement("h2", { className: "white text-center" }, "V\u1EC0 CU\u1ED0N DA"),
                            React.createElement("div", { className: "colelem", id: "u1713" }),
                            React.createElement("p", { className: "white text-center", style: {
                                    marginBottom: 64
                                } },
                                "M\u1ED7i ng\u01B0\u1EDDi sinh ra tr\u00EAn \u0111\u1EDDi \u0111\u00E3 l\u00E0 m\u1ED9t \u0111\u1EB7c \u00E2n, h\u00E3y s\u1ED1ng sao cho x\u1EE9ng \u0111\u00E1ng v\u1EDBi \u0111\u1EB7c \u00E2n \u0111\u00F3.",
                                React.createElement("br", null),
                                "D\u01B0\u1EDBi \u0111\u00E2y l\u00E0 m\u1ED9t ph\u1EA7n nh\u1EEFng kh\u00EDa c\u1EA1nh trong cu\u1ED1n da n\u00E0y \u0111i c\u00F9ng b\u1EA1n tr\u00EAn ch\u1EB7ng h\u00E0nh tr\u00ECnh \u0111\u00F3."))),
                    React.createElement("div", { className: "row", style: { display: "flex", alignItems: "center" } },
                        React.createElement("div", { className: "col-sm-3" },
                            React.createElement("ul", null,
                                React.createElement("li", null,
                                    React.createElement("i", { className: "ti-pulse" }),
                                    " \u0110\u1EB7t ra nh\u1EEFng m\u1EE5c ti\u00EAu r\u00F5 r\u00E0ng m\u1ED7i ng\u00E0y, tu\u1EA7n, th\u00E1ng, n\u0103m"),
                                React.createElement("li", null,
                                    React.createElement("i", { className: "ti-pulse" }),
                                    " L\u1EADp k\u1EBF ho\u1EA1ch h\u00E0nh \u0111\u1ED9ng chi ti\u1EBFt cho nh\u1EEFng m\u1EE5c ti\u00EAu"),
                                React.createElement("li", null,
                                    React.createElement("i", { className: "ti-pulse" }),
                                    " Ghi nh\u1EADn s\u1EF1 th\u00E0nh c\u00F4ng m\u1ED7i ng\u00E0y"),
                                React.createElement("li", null,
                                    React.createElement("i", { className: "ti-pulse" }),
                                    " S\u00E1ng t\u1EA1o \u00FD t\u01B0\u1EDFng \u0111\u1ED9c \u0111\u00E1o"))),
                        React.createElement("div", { className: "col-sm-6" },
                            React.createElement("img", { src: RESOURCE + "images/client/ebook2.png", alt: "", style: { margin: "auto" }, className: "img-responsive" })),
                        React.createElement("div", { className: "col-sm-3" },
                            React.createElement("ul", null,
                                React.createElement("li", null,
                                    React.createElement("i", { className: "ti-pulse" }),
                                    " \u0110o l\u01B0\u1EDDng hi\u1EC7u qu\u1EA3 h\u1ECDc t\u1EADp/c\u00F4ng vi\u1EC7c m\u1ED7i ng\u00E0y"),
                                React.createElement("li", null,
                                    React.createElement("i", { className: "ti-pulse" }),
                                    " Ghi ch\u00E9p nh\u1EEFng b\u00E0i h\u1ECDc t\u1EEB cu\u1ED9c s\u1ED1ng"),
                                React.createElement("li", null,
                                    React.createElement("i", { className: "ti-pulse" }),
                                    " Ghi nh\u1EADt k\u00FD c\u00E1 nh\u00E2n m\u1ED7i tu\u1EA7n"),
                                React.createElement("li", null,
                                    React.createElement("i", { className: "ti-pulse" }),
                                    " C\u00E2u n\u00F3i truy\u1EC1n c\u1EA3m h\u1EE9ng h\u00E0nh \u0111\u1ED9ng")))))),
            React.createElement("div", { className: "col-xs-12 detail-ebook paddingY-128" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-xs-12" },
                        React.createElement("h2", { className: "white text-center" }, "L\u1EE2I \u00CDCH N\u1ED4I B\u1EACT"),
                        React.createElement("p", { className: "text-center white" }, "- N\u1ED5i b\u1EADt c\u1EE7a s\u00E1ch -"),
                        React.createElement("div", { className: "colelem", id: "u1713" }))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-4 item" },
                                React.createElement("div", null,
                                    React.createElement("i", { className: "ti-harddrives" })),
                                React.createElement("div", null,
                                    React.createElement("h4", { className: "white" },
                                        React.createElement("b", null, "Business Topics")),
                                    React.createElement("p", { className: "white" }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.."))),
                            React.createElement("div", { className: "col-sm-4 item" },
                                React.createElement("div", null,
                                    React.createElement("i", { className: "ti-harddrives" })),
                                React.createElement("div", null,
                                    React.createElement("h4", { className: "white" },
                                        React.createElement("b", null, "Business Topics")),
                                    React.createElement("p", { className: "white" }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.."))),
                            React.createElement("div", { className: "col-sm-4 item" },
                                React.createElement("div", null,
                                    React.createElement("i", { className: "ti-harddrives" })),
                                React.createElement("div", null,
                                    React.createElement("h4", { className: "white" },
                                        React.createElement("b", null, "Business Topics")),
                                    React.createElement("p", { className: "white" }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.."))),
                            React.createElement("div", { className: "col-sm-4 item" },
                                React.createElement("div", null,
                                    React.createElement("i", { className: "ti-harddrives" })),
                                React.createElement("div", null,
                                    React.createElement("h4", { className: "white" },
                                        React.createElement("b", null, "Business Topics")),
                                    React.createElement("p", { className: "white" }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.."))),
                            React.createElement("div", { className: "col-sm-4 item" },
                                React.createElement("div", null,
                                    React.createElement("i", { className: "ti-harddrives" })),
                                React.createElement("div", null,
                                    React.createElement("h4", { className: "white" },
                                        React.createElement("b", null, "Business Topics")),
                                    React.createElement("p", { className: "white" }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.."))),
                            React.createElement("div", { className: "col-sm-4 item" },
                                React.createElement("div", null,
                                    React.createElement("i", { className: "ti-harddrives" })),
                                React.createElement("div", null,
                                    React.createElement("h4", { className: "white" },
                                        React.createElement("b", null, "Business Topics")),
                                    React.createElement("p", { className: "white" }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.."))))))),
            React.createElement("div", { className: "col-xs-12 preview-ebook paddingY-128" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-xs-12" },
                            React.createElement("h1", { className: "text-center white" }, "XEM TR\u01AF\u1EDAC"),
                            React.createElement("p", { className: "text-center white" }, "- BEST EBOOK FEATURES -"),
                            React.createElement("div", { className: "preview-ebook_action" },
                                React.createElement("i", { className: "ti-control-play" }),
                                React.createElement("i", { className: "ti-image" })))))),
            React.createElement("div", { className: "col-xs-12 comment-reader paddingY-128" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-xs-12" },
                            React.createElement("h2", { className: "white text-center" }, "C\u1EA2M NH\u1EACN NG\u01AF\u1EDCI S\u1EDE H\u1EEEU"),
                            React.createElement("p", { className: "text-center white" }, "- N\u1ED5i b\u1EADt c\u1EE7a s\u00E1ch -"),
                            React.createElement("div", { className: "colelem", id: "u1713" }))),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-sm-2" }),
                        React.createElement("div", { className: "col-sm-8" },
                            React.createElement(Slider, __assign({}, settings, { className: "comment-reader_slider" }),
                                React.createElement("div", { className: "item" },
                                    React.createElement("img", { src: RESOURCE + "images/client/clients/client.png", className: "img-responsive" }),
                                    React.createElement("div", { className: "white" },
                                        React.createElement("p", null, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur"),
                                        React.createElement("p", { className: "primary-color" }, "\u2014 AUSTIN DOE, PROGRAMMER - MNO ORGANIZATION"))),
                                React.createElement("div", { className: "item" },
                                    React.createElement("img", { src: RESOURCE + "images/client/clients/client.png", className: "img-responsive" }),
                                    React.createElement("div", { className: "white" },
                                        React.createElement("p", null, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur."),
                                        React.createElement("p", { className: "primary-color" }, "\u2014 AUSTIN DOE, PROGRAMMER - MNO ORGANIZATION"))))),
                        React.createElement("div", { className: "col-sm-2" })))),
            React.createElement("div", { className: "col-xs-12 author-ebook paddingY-128" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-xs-12" },
                        React.createElement("h2", { className: "white text-center" }, "V\u1EC1 t\u00E1c gi\u1EA3"),
                        React.createElement("p", { className: "text-center white" }, "- T\u00E1c gi\u1EA3 c\u1EE7a s\u00E1ch -"),
                        React.createElement("div", { className: "colelem", id: "u1713" }))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "container", style: {
                            marginTop: 64
                        } },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-6 author-ebook_avatar" },
                                React.createElement("img", { src: RESOURCE + 'images/client/man.png', alt: "", className: "img-responsive" })),
                            React.createElement("div", { className: "col-sm-6" },
                                React.createElement(Collapse, { accordion: true },
                                    React.createElement(Panel, { header: "Nguy\u1EC5n Minh Ch\u00ED l\u00E0 ai?", headerClass: "my-header-class" }, "this is panel content"),
                                    React.createElement(Panel, { header: "Nguy\u1EC5n Minh Ch\u00ED l\u00E0 ai?" }, "this is panel content2 or other"),
                                    React.createElement(Panel, { header: "Theo d\u00F5i" }, "this is panel content2 or other"))))))),
            React.createElement("div", { className: "col-xs-12 question-ebook paddingY-128" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-xs-12" },
                        React.createElement("h2", { className: "white text-center" }, "C\u00E2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p"),
                        React.createElement("div", { className: "colelem", id: "u1713" }))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "container", style: {
                            marginTop: 64
                        } },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-2" }),
                            React.createElement("div", { className: "col-sm-8" },
                                React.createElement(Collapse, { accordion: true },
                                    React.createElement(Panel, { header: "Nguy\u1EC5n Minh Ch\u00ED l\u00E0 ai?", headerClass: "my-header-class" }, "this is panel content"),
                                    React.createElement(Panel, { header: "Nguy\u1EC5n Minh Ch\u00ED l\u00E0 ai?" }, "this is panel content2 or other"),
                                    React.createElement(Panel, { header: "Theo d\u00F5i" }, "this is panel content2 or other"))),
                            React.createElement("div", { className: "col-sm-2" }))))),
            React.createElement(Footer, null)));
    };
    return EbookLadingPage;
}(React.Component));
export default EbookLadingPage;
//# sourceMappingURL=ebook.js.map