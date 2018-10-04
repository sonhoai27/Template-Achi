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
import Slider from "react-slick";
import { RESOURCE } from "../../../../config/const";
import { Helmet } from "react-helmet";
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
};
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(props) {
        return _super.call(this, props) || this;
    }
    Customer.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Helmet, null,
                React.createElement("link", { rel: "stylesheet", type: "text/css", href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" }),
                React.createElement("link", { rel: "stylesheet", type: "text/css", href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" })),
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
                React.createElement("div", { className: "col-sm-2" }))));
    };
    return Customer;
}(React.Component));
export default Customer;
//# sourceMappingURL=customer.js.map