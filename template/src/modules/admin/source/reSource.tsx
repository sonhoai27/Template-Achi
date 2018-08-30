import axios  from 'axios'
import { REQUEST, FAILURE, SUCCESS } from "../../../utils/action-type-util";
import { API } from "../../../config/const";

export const ACTION_TYPES = {
    API_DETAIL_SOURCE: 'ReSource/API_DETAIL_SOURCE',
    API_ADD_SOURCE: 'ReSource/API_DETAIL_SOURCE',
    API_ADD_TYPE_SCHE: 'ReSource/API_ADD_TYPE_SCHE',
    API_ADD_SCHE: 'ReSource/API_ADD_SCHE'
}
const initialState = {
    resDetailSource: [],
    resAddSource: [],
    resAddTypeSche: '',
    resAddSche: ''

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
                resDetailSource: action.payload.data.list
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
        case REQUEST(ACTION_TYPES.API_ADD_TYPE_SCHE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_ADD_TYPE_SCHE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_ADD_TYPE_SCHE): {
            return {
                ...state,
                resAddTypeSche: action.payload.data.list
            }
        }
        default:
            return state;
    }
}
const API_SOURCE = API+'source/'
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
        payload: axios.post(API_SOURCE+'/add-source', form)
    });
    return result;
};
export const reAddSche = (form) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ADD_SOURCE,
        payload: axios.post(API_SOURCE+'/add-sche', form)
    });
    return result;
};
export const reAddTypeSche = (form) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ADD_SOURCE,
        payload: axios.post(API_SOURCE+'/add-type-source', form)
    });
    return result;
};