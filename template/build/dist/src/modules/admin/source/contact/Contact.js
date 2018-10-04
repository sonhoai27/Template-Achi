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
import { reListContactPaging } from "../reSource";
import ModalExportContact from "./ModalExportContact";
var Contact = /** @class */ (function (_super) {
    __extends(Contact, _super);
    function Contact(props) {
        var _this = _super.call(this, props) || this;
        _this.makeCurrentPage = function () {
            var page = window.location.href.split("page=")[1];
            if (page != undefined || page != null) {
                return page;
            }
            else {
                return "1";
            }
        };
        _this.getMoreBlog = function (page) {
            _this.props.reListContactPaging((page - 1) * 20);
        };
        _this.renderListContact = function () {
            if (_this.props.resListContactPaging.list) {
                return _this.props.resListContactPaging.list.map(function (element, index) {
                    return (React.createElement("tr", null,
                        React.createElement("td", null, index + 1),
                        React.createElement("td", null, element.email_name),
                        React.createElement("td", null, element.email_email),
                        React.createElement("td", null, element.email_phone)));
                });
            }
            return React.createElement("h1", null, "Null");
        };
        _this.state = {
            isShowingModal: false
        };
        return _this;
    }
    Contact.prototype.componentDidMount = function () {
        this.props.reListContactPaging((parseInt(this.makeCurrentPage(), 10) - 1) * 20);
    };
    Contact.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-12" },
                    React.createElement("div", { className: "panel" },
                        React.createElement("div", { className: "panel-toolbar" },
                            React.createElement("div", { className: "panel-heading" }, "Qu\u1EA3n l\u00ED li\u00EAn h\u1EC7"),
                            React.createElement("div", { className: "panel-action-bar" },
                                React.createElement("div", { onClick: function () {
                                        _this.setState({
                                            isShowingModal: !_this.state.isShowingModal
                                        });
                                    }, className: "btn btn-sm btn-info" }, "Xu\u1EA5t file"))),
                        React.createElement("div", { className: "content" },
                            React.createElement("div", { className: "table-responsive" },
                                React.createElement("table", { className: "table table-hover" },
                                    React.createElement("thead", null,
                                        React.createElement("tr", null,
                                            React.createElement("th", { className: "text-center", role: "row" }, "#"),
                                            React.createElement("th", null, "T\u00EAn"),
                                            React.createElement("th", null, "Email"),
                                            React.createElement("th", null, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"))),
                                    React.createElement("tbody", null, this.renderListContact()))))))),
            this.state.isShowingModal ? React.createElement(ModalExportContact, { showHide: function () {
                    _this.setState({
                        isShowingModal: !_this.state.isShowingModal
                    });
                } }) : ''));
    };
    return Contact;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListContactPaging: storeState.reSource.resListContactPaging
}); };
var mapDispatchToProps = {
    reListContactPaging: reListContactPaging
};
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
//# sourceMappingURL=Contact.js.map