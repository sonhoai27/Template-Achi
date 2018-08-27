import axios from 'axios'
import { REQUEST, FAILURE, SUCCESS } from '../../../utils/action-type-util';
import { API } from '../../../config/const';
export const ACTION_TYPES = {
    API_LIST_ELEMENT: 'ReUI/API_LIST_ELEMENT',
    API_DETAIL_UI: 'ReUI/API_DETAIL_UI',
}

const initialState = {
    resListElement: [],
    resDetailUI: {}
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
        default:
            return state;
    }
}

const API_LIST_ELEMENT = API + 'ui/element'
const API_DETAIL_UI = API + 'ui/detail-ui'
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
