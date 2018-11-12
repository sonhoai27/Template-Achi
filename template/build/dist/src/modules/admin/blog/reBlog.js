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
    API_ADD_BLOG: 'ReBlog/API_ADD_BLOG',
    API_LIST_BLOG: 'ReBlog/API_LIST_BLOG',
    API_LIST_AUHTOR: 'ReBlog/API_LIST_AUHTOR',
    API_LIST_CATEGORY: 'ReBlog/API_LIST_CATEGORY',
    API_DETAIL_BLOG: 'ReBlog/API_DETAIL_BLOG',
    API_UPDATE_BLOG: 'ReBlog/API_UPDATE_BLOG',
    API_DELETE_BLOG: 'ReBlog/API_DELETE_BLOG',
    API_ADD_AUTHOR: 'ReBlog/API_ADD_AUTHOR',
    API_ADD_CATEGORY: 'ReBlog/API_ADD_CATEGORY',
    API_DELETE_AUTHOR: 'ReBlog/API_DELETE_AUTHOR',
    API_DELETE_CATEGORY: 'ReBlog/API_DELETE_CATEGORY',
    API_UPDATE_AUTHOR: 'ReBlog/API_UPDATE_AUTHOR',
    API_UPDATE_CATEGORY: 'ReBlog/API_UPDATE_CATEGORY',
    API_STATUS: 'ReBlog/API_STATUS',
    API_CLIENT_LIST_BLOG: 'ReBlog/API_CLIENT_LIST_BLOG',
    API_CLIENT_LIST_BLOG_CATEGORY: 'ReBlog/API_CLIENT_LIST_BLOG_CATEGORY',
    API_DETAIL_BLOG_ALIAS: 'ReBlog/API_DETAIL_BLOG_ALIAS'
};
var initialState = {
    resAddBlog: {},
    resListBlog: {},
    resListCategory: {},
    resListAuthor: {},
    resDetailBlog: {},
    resUpdateBlog: {},
    resDeleteBlog: {},
    resAddAuthor: {},
    resAddCategory: {},
    resDeleteAuthor: {},
    resDeleteCategory: {},
    resUpdateAuthor: {},
    resUpdateCategory: {},
    resListStatus: [],
    resClientListBlog: [],
    resClientListBlogCategory: {},
    resDetailBlogAlias: {}
};
export default (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case REQUEST(ACTION_TYPES.API_ADD_BLOG): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_ADD_BLOG): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_ADD_BLOG): {
            return __assign({}, state, { resAddBlog: action.payload.data });
        }
        case REQUEST(ACTION_TYPES.API_LIST_AUHTOR): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_LIST_AUHTOR): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_LIST_AUHTOR): {
            return __assign({}, state, { resListAuthor: action.payload.data });
        }
        case REQUEST(ACTION_TYPES.API_LIST_CATEGORY): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_LIST_CATEGORY): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_LIST_CATEGORY): {
            return __assign({}, state, { resListCategory: action.payload.data });
        }
        // list blog 
        case REQUEST(ACTION_TYPES.API_LIST_BLOG): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_LIST_BLOG): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_LIST_BLOG): {
            return __assign({}, state, { resListBlog: action.payload.data });
        }
        // detail blog 
        case REQUEST(ACTION_TYPES.API_DETAIL_BLOG): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_DETAIL_BLOG): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_DETAIL_BLOG): {
            return __assign({}, state, { resDetailBlog: action.payload.data });
        }
        // detail blog 
        case REQUEST(ACTION_TYPES.API_DETAIL_BLOG_ALIAS): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_DETAIL_BLOG_ALIAS): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_DETAIL_BLOG_ALIAS): {
            return __assign({}, state, { resDetailBlogAlias: action.payload.data });
        }
        // update blog 
        case REQUEST(ACTION_TYPES.API_UPDATE_BLOG): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_UPDATE_BLOG): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_UPDATE_BLOG): {
            return __assign({}, state, { resUpdateBlog: action.payload.data });
        }
        // update category 
        case REQUEST(ACTION_TYPES.API_UPDATE_CATEGORY): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_UPDATE_CATEGORY): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_UPDATE_CATEGORY): {
            return __assign({}, state, { resUpdateCategory: action.payload.data });
        }
        // update auhtor 
        case REQUEST(ACTION_TYPES.API_UPDATE_AUTHOR): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_UPDATE_AUTHOR): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_UPDATE_AUTHOR): {
            return __assign({}, state, { resUpdateAuthor: action.payload.data });
        }
        // delete blog 
        case REQUEST(ACTION_TYPES.API_DELETE_BLOG): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_DELETE_BLOG): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_DELETE_BLOG): {
            return __assign({}, state, { resDeleteBlog: action.payload.data });
        }
        // add author
        case REQUEST(ACTION_TYPES.API_ADD_AUTHOR): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_ADD_AUTHOR): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_ADD_AUTHOR): {
            return __assign({}, state, { resAddAuthor: action.payload.data });
        }
        // add CAtegory 
        case REQUEST(ACTION_TYPES.API_ADD_CATEGORY): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_ADD_CATEGORY): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_ADD_CATEGORY): {
            return __assign({}, state, { resAddCategory: action.payload.data });
        }
        // delete author 
        case REQUEST(ACTION_TYPES.API_DELETE_AUTHOR): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_DELETE_AUTHOR): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_DELETE_AUTHOR): {
            return __assign({}, state, { resDeleteAuthor: action.payload.data });
        }
        // delete Ccategory 
        case REQUEST(ACTION_TYPES.API_DELETE_CATEGORY): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_DELETE_CATEGORY): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_DELETE_CATEGORY): {
            return __assign({}, state, { resDeleteCategory: action.payload.data });
        }
        // list status
        case REQUEST(ACTION_TYPES.API_STATUS): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_STATUS): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_STATUS): {
            return __assign({}, state, { resListStatus: action.payload.data });
        }
        // list client blog
        case REQUEST(ACTION_TYPES.API_CLIENT_LIST_BLOG): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_CLIENT_LIST_BLOG): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_CLIENT_LIST_BLOG): {
            return __assign({}, state, { resClientListBlog: action.payload.data });
        }
        // list client blog category
        case REQUEST(ACTION_TYPES.API_CLIENT_LIST_BLOG_CATEGORY): {
            return __assign({}, state);
        }
        case FAILURE(ACTION_TYPES.API_CLIENT_LIST_BLOG_CATEGORY): {
            return __assign({}, state);
        }
        case SUCCESS(ACTION_TYPES.API_CLIENT_LIST_BLOG_CATEGORY): {
            return __assign({}, state, { resClientListBlogCategory: action.payload.data });
        }
        default:
            return state;
    }
});
var API_BLOG = API + 'blog';
var API_CATEGORY = API + 'category';
var API_AUTHOR = API + 'author';
var API_STATUS = API + 'status';
export var reAddBlog = function (form) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_ADD_BLOG,
                    payload: axios.post(API_BLOG, form)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reListBlog = function (page) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_LIST_BLOG,
                    payload: axios.get(API_BLOG + "/" + page)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reDetailBlog = function (idBlog) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_DETAIL_BLOG,
                    payload: axios.get(API_BLOG + "/detail/" + idBlog)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reUpdateBlog = function (form, idBlog) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_UPDATE_BLOG,
                    payload: axios.put(API_BLOG + "/" + idBlog, form)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reDeleteBlog = function (idBlog) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_DELETE_BLOG,
                    payload: axios.delete(API_BLOG + "/" + idBlog)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reClientListBlog = function (page, category) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_CLIENT_LIST_BLOG,
                    payload: axios.post(API_BLOG + "/all/" + page, category)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reClientListBlogCategory = function (idCategory) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_CLIENT_LIST_BLOG_CATEGORY,
                    payload: axios.get(API_BLOG + "/category/" + idCategory)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
// author category
// all
export var reListCategory = function () { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_LIST_CATEGORY,
                    payload: axios.get(API_CATEGORY)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reListAuthor = function () { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_LIST_AUHTOR,
                    payload: axios.get(API_AUTHOR)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reListStatus = function () { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_STATUS,
                    payload: axios.get(API_STATUS)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
// add
export var reAddAuthor = function (form) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_ADD_AUTHOR,
                    payload: axios.post(API_AUTHOR, form)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reAddCategory = function (form) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_ADD_CATEGORY,
                    payload: axios.post(API_CATEGORY, form)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
// delete
export var reDeleteAuthor = function (id) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_DELETE_AUTHOR,
                    payload: axios.delete(API_AUTHOR + "/" + id)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reDeleteCategory = function (id) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_DELETE_CATEGORY,
                    payload: axios.delete(API_CATEGORY + "/" + id)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
// put
export var reUpdateAuthor = function (form, id) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_UPDATE_AUTHOR,
                    payload: axios.put(API_AUTHOR + "/" + id, form)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reUpdateCategory = function (form, id) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_UPDATE_CATEGORY,
                    payload: axios.put(API_CATEGORY + "/" + id, form)
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
export var reDetailBlogAlias = function (idBlog) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dispatch({
                    type: ACTION_TYPES.API_DETAIL_BLOG_ALIAS,
                    payload: axios.post(API_BLOG + "/detail-alias", {
                        key: idBlog
                    })
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); }; };
//# sourceMappingURL=reBlog.js.map