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
import NewMenu from "./NewMenu";
var ClientHeader = /** @class */ (function (_super) {
    __extends(ClientHeader, _super);
    function ClientHeader(props) {
        var _this = _super.call(this, props) || this;
        _this.showMenu = function () {
            if (_this.state.isShowingMenu === false) {
                document.body.style.overflowY = 'hidden';
            }
            else {
                document.body.style.overflowY = 'auto';
            }
            _this.setState({
                isShowingMenu: !_this.state.isShowingMenu
            });
        };
        _this.state = {
            isShowingMenu: false,
            isShowingSearch: false
        };
        return _this;
    }
    ClientHeader.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(NewMenu, null)));
    };
    return ClientHeader;
}(React.Component));
export default ClientHeader;
//# sourceMappingURL=Header.js.map