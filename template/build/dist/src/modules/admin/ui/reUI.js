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
    API_LIST_ELEMENT: 'ReUI/API_LIST_ELEMENT',
    API_DETAIL_UI: 'ReUI/API_DETAIL_UI',
    SHOW_LIST_ELEMENT: 'ReUI/SHOW_LIST_ELEMENT',
    SET_CURRENT_ID_ELEMENT: 'ReUI/SET_CURRENT_ID_ELEMENT',
    API_ADD_ELEMENT_TO_UI_DETAIL: 'ReUI/API_ADD_ELEMENT_TO_UI_DETAIL',
    API_DELETE_ELEMENT_DETAIl_UI: 'ReUI/API_DELETE_ELEMENT_DETAIl_UI',
    CURRENT_MATCH_DETAIl_UI: 'ReUI/CURRENT_MATCH_DETAIl_UI',
    API_LIST_UI_FOR_SOURCE: 'ReUI/API_LIST_UI_FOR_SOURCE',
    API_LIST_UI_FOR_PAGE: 'ReUI/API_LIST_UI_FOR_PAGE',
    API_LIST_UI: 'ReUI/API_LIST_UI',
    API_ADD_UI: "ReUI/API_ADD_UI",
    API_ADD_UPDATE_CONTENT_UI_ELEMENT: 'ReUI/API_ADD_UPDATE_CONTENT_UI_ELEMENT',
    API_ADD_CSS: 'ReUI/API_ADD_CSS'
};
var initialState = {
    resListElement: [],
    resDetailUI: {},
    showListElement: false,
    currentIdElement: '',
    addElementToUIDetail: '',
    deleteElementToUIDetail: '',
    currentMatchDetailUI: '',
    resListUIForSource: [],
    resListUIForPage: [],
    resListUI: [],
    resAddUpdateContentElement: {},
    resAddCss: {},
    resAddUi: {}
};
export default (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // list element
        case REQUEST(ACTION_TYPES.API_LIST_ELEMENT): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_LIST_ELEMENT): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_LIST_ELEMENT): {
            return __assign({}, state, { resListElement: action.payload.data.list });
        }
        // detail ui
        case REQUEST(ACTION_TYPES.API_DETAIL_UI): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_DETAIL_UI): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_DETAIL_UI): {
            return __assign({}, state, { resDetailUI: action.payload.data });
        }
        // add ui
        case REQUEST(ACTION_TYPES.API_ADD_UI): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_ADD_UI): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_ADD_UI): {
            return __assign({}, state, { resAddUi: action.payload.data });
        }
        // show list element
        case (ACTION_TYPES.SHOW_LIST_ELEMENT): {
            return __assign({}, state, { showListElement: action.payload });
        }
        // set current id  element
        case (ACTION_TYPES.SET_CURRENT_ID_ELEMENT): {
            return __assign({}, state, { currentIdElement: action.payload });
        }
        // add element to detail ui
        case REQUEST(ACTION_TYPES.API_ADD_ELEMENT_TO_UI_DETAIL): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_ADD_ELEMENT_TO_UI_DETAIL): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_ADD_ELEMENT_TO_UI_DETAIL): {
            return __assign({}, state, { addElementToUIDetail: action.payload.data });
        }
        // delete element to detail ui
        case REQUEST(ACTION_TYPES.API_DELETE_ELEMENT_DETAIl_UI): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_DELETE_ELEMENT_DETAIl_UI): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_DELETE_ELEMENT_DETAIl_UI): {
            return __assign({}, state, { deleteElementToUIDetail: action.payload.data });
        }
        case (ACTION_TYPES.CURRENT_MATCH_DETAIl_UI): {
            return __assign({}, state, { currentMatchDetailUI: action.payload });
        }
        // list ui source
        case REQUEST(ACTION_TYPES.API_LIST_UI_FOR_SOURCE): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_LIST_UI_FOR_SOURCE): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_LIST_UI_FOR_SOURCE): {
            return __assign({}, state, { resListUIForSource: action.payload.data.list });
        }
        // list ui page
        case REQUEST(ACTION_TYPES.API_LIST_UI_FOR_PAGE): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_LIST_UI_FOR_PAGE): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_LIST_UI_FOR_PAGE): {
            return __assign({}, state, { resListUIForPage: action.payload.data.list });
        }
        // list ui
        case REQUEST(ACTION_TYPES.API_LIST_UI): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_LIST_UI): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_LIST_UI): {
            return __assign({}, state, { resListUI: action.payload.data.list });
        }
        // add update content element
        case REQUEST(ACTION_TYPES.API_ADD_UPDATE_CONTENT_UI_ELEMENT): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_ADD_UPDATE_CONTENT_UI_ELEMENT): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_ADD_UPDATE_CONTENT_UI_ELEMENT): {
            return __assign({}, state, { resAddUpdateContentElement: action.payload.data });
        }
        // add css
        case REQUEST(ACTION_TYPES.API_ADD_CSS): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_ADD_CSS): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_ADD_CSS): {
            return __assign({}, state, { resAddCss: action.payload.data });
        }
        default:
            return state;
    }
});
var API_LIST_ELEMENT = API + 'ui/element';
var API_DETAIL_UI = API + 'ui/detail-ui';
var API_LIST_UI_FOR_SOURCE = API + 'ui/all-ui-source';
var API_LIST_UI_FOR_PAGE = API + 'ui/all-ui-page';
var API_LIST_UI = API + 'ui/all-ui';
var API_ADD_UI = API + 'ui/add-ui';
var API_ADD_ELEMENT_DETAIL_UI = API + 'ui/add-element-to-detail-ui';
var API_DELETE_ELEMENT_DETAIL_UI = API + 'ui/delete-element-of-detail-ui/';
var API_ADD_UPDATE_CONTENT_UI_ELEMENT = API + 'ui/add-update-content-element';
var API_ADD_CSS = API + 'ui/add-css/';
export var reListElement = function () { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_LIST_ELEMENT,
                    payload: axios.get(API_LIST_ELEMENT)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reDetailUI = function (idUI) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_DETAIL_UI,
                    payload: axios.get(API_DETAIL_UI + '/' + idUI)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reAddUI = function (form) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_ADD_UI,
                    payload: axios.post(API_ADD_UI, form)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reShowListElement = function (status) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.SHOW_LIST_ELEMENT,
                    payload: status
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reSetCurrentIdElement = function (id) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.SET_CURRENT_ID_ELEMENT,
                    payload: id
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reAddElementToDetailUI = function (form) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (form.detail_ui_parent_id == '') {
                    delete form.detail_ui_parent_id;
                }
                return [4 /*yield*/, dispatch({
                        type: ACTION_TYPES.API_ADD_ELEMENT_TO_UI_DETAIL,
                        payload: axios.post(API_ADD_ELEMENT_DETAIL_UI, form)
                    })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reDeleteElementToDetailUI = function (idUI, idDetailUI) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_DELETE_ELEMENT_DETAIl_UI,
                    payload: axios.delete(API_DELETE_ELEMENT_DETAIL_UI + idUI + '/' + idDetailUI)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reSetCurrentMatchDetailUI = function (match) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.CURRENT_MATCH_DETAIl_UI,
                    payload: match
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reListUIForSource = function () { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_LIST_UI_FOR_SOURCE,
                    payload: axios.get(API_LIST_UI_FOR_SOURCE)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reListUIForPage = function () { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_LIST_UI_FOR_PAGE,
                    payload: axios.get(API_LIST_UI_FOR_PAGE)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reListUI = function () { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_LIST_UI,
                    payload: axios.get(API_LIST_UI)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reAddUpdateContentElement = function (form) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_ADD_UPDATE_CONTENT_UI_ELEMENT,
                    payload: axios.post(API_ADD_UPDATE_CONTENT_UI_ELEMENT, form)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reAddCss = function (form, id) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_ADD_CSS,
                    payload: axios.post(API_ADD_CSS + id, form)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
//# sourceMappingURL=reUI.js.map