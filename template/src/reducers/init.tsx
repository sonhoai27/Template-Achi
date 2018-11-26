import axios  from 'axios'
import { REQUEST, FAILURE, SUCCESS } from '../utils/action-type-util';
import { API } from '../config/const';
import { Storage } from '../utils/storage-util';

export const ACTION_TYPES = {
    API_LIST_IMAGE: 'ReInit/API_LIST_IMAGE',
    API_ADD_IMAGE: 'ReInit/API_ADD_IMAGE',
    API_DELETE_IMAGE: 'ReInit/API_DELETE_IMAGE',
    CURRENT_EDITOR_PHOTO: 'ReInit/CURRENT_EDITOR_PHOTO',
    IS_SHOWING_PHOTO_APP: 'ReInit/IS_SHOWING_PHOTO_APP',
    IS_DANGER: 'ReInit/IS_DANGER',
    IS_SUCCESS: 'ReInit/IS_SUCCESS',
    API_CHECK_LOGIN: 'ReInit/API_CHECK_LOGIN',
    API_LOGIN: 'ReInit/API_LOGIN',
    IS_LOADING: 'ReInit/IS_LOADING',
    CURRENT_MATCH: 'ReInit/CURRENT_MATCH',
    API_USER_LOGIN: "ReInit/API_USER_LOGIN",
    ADD_PHOTO_GROUP: 'ReInit/ADD_PHOTO_GROUP'
}
const initialState = {
    resListImage: [],
    resDeleteImage: '',
    resAddImage: '',
    currentEditorPhoto: '',
    isShowPhotoApp: false,
    isSuccess: false,
    isDanger: false,
    resLogin: {},
    resCheckLogin: {},
    isLoading: false,
    currentMatch: {},
    resUserLogin: {},
    addPhotoGroup: {}

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
        case (ACTION_TYPES.IS_DANGER): {
            return {
                ...state,
                isDanger: action.payload
            }
        }
        case (ACTION_TYPES.IS_SUCCESS): {
            return {
                ...state,
                isSuccess: action.payload
            }
        }
        case (ACTION_TYPES.IS_LOADING): {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        case (ACTION_TYPES.CURRENT_MATCH): {
            return {
                ...state,
                currentMatch: action.payload
            }
        }
        // check login
        case REQUEST(ACTION_TYPES.API_CHECK_LOGIN): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_CHECK_LOGIN): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_CHECK_LOGIN): {
            return {
                ...state,
                resCheckLogin: action.payload.data
            }
        }
        //  login
        case REQUEST(ACTION_TYPES.API_USER_LOGIN): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_USER_LOGIN): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_USER_LOGIN): {
            return {
                ...state,
                resUserLogin: action.payload.data
            }
        }
         //  add group photo
         case REQUEST(ACTION_TYPES.ADD_PHOTO_GROUP): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.ADD_PHOTO_GROUP): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.ADD_PHOTO_GROUP): {
            return {
                ...state,
                addPhotoGroup: action.payload.data
            }
        }
        default:
            return state;
    }
}
const API_FILE = API+'file/'
export const reListImage = (where) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_IMAGE,
        payload: axios.post(API_FILE+'all/photo', {
            where: where
        })
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
export const reIsDanger = (status) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.IS_DANGER,
        payload: status
    });
    return result;
};
export const reIsSuccess = (status) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.IS_SUCCESS,
        payload: status
    });
    return result;
};
export const reIsLoading = (status) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.IS_LOADING,
        payload: status
    });
    return result;
};
export const reCheckLogin = () => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_CHECK_LOGIN,
        payload: axios.post(API+'auth/check', {
            token: Storage.local.get('user_token')
        })
    });
    return result;
};
export const reUserLogin = (form) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_USER_LOGIN,
        payload: axios.post(API+'auth/login', form)
    });
    return result;
};
export const reSetCurrentMatch = (match) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.CURRENT_MATCH,
        payload: match
    });
    return result;
};
export const reAddGroupPhoto = (form) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.ADD_PHOTO_GROUP,
        payload: axios.post(API_FILE+'group', form)
    });
    return result;
};