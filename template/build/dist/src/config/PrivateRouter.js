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
import { Redirect, Route } from 'react-router-dom';
import * as React from 'react';
var fakeAuth = true;
var PrivateRouter = function (_a) {
    var Component = _a.component, rest = __rest(_a, ["component"]);
    return (React.createElement(Route, __assign({}, rest, { render: function (props) { return (fakeAuth
            ? React.createElement(Component, __assign({}, props))
            : React.createElement(Redirect, { to: '/login' })); } })));
};
export default PrivateRouter;
//# sourceMappingURL=PrivateRouter.js.map