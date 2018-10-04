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
import { reListContentUISource, reShowEditContent } from "./reSource";
import ListElementDetailUISource from "./detail-ui/detail-ui";
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";
import { reIsDanger, reIsSuccess } from "../../../reducers/init";
import ModalEditContentElement from "./detail-ui/ModalEditContentElement";
var AddContentUISource = /** @class */ (function (_super) {
    __extends(AddContentUISource, _super);
    function AddContentUISource(props) {
        return _super.call(this, props) || this;
    }
    AddContentUISource.prototype.componentDidMount = function () {
        this.props.reListContentUISource(this.props.match.params.idUI, this.props.match.params.idSource);
    };
    AddContentUISource.prototype.componentDidUpdate = function (preProps) {
        var _this = this;
        if (this.props.resAddUpdateContentElement != preProps.resAddUpdateContentElement) {
            if (this.props.resAddUpdateContentElement.status === 200) {
                this.props.reIsSuccess(true);
                setTimeout(function () {
                    _this.props.reIsSuccess(false);
                    _this.props.reListContentUISource(_this.props.match.params.idUI, _this.props.match.params.idSource);
                }, 2000);
            }
            else {
                this.props.reIsDanger(true);
                setTimeout(function () {
                    _this.props.reIsDanger(false);
                    _this.props.reListContentUISource(_this.props.match.params.idUI, _this.props.match.params.idSource);
                }, 2000);
            }
        }
    };
    AddContentUISource.prototype.render = function () {
        return (React.createElement("div", { className: "row add-element-to-ui add-content-ui-source" },
            React.createElement("div", { className: "col-md-12" },
                React.createElement("div", { className: "panel" },
                    React.createElement("div", { className: "panel-toolbar" },
                        React.createElement("div", { className: "panel-heading", style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            } }, "Chi ti\u1EBFt Landing Page"),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement(Link, { target: "_blank", to: BASEURLADMIN + 'source/review-landing-page/' + this.props.match.params.idUI + '/' + this.props.match.params.idSource },
                                React.createElement("div", { className: "btn btn-sm btn-info" },
                                    React.createElement("i", { className: "ti-eye" }),
                                    " Xem th\u1EED")))),
                    React.createElement("div", { className: "content" },
                        React.createElement(ListElementDetailUISource, { match: this.props.match, detail: this.props.resListContentUISource.list })))),
            this.props.resShowEditContent ? React.createElement(ModalEditContentElement, null) : ''));
    };
    return AddContentUISource;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListContentUISource: storeState.reSource.resListContentUISource,
    resAddUpdateContentElement: storeState.reUI.resAddUpdateContentElement,
    resShowEditContent: storeState.reSource.resShowEditContent
}); };
var mapDispatchToProps = {
    reListContentUISource: reListContentUISource,
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess,
    reShowEditContent: reShowEditContent
};
export default connect(mapStateToProps, mapDispatchToProps)(AddContentUISource);
//# sourceMappingURL=addContentUISource.js.map