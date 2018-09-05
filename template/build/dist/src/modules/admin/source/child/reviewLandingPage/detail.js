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
import ItemReviewLandingPage from './item';
import { Helmet } from "react-helmet";
var DetailReviewLandingPage = /** @class */ (function (_super) {
    __extends(DetailReviewLandingPage, _super);
    function DetailReviewLandingPage(props) {
        var _this = _super.call(this, props) || this;
        _this.makeItem = function () {
            var _a;
            var content = React.createElement(_this.props.item.element_tag, (_a = {
                    class: _this.props.item.element_class + ' ' + _this.props.item.content_element_class,
                    id: _this.props.item.detail_ui_random_id
                },
                _a[_this.props.item.content_element_attribute] = _this.props.item.content_element_attribute_src,
                _a), _this.makeSub());
            return content;
        };
        _this.makeSub = function () {
            if (_this.props.item.child) {
                return [React.createElement(ItemReviewLandingPage, { items: _this.props.item.child })];
            }
            else {
                return _this.props.item.content_element_data;
            }
        };
        return _this;
    }
    DetailReviewLandingPage.prototype.componentDidMount = function () {
        if (!this.props.item.child) {
            var temp = document.getElementById(this.props.item.detail_ui_random_id);
            temp.innerHTML = this.props.item.content_element_data;
        }
    };
    DetailReviewLandingPage.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Helmet, { style: [{
                        "cssText": "\n                " + this.props.item.detail_ui_css
                    }] }),
            this.makeItem()));
    };
    return DetailReviewLandingPage;
}(React.Component));
var mapStateToProps = function (storeState) { return ({}); };
var mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(DetailReviewLandingPage);
//# sourceMappingURL=detail.js.map