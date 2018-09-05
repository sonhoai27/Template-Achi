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
import { reListDateSche } from "../reSource";
import DetailDateSche from "./detailDateSche";
var ListDateSche = /** @class */ (function (_super) {
    __extends(ListDateSche, _super);
    function ListDateSche(props) {
        var _this = _super.call(this, props) || this;
        _this.hiddenModalDetailDateSche = function () {
            _this.setState({
                currentDateSche: '',
                showModelUpdateDateSche: !_this.state.showModelUpdateDateSche
            });
        };
        _this.renderListDateSche = function () {
            if (_this.props.resListDateSche.list) {
                return _this.props.resListDateSche.list.map(function (element) {
                    return (React.createElement("tr", null,
                        React.createElement("td", { className: "text-center" },
                            "V\u1ECB tr\u00ED ",
                            element.date_source_stt),
                        React.createElement("td", { onClick: function () {
                                _this.setState({
                                    currentDateSche: element,
                                    showModelUpdateDateSche: !_this.state.showModelUpdateDateSche
                                });
                            } },
                            React.createElement("div", { dangerouslySetInnerHTML: { __html: element.date_source_time } }))));
                });
            }
            return React.createElement("p", null, "Ch\u01B0a c\u00F3");
        };
        _this.state = {
            showModelUpdateDateSche: false,
            currentDateSche: {}
        };
        return _this;
    }
    ListDateSche.prototype.componentDidMount = function () {
        this.props.reListDateSche(this.props.currentIdSche);
    };
    ListDateSche.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "table-responsive" },
                React.createElement("table", { className: "table table-hover manage-u-table" },
                    React.createElement("tbody", null, this.renderListDateSche()))),
            this.state.showModelUpdateDateSche ? React.createElement(DetailDateSche, { dateSche: __assign({}, this.state.currentDateSche, { idSche: this.props.currentIdSche }), onclick: this.hiddenModalDetailDateSche }) : ''));
    };
    return ListDateSche;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListDateSche: storeState.reSource.resListDateSche
}); };
var mapDispatchToProps = {
    reListDateSche: reListDateSche
};
export default connect(mapStateToProps, mapDispatchToProps)(ListDateSche);
//# sourceMappingURL=listDateSche.js.map