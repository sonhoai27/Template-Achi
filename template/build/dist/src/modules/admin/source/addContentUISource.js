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
import { reListContentUISource } from "./reSource";
import ListElementDetailUISource from "./detail-ui/detail-ui";
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";
var AddContentUISource = /** @class */ (function (_super) {
    __extends(AddContentUISource, _super);
    function AddContentUISource(props) {
        return _super.call(this, props) || this;
    }
    AddContentUISource.prototype.componentDidMount = function () {
        this.props.reListContentUISource(this.props.match.params.idUI, this.props.match.params.idSource);
    };
    AddContentUISource.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.resAddUpdateContentElement != this.props.resAddUpdateContentElement) {
            if (nextProps.resAddUpdateContentElement.list) {
                this.props.reListContentUISource(this.props.match.params.idUI, this.props.match.params.idSource);
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
                        React.createElement(ListElementDetailUISource, { match: this.props.match, detail: this.props.resListContentUISource.list }))))));
    };
    return AddContentUISource;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListContentUISource: storeState.reSource.resListContentUISource,
    resAddUpdateContentElement: storeState.reUI.resAddUpdateContentElement
}); };
var mapDispatchToProps = {
    reListContentUISource: reListContentUISource
};
export default connect(mapStateToProps, mapDispatchToProps)(AddContentUISource);
//# sourceMappingURL=addContentUISource.js.map