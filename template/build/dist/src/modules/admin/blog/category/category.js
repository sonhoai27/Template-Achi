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
import { reListCategory, reDeleteCategory } from "../reBlog";
import DetailCategory from "./detailCategory";
import AddCategory from "./addCategory";
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    function Category(props) {
        var _this = _super.call(this, props) || this;
        _this.hiddenModalDetail = function () {
            _this.setState({
                isShowingModalDetail: !_this.state.isShowingModalDetail
            }, function () {
                _this.setState({
                    currentCategory: {}
                });
            });
        };
        _this.hiddenModalAdd = function () {
            _this.setState({
                isShowingModalAdd: !_this.state.isShowingModalAdd
            });
        };
        _this.renderListCategory = function () {
            if (_this.props.resListCategory.list) {
                return _this.props.resListCategory.list.map(function (element) {
                    return (React.createElement("tr", { key: element.category_id },
                        React.createElement("td", { onClick: function () {
                                _this.setState({
                                    currentCategory: element
                                }, function () {
                                    _this.setState({
                                        isShowingModalDetail: !_this.state.isShowingModalDetail
                                    });
                                });
                            }, role: "row" },
                            React.createElement("p", null, element.category_name)),
                        React.createElement("td", null, element.category_icon),
                        React.createElement("td", null, element.category_color),
                        React.createElement("td", null,
                            React.createElement("div", { className: "btn btn-xs btn-danger", onClick: function () {
                                    _this.props.reDeleteCategory(element.category_id);
                                } }, "X\u00F3a"))));
                });
            }
            return React.createElement("h1", null, "NULL");
        };
        _this.state = {
            isShowingModalAdd: false,
            isShowingModalDetail: false,
            currentCategory: {}
        };
        return _this;
    }
    Category.prototype.componentDidMount = function () {
        this.props.reListCategory();
    };
    Category.prototype.componentDidUpdate = function (preProps) {
        if (this.props.resDeleteCategory != preProps.resDeleteCategory) {
            if (this.props.resDeleteCategory.status === 200) {
                this.props.reListCategory();
            }
        }
    };
    Category.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-12" },
                    React.createElement("div", { className: "panel" },
                        React.createElement("div", { className: "panel-toolbar" },
                            React.createElement("div", { className: "panel-heading" }, "Danh s\u00E1ch danh m\u1EE5c"),
                            React.createElement("div", { className: "panel-action-bar" },
                                React.createElement("div", { className: "btn btn-xs btn-info", onClick: function () {
                                        _this.setState({
                                            isShowingModalAdd: !_this.state.isShowingModalAdd
                                        });
                                    } }, "Th\u00EAm m\u1EDBi"))),
                        React.createElement("div", { className: "content" },
                            React.createElement("div", { className: "table-responsive" },
                                React.createElement("table", { className: "table table-hover" },
                                    React.createElement("thead", null,
                                        React.createElement("tr", null,
                                            React.createElement("th", { role: "row" }, "T\u00EAn"),
                                            React.createElement("th", null, "Icon"),
                                            React.createElement("th", null, "M\u00E3 m\u00E0u"),
                                            React.createElement("th", null, "H\u00E0nh \u0111\u1ED9ng"))),
                                    React.createElement("tbody", null, this.renderListCategory()))))))),
            this.state.isShowingModalDetail ? React.createElement(DetailCategory, { category: this.state.currentCategory, isShowingModal: this.hiddenModalDetail }) : '',
            this.state.isShowingModalAdd ? React.createElement(AddCategory, { category: this.state.currentCategory, isShowingModal: this.hiddenModalAdd }) : ''));
    };
    return Category;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListCategory: storeState.reBlog.resListCategory,
    resDeleteCategory: storeState.reBlog.resDeleteCategory
}); };
var mapDispatchToProps = {
    reListCategory: reListCategory,
    reDeleteCategory: reDeleteCategory
};
export default connect(mapStateToProps, mapDispatchToProps)(Category);
//# sourceMappingURL=category.js.map