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
import { reListSche } from "../../admin/source/reSource";
var MainSche = /** @class */ (function (_super) {
    __extends(MainSche, _super);
    function MainSche(props) {
        var _this = _super.call(this, props) || this;
        _this.renderListSche = function () {
            if (_this.props.resListSche.list) {
                return _this.props.resListSche.list.map(function (element) {
                    return (React.createElement("ul", { "data-id": "row_74" },
                        React.createElement("li", { "data-label": "T\u00EAn ch\u01B0\u01A1ng tr\u00ECnh" },
                            React.createElement("ul", { className: "child" },
                                React.createElement("li", { className: "orange" },
                                    React.createElement("b", { id: "name_74" },
                                        element.source_title,
                                        " - ",
                                        element.source_sche_khoa)),
                                React.createElement("li", null,
                                    "Trainer:",
                                    React.createElement("a", { href: "http://maxpowervn.com/page/giao-vien" }, element.source_sche_teacher)),
                                React.createElement("li", null,
                                    "\u0110\u1ECBa ch\u1EC9: ",
                                    element.source_sche_address))),
                        React.createElement("li", { "data-label": "Th\u1EDDi gian" },
                            React.createElement("p", { dangerouslySetInnerHTML: { __html: element.source_date_sche } })),
                        React.createElement("li", { className: "text-center", "data-label": "\u01AFu \u0111\u00E3i" },
                            React.createElement("p", { className: "line-through", style: { marginRight: 10, lineHeight: "1.8" } },
                                React.createElement("b", null, "5,500,000 \u0111")),
                            React.createElement("p", { className: "orange", style: { lineHeight: "1.8" } }, "- 5,500,000 \u0111"),
                            React.createElement("p", { className: "green", style: { lineHeight: "1.8" } },
                                React.createElement("b", null, "= Mi\u1EC5n Ph\u00ED"))),
                        React.createElement("li", { className: "text-center", "data-label": "\u0110\u0103ng k\u00FD" },
                            React.createElement("p", { className: "red", style: { lineHeight: "1.8" } }, "Ch\u1EC9 c\u00F2n 2 \u01B0u \u0111\u00E3i"),
                            React.createElement("p", { className: "bold-text uppercase button button-danger", style: { display: "inline-block" } },
                                React.createElement("i", { className: "spin fa fa-spinner checkout" }),
                                React.createElement("a", { href: "http://maxpowervn.com/page/dang-ky/MP1/74", target: "_blank" }, "\u0110\u0103ng K\u00FD G\u1EA5p")))));
                });
            }
            return React.createElement("h1", null, "NULL");
        };
        return _this;
    }
    MainSche.prototype.componentDidMount = function () {
        var url = this.props.currentMatch.params.idSource;
        var tempArr = url.split('-');
        var idSource = tempArr[tempArr.length - 1];
        this.props.reListSche(idSource);
    };
    MainSche.prototype.componentDidUpdate = function (preProps) {
        console.log(this.props.currentMatch);
    };
    MainSche.prototype.componentWillReceiveProps = function (nextProps) {
        console.log(nextProps);
    };
    MainSche.prototype.render = function () {
        return (React.createElement("div", { className: "calendar" },
            React.createElement("div", { className: "responsive-table", id: "dkmh" },
                React.createElement("div", { className: "thead" },
                    React.createElement("ul", null,
                        React.createElement("li", null,
                            React.createElement("i", { className: "fa fa-list-alt checkout" }),
                            " T\u00EAn ch\u01B0\u01A1ng tr\u00ECnh"),
                        React.createElement("li", null,
                            React.createElement("i", { className: "fa fa-clock-o checkout" }),
                            " Th\u1EDDi gian"),
                        React.createElement("li", null,
                            React.createElement("i", { className: "fa fa-thumbs-o-up checkout" }),
                            " \u01AFu \u0111\u00E3i"),
                        React.createElement("li", null,
                            React.createElement("i", { className: "fa fa-key checkout" }),
                            " \u0110\u0103ng k\u00FD"))),
                React.createElement("div", { className: "tbody" }, this.renderListSche()))));
    };
    return MainSche;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListSche: storeState.reSource.resListSche,
    currentMatch: storeState.reInit.currentMatch
}); };
var mapDispatchToProps = {
    reListSche: reListSche
};
export default connect(mapStateToProps, mapDispatchToProps)(MainSche);
//# sourceMappingURL=MainSche.js.map