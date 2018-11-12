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
import Helmet from "react-helmet";
import axios from "axios";
import { API } from "../../../config/const";
var SuggestKH = /** @class */ (function (_super) {
    __extends(SuggestKH, _super);
    function SuggestKH(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            source: {}
        };
        return _this;
    }
    SuggestKH.prototype.componentDidMount = function () {
        var _this = this;
        axios
            .get(API + "source/detail-sche/" + this.props.match.params.idSource)
            .then(function (result) {
            _this.setState({
                source: result.data.list
            });
        })
            .catch(function (err) {
        });
    };
    SuggestKH.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Helmet, { style: [
                    {
                        cssText: "\n                .margin-top {\n                    margin-top: 0!important;\n                }\n                .card {\n                  position: relative;\n                  border-radius: 20px;\n                  overflow: hidden;\n                  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);\n                  transition: opacity 0.2s ease, box-shadow 0.2s ease;\n                  opacity: 1;\n                  margin-bottom: 40px;\n                }\n            "
                    }
                ] }),
            React.createElement("div", { className: "container card", style: {
                    paddingTop: 64,
                    paddingBottom: 64
                } },
                React.createElement("div", { className: "row margin-b-64" },
                    React.createElement("div", { className: "col-sm-1" }),
                    React.createElement("div", { className: "col-sm-3" },
                        React.createElement("img", { style: { borderRadius: 16 }, src: this.state.source.source_cover, alt: this.state.source.source_title, className: "img-responsive" })),
                    React.createElement("div", { className: "col-sm-7" },
                        React.createElement("h1", { style: {
                                color: "#1f9080"
                            } },
                            "Ch\u00FAc m\u1EEBng b\u1EA1n \u0111\u00E3 \u0111\u0103ng k\u00FD th\u00E0nh c\u00F4ng kh\u00F3a h\u1ECDc \"",
                            this.state.source.source_title,
                            " - ",
                            this.state.source.source_sche_khoa,
                            "\""),
                        React.createElement("p", null, "B\u1EA1n vui l\u00F2ng ki\u1EC3m tra email v\u1EEBa \u0111\u0103ng k\u00FD \u0111\u1EC3 x\u00E1c nh\u1EADn th\u00F4ng tin v\u00E0 xem h\u01B0\u1EDBng d\u1EABn tham gia l\u1EDBp h\u1ECDc.")),
                    React.createElement("div", { className: "col-sm-1" })),
                React.createElement("hr", null),
                React.createElement("div", { className: "row" }),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-sm-2" }),
                    React.createElement("div", { className: "col-sm-8 goi-y-qua", style: {
                            display: 'flex',
                            alignItems: 'center',
                            border: '2px dashed #607D8B',
                            padding: 16
                        } },
                        React.createElement("a", { href: "http://sotay.songxungdang.com" },
                            " ",
                            React.createElement("img", { src: "http://nguyenminhchi.com/api/uploads/images/ea00646c35438c5c44911539450000000.png", alt: "", width: "150px", style: { marginRight: 16 }, className: "img-responsive" })),
                        React.createElement("div", { style: { textAlign: 'justify' } },
                            React.createElement("h3", null,
                                React.createElement("a", { href: "http://sotay.songxungdang.com" }, "S\u1ED5 Tay S\u1ED1ng X\u1EE9ng \u0110\u00E1ng")),
                            React.createElement("p", null, "Ng\u01B0\u1EDDi b\u1EA1n tin c\u1EADy \u0111\u1ED3ng h\u00E0nh c\u00F9ng b\u1EA1n s\u1ED1ng x\u1EE9ng \u0111\u00E1ng v\u00E0 t\u1EA1o n\u00EAn nh\u1EEFng th\u00E0nh t\u1EF1u ri\u00EAng cu\u1ED9c \u0111\u1EDDi m\u00ECnh"))),
                    React.createElement("div", { className: "col-sm-2" })),
                React.createElement("div", { className: "row margin-t-64 margin-b-32" },
                    React.createElement("div", { className: "col-sm-2" }),
                    React.createElement("div", { className: "col-sm-8 goi-y-qua", style: {
                            display: 'flex',
                            alignItems: 'center',
                            border: '2px dashed #607D8B',
                            padding: 16
                        } },
                        React.createElement("div", { style: { textAlign: 'justify' } },
                            React.createElement("h3", null,
                                React.createElement("a", { href: "http://songxungdang.com" }, "Kh\u00F3a H\u1ECDc S\u1ED1ng X\u1EE9ng \u0110\u00E1ng")),
                            React.createElement("p", null, "H\u00E3y \u0111\u1EC3 b\u1EA1n s\u1ED1ng nh\u1EADt nhi\u1EC7t huy\u1EBFt, c\u00F3 m\u1ED9t tu\u1ED5i tr\u1EBB \u0111\u1EA7y say m\u00EA v\u00E0 ki\u1EBFn t\u1EA1o nh\u1EEFng ki\u1EC7t t\u00E1c cho ri\u00EAng cu\u1ED9c \u0111\u1EDDi m\u00ECnh.")),
                        React.createElement("a", { href: "http://songxungdang.com" },
                            React.createElement("img", { width: "50%", style: { marginLeft: 16 }, src: "http://nguyenminhchi.com/api/uploads/images/8127bb0352a746135c261539450000000.png", alt: "", className: "img-responsive" }))),
                    React.createElement("div", { className: "col-sm-2" })),
                React.createElement("hr", null),
                React.createElement("div", { className: "row margin-t-64" },
                    React.createElement("div", { className: "col-sm-2" }),
                    React.createElement("div", { className: "col-sm-4 text-center" },
                        React.createElement("a", { target: "_blank", href: "https://www.facebook.com/sharer.php?u=http://nguyenminhchi.com/page/qua-tang" },
                            React.createElement("div", { className: "btn btn-lg", style: {
                                    background: '#3b5998',
                                    color: '#fff',
                                    marginBottom: 16
                                } }, "Chia s\u1EBB Facebook"))),
                    React.createElement("div", { className: "col-sm-4 text-center" },
                        React.createElement("a", { target: "_blank", href: "http://nguyenminhchi.com" },
                            React.createElement("div", { className: "btn btn-lg", style: {
                                    background: 'rgb(31, 144, 128)',
                                    color: '#fff',
                                    marginBottom: 16
                                } }, "Trang ch\u1EE7"))),
                    React.createElement("div", { className: "col-sm-2" })))));
    };
    return SuggestKH;
}(React.Component));
export default SuggestKH;
//# sourceMappingURL=suggestKH.js.map