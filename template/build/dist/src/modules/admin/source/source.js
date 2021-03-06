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
import { BASEURLADMIN } from "../../../config/const";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { reListSource } from "./reSource";
var Source = /** @class */ (function (_super) {
    __extends(Source, _super);
    function Source(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListSource = function () {
            if (_this.props.reslistSource.list) {
                return _this.props.reslistSource.list.map(function (element, index) {
                    return (React.createElement("tr", null,
                        React.createElement("td", { className: "text-center" }, index + 1),
                        React.createElement("td", null,
                            React.createElement(Link, { to: BASEURLADMIN + "source/detail-source/" + element.source_id },
                                React.createElement("span", { className: "text-muted" }, element.source_title))),
                        React.createElement("td", null, element.source_price),
                        React.createElement("td", null,
                            React.createElement("span", { className: "text-muted" }, element.source_created_date))));
                });
            }
            return '';
        };
        return _this;
    }
    Source.prototype.componentWillReceiveProps = function (nextProps) {
        console.log(nextProps.reslistSource);
    };
    Source.prototype.componentDidMount = function () {
        this.props.reListSource(0);
    };
    Source.prototype.render = function () {
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-12" },
                React.createElement("div", { className: "panel" },
                    React.createElement("div", { className: "panel-toolbar" },
                        React.createElement("div", { className: "panel-heading" }, "Danh s\u00E1ch kh\u00F3a h\u1ECDc"),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement(Link, { to: BASEURLADMIN + "source/add-source" },
                                React.createElement("div", { className: "btn btn-xs btn-info" }, "Th\u00EAm m\u1EDBi")))),
                    React.createElement("div", { className: "table-responsive" },
                        React.createElement("table", { className: "table table-hover manage-u-table" },
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("th", { className: "text-center" }, "#"),
                                    React.createElement("th", null, "T\u00EAn"),
                                    React.createElement("th", null, "Gi\u00E1"),
                                    React.createElement("th", null, "Ng\u00E0y t\u1EA1o"))),
                            React.createElement("tbody", null, this.renderListSource())))))));
    };
    return Source;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    reslistSource: storeState.reSource.reslistSource
}); };
var mapDispatchToProps = {
    reListSource: reListSource
};
export default connect(mapStateToProps, mapDispatchToProps)(Source);
//# sourceMappingURL=source.js.map