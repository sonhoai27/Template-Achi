import axios  from 'axios'
import { REQUEST, FAILURE, SUCCESS } from '../utils/action-type-util';
import { API } from '../config/const';

export const ACTION_TYPES = {
    API_LIST_IMAGE: 'ReInit/API_LIST_IMAGE',
    API_ADD_IMAGE: 'ReInit/API_ADD_IMAGE',
    API_DELETE_IMAGE: 'ReInit/API_DELETE_IMAGE',
    CURRENT_EDITOR_PHOTO: 'ReInit/CURRENT_EDITOR_PHOTO',
    IS_SHOWING_PHOTO_APP: 'ReInit/IS_SHOWING_PHOTO_APP'
}
const initialState = {
    resListImage: [],
    resDeleteImage: '',
    resAddImage: '',
    currentEditorPhoto: '',
    isShowPhotoApp: false

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
                resAddImage: action.payload.data
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
                resListImage: action.payload.data
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
                resDeleteImage: action.payload.data
            }
        }
        case (ACTION_TYPES.CURRENT_EDITOR_PHOTO): {
            return {
                ...state,
                currentEditorPhoto: action.payload
            }
        }
        case (ACTION_TYPES.IS_SHOWING_PHOTO_APP): {
            return {
                ...state,
                isShowPhotoApp: action.payload
            }
        }
        default:
            return state;
    }
}
const API_FILE = API+'file/'
export const reListImage = () => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_IMAGE,
        payload: axios.get(API_FILE+'all/photo')
    });
    return result;
};
export const reDeleteImage = (id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_DELETE_IMAGE,
        payload: axios.delete(API_FILE+'delete/'+id)
    });
    return result;
};
export const reAddImage = (form) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ADD_IMAGE,
        payload: axios.post(API_FILE+'upload/photo', form)
    });
    return result;
};
export const reShowPhotoApp = (status) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.IS_SHOWING_PHOTO_APP,
        payload: status
    });
    return result;
};
export const reSetCurrentEditorPhoto = (editor) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.CURRENT_EDITOR_PHOTO,
        payload: editor
    });
    return result;
};