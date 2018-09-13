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
var ClientFollow = /** @class */ (function (_super) {
    __extends(ClientFollow, _super);
    function ClientFollow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClientFollow.prototype.render = function () {
        return (React.createElement("div", { className: "container follow paddingY-64" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-sm-2" }),
                React.createElement("div", { className: "col-sm-4" },
                    React.createElement("div", { className: "social-callout" },
                        React.createElement("h3", { className: "text-center" }, "Get Daily Motivation"),
                        React.createElement("iframe", { src: "//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com%2Fpages%2FBrendon-Burchard-Live-Love-Matter%2F141502009216768&layout=standard&show_faces=false&width=200&action=like&colorscheme=light&height=30", style: { border: 'none', overflow: 'hidden', width: '200px', height: '30px' } }))),
                React.createElement("div", { className: "col-sm-4" },
                    React.createElement("div", { className: "social-callout" },
                        React.createElement("h3", { className: "text-center" }, "Watch Brendon's Show"),
                        React.createElement("iframe", { style: { position: 'static', top: 0, width: 123, margin: 0, borderStyle: 'none', left: 0, visibility: 'visible', height: 24 }, tabIndex: 0, width: "100%", id: "I0_1536682088055", name: "I0_1536682088055", src: "https://www.youtube.com/subscribe_embed?usegapi=1&channel=BrendonBurchard&origin=https%3A%2F%2Fbrendon.com&gsrc=3p&ic=1&jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.vi.ersgHZm_IgE.O%2Fam%3DwQ%2Frt%3Dj%2Fd%3D1%2Frs%3DAGLTcCMduhp3YkUaSrrUHYCwgzlg4Y8r_w%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&id=I0_1536682088055&_gfid=I0_1536682088055&parent=https%3A%2F%2Fbrendon.com&pfname=&rpctoken=21758127", "data-gapiattached": "true" }))),
                React.createElement("div", { className: "col-sm-2" }))));
    };
    return ClientFollow;
}(React.Component));
export default ClientFollow;
//# sourceMappingURL=ClientFollow.js.map