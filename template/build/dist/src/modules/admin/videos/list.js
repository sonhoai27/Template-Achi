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
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";
var VideoList = /** @class */ (function (_super) {
    __extends(VideoList, _super);
    function VideoList(props) {
        return _super.call(this, props) || this;
    }
    VideoList.prototype.render = function () {
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-12" },
                React.createElement("div", { className: "panel" },
                    React.createElement("div", { className: "panel-toolbar" },
                        React.createElement("div", { className: "panel-heading" }, "Qu\u1EA3n l\u00ED video"),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement(Link, { to: BASEURLADMIN + 'video/add' },
                                React.createElement("div", { className: "btn btn-xs btn-info" }, "Th\u00EAm m\u1EDBi")))),
                    React.createElement("div", { className: "table-responsive" },
                        React.createElement("table", { className: "table table-hover manage-u-table" },
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("th", { className: "text-center" }, "#"),
                                    React.createElement("th", null, "T\u00EAn"),
                                    React.createElement("th", null, "Video"),
                                    React.createElement("th", null, "Qu\u1EA3n l\u00ED"))),
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "text-center" }, "1"),
                                    React.createElement("td", null,
                                        React.createElement(Link, { to: BASEURLADMIN + 'video/detail' },
                                            React.createElement("span", { className: "text-muted" }, "Texas, Unitedd states"))),
                                    React.createElement("td", null,
                                        "Visual Designer",
                                        React.createElement("br", null),
                                        React.createElement("span", { className: "text-muted" }, "Past : teacher")),
                                    React.createElement("td", null,
                                        React.createElement("div", { className: "btn btn-xs btn-info marginR-8" }, "\u1EA8n"),
                                        React.createElement("div", { className: "btn btn-xs btn-danger" }, "Xo\u00E1"))))))))));
    };
    return VideoList;
}(React.Component));
export default VideoList;
//# sourceMappingURL=list.js.map