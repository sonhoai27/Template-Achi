import axios  from 'axios'
import { REQUEST, FAILURE, SUCCESS } from "../../../utils/action-type-util";
import { API } from "../../../config/const";

export const ACTION_TYPES = {
    API_DETAIL_SOURCE: 'ReSource/API_DETAIL_SOURCE',
    API_ADD_SOURCE: 'ReSource/API_DETAIL_SOURCE',
    API_ADD_DATE_SCHE: 'ReSource/API_ADD_DATE_SCHE',
    API_ADD_SCHE: 'ReSource/API_ADD_SCHE',
    API_LIST_SOURCE: 'ReSource/API_LIST_SOURCE',
    API_LIST_SCHE: 'ReSource/API_LIST_SCHE',
    API_LIST_DATE_SCHE: 'ReSource/API_LIST_DATE_SCHE',
    API_UPDATE_SOURCE: 'ReSource/API_UPDATE_SOURCE',
    API_UPDATE_DATE_SCHE: 'ReSource/API_UPDATE_DATE_SCHE',
    API_UPDATE_SCHE: 'ReSource/API_UPDATE_SCHE',
    API_DETAIL_SCHE: 'ReSource/API_DETAIL_SCHE',
    API_LIST_CONTENT_UI_SOURCE: 'ReSource/API_LIST_CONTENT_UI_SOURCE'
}
const initialState = {
    resDetailSource: [],
    resAddSource: [],
    resAddDateSche: '',
    resAddSche: '',
    reslistSource: {},
    resListSche: [],
    resListDateSche: [],
    resUpdateSource: {},
    resUpdateDateSche: {},
    resUpdateSche: {},
    resDetailSche: {},
    resListContentUISource: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        // detail source
        case REQUEST(ACTION_TYPES.API_DETAIL_SOURCE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_DETAIL_SOURCE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_DETAIL_SOURCE): {
            return {
                ...state,
                resDetailSource: action.payload.data.list
            }
        }
        // add source
        case REQUEST(ACTION_TYPES.API_ADD_SOURCE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_ADD_SOURCE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_ADD_SOURCE): {
            return {
                ...state,
                resAddSource: action.payload.data.list
            }
        }
        // add sche
        case REQUEST(ACTION_TYPES.API_ADD_SCHE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_ADD_SCHE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_ADD_SCHE): {
            return {
                ...state,
                resAddSche: action.payload.data.list
            }
        }
        // add type sche
        case REQUEST(ACTION_TYPES.API_ADD_DATE_SCHE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_ADD_DATE_SCHE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_ADD_DATE_SCHE): {
            return {
                ...state,
                resAddDateSche: action.payload.data
            }
        }
        // list source
        case REQUEST(ACTION_TYPES.API_LIST_SOURCE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_SOURCE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_SOURCE): {
            return {
                ...state,
                reslistSource: action.payload.data
            }
        }
        // update source
        case REQUEST(ACTION_TYPES.API_UPDATE_SOURCE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_UPDATE_SOURCE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_UPDATE_SOURCE): {
            return {
                ...state,
                resUpdateSource: action.payload.data
            }
        }
        // update typesche
        case REQUEST(ACTION_TYPES.API_UPDATE_DATE_SCHE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_UPDATE_DATE_SCHE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_UPDATE_DATE_SCHE): {
            return {
                ...state,
                resUpdateDateSche: action.payload.data
            }
        }
        // update sche
        case REQUEST(ACTION_TYPES.API_UPDATE_SCHE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_UPDATE_SCHE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_UPDATE_SCHE): {
            return {
                ...state,
                resUpdateSche: action.payload.data
            }
        }
        // list sche
        case REQUEST(ACTION_TYPES.API_LIST_SCHE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_SCHE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_SCHE): {
            return {
                ...state,
                resListSche: action.payload.data
            }
        }
        // detail sche
        case REQUEST(ACTION_TYPES.API_DETAIL_SCHE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_DETAIL_SCHE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_DETAIL_SCHE): {
            return {
                ...state,
                resDetailSche: action.payload.data
            }
        }
        // list date sche
        case REQUEST(ACTION_TYPES.API_LIST_DATE_SCHE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_DATE_SCHE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_DATE_SCHE): {
            return {
                ...state,
                resListDateSche: action.payload.data
            }
        }

        //list content ui source
        case REQUEST(ACTION_TYPES.API_LIST_CONTENT_UI_SOURCE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_CONTENT_UI_SOURCE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_CONTENT_UI_SOURCE): {
            return {
                ...state,
                resListContentUISource: action.payload.data
            }
        }
        default:
            return state;
    }
}
const API_SOURCE = API+'source/'
const API_UI = API+'ui/'
export const reDetailSource = (id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_DETAIL_SOURCE,
        payload: axios.get(API_SOURCE+'detail-source/'+id)
    });
    return result;
};
export const reAddSource = (form) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ADD_SOURCE,
        payload: axios.post(API_SOURCE+'add-source', form)
    });
    return result;
};
export const reAddSche = (form) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ADD_SCHE,
        payload: axios.post(API_SOURCE+'add-sche', form)
    });
    return result;
};
export const reAddDateSche = (form) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ADD_DATE_SCHE,
        payload: axios.post(API_SOURCE+'add-date-sche', form)
    });
    return result;
};
export const reListSource = (page) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_SOURCE,
        payload: axios.get(API_SOURCE+'all-source'+"/"+page)
    });
    return result;
};
export const reUpdateSource = (form, id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_UPDATE_SOURCE,
        payload: axios.put(API_SOURCE+'update-source'+"/"+id, form)
    });
    return result;
};
export const reUpdateDateSche = (form, id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_UPDATE_DATE_SCHE,
        payload: axios.put(API_SOURCE+'update-date-sche'+"/"+id, form)
    });
    return result;
};
export const reUpdateSche = (form, id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_UPDATE_SCHE,
        payload: axios.put(API_SOURCE+'update-sche'+"/"+id, form)
    });
    return result;
};
export const reListSche = (id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_SCHE,
        payload: axios.get(API_SOURCE+'all-sche/'+id)
    });
    return result;
};
export const reDetailSche = (id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_DETAIL_SCHE,
        payload: axios.get(API_SOURCE+'detail-sche/'+id)
    });
    return result;
};
export const reListDateSche = (id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_DATE_SCHE,
        payload: axios.get(API_SOURCE+'all-date-sche/'+id)
    });
    return result;
};
export const reListContentUISource = (idUI, idSource) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_CONTENT_UI_SOURCE,
        payload: axios.get(API_UI+'detail-ui-source/'+idUI+'/'+idSource)
    });
    return result;
};
