import axios from 'axios'
import { API } from '../../../../config/const';
import { SUCCESS, FAILURE, REQUEST } from '../../../../utils/action-type-util';
export const ACTION_TYPES = {
    API_ORDER: 'ReBlog/API_ORDER',
}

const initialState = {
    resListOrder: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.API_ORDER): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_ORDER): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_ORDER): {
            return {
                ...state,
                resListOrder: action.payload.data
            }
        }

        default:
            return state;
    }
}

const API_ORDER = API + 'source/order'

export const reListOrder = (page) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ORDER,
        payload: axios.get(API_ORDER+'/all/'+page)
    });
    return result;
};