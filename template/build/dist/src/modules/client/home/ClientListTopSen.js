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
var ClientListTopSen = /** @class */ (function (_super) {
    __extends(ClientListTopSen, _super);
    function ClientListTopSen(props) {
        return _super.call(this, props) || this;
    }
    ClientListTopSen.prototype.render = function () {
        return (React.createElement("div", { className: "container paddingY-64 top-sen" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-sm-4" },
                    React.createElement("img", { src: RESOURCE + 'images/home/5-minh.png', alt: "", className: "img-responsive" })),
                React.createElement("div", { className: "col-sm-8" },
                    React.createElement("blockquote", null,
                        React.createElement("p", null, "\u201CTrong su\u1ED1t qu\u00E3ng th\u1EDDi gian sinh vi\u00EAn n\u0103m 2, ki\u1EBFn th\u1EE9c, k\u1EF9 n\u0103ng, s\u1EF1 ph\u00E1t tri\u1EC3n b\u1EA3n th\u00E2n d\u01B0\u1EDDng nh\u01B0 l\u00E0 con s\u1ED1 0. T\u00F4i l\u00FAc \u0111\u00F3 may m\u1EAFn h\u01A1n l\u00E0 g\u1EB7p anh Ch\u00ED, trong su\u1ED1t qu\u00E3ng th\u1EDDi gian h\u1ECDc t\u1EADp v\u00E0 l\u00E0m vi\u1EC7c c\u00F9ng anh h\u01A1n 1 n\u0103m, l\u00E0 kho\u1EA3ng th\u1EDDi gian t\u00F4i ph\u00E1t tri\u1EC3n v\u01B0\u1EE3t tr\u1ED9i. T\u1EEB nh\u1EEFng k\u1EF9 n\u0103ng \u0111\u1EC3 tr\u1EDF th\u00E0nh 1 sinh vi\u00EAn t\u1EF1 tin trong h\u1ECDc t\u1EADp v\u00E0 cu\u1ED9c s\u1ED1ng nh\u01B0 thuy\u1EBFt tr\u00ECnh, l\u00E0m vi\u1EC7c nh\u00F3m, qu\u1EA3n l\u00FD th\u1EDDi gian, qu\u1EA3n l\u00FD c\u1EA3m x\u00FAc\u2026 cho \u0111\u1EBFn k\u1EF9 n\u0103ng \u0111\u1EC3 tr\u1EDF th\u00E0nh nh\u00E2n vi\u00EAn t\u1ED1t c\u1EE7a c\u00F4ng ty, k\u1EF9 n\u0103ng qu\u1EA3n l\u00FD \u0111\u1ED9i nh\u00F3m \u0111\u1EC3 l\u00E0m Leader\u2026 Anh l\u00E0 m\u1ED9t ng\u01B0\u1EDDi tr\u00E0n \u0111\u1EA7y n\u0103ng l\u01B0\u1EE3ng, lu\u00F4n lu\u00F4n nhi\u1EC7t huy\u1EBFt, kh\u00F4ng ng\u1EEBng h\u1ECDc h\u1ECFi c\u1EADp nh\u1EADt ki\u1EBFn th\u1EE9c m\u1EDBi v\u00E0 thay \u0111\u1ED5i li\u00EAn t\u1EE5c\u201D.")),
                    React.createElement("div", { className: "quote-source" }, "B\u00F9i T\u1EA5n Minh - \u0110\u1ED3ng s\u00E1ng l\u1EADp t\u1ED5 ch\u1EE9c S\u00E0i G\u00F2n Th\u01B0\u01A1ng."))),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-sm-4" },
                    React.createElement("img", { src: RESOURCE + 'images/home/6-diem.png', alt: "", className: "img-responsive" })),
                React.createElement("div", { className: "col-sm-8" },
                    React.createElement("blockquote", null,
                        React.createElement("p", null, "\u201CMr.Share - ng\u01B0\u1EDDi anh, ng\u01B0\u1EDDi th\u1EA7y m\u00E0 t\u00F4i may m\u1EAFn \u0111\u01B0\u1EE3c \u0111\u1ED3ng h\u00E0nh. C\u1EA3m \u01A1n v\u00EC nh\u1EEFng b\u00E0i h\u1ECDc, nh\u1EEFng chia s\u1EBB th\u1EADt t\u00E2m c\u1EE7a anh. C\u1EA3m \u01A1n c\u1EA3 nh\u1EEFng tr\u1EA3i nghi\u1EC7m, nh\u1EEFng l\u1EDDi n\u00F3i c\u1EE7a anh \u0111\u00E3 \"\u0111\u1EADp\" th\u1EB3ng c\u00E1i t\u00F4i l\u1EDBn ng\u00E0y \u0111\u00F3 c\u1EE7a t\u00F4i. \u0110\u1EC3 t\u1EEB \u0111\u00F3 t\u00F4i b\u1EAFt \u0111\u1EA7u nh\u00ECn nh\u1EADn b\u1EA3n th\u00E2n, d\u1EB9p b\u1EDBt \u0111i s\u1EE3 h\u00E3i, quy\u1EBFt li\u1EC7t h\u01A1n v\u1EDBi m\u1EE5c ti\u00EAu \u0111\u00E3 \u0111\u1EB7t ra, v\u01B0\u1EE3t qua ch\u00F4ng gai v\u00E0 s\u1ED1ng t\u00EDch c\u1EF1c h\u01A1n. Tu\u1ED5i tr\u1EBB l\u00E0 h\u1ECDc h\u1ECFi, tr\u1EA3i nghi\u1EC7m \u0111\u1EC3 \"l\u1EDBn\" h\u01A1n t\u1EEBng ng\u00E0y. Ch\u00FAc anh lu\u00F4n nhi\u1EC7t huy\u1EBFt h\u1EBFt l\u00F2ng v\u1EDBi th\u1EBF h\u1EC7 tr\u1EBB, d\u00F9ng c\u00E1i t\u00E2m s\u00E1ng c\u1EE7a m\u00ECnh \u0111\u1EC3 cho \u0111i, \u0111\u1EC3 \u0111\u00E1nh th\u1EE9c nhi\u1EC1u b\u1EA1n tr\u1EBB Vi\u1EC7t s\u1ED1ng x\u1EE9ng \u0111\u00E1ng\u201D.")),
                    React.createElement("div", { className: "quote-source" }, "Ph\u1EA1m Th\u1ECB Ng\u1ECDc Di\u1EC5m - SV DH T\u00E0i ch\u00EDnh Marketing /HR Manager Anh ng\u1EEF Max Power."))),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-sm-4" },
                    React.createElement("img", { src: RESOURCE + 'images/home/7-banner-dung-mrshare.png', alt: "", className: "img-responsive" })),
                React.createElement("div", { className: "col-sm-8" },
                    React.createElement("blockquote", null,
                        React.createElement("p", null,
                            React.createElement("h1", null,
                                "M\u1ED9t cu\u1ED9c s\u1ED1ng x\u1EE9ng \u0111\u00E1ng kh\u00F4ng t\u1EF1 nhi\u00EAn \u0111\u01B0\u1EE3c sinh ra m\u00E0 \u0111\u01B0\u1EE3c gieo tr\u1ED3ng",
                                React.createElement("br", null)))))),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-sm-4" },
                    React.createElement("img", { width: "70%", src: 'http://nguyenminhchi.com/api/uploads/images/ea00646c35438c5c44911539450000000.png', alt: "", className: "img-responsive" })),
                React.createElement("div", { className: "col-sm-8" },
                    React.createElement("blockquote", null,
                        React.createElement("p", null,
                            React.createElement("h1", null, "\u201CT\u00F4i ch\u1EAFc ch\u1EAFn v\u1EDBi b\u1EA1n r\u1EB1ng, b\u1EA1n s\u1EBD kh\u00F4ng s\u1EDF h\u1EEFu cu\u1ED1n s\u1ED5 n\u00E0o quan tr\u1ECDng v\u00E0 x\u1EE9ng \u0111\u00E1ng h\u01A1n cu\u1ED1n s\u1ED5 n\u00E0y\u201D"))),
                    React.createElement("div", { className: "get-link btn", style: { marginTop: 32, float: "right" } },
                        React.createElement("a", { href: "http://sotay.songxungdang.com" }, "Xem th\u00EAm"))))));
    };
    return ClientListTopSen;
}(React.Component));
export default ClientListTopSen;
//# sourceMappingURL=ClientListTopSen.js.map