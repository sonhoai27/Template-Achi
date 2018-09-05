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
import ListElementOnDetailUI from "./detail-ui";
import { connect } from "react-redux";
import { reShowListElement, reSetCurrentIdElement, reDeleteElementToDetailUI, reDetailUI, reAddCss } from "../reUI";
var ItemDetailUI = /** @class */ (function (_super) {
    __extends(ItemDetailUI, _super);
    function ItemDetailUI(props) {
        var _this = _super.call(this, props) || this;
        _this.showListElement = function (id) {
            _this.props.reShowListElement(true);
            _this.props.reSetCurrentIdElement(id);
        };
        _this.addCss = function (idDetailUI) {
            _this.props.reAddCss(_this.state, idDetailUI);
        };
        _this.onChangeCss = function (e) {
            var _a;
            // @ts-ignore
            _this.setState((_a = {},
                _a[e.target.name] = e.target.value,
                _a));
        };
        _this.generateInfo = function () {
            return (React.createElement("div", { className: "item-block" },
                React.createElement("div", { className: "toolbar" },
                    React.createElement("h3", null, _this.props.detailUI.element_name),
                    React.createElement("div", { className: "action" },
                        _this.props.detailUI.element_type == 0 ? (React.createElement("div", { onClick: function () {
                                return _this.showListElement(_this.props.detailUI.detail_ui_id);
                            }, className: "btn btn-xs btn-info" },
                            React.createElement("i", { className: "icon-drawar" }),
                            " Th\u00EAm Element m\u1EDBi")) : (""),
                        React.createElement("div", { onClick: function () {
                                _this.props.reDeleteElementToDetailUI(_this.props.currentMatchDetailUI.params.idUi, _this.props.detailUI.detail_ui_id);
                            }, className: "btn btn-xs btn-danger" },
                            React.createElement("i", { className: " icon-trash" }),
                            " Xo\u00E1"))),
                React.createElement("div", { className: "style" },
                    React.createElement("div", { className: "form-group" },
                        React.createElement("label", { className: "col-md-12" },
                            React.createElement("span", { className: "help" }, " Id c\u1EE7a \u0111\u1ED1i t\u01B0\u1EE3ng")),
                        React.createElement("div", { className: "col-md-12" },
                            React.createElement("input", { type: "text", className: "form-control", value: _this.props.detailUI.detail_ui_random_id })))),
                React.createElement("div", { className: "noi-dung" },
                    React.createElement("div", { className: "form-group" },
                        React.createElement("label", { className: "col-md-12" },
                            React.createElement("span", { className: "help" }, " Css c\u1EE7a \u0111\u1ED1i t\u01B0\u1EE3ng"),
                            React.createElement("div", { onClick: function () {
                                    _this.addCss(_this.props.detailUI.detail_ui_id);
                                }, className: "btn btn-xs btn-info" },
                                React.createElement("i", { className: " icon-doc" }),
                                " L\u01B0u")),
                        React.createElement("div", { className: "col-md-12" },
                            React.createElement("textarea", { name: "detail_ui_css", onChange: _this.onChangeCss, className: "form-control", defaultValue: _this.props.detailUI.detail_ui_css }))))));
        };
        _this.generateContent = function () {
            var content = [_this.generateInfo()];
            if (_this.props.detailUI.child) {
                content.push(_this.generateSubItemDetailUI());
            }
            return content;
        };
        _this.generateSubItemDetailUI = function () {
            return (React.createElement(ListElementOnDetailUI, { sub: "child", detail: _this.props.detailUI.child }));
        };
        _this.state = {
            detail_ui_css: ''
        };
        return _this;
    }
    ItemDetailUI.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.deleteElementToUIDetail != this.props.deleteElementToUIDetail &&
            nextProps.deleteElementToUIDetail.list == 1) {
            this.props.reDetailUI(this.props.currentMatchDetailUI.params.idUi);
        }
    };
    ItemDetailUI.prototype.render = function () {
        return (React.createElement("div", { className: "item " + (this.props.sub != undefined ? this.props.sub : "") }, this.generateContent()));
    };
    return ItemDetailUI;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    showListElement: storeState.reUI.showListElement,
    currentIdElement: storeState.reUI.currentIdElement,
    deleteElementToUIDetail: storeState.reUI.deleteElementToUIDetail,
    currentMatchDetailUI: storeState.reUI.currentMatchDetailUI,
}); };
var mapDispatchToProps = {
    reShowListElement: reShowListElement,
    reSetCurrentIdElement: reSetCurrentIdElement,
    reDeleteElementToDetailUI: reDeleteElementToDetailUI,
    reDetailUI: reDetailUI,
    reAddCss: reAddCss
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailUI);
//# sourceMappingURL=item-detail-ui.js.map