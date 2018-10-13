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
import Footer from "../client-shared/Footer";
import ClientHeader from "../client-shared/Header";
import { reListContentUISource } from "../../admin/source/reSource";
import ItemPage from '../../DynamicPage/source/item';
import MainSche from './../../DynamicPage/sche/MainSche';
import { reSetCurrentMatch } from "../../../reducers/init";
var listCom = {
    tks: React.createElement(MainSche, null),
    tks2: React.createElement(MainSche, null),
};
var ClientSourceDetail = /** @class */ (function (_super) {
    __extends(ClientSourceDetail, _super);
    function ClientSourceDetail(props) {
        return _super.call(this, props) || this;
    }
    ClientSourceDetail.prototype.componentDidMount = function () {
        var url = this.props.match.params.idSource;
        var tempArr = url.split('-');
        var idUI = tempArr[tempArr.length - 2];
        var idSource = tempArr[tempArr.length - 1];
        this.props.reListContentUISource(idUI, idSource);
        this.props.reSetCurrentMatch(this.props.match);
    };
    ClientSourceDetail.prototype.componentDidUpdate = function (preProps) {
    };
    ClientSourceDetail.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(ClientHeader, null),
            React.createElement("div", { className: "margin-top" },
                React.createElement(ItemPage, { coms: listCom, items: this.props.resListContentUISource.list })),
            React.createElement(Footer, null)));
    };
    return ClientSourceDetail;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resListContentUISource: storeState.reSource.resListContentUISource
}); };
var mapDispatchToProps = {
    reListContentUISource: reListContentUISource,
    reSetCurrentMatch: reSetCurrentMatch
};
export default connect(mapStateToProps, mapDispatchToProps)(ClientSourceDetail);
//# sourceMappingURL=ClientSourceDetail.js.map