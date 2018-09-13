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
import * as React from 'react';
var BackToTop = /** @class */ (function (_super) {
    __extends(BackToTop, _super);
    function BackToTop(props) {
        var _this = _super.call(this, props) || this;
        _this.backToTop = function () {
            var body = $('html, body');
            body.stop().animate({ scrollTop: 0 }, 500, 'swing');
        };
        return _this;
    }
    BackToTop.prototype.componentDidMount = function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 100) {
                $('.back-to-top').show();
            }
            else {
                $('.back-to-top').hide();
            }
        });
    };
    BackToTop.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("i", { className: "back-to-top la la-arrow-circle-up", style: { display: 'none' }, onClick: this.backToTop })));
    };
    return BackToTop;
}(React.Component));
export default BackToTop;
//# sourceMappingURL=BackToTop.js.map