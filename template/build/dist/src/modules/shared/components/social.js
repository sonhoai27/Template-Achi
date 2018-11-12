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
var ListSocial = /** @class */ (function (_super) {
    __extends(ListSocial, _super);
    function ListSocial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListSocial.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("button", { className: "collapsible" }, "K\u1EBET N\u1ED0I V\u1EDAI CH\u00DANG T\u00D4I"),
            React.createElement("div", { className: "collapsible-content" },
                React.createElement("ul", { className: "list-icons-social margin-t-16" },
                    React.createElement("li", null,
                        React.createElement("a", { style: {
                                background: '#009688',
                                color: '#fff'
                            }, href: "https://www.facebook.com/NguyenMinhChi.MrShare/", target: "_blank" },
                            React.createElement("i", { style: { fontSize: 32 }, className: "icon-social-facebook" }))),
                    React.createElement("li", null,
                        React.createElement("a", { style: {
                                background: '#009688',
                                color: '#fff'
                            }, href: "https://www.youtube.com/channel/UCHCeMi9tGx9VCMSHHbscrLg?sub_confirmation=1", target: "_blank" },
                            React.createElement("i", { style: { fontSize: 32 }, className: "icon-social-youtube" }))),
                    React.createElement("li", null,
                        React.createElement("a", { style: {
                                background: '#009688',
                                color: '#fff'
                            }, href: "https://www.facebook.com/groups/MatMaThoiSinhVien/", target: "_blank" },
                            React.createElement("i", { style: { fontSize: 32 }, className: "icon-paper-plane" })))))));
    };
    return ListSocial;
}(React.Component));
export default ListSocial;
//# sourceMappingURL=social.js.map