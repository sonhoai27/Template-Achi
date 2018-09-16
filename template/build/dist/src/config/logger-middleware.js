import { BASEURL } from "./const";
export default (function () { return function (next) { return function (action) {
    var type = action.type, payload = action.payload;
    // @ts-ignore
    if (BASEURL != "/") {
        console.groupCollapsed(type);
        try {
            console.log('Payload:', payload);
        }
        catch (e) {
            console.log('Payload:', 'undefined');
        }
        console.groupEnd();
    }
    return next(action);
}; }; });
//# sourceMappingURL=logger-middleware.js.map