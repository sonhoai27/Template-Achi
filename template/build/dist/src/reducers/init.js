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
import { REQUEST, FAILURE, SUCCESS } from '../utils/action-type-util';
import { API } from '../config/const';
export var ACTION_TYPES = {
    API_LIST_IMAGE: 'ReInit/API_LIST_IMAGE',
    API_ADD_IMAGE: 'ReInit/API_ADD_IMAGE',
    API_DELETE_IMAGE: 'ReInit/API_DELETE_IMAGE',
    CURRENT_EDITOR_PHOTO: 'ReInit/CURRENT_EDITOR_PHOTO',
    IS_SHOWING_PHOTO_APP: 'ReInit/IS_SHOWING_PHOTO_APP',
    IS_DANGER: 'ReInit/IS_DANGER',
    IS_SUCCESS: 'ReInit/IS_SUCCESS',
    API_CHECK_LOGIN: 'ReInit/API_CHECK_LOGIN',
    API_LOGIN: 'ReInit/API_LOGIN',
    IS_LOADING: 'ReInit/IS_LOADING'
};
var initialState = {
    resListImage: [],
    resDeleteImage: '',
    resAddImage: '',
    currentEditorPhoto: '',
    isShowPhotoApp: false,
    isSuccess: false,
    isDanger: false,
    resLogin: {},
    resCheckLogin: {},
    isLoading: false
};
export default (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // add image
        case REQUEST(ACTION_TYPES.API_ADD_IMAGE): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_ADD_IMAGE): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_ADD_IMAGE): {
            return __assign({}, state, { resAddImage: action.payload.data });
        }
        // list image
        case REQUEST(ACTION_TYPES.API_LIST_IMAGE): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_LIST_IMAGE): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_LIST_IMAGE): {
            return __assign({}, state, { resListImage: action.payload.data });
        }
        // delete image
        case REQUEST(ACTION_TYPES.API_DELETE_IMAGE): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_DELETE_IMAGE): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_DELETE_IMAGE): {
            return __assign({}, state, { resDeleteImage: action.payload.data });
        }
        case (ACTION_TYPES.CURRENT_EDITOR_PHOTO): {
            return __assign({}, state, { currentEditorPhoto: action.payload });
        }
        case (ACTION_TYPES.IS_SHOWING_PHOTO_APP): {
            return __assign({}, state, { isShowPhotoApp: action.payload });
        }
        case (ACTION_TYPES.IS_DANGER): {
            return __assign({}, state, { isDanger: action.payload });
        }
        case (ACTION_TYPES.IS_SUCCESS): {
            return __assign({}, state, { isSuccess: action.payload });
        }
        case (ACTION_TYPES.IS_LOADING): {
            return __assign({}, state, { isLoading: action.payload });
        }
        // check login
        case REQUEST(ACTION_TYPES.API_CHECK_LOGIN): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_CHECK_LOGIN): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_CHECK_LOGIN): {
            return __assign({}, state, { resCheckLogin: action.payload.data });
        }
        default:
            return state;
    }
});
var API_FILE = API + 'file/';
export var reListImage = function () { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_LIST_IMAGE,
                    payload: axios.get(API_FILE + 'all/photo')
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reDeleteImage = function (id) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_DELETE_IMAGE,
                    payload: axios.delete(API_FILE + 'delete/' + id)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reAddImage = function (form) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_ADD_IMAGE,
                    payload: axios.post(API_FILE + 'upload/photo', form)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reShowPhotoApp = function (status) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.IS_SHOWING_PHOTO_APP,
                    payload: status
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reSetCurrentEditorPhoto = function (editor) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.CURRENT_EDITOR_PHOTO,
                    payload: editor
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reIsDanger = function (status) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.IS_DANGER,
                    payload: status
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reIsSuccess = function (status) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.IS_SUCCESS,
                    payload: status
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reIsLoading = function (status) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.IS_LOADING,
                    payload: status
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reCheckLogin = function () { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_CHECK_LOGIN,
                    payload: axios.get(API + 'auth/check')
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
//# sourceMappingURL=init.js.map