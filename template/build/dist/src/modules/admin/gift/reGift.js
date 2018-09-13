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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
import axios from 'axios';
import { REQUEST, FAILURE, SUCCESS } from '../../../utils/action-type-util';
import { API } from '../../../config/const';
export var ACTION_TYPES = {
    API_LIST_GIFT: 'ReGift/API_LIST_GIFT',
    API_ADD_GIFT: 'ReGift/API_ADD_GIFT',
    API_UPDATE_GIFT: 'ReGift/API_UPDATE_GIFT',
    API_DELETE_GIFT: 'ReGift/API_DELETE_GIFT',
    API_DETAIL_GIFT: 'ReGift/API_DETAIL_GIFT'
};
var initialState = {
    resListGift: [],
    resAddGift: {},
    resUpdateGift: {},
    resDeleteGift: {},
    resDetailGift: {}
};
export default (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case REQUEST(ACTION_TYPES.API_LIST_GIFT): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_LIST_GIFT): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_LIST_GIFT): {
            return __assign({}, state, { resListGift: action.payload.data });
        }
        // add Gift
        case REQUEST(ACTION_TYPES.API_ADD_GIFT): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_ADD_GIFT): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_ADD_GIFT): {
            return __assign({}, state, { resAddGift: action.payload.data });
        }
        // update
        case REQUEST(ACTION_TYPES.API_UPDATE_GIFT): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_UPDATE_GIFT): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_UPDATE_GIFT): {
            return __assign({}, state, { resUpdateGift: action.payload.data });
        }
        // delete
        case REQUEST(ACTION_TYPES.API_DELETE_GIFT): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_DELETE_GIFT): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_DELETE_GIFT): {
            return __assign({}, state, { resDeleteGift: action.payload.data });
        }
        // detail
        case REQUEST(ACTION_TYPES.API_DETAIL_GIFT): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_DETAIL_GIFT): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_DETAIL_GIFT): {
            return __assign({}, state, { resDetailGift: action.payload.data });
        }
        default:
            return state;
    }
});
var API_GIFT = API + 'gift';
export var reListGift = function (page) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_LIST_GIFT,
                    payload: axios.get(API_GIFT + '/all/' + page)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reAddGift = function (form) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_ADD_GIFT,
                    payload: axios.post(API_GIFT, form)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reUpdateGift = function (form, idGift) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_UPDATE_GIFT,
                    payload: axios.put(API_GIFT + '/' + idGift, form)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reDeleteGift = function (idGift) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_DELETE_GIFT,
                    payload: axios.delete(API_GIFT + '/' + idGift)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reDetailGift = function (idGift) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_DETAIL_GIFT,
                    payload: axios.get(API_GIFT + '/' + idGift)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
//# sourceMappingURL=reGift.js.map