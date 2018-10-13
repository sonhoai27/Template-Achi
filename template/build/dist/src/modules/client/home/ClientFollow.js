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
var ClientFollow = /** @class */ (function (_super) {
    __extends(ClientFollow, _super);
    function ClientFollow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClientFollow.prototype.render = function () {
        return (React.createElement("div", { className: "container follow paddingY-64" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-sm-4" },
                    React.createElement("div", { className: "social-callout" },
                        React.createElement("h3", { className: "text-center" }, "Nh\u1EADn b\u00E0i \u0111\u1ED9ng l\u1EF1c h\u00E0ng ng\u00E0y"),
                        React.createElement("iframe", { src: "https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FNguyenMinhChi.MrShare%2F&width=84&layout=button_count&action=like&size=small&show_faces=false&share=false&height=21&appId=1440913602698681", width: 84, height: 21, style: { border: "none", overflow: "hidden" }, scrolling: "no", frameBorder: 0, allowTransparency: true }))),
                React.createElement("div", { className: "col-sm-4" },
                    React.createElement("div", { className: "social-callout" },
                        React.createElement("h3", { className: "text-center" }, "K\u00EAnh Youtube b\u00E0i h\u1ECDc"),
                        React.createElement("div", { className: "g-ytsubscribe", "data-channelid": "UCHCeMi9tGx9VCMSHHbscrLg", "data-layout": "default", "data-count": "default" }))),
                React.createElement("div", { className: "col-sm-4" },
                    React.createElement("div", { className: "social-callout" },
                        React.createElement("h3", { className: "text-center" }, "Nh\u00F3m ph\u00E1t tri\u1EC3n b\u1EA3n th\u00E2n"),
                        React.createElement("a", { href: "https://www.facebook.com/groups/MatMaThoiSinhVien/", target: "_blank" },
                            React.createElement("div", { className: "btn btn-sm btn-info" }, "Group Facebook")))))));
    };
    return ClientFollow;
}(React.Component));
export default ClientFollow;
//# sourceMappingURL=ClientFollow.js.map