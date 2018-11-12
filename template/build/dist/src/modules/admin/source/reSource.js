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
import { REQUEST, FAILURE, SUCCESS } from "../../../utils/action-type-util";
import { API } from "../../../config/const";
export var ACTION_TYPES = {
    API_DETAIL_SOURCE: 'ReSource/API_DETAIL_SOURCE',
    API_ADD_SOURCE: 'ReSource/API_ADD_SOURCE',
    API_ADD_SCHE: 'ReSource/API_ADD_SCHE',
    API_LIST_SOURCE: 'ReSource/API_LIST_SOURCE',
    API_LIST_SCHE: 'ReSource/API_LIST_SCHE',
    API_UPDATE_SOURCE: 'ReSource/API_UPDATE_SOURCE',
    API_UPDATE_SCHE: 'ReSource/API_UPDATE_SCHE',
    API_DETAIL_SCHE: 'ReSource/API_DETAIL_SCHE',
    API_LIST_CONTENT_UI_SOURCE: 'ReSource/API_LIST_CONTENT_UI_SOURCE',
    API_SHOW_EDIT_CONTENT: 'ReSource/API_SHOW_EDIT_CONTENT',
    SET_CONTENT_ELEMENT: 'ReSource/SET_CONTENT_ELEMENT',
    API_LIST_SOURCE_BY_0: 'ReSource/API_LIST_SOURCE_BY_0',
    API_LIST_SOURCE_BY_1: 'ReSource/API_LIST_SOURCE_BY_1',
    API_ADD_CONTACT: 'ReSource/API_ADD_CONTACT',
    API_FILTER_CONTACT: 'ReSource/API_ADD_CONTACT',
    API_LIST_CONTACT_PAGING: 'ReSource/API_LIST_CONTACT_PAGING',
    API_DELETE_SCHE: 'ReSource/API_DELETE_SCHE',
    API_DELETE_CONTACT: 'ReSource/API_DELETE_CONTACT',
    API_DELETE_SOURCE_ORDER: 'ReSource/API_DELETE_SOURCE_ORDER'
};
var initialState = {
    resDetailSource: [],
    resAddSource: [],
    resAddSche: '',
    reslistSource: {},
    resListSche: [],
    resUpdateSource: {},
    resUpdateSche: {},
    resDetailSche: {},
    resListContentUISource: [],
    resShowEditContent: false,
    resContentElement: "",
    resListSourceBy0: [],
    resListSourceBy1: [],
    resAddContact: {},
    resFilterContact: [],
    resListContactPaging: [],
    resDeleteSche: {},
    resDeleteContact: {},
    resDeleteSourceOrder: {}
};
export default (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // detail source
        case REQUEST(ACTION_TYPES.API_DETAIL_SOURCE): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_DETAIL_SOURCE): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_DETAIL_SOURCE): {
            return __assign({}, state, { resDetailSource: action.payload.data.list });
        }
        // add source
        case REQUEST(ACTION_TYPES.API_ADD_SOURCE): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_ADD_SOURCE): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_ADD_SOURCE): {
            return __assign({}, state, { resAddSource: action.payload.data });
        }
        // add sche
        case REQUEST(ACTION_TYPES.API_ADD_SCHE): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_ADD_SCHE): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_ADD_SCHE): {
            return __assign({}, state, { resAddSche: action.payload.data.list });
        }
        // list source
        case REQUEST(ACTION_TYPES.API_LIST_SOURCE): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_LIST_SOURCE): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_LIST_SOURCE): {
            return __assign({}, state, { reslistSource: action.payload.data });
        }
        // update source
        case REQUEST(ACTION_TYPES.API_UPDATE_SOURCE): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_UPDATE_SOURCE): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_UPDATE_SOURCE): {
            return __assign({}, state, { resUpdateSource: action.payload.data });
        }
        // update sche
        case REQUEST(ACTION_TYPES.API_UPDATE_SCHE): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_UPDATE_SCHE): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_UPDATE_SCHE): {
            return __assign({}, state, { resUpdateSche: action.payload.data });
        }
        // list sche
        case REQUEST(ACTION_TYPES.API_LIST_SCHE): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_LIST_SCHE): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_LIST_SCHE): {
            return __assign({}, state, { resListSche: action.payload.data });
        }
        // detail sche
        case REQUEST(ACTION_TYPES.API_DETAIL_SCHE): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_DETAIL_SCHE): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_DETAIL_SCHE): {
            return __assign({}, state, { resDetailSche: action.payload.data });
        }
        //list content ui source
        case REQUEST(ACTION_TYPES.API_LIST_CONTENT_UI_SOURCE): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_LIST_CONTENT_UI_SOURCE): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_LIST_CONTENT_UI_SOURCE): {
            return __assign({}, state, { resListContentUISource: action.payload.data });
        }
        //list source by type
        case REQUEST(ACTION_TYPES.API_LIST_SOURCE_BY_0): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_LIST_SOURCE_BY_0): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_LIST_SOURCE_BY_0): {
            return __assign({}, state, { resListSourceBy0: action.payload.data });
        }
        //list source by type
        case REQUEST(ACTION_TYPES.API_LIST_SOURCE_BY_1): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_LIST_SOURCE_BY_1): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_LIST_SOURCE_BY_1): {
            return __assign({}, state, { resListSourceBy1: action.payload.data });
        }
        //add contact
        case REQUEST(ACTION_TYPES.API_ADD_CONTACT): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_ADD_CONTACT): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_ADD_CONTACT): {
            return __assign({}, state, { resAddContact: action.payload.data });
        }
        //filter contact
        case REQUEST(ACTION_TYPES.API_FILTER_CONTACT): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_FILTER_CONTACT): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_FILTER_CONTACT): {
            return __assign({}, state, { resFilterContact: action.payload.data });
        }
        //list contact
        case REQUEST(ACTION_TYPES.API_LIST_CONTACT_PAGING): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_LIST_CONTACT_PAGING): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_LIST_CONTACT_PAGING): {
            return __assign({}, state, { resListContactPaging: action.payload.data });
        }
        //delete sche
        case REQUEST(ACTION_TYPES.API_DELETE_SCHE): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_DELETE_SCHE): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_DELETE_SCHE): {
            return __assign({}, state, { resDeleteSche: action.payload.data });
        }
        case ACTION_TYPES.API_SHOW_EDIT_CONTENT: {
            return __assign({}, state, { resShowEditContent: action.payload });
        }
        case ACTION_TYPES.SET_CONTENT_ELEMENT: {
            return __assign({}, state, { resContentElement: action.payload });
        }
        //delete contact
        case REQUEST(ACTION_TYPES.API_DELETE_CONTACT): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_DELETE_CONTACT): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_DELETE_CONTACT): {
            return __assign({}, state, { resDeleteContact: action.payload.data });
        }
        //delete source order
        case REQUEST(ACTION_TYPES.API_DELETE_SOURCE_ORDER): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_DELETE_SOURCE_ORDER): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_DELETE_SOURCE_ORDER): {
            return __assign({}, state, { resDeleteSourceOrder: action.payload.data });
        }
        default:
            return state;
    }
});
var API_SOURCE = API + 'source/';
var API_UI = API + 'ui/';
var API_CONTACT = API + "contact";
export var reDetailSource = function (id) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_DETAIL_SOURCE,
                    payload: axios.get(API_SOURCE + 'detail-source/' + id)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reAddSource = function (form) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_ADD_SOURCE,
                    payload: axios.post(API_SOURCE + 'add-source', form)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reAddSche = function (form) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_ADD_SCHE,
                    payload: axios.post(API_SOURCE + 'add-sche', form)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reListSource = function (page) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_LIST_SOURCE,
                    payload: axios.get(API_SOURCE + 'all-source' + "/" + page)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reListSourceByType = function (type) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(type === 0)) return [3 /*break*/, 2];
                return [4 /*yield*/, dispatch({
                        type: ACTION_TYPES.API_LIST_SOURCE_BY_0,
                        payload: axios.get(API_SOURCE + 'filter-source' + "/" + type)
                    })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
            case 2: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_LIST_SOURCE_BY_1,
                    payload: axios.get(API_SOURCE + 'filter-source' + "/" + type)
                })];
            case 3:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reUpdateSource = function (form, id) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_UPDATE_SOURCE,
                    payload: axios.put(API_SOURCE + 'update-source' + "/" + id, form)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reUpdateSche = function (form, id) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_UPDATE_SCHE,
                    payload: axios.put(API_SOURCE + 'update-sche' + "/" + id, form)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reListSche = function (id) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_LIST_SCHE,
                    payload: axios.get(API_SOURCE + 'all-sche/' + id)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reDetailSche = function (id) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_DETAIL_SCHE,
                    payload: axios.get(API_SOURCE + 'detail-sche/' + id)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reListContentUISource = function (idUI, idSource) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_LIST_CONTENT_UI_SOURCE,
                    payload: axios.get(API_UI + 'detail-ui-source/' + idUI + '/' + idSource)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reShowEditContent = function (status) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_SHOW_EDIT_CONTENT,
                    payload: status
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reSetContentElement = function (content) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.SET_CONTENT_ELEMENT,
                    payload: content
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reAddContact = function (form) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_ADD_CONTACT,
                    payload: axios.post(API_CONTACT, form)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reListContactPaging = function (page) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_LIST_CONTACT_PAGING,
                    payload: axios.get(API_CONTACT + '/all/' + page)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reDeleteContact = function (id) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_DELETE_CONTACT,
                    payload: axios.delete(API_CONTACT + '/' + id)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reDeleteSche = function (idSche) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_DELETE_SCHE,
                    payload: axios.delete(API_SOURCE + 'delete-sche/' + idSche)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reDeleteSourceOrder = function (id) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_DELETE_SOURCE_ORDER,
                    payload: axios.delete(API_SOURCE + 'order/' + id)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
//# sourceMappingURL=reSource.js.map