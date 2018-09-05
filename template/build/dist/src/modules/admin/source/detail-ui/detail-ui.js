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
import ItemDetailUISource from "./item-detail-ui";
var ListElementDetailUISource = /** @class */ (function (_super) {
    __extends(ListElementDetailUISource, _super);
    function ListElementDetailUISource(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListElementOfUI = function () {
            if (_this.state.detail) {
                return _this.state.detail.map(function (element) {
                    return React.createElement(ItemDetailUISource, { sub: _this.props.sub, key: element.detail_ui_random_id, match: _this.props.match, detailUI: element });
                });
            }
            return '';
        };
        _this.state = {
            detail: _this.props.detail
        };
        return _this;
    }
    ListElementDetailUISource.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.detail != this.props.detail) {
            this.setState({
                detail: nextProps.detail
            });
        }
    };
    ListElementDetailUISource.prototype.render = function () {
        return (React.createElement(React.Fragment, null, this.renderListElementOfUI()));
    };
    return ListElementDetailUISource;
}(React.Component));
export default ListElementDetailUISource;
//# sourceMappingURL=detail-ui.js.map