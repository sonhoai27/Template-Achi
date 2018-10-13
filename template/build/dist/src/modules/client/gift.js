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
import ClientHeader from "./client-shared/Header";
import Footer from "./client-shared/Footer";
import { RESOURCE } from "../../config/const";
var ClientGift = /** @class */ (function (_super) {
    __extends(ClientGift, _super);
    function ClientGift(props) {
        var _this = _super.call(this, props) || this;
        _this.onchange = function (e) {
            var _a;
            // @ts-ignore
            _this.setState((_a = {},
                _a[e.target.name] = e.target.value,
                _a));
        };
        _this.state = {
            email_email: '',
            email_name: '',
            email_name_click: '',
            email_phone: ''
        };
        return _this;
    }
    ClientGift.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(ClientHeader, null),
            React.createElement("div", { className: "col-xs-12 qua-tang page-source" },
                React.createElement("div", { className: "row page-source_banner", style: {
                        backgroundImage: "url(https://eraweb.co/attachment/banner/everyone-can-design-website.png)"
                    } },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-6" },
                                React.createElement("h2", { className: "white", style: { marginBottom: 64 } },
                                    React.createElement("b", null, "FROM A HISTORY-MAKING STANLEY CUP FINALS TO BUILDING A PERSONAL AI")),
                                React.createElement("p", { className: "white" }, "Where has Tony been recently \u2013 and what in the world is he up to? Below is the latest edition of the Tony Tracker, where you can see highlights from his journeys and read his narration of some of his favorite experiences. Watching history being made at the Stanley Cup Finals TONIGHT\u2019S GAME IS ONE"))))),
                React.createElement("div", { className: "container paddingY-64" },
                    React.createElement("div", { className: "row flex-ver" },
                        React.createElement("div", { className: "col-sm-1" }),
                        React.createElement("div", { className: "col-sm-4" },
                            React.createElement("img", { width: "100%", src: "https://eraweb.co/attachment/images/home/custom-domain.png", alt: "", className: "img-responsive" })),
                        React.createElement("div", { className: "col-sm-1" }),
                        React.createElement("div", { className: "col-sm-6", style: { fontSize: 16 } }, "Hi\u1EC7n l\u00E0 Gi\u00E1m \u0111\u1ED1c \u0111\u00E0o t\u1EA1o \u2013 C\u00F4ng ty T\u01B0 v\u1EA5n & \u0110\u00E0o t\u1EA1o Hi\u1EC7u Qu\u1EA3 T\u00E1c gi\u1EA3 c\u1EE7a h\u01A1n 30 cu\u1ED1n s\u00E1ch v\u1EC1 K\u1EF9 n\u0103ng m\u1EC1m, T\u00E2m l\u00FD \u1EE9ng d\u1EE5ng, Gi\u00E1o d\u1EE5c nh\u00E2n b\u1EA3n v\u00E0 Ngh\u1EC7 thu\u1EADt s\u1ED1ng. Chuy\u00EAn gia \u0111\u00E0o t\u1EA1o K\u1EF9 n\u0103ng m\u1EC1m cho \u0111\u1ED9i ng\u0169 nh\u00E2n l\u1EF1c c\u1EE7a c\u00E1c doanh nghi\u1EC7p v\u1EDBi h\u01A1n 10 n\u0103m kinh nghi\u1EC7m. Gi\u1EA3ng vi\u00EAn th\u1EC9nh gi\u1EA3ng t\u1EA1i c\u00E1c tr\u01B0\u1EDDng \u0111\u1EA1i h\u1ECDc")),
                    React.createElement("div", { className: "row margin-t-64 flex-ver" },
                        React.createElement("div", { className: "col-sm-6", style: { fontSize: 16 } }, "Hi\u1EC7n l\u00E0 Gi\u00E1m \u0111\u1ED1c \u0111\u00E0o t\u1EA1o \u2013 C\u00F4ng ty T\u01B0 v\u1EA5n & \u0110\u00E0o t\u1EA1o Hi\u1EC7u Qu\u1EA3 T\u00E1c gi\u1EA3 c\u1EE7a h\u01A1n 30 cu\u1ED1n s\u00E1ch v\u1EC1 K\u1EF9 n\u0103ng m\u1EC1m, T\u00E2m l\u00FD \u1EE9ng d\u1EE5ng, Gi\u00E1o d\u1EE5c nh\u00E2n b\u1EA3n v\u00E0 Ngh\u1EC7 thu\u1EADt s\u1ED1ng. Chuy\u00EAn gia \u0111\u00E0o t\u1EA1o K\u1EF9 n\u0103ng m\u1EC1m cho \u0111\u1ED9i ng\u0169 nh\u00E2n l\u1EF1c c\u1EE7a c\u00E1c doanh nghi\u1EC7p v\u1EDBi h\u01A1n 10 n\u0103m kinh"),
                        React.createElement("div", { className: "col-sm-1" }),
                        React.createElement("div", { className: "col-sm-4" },
                            React.createElement("img", { width: "100%", src: "https://eraweb.co/attachment/images/home/marketing.svg", alt: "", className: "img-responsive" })),
                        React.createElement("div", { className: "col-sm-1" }))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "footer-banner col-xs-12" },
                        React.createElement("div", { className: "container" },
                            React.createElement("div", { className: "row" },
                                React.createElement("div", { className: "col-sm-4 footer-banner-img" },
                                    React.createElement("img", { src: RESOURCE + "images/home/keys.jpg", alt: "", className: "img-responsive" })),
                                React.createElement("div", { className: "col-sm-8" },
                                    React.createElement("h2", null, "Nh\u1EADn mi\u1EC5n ph\u00ED: 7 ch\u00ECa kh\u00F3a v\u00E0ng \u0111\u1EC3 s\u1ED1ng x\u1EE9ng \u0111\u00E1ng v\u1EDBi nh\u1EEFng \u201Cth\u00E1ng n\u0103m r\u1EF1c r\u1EE1\u201D."),
                                    React.createElement("h4", null, "H\u01A1n 3.000 ngh\u00ECn ng\u01B0\u1EDDi \u0111\u00E3 \u0111\u0103ng k\u00FD nh\u1EADn \u0111\u1EC3 s\u1EDF h\u1EEFu cu\u1ED9c s\u1ED1ng x\u1EE9ng \u0111\u00E1ng v\u1EDBi tu\u1ED5i tr\u1EBB c\u1EE7a m\u00ECnh.")))))),
                React.createElement("div", { className: "row paddingY-128 form-send-gift", style: {
                        backgroundImage: "url(https://eraweb.co/attachment/images/bg/install-bg.jpg)"
                    } },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-3" }),
                            React.createElement("div", { className: "col-sm-6" },
                                React.createElement("div", { className: "gift-body" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("label", { className: "control-label" }, "H\u1ECD v\u00E0 t\u00EAn"),
                                        React.createElement("input", { onChange: this.onchange, type: "text", className: "form-control", name: "email_name", placeholder: "Tên của bạn" })),
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("label", { className: "control-label" }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"),
                                        React.createElement("input", { onChange: this.onchange, type: "text", className: "form-control", name: "email_phone", placeholder: "Số điện thoại" })),
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("label", { className: "control-label" }, "Email"),
                                        React.createElement("input", { onChange: this.onchange, type: "email", className: "form-control", name: "email_email", placeholder: "Thư điện tử" })),
                                    React.createElement("div", { className: "text-center" },
                                        React.createElement("div", { className: "btn" }, "Nh\u1EADn qu\u00E0")))),
                            React.createElement("div", { className: "col-sm-6" }))))),
            React.createElement(Footer, null)));
    };
    return ClientGift;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    isSuccess: storeState.reInit.isSuccess,
    isDanger: storeState.reInit.isDanger,
    resAddContact: storeState.reSource.resAddContact
}); };
var mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(ClientGift);
//# sourceMappingURL=gift.js.map