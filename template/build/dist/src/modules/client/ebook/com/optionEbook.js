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
import axios from 'axios';
import { API } from "../../../../config/const";
var OptionEbook = /** @class */ (function (_super) {
    __extends(OptionEbook, _super);
    function OptionEbook(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListPackage = function () {
            return _this.state.listPackage.map(function (element) {
                var price = Number(element.package_ebook_price);
                return (React.createElement("div", { className: "col-sm-3" },
                    React.createElement("div", { className: "pricing-option" },
                        React.createElement("h1", { style: { textTransform: 'uppercase' } }, element.package_ebook_name),
                        React.createElement("hr", null),
                        React.createElement("p", { dangerouslySetInnerHTML: { __html: element.package_ebook_content } }),
                        React.createElement("hr", null),
                        React.createElement("div", { className: "price" },
                            React.createElement("div", { className: "front" },
                                React.createElement("span", { className: "price" },
                                    price.toLocaleString('VN'),
                                    "\u0111/cu\u1ED1n")),
                            React.createElement("div", { className: "back" },
                                React.createElement("a", { className: "button", onClick: function () {
                                        _this.setState({
                                            currentPackage: element.package_ebook_id,
                                            price: 105000,
                                            isShowingModalOrder: !_this.state.isShowingModalOrder
                                        });
                                    } }, "Mua Ngay"))))));
            });
        };
        _this.state = {
            isShowingModalOrder: false,
            currentPackage: -1,
            price: 0,
            listPackage: []
        };
        return _this;
    }
    OptionEbook.prototype.componentDidMount = function () {
        var _this = this;
        axios.get(API + 'package-ebook')
            .then(function (result) {
            _this.setState({
                listPackage: result.data.list
            });
        });
    };
    OptionEbook.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "row pricing-table" }, this.renderListPackage()),
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