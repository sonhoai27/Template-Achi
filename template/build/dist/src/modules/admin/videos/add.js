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
var VideoAdd = /** @class */ (function (_super) {
    __extends(VideoAdd, _super);
    function VideoAdd(props) {
        return _super.call(this, props) || this;
    }
    VideoAdd.prototype.render = function () {
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-12" },
                React.createElement("div", { className: "panel" },
                    React.createElement("div", { className: "panel-toolbar" },
                        React.createElement("div", { className: "panel-heading" }, "Th\u00EAm video"),
                        React.createElement("div", { className: "panel-action-bar" },
                            React.createElement("div", { className: "btn btn-xs btn-info" }, "L\u01B0u"))),
                    React.createElement("div", { className: "content" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-9" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " Ti\u00EAu \u0111\u1EC1")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { type: "text", className: "form-control" }),
                                        " ")),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-md-12" },
                                        React.createElement("span", { className: "help" }, " Video")),
                                    React.createElement("div", { className: "col-md-12" },
                                        React.createElement("input", { type: "text", className: "form-control" }),
                                        " "))),
                            React.createElement("div", { className: "col-sm-3" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "Tr\u1EA1ng th\u00E1i"),
                                    React.createElement("div", { className: "col-sm-12" },
                                        React.createElement("select", { className: "form-control" },
                                            React.createElement("option", null, "1"),
                                            React.createElement("option", null, "2"),
                                            React.createElement("option", null, "3"),
                                            React.createElement("option", null, "4"),
                                            React.createElement("option", null, "5")))),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { className: "col-sm-12" }, "H\u00ECnh cover"),
                                    React.createElement("div", { className: "col-sm-12 cover-blog" },
                                        React.createElement("i", { className: "ti-upload" }),
                                        React.createElement("img", { id: "img-cover-blog-preview" }))))))))));
    };
    return VideoAdd;
}(React.Component));
export default VideoAdd;
//# sourceMappingURL=add.js.map