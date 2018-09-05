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
import * as ReactDOM from 'react-dom';
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image(props) {
        var _this = _super.call(this, props) || this;
        _this.resizeImage = function () {
            var target = ReactDOM.findDOMNode(_this.refs.image);
            if (target === null) {
                return;
            }
            var originalWidth = target instanceof HTMLImageElement ? target.naturalWidth : 0;
            var originalHeight = target instanceof HTMLImageElement ? target.naturalHeight : 0;
            var widthRatio = _this.props.width / originalWidth;
            var heightRatio = _this.props.height / originalHeight;
            if (widthRatio < heightRatio) {
                _this.setState({
                    width: originalWidth * widthRatio,
                    height: originalHeight * widthRatio
                });
            }
            else {
                _this.setState({
                    width: originalWidth * heightRatio,
                    height: originalHeight * heightRatio
                });
            }
        };
        _this.state = {
            width: 0,
            height: 0
        };
        return _this;
    }
    Image.prototype.render = function () {
        var _this = this;
        var style = {
            wrapper: {
                margin: 'auto',
                position: 'relative',
                width: this.props.width,
                height: this.props.height,
                backgroundColor: this.props.backgroundColor
            },
            image: {
                position: 'absolute',
                display: 'block',
                left: (this.props.width - this.state.width) / 2,
                top: (this.props.height - this.state.height) / 2,
                width: this.state.width,
                height: this.state.height
            }
        };
        return (React.createElement("div", { style: style.wrapper },
            React.createElement("img", { onContextMenu: function (e) {
                    _this.props.onClick ? _this.props.onClick(e) : console.log('test');
                }, id: this.props.dataSrc, ref: "image", src: this.props.src, alt: this.props.alt, style: style.image, onLoad: this.resizeImage })));
    };
    return Image;
}(React.Component));
export default Image;
//# sourceMappingURL=image.js.map