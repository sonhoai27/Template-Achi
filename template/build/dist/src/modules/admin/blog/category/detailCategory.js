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
import { SketchPicker } from "react-color";
import { connect } from "react-redux";
import { reSetCurrentEditorPhoto, reShowPhotoApp, reIsDanger, reIsSuccess } from "../../../../reducers/init";
import { reUpdateCategory, reListCategory } from "../reBlog";
import { alias } from "../../../../utils/alias";
var DetailCategory = /** @class */ (function (_super) {
    __extends(DetailCategory, _super);
    function DetailCategory(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChangeComplete = function (color) {
            try {
                _this.setState({
                    category_color: color.hex
                });
            }
            catch (e) {
            }
        };
        _this.onChange = function (e) {
            var _a;
            // @ts-ignore
            _this.setState((_a = {},
                _a[e.target.name] = e.target.value,
                _a));
        };
        _this.onUpdate = function () {
            var temp = document.getElementById('img-cover-blog-preview');
            _this.props.reUpdateCategory(__assign({}, _this.state, { category_alias: alias(_this.state.category_name), category_icon: temp.src }), _this.state.category_id);
        };
        _this.state = {
            category_alias: _this.props.category.category_alias,
            category_id: _this.props.category.category_id,
            category_name: _this.props.category.category_name,
            category_icon: _this.props.category.category_icon,
            category_color: _this.props.category.category_color
        };
        return _this;
    }
    DetailCategory.prototype.componentDidUpdate = function (preProps) {
        var _this = this;
        console.log(this.props.resUpdateCategory);
        if (this.props.resUpdateCategory != preProps.resUpdateCategory) {
            if (this.props.resUpdateCategory.status === 200) {
                this.props.reIsSuccess(true);
                setTimeout(function () {
                    _this.props.reIsSuccess(false);
                    _this.props.isShowingModal();
                    _this.props.reListCategory();
                }, 2000);
            }
            else {
                this.props.reIsDanger(true);
                setTimeout(function () {
                    _this.props.reIsDanger(false);
                    _this.props.isShowingModal();
                }, 2000);
            }
        }
    };
    DetailCategory.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { style: { display: "block", overflow: 'auto' }, className: "modal fade in order-ebook", role: "dialog", "aria-hidden": "true" },
                React.createElement("div", { className: "modal-dialog modal-lg" },
                    React.createElement("div", { className: "modal-content" },
                        React.createElement("div", { className: "modal-header" },
                            React.createElement("button", { onClick: function () { return _this.props.isShowingModal(); }, type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true" }, "\u00D7"),
                            React.createElement("h4", { className: "modal-title" }, "Chi ti\u1EBFt")),
                        React.createElement("div", { className: "modal-body" },
                            React.createElement("div", { className: "row" },
                                React.createElement("div", { className: "col-sm-4" },
                                    React.createElement(SketchPicker, { color: this.state.category_color === null || this.state.category_color === ""
                                            ? '' : this.state.category_color, onChange: this.handleChangeComplete })),
                                React.createElement("div", { className: "col-sm-8" },
                                    React.createElement("div", { className: "row" },
                                        React.createElement("div", { className: "form-group col-sm-6" },
                                            React.createElement("label", { className: "col-sm-12" }, "T\u00EAn"),
                                            React.createElement("div", { className: "col-sm-12" },
                                                React.createElement("input", { onChange: this.onChange, name: "category_name", className: "form-control", defaultValue: this.state.category_name }))),
                                        React.createElement("div", { className: "form-group col-sm-6" },
                                            React.createElement("label", { className: "col-sm-12" }, "M\u00E0u"),
                                            React.createElement("div", { className: "col-sm-12" },
                                                React.createElement("input", { onChange: this.onChange, name: "category_color", className: "form-control", value: this.state.category_color }))),
                                        React.createElement("div", { className: "form-group col-sm-12" },
                                            React.createElement("label", { className: "col-sm-12" }, "H\u00ECnh cover"),
                                            React.createElement("div", { className: "col-sm-12 cover-blog", onClick: function () {
                                                    _this.props.reShowPhotoApp(true);
                                                    _this.props.reSetCurrentEditorPhoto("img-cover-blog-preview");
                                                } },
                                                React.createElement("i", { className: "ti-upload" }),
                                                React.createElement("img", { src: this.state.category_icon, id: "img-cover-blog-preview", className: "img-responsive" }))))))),
                        React.createElement("div", { className: "modal-footer" },
                            React.createElement("button", { onClick: function () { return _this.props.isShowingModal(); }, type: "button", className: "btn btn-default waves-effect", "data-dismiss": "modal" }, "Tho\u00E1t"),
                            React.createElement("button", { onClick: this.onUpdate, type: "button", className: "btn btn-danger waves-effect waves-light" }, "L\u01B0u"))))),
            React.createElement("div", { className: "modal-backdrop fade in" })));
    };
    return DetailCategory;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListStatus: storeState.reBlog.resListStatus,
    resUpdateCategory: storeState.reBlog.resUpdateCategory
}); };
var mapDispatchToProps = {
    reSetCurrentEditorPhoto: reSetCurrentEditorPhoto,
    reShowPhotoApp: reShowPhotoApp,
    reUpdateCategory: reUpdateCategory,
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess,
    reListCategory: reListCategory
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailCategory);
//# sourceMappingURL=detailCategory.js.map