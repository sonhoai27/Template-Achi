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
import { BASEURL } from "./../../../config/const";
var ClientIntroNMC = /** @class */ (function (_super) {
    __extends(ClientIntroNMC, _super);
    function ClientIntroNMC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClientIntroNMC.prototype.render = function () {
        return (React.createElement("div", { className: "c-nmc" },
            React.createElement("div", { className: "container paddingY-128" },
                React.createElement("div", { className: "row flex-ver" },
                    React.createElement("div", { className: "col-sm-6" },
                        React.createElement("div", { className: "video-container" },
                            React.createElement("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/IhZL4bQIo7Y" }))),
                    React.createElement("div", { className: "col-sm-6" },
                        React.createElement("h1", { style: { fontWeight: 700, fontSize: 30 }, className: "text-center" }, "NGUY\u1EC4N MINH CH\u00CD - MR.SHARE"),
                        React.createElement("h3", { style: { fontWeight: 700 }, className: "text-center" }, "Chuy\u00EAn gia \u0110\u00E0o t\u1EA1o b\u1EA1n tr\u1EBB s\u1ED1ng x\u1EE9ng \u0111\u00E1ng"),
                        React.createElement("p", { style: { textAlign: "justify" } },
                            "Mr.Share - Nguy\u1EC5n Minh Ch\u00ED hi\u1EC7n l\u00E0",
                            " ",
                            React.createElement("b", null, "ch\u1EE7 t\u1ECBch c\u1EE7a 2 c\u00F4ng ty"),
                            ": H\u1ECDc vi\u1EC7n \u0110\u00E0o t\u1EA1o th\u1EBF h\u1EC7 S\u1ED1ng x\u1EE9ng \u0111\u00E1ng, trung t\u00E2m anh ng\u1EEF Max Power.",
                            React.createElement("b", null, " T\u00E1c gi\u1EA3"),
                            " c\u1EE7a cu\u1ED1n da S\u1ED1ng x\u1EE9ng \u0111\u00E1ng. Chinh ph\u1EE5c",
                            " ",
                            React.createElement("b", null, "full marathon 42km"),
                            ". V\u1EDBi kinh nghi\u1EC7m h\u01A1n",
                            " ",
                            React.createElement("b", null, "6 n\u0103m kinh nghi\u1EC7m gi\u1EA3ng d\u1EA1y"),
                            " trong l\u0129nh v\u1EF1c \u0110\u00E0o t\u1EA1o ph\u00E1t tri\u1EC3n con ng\u01B0\u1EDDi, \u0111\u00E0o t\u1EA1o tr\u1EF1c ti\u1EBFp h\u01A1n ",
                            React.createElement("b", null, "10.000 h\u1ECDc vi\u00EAn"),
                            ". Di\u1EC5n gi\u1EA3 Mr.Share v\u1EDBi khao kh\u00E1t chia s\u1EBB nh\u1EEFng ki\u1EBFn th\u1EE9c, b\u00E0i h\u1ECDc v\u1EDBi kh\u00E1t v\u1ECDng ph\u1EE5ng",
                            " ",
                            React.createElement("b", null, "s\u1EF1 tu\u1ED5i tr\u1EBB Vi\u1EC7t s\u1ED1ng x\u1EE9ng \u0111\u00E1ng.")),
                        React.createElement("div", { style: {
                                textAlign: "center",
                                display: "block",
                                width: "128px",
                                margin: "auto"
                            } },
                            React.createElement("a", { href: BASEURL + "page/gioi-thieu", className: "white get-link btn" }, "Xem th\u00EAm")))))));
    };
    return ClientIntroNMC;
}(React.Component));
export default ClientIntroNMC;
//# sourceMappingURL=ClientIntroNMC.js.map