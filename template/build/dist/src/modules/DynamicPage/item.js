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
import { connect } from "react-redux";
import DetailPage from './detail';
var ItemPage = /** @class */ (function (_super) {
    __extends(ItemPage, _super);
    function ItemPage(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListElement = function () {
            if (_this.props.items) {
                return _this.props.items.map(function (element) {
                    return React.createElement(DetailPage, { coms: _this.props.coms, key: element.detail_ui_random_id, item: element });
                });
            }
            return '';
        };
        return _this;
    }
    ItemPage.prototype.render = function () {
        return this.renderListElement();
    };
    return ItemPage;
}(React.Component));
var mapStateToProps = function (storeState) { return ({}); };
var mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
//# sourceMappingURL=item.js.map