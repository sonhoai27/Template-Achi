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
import { reListAuthor } from "../reBlog";
import DetailAuthor from "./detailAuthor";
import AddAuthor from "./addAuthor";
var Author = /** @class */ (function (_super) {
    __extends(Author, _super);
    function Author(props) {
        var _this = _super.call(this, props) || this;
        _this.hiddenModalDetail = function () {
            _this.setState({
                isShowingModalDetail: !_this.state.isShowingModalDetail
            }, function () {
                _this.setState({
                    currentAuthor: {}
                });
            });
        };
        _this.hiddenModalAdd = function () {
            _this.setState({
                isShowingModalAdd: !_this.state.isShowingModalAdd
            });
        };
        _this.renderListAuthor = function () {
            if (_this.props.resListAuthor.list) {
                return _this.props.resListAuthor.list.map(function (element) {
                    return (React.createElement("tr", { key: element.category_id },
                        React.createElement("td", { onClick: function () {
                                _this.setState({
                                    currentAuthor: element
                                }, function () {
                                    _this.setState({
                                        isShowingModalDetail: !_this.state.isShowingModalDetail
                                    });
                                });
                            }, role: "row" },
                            React.createElement("p", null, element.author_name)),
                        React.createElement("td", null, element.author_intro)));
                });
            }
            return React.createElement("h1", null, "NULL");
        };
        _this.state = {
            isShowingModalAdd: false,
            isShowingModalDetail: false,
            currentAuthor: {}
        };
        return _this;
    }
    Author.prototype.componentDidMount = function () {
        this.props.reListAuthor();
    };
    Author.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-8" },
                    React.createElement("div", { className: "panel" },
                        React.createElement("div", { className: "panel-toolbar" },
                            React.createElement("div", { className: "panel-heading" }, "Danh s\u00E1ch author"),
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
                                            React.createElement("th", null, "Intro"))),
                                    React.createElement("tbody", null, this.renderListAuthor()))))))),
            this.state.isShowingModalDetail ? React.createElement(DetailAuthor, { author: this.state.currentAuthor, isShowingModal: this.hiddenModalDetail }) : '',
            this.state.isShowingModalAdd ? React.createElement(AddAuthor, { author: this.state.currentAuthor, isShowingModal: this.hiddenModalAdd }) : ''));
    };
    return Author;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListAuthor: storeState.reBlog.resListAuthor
}); };
var mapDispatchToProps = {
    reListAuthor: reListAuthor
};
export default connect(mapStateToProps, mapDispatchToProps)(Author);
//# sourceMappingURL=author.js.map