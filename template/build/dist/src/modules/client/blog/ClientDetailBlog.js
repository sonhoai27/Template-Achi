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
var ClientDetailBlog = /** @class */ (function (_super) {
    __extends(ClientDetailBlog, _super);
    function ClientDetailBlog(props) {
        return _super.call(this, props) || this;
    }
    ClientDetailBlog.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "col-sm-12 page-detail-blog" },
                React.createElement("div", { className: "row page-detail-blog_banner", style: {
                        backgroundImage: 'url(https://cdnwp.tonyrobbins.com/wp-content/uploads/2018/09/Girl-Hunger_BlogBanner1.jpg)',
                        paddingTop: 128,
                        paddingBottom: 128,
                        backgroundAttachment: 'fixed',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    } }),
                React.createElement("div", { className: "row", style: {
                        background: '#f5f5f5 none repeat scroll 0 0',
                        fontSize: '25px',
                        padding: '38px 0 37px',
                        textAlign: 'center'
                    } },
                    React.createElement("div", { className: "container-fluid", style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        } },
                        React.createElement("p", null, "Ready to take the initiative & join our newsletter?"),
                        React.createElement("a", { href: "#", className: "btn btn-info newsletter" }, "Sign Up Now"))),
                React.createElement("div", { className: "row page-detail-blog_content paddingY-128" },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-xs-12 page-detail-blog_content_title" },
                                React.createElement("p", null, "HUNGER IS STILL THE #1 ISSUE IN AMERICA"),
                                React.createElement("p", null, "WHY I CONTINUE TO PARTNER WITH FEEDING AMERICA TO FEED PEOPLE AND FAMILIES IN NEED"),
                                React.createElement("span", { className: "article-author" },
                                    "Posted by ",
                                    React.createElement("b", null, "Tony Robbins"))),
                            React.createElement("div", { className: "col-xs-12 page-detail-blog_content_body" }, "Hi, it\u2019s Tony. I want to share a short message with you about what I believe is still the #1 social issue in America: the hunger crisis. One out of every 8 people in America \u2013 and 1 in 6 children \u2013 struggles with hunger. They are \u201Cfood insecure,\u201D which means that they have limited or uncertain availability of nutritionally adequate foods. It means they do not have access, at times, to enough food to lead active, healthy lives \u2013 to do everything that they want to do in their day. Not enough energy to work, to grow, to flourish. Imagine for a moment what that feels like. To feel tired, deeply fatigued and continuously running on empty. To want more in life, but not have the physical energy to work to obtain it. Now think about living with a constant feeling of uncertainty, not knowing where your next meal is coming from. To go through your day without the basic comfort of having nutritious food available to you, with no control over what you can put in your body as fuel for your life. Imagine what it would feel like to have total insecurity over this basic need. I know what that feels like.")))),
                React.createElement("hr", null),
                React.createElement("div", { className: "row page-detail-blog_author" },
                    React.createElement("div", { className: "container paddingY-64" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-sm-12" },
                                React.createElement("div", { className: "media", style: { border: 'none' } },
                                    React.createElement("div", { className: "media-left" },
                                        React.createElement("a", null,
                                            React.createElement("img", { alt: "64x64", className: "media-object", src: "https://secure.gravatar.com/avatar/c0308f547359f5bdc519a301b32ba34c?s=96&d=mm&r=g", "data-holder-rendered": "true", style: { width: '128px', height: '128px', borderRadius: '100%' } }),
                                            " ")),
                                    React.createElement("div", { className: "media-body" },
                                        React.createElement("h4", { className: "media-heading" }, "Media heading"),
                                        " Tony Robbins is an entrepreneur, bestselling author, philanthropist and the nation\u2019s #1 Life and Business Strategist. Author of five internationally bestselling books, including the recent New York Times #1 best-seller UNSHAKEABLE, Mr. Robbins has empowered more than 50 million people from 100 countries through his audio, video and life training programs. He created the #1 personal and professional development program of all time, and more than 4 million people have attended his live seminars.")))))))));
    };
    return ClientDetailBlog;
}(React.Component));
export default ClientDetailBlog;
//# sourceMappingURL=ClientDetailBlog.js.map