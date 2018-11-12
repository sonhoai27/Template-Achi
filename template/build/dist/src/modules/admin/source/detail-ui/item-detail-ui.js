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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import { connect } from "react-redux";
import ListElementDetailUISource from "./detail-ui";
import { reAddUpdateContentElement } from "../../ui/reUI";
import { reSetContentElement, reShowEditContent } from "../reSource";
var ItemDetailUISource = /** @class */ (function (_super) {
    __extends(ItemDetailUISource, _super);
    function ItemDetailUISource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            content_element_attribute: _this.props.detailUI.content_element_attribute,
            content_element_attribute_src: _this.props.detailUI
                .content_element_attribute_src,
            content_element_data: _this.props.detailUI.content_element_data,
            content_element_class: _this.props.detailUI.content_element_class
        };
        _this.saveContentElement = function (obj) {
            var _a;
            var tempDom = document.getElementById(obj.idVirtualElement);
            _this.props.reAddUpdateContentElement(__assign({}, obj, (_a = {}, _a[tempDom.name] = tempDom.value, _a)));
        };
        _this.saveContentElementByTiny = function () { };
        _this.checkChild = function () {
            if (_this.props.detailUI.child) {
                return true;
            }
            else {
                return false;
            }
        };
        _this.renderNoiDung = function () {
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", { className: "col-md-12" },
                        React.createElement("span", { className: "help" }, " Attribute"),
                        React.createElement("div", { onClick: function () {
                                return _this.saveContentElement({
                                    idVirtualElement: _this.props.detailUI.detail_ui_random_id + "-attr",
                                    content_element_id: _this.props.detailUI.content_element_id,
                                    content_element_id_detail_ui: _this.props.detailUI
                                        .detail_ui_id,
                                    content_element_id_source: _this.props.match.params.idSource
                                });
                            }, className: "btn btn-xs btn-info" },
                            React.createElement("i", { className: " icon-doc" }),
                            " L\u01B0u")),
                    React.createElement("div", { className: "col-md-12" },
                        React.createElement("input", { className: "form-control", type: "text", name: "content_element_attribute", defaultValue: _this.state.content_element_attribute, id: _this.props.detailUI.detail_ui_random_id + "-attr" }))),
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", { className: "col-md-12" },
                        React.createElement("span", { className: "help" }, " Content Attribute"),
                        React.createElement("div", { onClick: function () {
                                return _this.saveContentElement({
                                    idVirtualElement: _this.props.detailUI.detail_ui_random_id + "-content-attr",
                                    content_element_id: _this.props.detailUI.content_element_id,
                                    content_element_id_detail_ui: _this.props.detailUI
                                        .detail_ui_id,
                                    content_element_id_source: _this.props.match.params.idSource
                                });
                            }, className: "btn btn-xs btn-info" },
                            React.createElement("i", { className: " icon-doc" }),
                            " L\u01B0u")),
                    React.createElement("div", { className: "col-md-12" },
                        React.createElement("input", { name: "content_element_attribute_src", id: _this.props.detailUI.detail_ui_random_id + "-content-attr", type: "text", defaultValue: _this.state.content_element_attribute_src, className: "form-control" })))));
        };
        _this.generateInfo = function () {
            return (React.createElement("div", { className: "item-block", style: { marginBottom: 0 } },
                React.createElement("div", { className: "toolbar", style: { justifyContent: "left" } },
                    React.createElement("h3", null, _this.props.detailUI.element_name),
                    React.createElement("input", { type: "text", name: "content_element_name", id: _this.props.detailUI.detail_ui_random_id + "-name-row", defaultValue: _this.props.detailUI.content_element_name, className: "form-control", style: {
                            width: "10%",
                            marginLeft: "16px",
                            marginRight: "16px"
                        } }),
                    React.createElement("div", { onClick: function () {
                            return _this.saveContentElement({
                                idVirtualElement: _this.props.detailUI.detail_ui_random_id + "-name-row",
                                content_element_id: _this.props.detailUI.content_element_id,
                                content_element_id_detail_ui: _this.props.detailUI.detail_ui_id,
                                content_element_id_source: _this.props.match.params.idSource
                            });
                        }, className: "btn btn-xs btn-info" }, "L\u01B0u t\u00EAn")),
                React.createElement("div", { className: "style" },
                    !_this.checkChild() ? (React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "form-group" },
                            React.createElement("label", { className: "col-md-12" },
                                React.createElement("span", { className: "help" }, " N\u1ED9i dung c\u1EE7a \u0111\u1ED1i t\u01B0\u1EE3ng"),
                                React.createElement("div", { onClick: function () {
                                        _this.props.reShowEditContent(true);
                                        _this.props.reSetContentElement(__assign({}, _this.props.detailUI, { idSource: _this.props.match.params.idSource }));
                                    }, className: "btn btn-xs btn-primary" },
                                    React.createElement("i", { className: " icon-doc" }),
                                    " S\u1EEDa"))),
                        React.createElement("div", { className: "xem-truoc-noi-dung" },
                            React.createElement("div", { dangerouslySetInnerHTML: { __html: _this.props.detailUI.content_element_data } })))) : '',
                    React.createElement("div", { className: "form-group" },
                        React.createElement("label", { className: "col-md-12" },
                            React.createElement("span", { className: "help" }, " Class"),
                            React.createElement("div", { onClick: function () {
                                    return _this.saveContentElement({
                                        idVirtualElement: _this.props.detailUI.detail_ui_random_id + "-class",
                                        content_element_id: _this.props.detailUI.content_element_id,
                                        content_element_id_detail_ui: _this.props.detailUI
                                            .detail_ui_id,
                                        content_element_id_source: _this.props.match.params.idSource
                                    });
                                }, className: "btn btn-xs btn-info" },
                                React.createElement("i", { className: " icon-doc" }),
                                " L\u01B0u")),
                        React.createElement("div", { className: "col-md-12" },
                            React.createElement("input", { name: "content_element_class", id: _this.props.detailUI.detail_ui_random_id + "-class", type: "text", className: "form-control", defaultValue: _this.state.content_element_class })))),
                React.createElement("div", { className: "noi-dung" }, !_this.checkChild() ? _this.renderNoiDung() : "")));
        };
        _this.generateContent = function () {
            var content = [_this.generateInfo()];
            if (_this.props.detailUI.child) {
                content.push(_this.generateSubItemDetailUI());
            }
            return content;
        };
        _this.generateSubItemDetailUI = function () {
            return (React.createElement(ListElementDetailUISource, { match: _this.props.match, sub: "child", detail: _this.props.detailUI.child }));
        };
        return _this;
    }
    ItemDetailUISource.prototype.render = function () {
        return (React.createElement("div", { className: "item " + (this.props.sub != undefined ? this.props.sub : "") }, this.generateContent()));
    };
    return ItemDetailUISource;
}(React.Component));
// () => this.saveContentElement({
//     idVirtualElement: this.props.detailUI.detail_ui_random_id + '-content',
//     content_element_id: this.props.detailUI.content_element_id,
//     content_element_id_detail_ui: this.props.detailUI.detail_ui_id,
//     content_element_id_source: this.props.match.params.idSource
// })
var mapStateToProps = function (storeState) { return ({}); };
var mapDispatchToProps = {
    reAddUpdateContentElement: reAddUpdateContentElement,
    reShowEditContent: reShowEditContent,
    reSetContentElement: reSetContentElement
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailUISource);
//# sourceMappingURL=item-detail-ui.js.map