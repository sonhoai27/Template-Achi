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
import ItemDetailUI from "./item-detail-ui";
var ListElementOnDetailUI = /** @class */ (function (_super) {
    __extends(ListElementOnDetailUI, _super);
    function ListElementOnDetailUI(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListElementOfUI = function () {
            if (_this.state.detail) {
                return _this.state.detail.map(function (element) {
                    return React.createElement(ItemDetailUI, { sub: _this.props.sub, key: element.detail_ui_random_id, detailUI: element });
                });
            }
            return '';
        };
        _this.state = {
            detail: _this.props.detail
        };
        return _this;
    }
    ListElementOnDetailUI.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.detail != this.props.detail) {
            this.setState({
                detail: nextProps.detail
            });
        }
    };
    ListElementOnDetailUI.prototype.render = function () {
        return this.renderListElementOfUI();
    };
    return ListElementOnDetailUI;
}(React.Component));
export default ListElementOnDetailUI;
//# sourceMappingURL=detail-ui.js.map