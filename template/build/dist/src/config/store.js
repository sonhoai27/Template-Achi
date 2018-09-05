var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers/index';
import loggerMiddleware from './logger-middleware';
var defaultMiddlewares = [
    thunkMiddleware,
    promiseMiddleware(),
    loggerMiddleware
];
var composedMiddlewares = function (middlewares) { return compose(applyMiddleware.apply(void 0, __spread(defaultMiddlewares, middlewares))); };
var initialize = function (initialState, middlewares) {
    if (initialState === void 0) { initialState = {}; }
    if (middlewares === void 0) { middlewares = []; }
    return createStore(reducer, initialState, composedMiddlewares(middlewares));
};
export default initialize;
//# sourceMappingURL=store.js.map