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
import ItemPage from './item';
import { Helmet } from "react-helmet";
var DetailPage = /** @class */ (function (_super) {
    __extends(DetailPage, _super);
    function DetailPage(props) {
        var _this = _super.call(this, props) || this;
        _this.makeItem = function () {
            var _a;
            var content = React.createElement(_this.props.item.element_tag, (_a = {
                    class: _this.props.item.element_class + ' ' + _this.props.item.content_page_class,
                    id: _this.props.item.detail_ui_random_id
                },
                _a[_this.props.item.content_page_attribute] = _this.props.item.content_page_attribute_src,
                _a), _this.makeSub());
            return content;
        };
        _this.makeSub = function () {
            if (_this.props.item.child) {
                return [React.createElement(ItemPage, { coms: _this.props.coms, items: _this.props.item.child })];
            }
            else {
                if (_this.props.item.element_type === "2") {
                    return [_this.props.coms[_this.props.item.content_page_attribute]];
                }
                else {
                    return _this.props.item.content_page_data;
                }
            }
        };
        return _this;
    }
    DetailPage.prototype.componentDidMount = function () {
        if (!this.props.item.child && this.props.item.element_type !== "2") {
            var temp = document.getElementById(this.props.item.detail_ui_random_id);
            temp.innerHTML = this.props.item.content_page_data;
        }
    };
    DetailPage.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Helmet, { style: [{
                        "cssText": "\n                " + this.props.item.detail_ui_css
                    }] }),
            this.makeItem()));
    };
    return DetailPage;
}(React.Component));
var mapStateToProps = function (storeState) { return ({}); };
var mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
//# sourceMappingURL=detail.js.map