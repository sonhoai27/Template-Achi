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
                        React.createElement("img", { src: "http://nguyenminhchi.com/api/uploads/images/bdf60984143956f8f7951539450000000.png", alt: "", className: "img-responsive" })),
                    React.createElement("div", { className: "swiper-slide" },
                        React.createElement("img", { src: "http://nguyenminhchi.com/api/uploads/images/036dc3a90ff5501ef6191539450000000.png", alt: "", className: "img-responsive" })),
                    React.createElement("div", { className: "swiper-slide" },
                        React.createElement("img", { src: "http://nguyenminhchi.com/api/uploads/images/1534decea79b82bc2fe91539450000000.png", alt: "", className: "img-responsive" })),
                    React.createElement("div", { className: "swiper-slide" },
                        React.createElement("img", { src: "http://nguyenminhchi.com/api/uploads/images/4d22f6abba817c9028401539450000000.png", alt: "", className: "img-responsive" })),
                    React.createElement("div", { className: "swiper-slide" },
                        React.createElement("img", { src: "http://nguyenminhchi.com/api/uploads/images/a92f135863b01abdd79e1539450000000.png", alt: "", className: "img-responsive" })),
                    React.createElement("div", { className: "swiper-slide" },
                        React.createElement("img", { src: "http://nguyenminhchi.com/api/uploads/images/ba471b19a669e9a385ca1539450000000.png", alt: "", className: "img-responsive" })),
                    React.createElement("div", { className: "swiper-slide" },
                        React.createElement("img", { src: "http://nguyenminhchi.com/api/uploads/images/bd7d41f3c025f7be3e2d1539450000000.png", alt: "", className: "img-responsive" })),
                    React.createElement("div", { className: "swiper-slide" },
                        React.createElement("img", { src: "http://nguyenminhchi.com/api/uploads/images/c7023ee3a8a920df61c41539450000000.png", alt: "", className: "img-responsive" })),
                    React.createElement("div", { className: "swiper-slide" },
                        React.createElement("img", { src: "http://nguyenminhchi.com/api/uploads/images/fbf3e8d080f4413140111539450000000.png", alt: "", className: "img-responsive" }))),
                React.createElement("div", { className: "swiper-pagination" }),
                React.createElement("div", { className: "swiper-button-next" }),
                React.createElement("div", { className: "swiper-button-prev" }))));
    };
    return EbookPreview;
}(React.Component));
export default EbookPreview;
//# sourceMappingURL=preview.js.map