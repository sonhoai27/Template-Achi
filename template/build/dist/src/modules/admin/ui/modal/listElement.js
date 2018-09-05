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
import { reListElement, reShowListElement, reAddElementToDetailUI, reDetailUI } from "../reUI";
import { connect } from "react-redux";
var ListElement = /** @class */ (function (_super) {
    __extends(ListElement, _super);
    function ListElement(props) {
        var _this = _super.call(this, props) || this;
        _this.addElementToDetailUI = function (element_id, element_real_id) {
            _this.props.reAddElementToDetailUI({
                detail_ui_id_element: element_id,
                detail_ui_id_ui: _this.props.match.params.idUi,
                detail_ui_random_id: element_real_id + '-' + (Date.now()),
                detail_ui_parent_id: _this.props.currentIdElement
            });
        };
        _this.renderListElement = function () {
            return _this.props.resListElement.map(function (element) {
                return (React.createElement("li", null,
                    React.createElement("span", { onClick: function () {
                            _this.addElementToDetailUI(element.element_id, element.element_real_id);
                            setTimeout(function () {
                                _this.props.reShowListElement(false);
                                document.body.style.overflowY = 'auto';
                            }, 1000);
                        } }, element.element_name)));
            });
        };
        return _this;
    }
    ListElement.prototype.componentDidMount = function () {
        this.props.reListElement();
        document.body.style.overflowY = 'hidden';
    };
    ListElement.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.addElementToUIDetail != this.props.addElementToUIDetail) {
            this.props.reDetailUI(this.props.match.params.idUi);
        }
    };
    ListElement.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { id: "listElement", className: "custom-modal" },
            React.createElement("div", { style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 16
                } },
                React.createElement("h3", { style: { margin: 0 } }, "Danh s\u00E1ch elements"),
                React.createElement("button", { onClick: function () {
                        _this.props.reShowListElement(false);
                        document.body.style.overflowY = 'auto';
                    }, className: "btn btn-xs btn-info" }, "T\u1EAFt")),
            React.createElement("div", { className: "custom-modal-content" },
                React.createElement("ul", null, this.renderListElement()))));
    };
    return ListElement;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListElement: storeState.reUI.resListElement,
    addElementToUIDetail: storeState.reUI.addElementToUIDetail,
    currentIdElement: storeState.reUI.currentIdElement
}); };
var mapDispatchToProps = {
    reListElement: reListElement,
    reShowListElement: reShowListElement,
    reAddElementToDetailUI: reAddElementToDetailUI,
    reDetailUI: reDetailUI
};
export default connect(mapStateToProps, mapDispatchToProps)(ListElement);
//# sourceMappingURL=listElement.js.map