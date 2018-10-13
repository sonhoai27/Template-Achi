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
import { RESOURCE } from "../../../config/const";
import { BASEURL } from "./../../../config/const";
var ClientHomeSource = /** @class */ (function (_super) {
    __extends(ClientHomeSource, _super);
    function ClientHomeSource(props) {
        return _super.call(this, props) || this;
    }
    ClientHomeSource.prototype.componentDidMount = function () {
    };
    ClientHomeSource.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "row section-heading list-courses" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-sm-3" },
                            React.createElement("h2", { style: { marginBottom: 0, fontWeight: 600, color: "#fff" } }, "KH\u00D3A H\u1ECCC")),
                        React.createElement("div", { className: "col-sm-9" },
                            React.createElement("h2", { className: "text-center", style: { marginBottom: 0, fontWeight: 600, color: "#fff" } }, "C\u00C1C KH\u00D3A H\u1ECCC \u0110\u1EA6Y T\u1EF0 H\u00C0O"))))),
            React.createElement("div", { className: "container", style: { marginBottom: 64, marginTop: 64 } },
                React.createElement("div", { className: "row list-courses__item", style: { marginBottom: 32 } },
                    React.createElement("div", { className: "col-sm-4 wow bounceInLeft", "data-wow-duration": "1s" },
                        React.createElement("img", { src: RESOURCE + "images/home/10-khoa-song-xung-dang.png", className: "img-responsive" })),
                    React.createElement("div", { className: "col-sm-8" },
                        React.createElement("h2", null,
                            React.createElement("b", null, "S\u1ED1ng x\u1EE9ng \u0111\u00E1ng")),
                        React.createElement("h4", null,
                            React.createElement("i", null,
                                React.createElement("b", null, "\u0110\u1EC3 b\u1EA1n s\u1ED1ng nhi\u1EC7t huy\u1EBFt, c\u00F3 m\u1ED9t tu\u1ED5i tr\u1EBB \u0111\u1EA7y say m\u00EA v\u00E0 ki\u1EBFn t\u1EA1o nh\u1EEFng ki\u1EC7t t\u00E1c cho ri\u00EAng cu\u1ED9c \u0111\u1EDDi m\u00ECnh."))),
                        React.createElement("p", null,
                            "T\u1EA1i sao m\u1ED9t s\u1ED1 ng\u01B0\u1EDDi tr\u1EBB s\u1ED1ng x\u1EE9ng \u0111\u00E1ng v\u1EDBi tu\u1ED5i tr\u1EBB c\u1EE7a h\u1ECD: s\u1ED1ng nhi\u1EC7t huy\u1EBFt, t\u00EDch c\u1EF1c, s\u1EDF h\u1EEFu nh\u1EEFng th\u00F3i quen t\u1ED1t, \u0111\u1EA1t \u0111\u01B0\u1EE3c nhi\u1EC1u k\u1EBFt qu\u1EA3 ngay khi c\u00F2n tr\u1EBB\u2026 trong khi nhi\u1EC1u b\u1EA1n s\u1EBD \u0111ang c\u00F3 cu\u1ED9c s\u1ED1ng v\u1EADt v\u1EDD, kh\u00F4ng c\u00F3 \u0111\u1ECBnh h\u01B0\u1EDBng cho t\u01B0\u01A1ng lai c\u1EE7a m\u00ECnh. H\u00E3y suy ngh\u0129 v\u1EC1 n\u00F3. B\u1EA1n kh\u00F4ng th\u1EC3 l\u00E0m ch\u1EE7 ch\u00EDnh b\u1EA3n th\u00E2n m\u00ECnh, b\u1ECB m\u1EAFc k\u1EB9t m\u00E3i trong t\u1EA7m th\u01B0\u1EDDng. B\u1EA1n \u0111ang c\u1ED1 g\u1EAFng t\u1EF1 l\u00EAn tinh th\u1EA7n, \u0111\u1ED9ng vi\u00EAn ch\u00EDnh m\u00ECnh m\u1ED7i ng\u00E0y \u0111\u1EC3 v\u01B0\u01A1n l\u00EAn, nh\u01B0ng b\u1EA1n nh\u1EADn ra t\u1EEB s\u00E2u th\u1EB3m b\u00EAn trong v\u1EABn \u0111ang c\u00F3 nhi\u1EC1u th\u1EE9 kh\u00F4ng \u1ED5n.",
                            " ",
                            React.createElement("i", null, "L\u00E0m th\u1EBF n\u00E0o \u0111\u1EC3 s\u1ED1ng x\u1EE9ng \u0111\u00E1ng c\u00F3 m\u1ED9t tu\u1ED5i tr\u1EBB \u0111\u00FAng ngh\u0129a?")),
                        React.createElement("div", { className: "get-link btn", style: { marginTop: 32, float: "right" } },
                            React.createElement("a", { href: "http://songxungdang.com" }, "Xem th\u00EAm")))),
                React.createElement("div", { className: "row list-courses__item", style: { marginBottom: 32 } },
                    React.createElement("div", { className: "col-sm-4 wow bounceInLeft", "data-wow-duration": "1s" },
                        React.createElement("img", { src: RESOURCE + "images/home/11-nguoi-chia-se.png", className: "img-responsive" })),
                    React.createElement("div", { className: "col-sm-8" },
                        React.createElement("h2", null,
                            React.createElement("b", null, "Ng\u01B0\u1EDDi chia s\u1EBB")),
                        React.createElement("h4", null,
                            React.createElement("i", null,
                                React.createElement("b", null, "Ch\u00ECa kh\u00F3a v\u00E0ng \u0111\u1EC3 l\u00E0m ch\u1EE7 nh\u1EEFng nguy\u00EAn t\u1EAFc tr\u00ECnh b\u00E0y l\u00F4i cu\u1ED1n \u0111\u00E1m \u0111\u00F4ng."))),
                        React.createElement("p", null,
                            "B\u1EA1n \u0111\u00E3 bao gi\u1EDD mu\u1ED1n tr\u00ECnh b\u00E0y l\u00F4i cu\u1ED1n tr\u01B0\u1EDBc \u0111\u00E1m \u0111\u00F4ng, nh\u01B0ng b\u1EA1n v\u1EABn ch\u01B0a h\u00E0i l\u00F2ng v\u1EDBi kh\u1EA3 n\u0103ng hi\u1EC7n t\u1EA1i c\u1EE7a m\u00ECnh. C\u00F3 nh\u1EEFng b\u00ED m\u1EADt tr\u00EAn con \u0111\u01B0\u1EDDng n\u00F3i tr\u01B0\u1EDBc \u0111\u00E1m \u0111\u00F4ng, n\u1EBFu ai \u0111\u00F3 n\u00F3i v\u1EDBi b\u1EA1n s\u1EDBm h\u01A1n, th\u00EC ch\u1EAFc ch\u1EAFn b\u1EA1n s\u1EBD \u0111i nhanh h\u01A1n tr\u00EAn h\u00E0nh tr\u00ECnh tr\u1EDF th\u00E0nh m\u1ED9t ng\u01B0\u1EDDi tr\u00ECnh b\u00E0y t\u1EF1 tin v\u00E0 thu h\u00FAt m\u1ECDi \u00E1nh nh\u00ECn. N\u1EBFu b\u1EA1n \u0111\u00E3 n\u1ED7 l\u1EF1c nhi\u1EC1u l\u1EA7n m\u00E0 ch\u01B0a c\u1EA3i thi\u1EC7n \u0111\u01B0\u1EE3c k\u1EF9 n\u0103ng n\u00E0y.",
                            " ",
                            React.createElement("i", null, "R\u1EA5t c\u00F3 th\u1EC3 b\u1EA1n \u0111\u00E3 t\u00ECm \u0111\u01B0\u1EE3c n\u01A1i ph\u00F9 h\u1EE3p khi \u0111ang \u1EDF \u0111\u00E2y.")),
                        React.createElement("div", { className: "get-link btn", style: { marginTop: 32, float: "right" } },
                            React.createElement("a", { href: BASEURL + "page/khoa-hoc/nguoi-chia-se-9-7" }, "Xem th\u00EAm")))),
                React.createElement("div", { className: "row list-courses__item", style: { marginBottom: 32 } },
                    React.createElement("div", { className: "col-sm-4 wow bounceInLeft", "data-wow-duration": "1s" },
                        React.createElement("img", { src: RESOURCE + "images/home/12-trai-chien-binh-vo-dich.png", className: "img-responsive" })),
                    React.createElement("div", { className: "col-sm-8" },
                        React.createElement("h2", null,
                            React.createElement("b", null, "Tr\u1EA1i chi\u1EBFn binh v\u00F4 \u0111\u1ECBch")),
                        React.createElement("h4", null,
                            React.createElement("i", null,
                                React.createElement("b", null, "\u0110\u00E1nh th\u1EE9c n\u1ED9i l\u1EF1c m\u1EA1nh m\u1EBD, h\u00E0nh \u0111\u1ED9ng x\u1EE9ng \u0111\u00E1ng nh\u01B0 m\u1ED9t chi\u1EBFn binh v\u00F4 \u0111\u1ECBch."))),
                        React.createElement("p", null,
                            "N\u1ED9i l\u1EF1c ch\u00EDnh ra s\u1EE9c m\u1EA1nh t\u1ED1i th\u01B0\u1EE3ng gi\u00FAp b\u1EA1n trong b\u1EA5t k\u1EF3 ho\u00E0n c\u1EA3nh n\u00E0o c\u1EE7a cu\u1ED9c s\u1ED1ng, nh\u01B0ng b\u1EA1n ch\u01B0a \u201Cb\u1EAFt l\u1EEDa\u201D \u0111\u01B0\u1EE3c n\u00F3i n\u00F3, s\u1EE9c m\u1EA1nh th\u1EF1c s\u1EF1 c\u1EE7a b\u1EA1n \u0111ang b\u1ECB \u201Cgiam c\u1EA7m\u201D, n\u00F3 c\u1EA7n \u0111\u01B0\u1EE3c gi\u1EA3i tho\u00E1t \u0111\u1EC3 b\u1EA1n c\u00F3 \u0111\u1EE7 s\u1EE9c m\u1EA1nh th\u1EF1c hi\u1EC7n b\u1EA5t k\u1EF3 nhi\u1EC7m v\u1EE5 n\u00E0o trong cu\u1ED9c \u0111\u1EDDi.",
                            React.createElement("i", null, "L\u00E0m th\u1EBF n\u00E0o c\u1EDFi b\u1ECF xi\u1EC1ng x\u00EDch d\u1EABn d\u1EAFt cu\u1ED9c s\u1ED1ng quy\u1EBFt li\u1EC7t, nhi\u1EC7t t\u00ECnh l\u00E0m cho nh\u1EEFng th\u00E1ng n\u0103m r\u1EF1c r\u1EE1 c\u1EE7a tu\u1ED5i tr\u1EBB th\u1EADt \u0111\u00E1ng gi\u00E1?")),
                        React.createElement("div", { className: "get-link btn", style: { marginTop: 32, float: "right" } },
                            React.createElement("a", { href: BASEURL + "page/khoa-hoc/trai-chien-binh-vo-dich-8-9" }, "Xem th\u00EAm")))),
                React.createElement("div", { className: "row list-courses__item", style: { marginBottom: 32 } },
                    React.createElement("div", { className: "col-sm-4 wow bounceInLeft", "data-wow-duration": "1s" },
                        React.createElement("img", { src: RESOURCE + "images/home/13-G2B.png", className: "img-responsive" })),
                    React.createElement("div", { className: "col-sm-8" },
                        React.createElement("h2", null,
                            React.createElement("b", null, "Golden Bee Generation")),
                        React.createElement("h4", null,
                            React.createElement("i", null,
                                React.createElement("b", null, "C\u01A1 h\u1ED9i t\u00ECm ra phi\u00EAn b\u1EA3n t\u1ED1t nh\u1EA5t ch\u00EDnh m\u00ECnh c\u00F9ng c\u00F4ng vi\u1EC7c \u00FD ngh\u0129a, s\u1EB5n s\u00E0ng cho s\u1EF1 nghi\u1EC7p khi c\u00F2n sinh vi\u00EAn."))),
                        React.createElement("p", null,
                            "Ch\u1EAFc h\u1EB3n b\u1EA1n c\u0169ng bi\u1EBFt tu\u1ED5i tr\u1EBB l\u00E0 tu\u1ED5i t\u01B0\u01A1i \u0111\u1EB9p nh\u1EA5t c\u1EE7a \u01B0\u1EDBc m\u01A1. Tu\u1ED5i \u0111\u00F4i m\u01B0\u01A1i l\u00E0 giai \u0111o\u1EA1n th\u1EC3 l\u1EF1c v\u00E0 tinh th\u1EA7n c\u1EE7a con ng\u01B0\u1EDDi d\u1ED3i d\u00E0o nh\u1EA5t \u0111\u1EC3 nu\u00F4i d\u01B0\u1EE1ng ho\u00E0i b\u00E3o, kh\u00E1t v\u1ECDng \u0111\u1EC3 r\u1ED3i ta s\u1EBD d\u1EA5n th\u00E2n tr\u00EAn con \u0111\u01B0\u1EDDng s\u1EF1 nghi\u1EC7p c\u1EE7a c\u1EA3 \u0111\u1EDDi ng\u01B0\u1EDDi.",
                            " ",
                            React.createElement("i", null, "T\u00ECm ra phi\u00EAn b\u1EA3n t\u1ED1t nh\u1EA5t cu\u1ED9c \u0111\u1EDDi m\u00ECnh th\u00F4ng qua c\u00F4ng vi\u1EC7c \u00FD ngh\u0129a \u0111\u1EC3 chu\u1EA9n b\u1ECB s\u1EB5n s\u00E0ng cho s\u1EF1 nghi\u1EC7p ngay khi c\u00F2n l\u00E0 sinh vi\u00EAn.")),
                        React.createElement("div", { className: "get-link btn", style: { marginTop: 32, float: "right" } },
                            React.createElement("a", { href: BASEURL + "page/khoa-hoc/trai-chien-binh-vo-dich-8-9" }, "Xem th\u00EAm"))))),
            React.createElement("div", { className: "row  list-courses section-heading" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-sm-3" },
                            React.createElement("h2", { style: { marginBottom: 0, fontWeight: 600, color: "#fff" } }, "KH\u00D3A H\u1ECCC ONLINE")),
                        React.createElement("div", { className: "col-sm-9" },
                            React.createElement("h2", { className: "text-center", style: { marginBottom: 0, fontWeight: 600, color: "#fff" } }, "KH\u00D3A MI\u1EC4N PH\u00CD GI\u00C1 TR\u1ECA CAO"))))),
            React.createElement("div", { className: "container", style: { marginBottom: 64, marginTop: 64 } },
                React.createElement("div", { className: "row list-courses__item", style: { marginBottom: 32 } },
                    React.createElement("div", { className: "col-sm-4 wow bounceInLeft", "data-wow-duration": "1s" },
                        React.createElement("img", { src: RESOURCE + "images/home/14-bo-ky-nang-the-ky-21.png", className: "img-responsive" })),
                    React.createElement("div", { className: "col-sm-8" },
                        React.createElement("h2", null,
                            React.createElement("b", null, "B\u1ED9 k\u1EF9 n\u0103ng th\u1EBF k\u1EF7 21")),
                        React.createElement("h4", null,
                            React.createElement("i", null,
                                React.createElement("b", null, "Tr\u1EDF th\u00E0nh ng\u01B0\u1EDDi tr\u1EBB v\u01B0\u1EE3t tr\u1ED9i v\u1EDBi nh\u1EEFng k\u1EF9 n\u0103ng \u01B0u vi\u1EC7t."))),
                        React.createElement("p", null, "M\u1ED9t trong nh\u1EEFng s\u1EF1 kh\u00E1c bi\u1EC7t gi\u1EEFa c\u00E1c b\u1EA1n ng\u1ED3i tr\u00EAn gh\u1EBF nh\u00E0 tr\u01B0\u1EDDng l\u00E0 nh\u1EEFng k\u1EF9 n\u0103ng m\u00E0 m\u00ECnh t\u00EDch l\u0169y \u0111\u01B0\u1EE3c th\u1EDDi c\u00F2n l\u00E0 sinh vi\u00EAn. Ki\u1EBFn th\u1EE9c chuy\u00EAn m\u00F4n l\u00E0 ch\u01B0a \u0111\u1EE7 \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o c\u00F3 m\u1ED9t c\u00F4ng vi\u1EC7c t\u1ED1t sau khi ra tr\u01B0\u1EDDng, c\u1EA7n ph\u1EA3i trang b\u1ECB cho m\u00ECnh nhi\u1EC1u h\u01A1n th\u1EBF: th\u00E1i \u0111\u1ED9 t\u00EDch c\u1EF1c, giao ti\u1EBFp t\u1EF1 tin, l\u00E0m vi\u1EC7c nh\u00F3m, qu\u1EA3n l\u00FD th\u1EDDi gian, thuy\u1EBFt tr\u00ECnh hi\u1EC7u qu\u1EA3... Khi \u0111\u00F3 b\u1EA1n s\u1EBD tr\u1EDF th\u00E0nh m\u1ED9t ng\u01B0\u1EDDi tr\u1EBB mang trong m\u00ECnh \u0111\u1EA7y \u0111\u1EE7 h\u00E0nh trang ra tr\u01B0\u1EDDng."),
                        React.createElement("div", { className: "get-link btn", style: { marginTop: 32, float: "right" } }, "Xem th\u00EAm"))),
                React.createElement("div", { className: "row list-courses__item", style: { marginBottom: 32 } },
                    React.createElement("div", { className: "col-sm-4 wow bounceInLeft", "data-wow-duration": "1s" },
                        React.createElement("img", { src: RESOURCE + "images/home/15-mindmap-phat-trien-ban-than.png", className: "img-responsive" })),
                    React.createElement("div", { className: "col-sm-8" },
                        React.createElement("h2", null,
                            React.createElement("b", null, "Mindmap ph\u00E1t tri\u1EC3n b\u1EA3n th\u00E2n")),
                        React.createElement("h4", null,
                            React.createElement("i", null,
                                React.createElement("b", null, "N\u00E2ng t\u1EA7m ghi ch\u00E9p - H\u1ECDc t\u1EADp \u0111\u1EC9nh cao."))),
                        React.createElement("p", null, "Ghi ch\u00E9p b\u1EB1ng h\u00ECnh \u1EA3nh mang l\u1EA1i h\u1EE9ng th\u00FA trong c\u00F4ng vi\u1EC7c v\u00E0 h\u1ECDc t\u1EADp, r\u00E8n luy\u1EC7n k\u1EF9 n\u0103ng nh\u00ECn nh\u1EADn v\u1EA5n \u0111\u1EC1 m\u1ED9t c\u00E1ch s\u00E1ng t\u1EA1o, ph\u00E1t tri\u1EC3n nhi\u1EC1u \u00FD t\u01B0\u1EDFng m\u1EDBi, h\u1EC7 th\u1ED1ng h\u00F3a ki\u1EBFn th\u1EE9c m\u1ED9t c\u00E1ch t\u1ED1i \u01B0u, t\u0103ng kh\u1EA3 n\u0103ng ghi nh\u1EDB th\u00EAm 50% so v\u1EDBi th\u00F4ng th\u01B0\u1EDDng."),
                        React.createElement("div", { className: "get-link btn", style: { marginTop: 32, float: "right" } }, "Xem th\u00EAm")))),
            React.createElement("div", { className: "row section-heading" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-sm-3" },
                            React.createElement("h2", { style: { marginBottom: 0, fontWeight: 600, color: "#fff" } }, "S\u1ED4 TAY")),
                        React.createElement("div", { className: "col-sm-9" },
                            React.createElement("h2", { className: "text-center", style: { marginBottom: 0, fontWeight: 600, color: "#fff" } }, "S\u1ED4 TAY S\u1ED0NG X\u1EE8NG \u0110\u00C1NG"))))),
            React.createElement("div", { className: "container list-ebooks", style: { marginBottom: 64, marginTop: 64 } },
                React.createElement("div", { className: "row item", style: { marginBottom: 32 } },
                    React.createElement("div", { className: "col-sm-4 wow bounceInLeft", "data-wow-duration": "1s" },
                        React.createElement("img", { src: RESOURCE + "images/home/8-so-tay.png", className: "img-responsive" })),
                    React.createElement("div", { className: "col-sm-8" },
                        React.createElement("h2", null,
                            React.createElement("b", null, "Cu\u1ED1n da S\u1ED1ng x\u1EE9ng \u0111\u00E1ng")),
                        React.createElement("h4", null,
                            React.createElement("b", null,
                                React.createElement("i", null, "Ng\u01B0\u1EDDi b\u1EA1n tin c\u1EADy \u0111\u1ED3ng h\u00E0nh c\u00F9ng b\u1EA1n s\u1ED1ng x\u1EE9ng \u0111\u00E1ng v\u00E0 t\u1EA1o n\u00EAn nh\u1EEFng th\u00E0nh t\u1EF1u ri\u00EAng cu\u1ED9c \u0111\u1EDDi m\u00ECnh"))),
                        React.createElement("p", null,
                            React.createElement("i", null, "\u201CT\u00F4i ch\u1EAFc ch\u1EAFn v\u1EDBi b\u1EA1n r\u1EB1ng, b\u1EA1n s\u1EBD kh\u00F4ng s\u1EDF h\u1EEFu cu\u1ED1n s\u1ED5 n\u00E0o quan tr\u1ECDng v\u00E0 x\u1EE9ng \u0111\u00E1ng h\u01A1n cu\u1ED1n s\u1ED5 n\u00E0y\u201D"),
                            "M\u1ED9t c\u00E1i c\u00E2y c\u1ED5 th\u1EE5 b\u1EAFt \u0111\u1EA7u t\u1EEB m\u1ED9t h\u1EA1t gi\u1ED1ng nh\u1ECF M\u1ED9t cu\u1ED9c s\u1ED1ng h\u1EA1nh ph\u00FAc b\u1EAFt \u0111\u1EA7u t\u1EEB m\u1ED9t n\u1EE5 c\u01B0\u1EDDi. M\u1ED9t gia \u0111\u00ECnh vi\u00EAn m\u00E3n b\u1EAFt \u0111\u1EA7u t\u1EEB l\u1EDDi ch\u00E0o h\u1ECFi hai ng\u01B0\u1EDDi. M\u1ED9t s\u1EF1 nghi\u1EC7p v\u0129 \u0111\u1EA1i b\u1EAFt t\u1EEB m\u1ED9t \u00FD t\u01B0\u1EDFng.",
                            React.createElement("b", null, "M\u1ECDi th\u00E0nh t\u1EF1u \u0111\u1EC1u b\u1EAFt \u0111\u1EA7u t\u1EEB m\u1ED9t h\u00E0nh \u0111\u1ED9ng nh\u1ECF."),
                            React.createElement("br", null),
                            React.createElement("i", null,
                                React.createElement("b", null, "Ch\u1EC9 c\u1EA7n v\u00E0i ph\u00FAt m\u1ED7i ng\u00E0y \u0111\u1ED3ng h\u00E0nh c\u00F9ng cu\u1ED1n da n\u00E0y "),
                                "b\u1EA1n, \u0111\u00E3 t\u1EEBng b\u01B0\u1EDBc \u0111i tr\u00EAn ch\u1EB7ng h\u00E0nh tr\u00ECnh s\u1ED1ng x\u1EE9ng \u0111\u00E1ng v\u00E0 t\u1EA1o n\u00EAn nh\u1EEFng th\u00E0nh t\u1EF1u c\u1EE7a ri\u00EAng cu\u1ED9c \u0111\u1EDDi m\u00ECnh.")),
                        React.createElement("div", { className: "get-link btn", style: { marginTop: 32, float: "right" } },
                            React.createElement("a", { href: "http://sotay.songxungdang.com" }, "Xem th\u00EAm")))))));
    };
    return ClientHomeSource;
}(React.Component));
export default ClientHomeSource;
//# sourceMappingURL=ClientHomeSourceEbook.js.map