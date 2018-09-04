import axios from 'axios'
import { REQUEST, FAILURE, SUCCESS } from '../../../utils/action-type-util';
import { API } from '../../../config/const';
export const ACTION_TYPES = {
    API_LIST_ELEMENT: 'ReUI/API_LIST_ELEMENT',
    API_DETAIL_UI: 'ReUI/API_DETAIL_UI',
    SHOW_LIST_ELEMENT: 'ReUI/SHOW_LIST_ELEMENT',
    SET_CURRENT_ID_ELEMENT: 'ReUI/SET_CURRENT_ID_ELEMENT',
    API_ADD_ELEMENT_TO_UI_DETAIL: 'ReUI/API_ADD_ELEMENT_TO_UI_DETAIL',
    API_DELETE_ELEMENT_DETAIl_UI: 'ReUI/API_DELETE_ELEMENT_DETAIl_UI',
    CURRENT_MATCH_DETAIl_UI: 'ReUI/CURRENT_MATCH_DETAIl_UI',
    API_LIST_UI: 'ReUI/API_LIST_UI',
    API_ADD_UPDATE_CONTENT_UI_ELEMENT: 'ReUI/API_ADD_UPDATE_CONTENT_UI_ELEMENT',
    API_ADD_CSS: 'ReUI/API_ADD_CSS'
}

const initialState = {
    resListElement: [],
    resDetailUI: {},
    showListElement: false,
    currentIdElement: '',
    addElementToUIDetail: '',
    deleteElementToUIDetail: '',
    currentMatchDetailUI: '',
    resListUI: [],
    resAddUpdateContentElement: {},
    resAddCss: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        // list element
        case REQUEST(ACTION_TYPES.API_LIST_ELEMENT): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_ELEMENT): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_ELEMENT): {
            return {
                ...state,
                resListElement: action.payload.data.list
            }
        }

        // detail ui
        case REQUEST(ACTION_TYPES.API_DETAIL_UI): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_DETAIL_UI): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_DETAIL_UI): {
            return {
                ...state,
                resDetailUI: action.payload.data
            }
        }

        // show list element
        case (ACTION_TYPES.SHOW_LIST_ELEMENT): {
            return {
                ...state,
                showListElement: action.payload
            }
        }
         // set current id  element
         case (ACTION_TYPES.SET_CURRENT_ID_ELEMENT): {
            return {
                ...state,
                currentIdElement: action.payload
            }
        }
        // add element to detail ui
        case REQUEST(ACTION_TYPES.API_ADD_ELEMENT_TO_UI_DETAIL): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_ADD_ELEMENT_TO_UI_DETAIL): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_ADD_ELEMENT_TO_UI_DETAIL): {
            return {
                ...state,
                addElementToUIDetail: action.payload.data
            }
        }
        // delete element to detail ui
        case REQUEST(ACTION_TYPES.API_DELETE_ELEMENT_DETAIl_UI): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_DELETE_ELEMENT_DETAIl_UI): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_DELETE_ELEMENT_DETAIl_UI): {
            return {
                ...state,
                deleteElementToUIDetail: action.payload.data
            }
        }
        case (ACTION_TYPES.CURRENT_MATCH_DETAIl_UI): {
            return {
                ...state,
                currentMatchDetailUI: action.payload
            }
        }

        // list ui
        case REQUEST(ACTION_TYPES.API_LIST_UI): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_UI): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_UI): {
            return {
                ...state,
                resListUI: action.payload.data.list
            }
        }

        // add update content element
        case REQUEST(ACTION_TYPES.API_ADD_UPDATE_CONTENT_UI_ELEMENT): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_ADD_UPDATE_CONTENT_UI_ELEMENT): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_ADD_UPDATE_CONTENT_UI_ELEMENT): {
            return {
                ...state,
                resAddUpdateContentElement: action.payload.data
            }
        }
        // add css
        case REQUEST(ACTION_TYPES.API_ADD_CSS): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_ADD_CSS): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_ADD_CSS): {
            return {
                ...state,
                resAddCss: action.payload.data
            }
        }
        default:
            return state;
    }
}

const API_LIST_ELEMENT = API + 'ui/element'
const API_DETAIL_UI = API + 'ui/detail-ui'
const API_LIST_UI = API + 'ui/all-ui'
const API_ADD_ELEMENT_DETAIL_UI = API + 'ui/add-element-to-detail-ui'
const API_DELETE_ELEMENT_DETAIL_UI = API + 'ui/delete-element-of-detail-ui/'
const API_ADD_UPDATE_CONTENT_UI_ELEMENT = API+'ui/add-update-content-element'
const API_ADD_CSS = API + 'ui/add-css/'
export const reListElement = () => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_ELEMENT,
        payload: axios.get(API_LIST_ELEMENT)
    });
    return result;
};
export const reDetailUI = (idUI) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_DETAIL_UI,
        payload: axios.get(API_DETAIL_UI+'/'+idUI)
    });
    return result;
};

export const reShowListElement = (status) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.SHOW_LIST_ELEMENT,
        payload: status
    });
    return result;
};

export const reSetCurrentIdElement = (id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.SET_CURRENT_ID_ELEMENT,
        payload: id
    });
    return result;
};
export const reAddElementToDetailUI = (form) => async dispatch => {
    if(form.detail_ui_parent_id == ''){
        delete form.detail_ui_parent_id
    }
    const result = await dispatch({
        type: ACTION_TYPES.API_ADD_ELEMENT_TO_UI_DETAIL,
        payload: axios.post(API_ADD_ELEMENT_DETAIL_UI, form)
    });
    return result;
};

export const reDeleteElementToDetailUI = (idUI, idDetailUI) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_DELETE_ELEMENT_DETAIl_UI,
        payload: axios.delete(API_DELETE_ELEMENT_DETAIL_UI+idUI+'/'+idDetailUI)
    });
    return result;
};
export const reSetCurrentMatchDetailUI = (match) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.CURRENT_MATCH_DETAIl_UI,
        payload: match
    });
    return result;
};

export const reListUI = () => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_UI,
        payload: axios.get(API_LIST_UI)
    });
    return result;
};
export const reAddUpdateContentElement = (form) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ADD_UPDATE_CONTENT_UI_ELEMENT,
        payload: axios.post(API_ADD_UPDATE_CONTENT_UI_ELEMENT, form)
    });
    return result;
};
export const reAddCss = (form, id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ADD_CSS,
        payload: axios.post(API_ADD_CSS+id, form)
    });
    return result;
};