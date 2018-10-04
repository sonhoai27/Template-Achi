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
import OrderEbook from "./orderEbook";
var OptionEbook = /** @class */ (function (_super) {
    __extends(OptionEbook, _super);
    function OptionEbook(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isShowingModalOrder: false,
            currentPackage: -1,
            price: 0
        };
        return _this;
    }
    OptionEbook.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "row pricing-table" },
                React.createElement("div", { className: "col-sm-3" },
                    React.createElement("div", { className: "pricing-option" },
                        React.createElement("h1", null, "\u01AFU \u0110\u00C3I 1"),
                        React.createElement("hr", null),
                        React.createElement("p", null,
                            "Mua 1 cu\u1ED1n",
                            React.createElement("br", null),
                            "D\u00E0nh cho ng\u01B0\u1EDDi m\u1EDBi l\u00E0m quen ho\u1EB7c mua t\u1EB7ng l\u00E0m qu\u00E0."),
                        React.createElement("hr", null),
                        React.createElement("div", { className: "price" },
                            React.createElement("div", { className: "front" },
                                React.createElement("span", { className: "price" }, "150.000\u0111/cu\u1ED1n")),
                            React.createElement("div", { className: "back" },
                                React.createElement("a", { className: "button", onClick: function () {
                                        _this.setState({
                                            currentPackage: 1,
                                            price: 150000,
                                            isShowingModalOrder: !_this.state.isShowingModalOrder
                                        });
                                    } }, "Mua Ngay"))))),
                React.createElement("div", { className: "col-sm-3" },
                    React.createElement("div", { className: "pricing-option" },
                        React.createElement("h1", null, "\u01AFU \u0110\u00C3I 2"),
                        React.createElement("hr", null),
                        React.createElement("p", null,
                            "Mua 2 cu\u1ED1n",
                            React.createElement("br", null),
                            "Ho\u00E0n h\u1EA3o cho ng\u01B0\u1EDDi t\u1EADp r\u00E8n luy\u1EC7n th\u00F3i quen s\u1ED1ng \u201Cch\u1EA5t\u201D m\u1ED7i ng\u00E0y."),
                        React.createElement("hr", null),
                        React.createElement("div", { className: "price" },
                            React.createElement("div", { className: "front" },
                                React.createElement("span", { className: "price" }, "120.000\u0111/cu\u1ED1n")),
                            React.createElement("div", { className: "back" },
                                React.createElement("a", { className: "button", onClick: function () {
                                        _this.setState({
                                            currentPackage: 2,
                                            price: 120000,
                                            isShowingModalOrder: !_this.state.isShowingModalOrder
                                        });
                                    } }, "Mua Ngay"))))),
                React.createElement("div", { className: "col-sm-3" },
                    React.createElement("div", { className: "pricing-option" },
                        React.createElement("h1", null, "\u01AFU \u0110\u00C3I 3"),
                        React.createElement("hr", null),
                        React.createElement("p", null,
                            "Mua 5 cu\u1ED1n",
                            React.createElement("br", null),
                            "D\u00E0nh cho ng\u01B0\u1EDDi mu\u1ED1n t\u0103ng t\u1ED1c trong h\u1ECDc t\u1EADp, c\u00F4ng vi\u1EC7c."),
                        React.createElement("hr", null),
                        React.createElement("div", { className: "price" },
                            React.createElement("div", { className: "front" },
                                React.createElement("span", { className: "price" }, "105.000\u0111/cu\u1ED1n")),
                            React.createElement("div", { className: "back" },
                                React.createElement("a", { className: "button", onClick: function () {
                                        _this.setState({
                                            currentPackage: 3,
                                            price: 105000,
                                            isShowingModalOrder: !_this.state.isShowingModalOrder
                                        });
                                    } }, "Mua Ngay"))))),
                React.createElement("div", { className: "col-sm-3" },
                    React.createElement("div", { className: "pricing-option" },
                        React.createElement("h1", null, "\u01AFU \u0110\u00C3I 4"),
                        React.createElement("hr", null),
                        React.createElement("p", null,
                            "Mua 10 cu\u1ED1n",
                            React.createElement("br", null),
                            "D\u00E0nh cho nh\u00F3m ng\u01B0\u1EDDi trong t\u1ED5 ch\u1EE9c mu\u1ED1n ph\u00E1t tri\u1EC3n s\u1ED1ng \u201Cch\u1EA5t\u201D c\u00F9ng nhau."),
                        React.createElement("hr", null),
                        React.createElement("div", { className: "price" },
                            React.createElement("div", { className: "front" },
                                React.createElement("span", { className: "price" }, "85.000\u0111/cu\u1ED1n")),
                            React.createElement("div", { className: "back" },
                                React.createElement("a", { className: "button", onClick: function () {
                                        _this.setState({
                                            currentPackage: 4,
                                            price: 85000,
                                            isShowingModalOrder: !_this.state.isShowingModalOrder
                                        });
                                    } }, "Mua Ngay")))))),
            this.state.isShowingModalOrder ? (React.createElement(OrderEbook, { package: this.state.currentPackage, price: this.state.price, exit: function () {
                    _this.setState({
                        isShowingModalOrder: !_this.state.isShowingModalOrder
                    });
                } })) : ("")));
    };
    return OptionEbook;
}(React.Component));
export default OptionEbook;
//# sourceMappingURL=optionEbook.js.map