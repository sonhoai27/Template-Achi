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
import { reListContentUISource } from "../reSource";
import ItemReviewLandingPage from './reviewLandingPage/item';
var ReviewLandingPage = /** @class */ (function (_super) {
    __extends(ReviewLandingPage, _super);
    function ReviewLandingPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isFinish: false
        };
        return _this;
    }
    ReviewLandingPage.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.resListContentUISource != this.props.resListContentUISource) {
            this.setState({
                isFinish: true
            });
        }
    };
    ReviewLandingPage.prototype.componentDidMount = function () {
        this.props.reListContentUISource(this.props.match.params.idUI, this.props.match.params.idSource);
    };
    ReviewLandingPage.prototype.render = function () {
        return (React.createElement("div", { id: "review-lading-page" },
            React.createElement(ItemReviewLandingPage, { items: this.props.resListContentUISource.list })));
    };
    return ReviewLandingPage;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListContentUISource: storeState.reSource.resListContentUISource,
}); };
var mapDispatchToProps = {
    reListContentUISource: reListContentUISource
};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewLandingPage);
//# sourceMappingURL=review.js.map