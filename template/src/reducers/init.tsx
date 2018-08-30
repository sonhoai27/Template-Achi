import axios  from 'axios'
import { REQUEST, FAILURE, SUCCESS } from '../utils/action-type-util';
import { API } from '../config/const';

export const ACTION_TYPES = {
    API_LIST_IMAGE: 'ReInit/API_LIST_IMAGE',
    API_ADD_IMAGE: 'ReInit/API_ADD_IMAGE',
    API_DELETE_IMAGE: 'ReInit/API_DELETE_IMAGE'
}
const initialState = {
    resListImage: [],
    resDeleteImage: '',
    resAddImage: ''

}
export default (state = initialState, action) => {
    switch (action.type) {
        // add image
        case REQUEST(ACTION_TYPES.API_ADD_IMAGE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_ADD_IMAGE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_ADD_IMAGE): {
            return {
                ...state,
                resAddImage: action.payload.data.list
            }
        }
        // list image
        case REQUEST(ACTION_TYPES.API_LIST_IMAGE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_IMAGE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_IMAGE): {
            return {
                ...state,
                resListImage: action.payload.data.list
            }
        }
        // delete image
        case REQUEST(ACTION_TYPES.API_DELETE_IMAGE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_DELETE_IMAGE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_DELETE_IMAGE): {
            return {
                ...state,
                resDeleteImage: action.payload.data.list
            }
        }
        default:
            return state;
    }
}
const API_FILE = API+'file/'
export const reListImage = () => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ADD_IMAGE,
        payload: axios.get(API_FILE+'all/photo')
    });
    return result;
};
export const reDeleteSource = (id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_DELETE_IMAGE,
        payload: axios.delete(API_FILE+'delete/'+id)
    });
    return result;
};
export const reAddSource = (form) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ADD_IMAGE,
        payload: axios.post(API_FILE+'upload/photo', form)
    });
    return result;
};