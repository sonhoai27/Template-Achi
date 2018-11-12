var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { Redirect, Route } from "react-router-dom";
import * as React from "react";
import { BASEURL } from "./const";
export var PrivateRouter = function (_a) {
    var Component = _a.component, User = _a.resCheckLogin, rest = __rest(_a, ["component", "resCheckLogin"]);
    return (React.createElement(Route, __assign({}, rest, { render: function (props) { return (User.status === 202
            ? React.createElement(Component, __assign({}, props))
            : React.createElement(Redirect, { to: BASEURL + 'login' })); } })));
};
export default PrivateRouter;
//# sourceMappingURL=PrivateRouter.js.map