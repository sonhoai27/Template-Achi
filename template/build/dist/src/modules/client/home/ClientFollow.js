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
                        React.createElement("a", { href: "https://www.facebook.com/NguyenMinhChi.MrShare/", target: "_blank" },
                            React.createElement("div", { className: "btn btn-sm btn-info", style: {
                                    background: '#4267b2',
                                    border: 'none'
                                } },
                                React.createElement("i", { className: " icon-social-facebook" }),
                                "Facebook")))),
                React.createElement("div", { className: "col-sm-4" },
                    React.createElement("div", { className: "social-callout" },
                        React.createElement("h3", { className: "text-center" }, "K\u00EAnh Youtube b\u00E0i h\u1ECDc"),
                        React.createElement("a", { href: "https://www.youtube.com/channel/UCHCeMi9tGx9VCMSHHbscrLg?sub_confirmation=1", target: "_blank" },
                            React.createElement("div", { className: "btn btn-sm btn-info", style: {
                                    background: 'red',
                                    border: 'none'
                                } },
                                React.createElement("i", { className: "icon-social-youtube" }),
                                " Youtube")))),
                React.createElement("div", { className: "col-sm-4" },
                    React.createElement("div", { className: "social-callout" },
                        React.createElement("h3", { className: "text-center" }, "Nh\u00F3m ph\u00E1t tri\u1EC3n b\u1EA3n th\u00E2n"),
                        React.createElement("a", { href: "https://www.facebook.com/groups/MatMaThoiSinhVien/", target: "_blank" },
                            React.createElement("div", { className: "btn btn-sm btn-info", style: {
                                    background: '#4267b2'
                                } },
                                React.createElement("i", { className: " icon-social-facebook" }),
                                " Group Facebook")))))));
    };
    return ClientFollow;
}(React.Component));
export default ClientFollow;
//# sourceMappingURL=ClientFollow.js.map