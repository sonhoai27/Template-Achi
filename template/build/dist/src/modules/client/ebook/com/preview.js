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
import { RESOURCE } from "../../../../config/const";
var EbookPreview = /** @class */ (function (_super) {
    __extends(EbookPreview, _super);
    function EbookPreview(props) {
        return _super.call(this, props) || this;
    }
    EbookPreview.prototype.componentDidMount = function () {
        $(window).resize(function () {
            var ww = $(window).width();
            if (ww > 768) {
                new Swiper(".swiper-container", {
                    slidesPerView: 3,
                    centeredSlides: true,
                    spaceBetween: 30,
                    slidesPerGroup: 3,
                    delay: 500,
                    loop: true,
                    waitForTransition: true,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                });
            }
            else {
                new Swiper(".swiper-container", {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    loop: true,
                    delay: 500,
                    waitForTransition: true,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                });
            }
        });
        $(window).trigger('resize');
    };
    EbookPreview.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "swiper-container" },
                React.createElement("div", { className: "swiper-wrapper" },
                    React.createElement("div", { className: "swiper-slide" },
                        React.createElement("img", { src: RESOURCE + "images/ebook/1.png", alt: "", className: "img-responsive" })),
                    React.createElement("div", { className: "swiper-slide" },
                        React.createElement("img", { src: RESOURCE + "images/ebook/2.png", alt: "", className: "img-responsive" })),
                    React.createElement("div", { className: "swiper-slide" },
                        React.createElement("img", { src: RESOURCE + "images/ebook/3.png", alt: "", className: "img-responsive" })),
                    React.createElement("div", { className: "swiper-slide" },
                        React.createElement("img", { src: RESOURCE + "images/ebook/4.png", alt: "", className: "img-responsive" })),
                    React.createElement("div", { className: "swiper-slide" },
                        React.createElement("img", { src: RESOURCE + "images/ebook/5.png", alt: "", className: "img-responsive" })),
                    React.createElement("div", { className: "swiper-slide" },
                        React.createElement("img", { src: RESOURCE + "images/ebook/6.png", alt: "", className: "img-responsive" })),
                    React.createElement("div", { className: "swiper-slide" },
                        React.createElement("img", { src: RESOURCE + "images/ebook/7.png", alt: "", className: "img-responsive" })),
                    React.createElement("div", { className: "swiper-slide" },
                        React.createElement("img", { src: RESOURCE + "images/ebook/8.png", alt: "", className: "img-responsive" })),
                    React.createElement("div", { className: "swiper-slide" },
                        React.createElement("img", { src: RESOURCE + "images/ebook/9.png", alt: "", className: "img-responsive" }))),
                React.createElement("div", { className: "swiper-pagination" }),
                React.createElement("div", { className: "swiper-button-next" }),
                React.createElement("div", { className: "swiper-button-prev" }))));
    };
    return EbookPreview;
}(React.Component));
export default EbookPreview;
//# sourceMappingURL=preview.js.map