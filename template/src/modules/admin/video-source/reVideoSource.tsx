import {FAILURE, REQUEST, SUCCESS} from "../../../utils/action-type-util";
import {API} from "../../../config/const";
import axios from "axios";

export const ACTION_TYPES = {
    API_LIST_VIDEO_SOURCE: 'ReSourceVideo/API_LIST_VIDEO_SOURCE',
    API_ADD_VIDEO_SOURCE_VIDEO: 'ReSourceVideo/API_ADD_VIDEO_SOURCE_VIDEO',
    API_DELETE_VIDEO_SOURCE_VIDEO: 'ReSourceVideo/API_DELETE_VIDEO_SOURCE_VIDEO',
    API_UPDATE_VIDEO_SOURCE_VIDEO: 'ReSourceVideo/API_UPDATE_VIDEO_SOURCE_VIDEO'
}
const initialState = {
    resListVideoSource: [],
    resAddVideoSourceVideo: {},
    resUpdateVideoSourceVideo: {},
    resDeleteVideoSourceVideo: {}
}
export default (state = initialState, action) => {
    switch (action.type) {
        // list video
        case REQUEST(ACTION_TYPES.API_LIST_VIDEO_SOURCE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_VIDEO_SOURCE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_VIDEO_SOURCE): {
            return {
                ...state,
                resListVideoSource: action.payload.data
            }
        }
        // add video
        case REQUEST(ACTION_TYPES.API_ADD_VIDEO_SOURCE_VIDEO): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_ADD_VIDEO_SOURCE_VIDEO): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_ADD_VIDEO_SOURCE_VIDEO): {
            return {
                ...state,
                resAddVideoSourceVideo: action.payload.data
            }
        }
        // update video
        case REQUEST(ACTION_TYPES.API_UPDATE_VIDEO_SOURCE_VIDEO): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_UPDATE_VIDEO_SOURCE_VIDEO): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_UPDATE_VIDEO_SOURCE_VIDEO): {
            return {
                ...state,
                resUpdateVideoSourceVideo: action.payload.data
            }
        }
        // delete video
        case REQUEST(ACTION_TYPES.API_DELETE_VIDEO_SOURCE_VIDEO): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_DELETE_VIDEO_SOURCE_VIDEO): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_DELETE_VIDEO_SOURCE_VIDEO): {
            return {
                ...state,
                resDeleteVideoSourceVideo: action.payload.data
            }
        }
        default: return state
    }
}
const API_SOURCE_VIDEO = API+'video-source'
export const apiListVideoSource = (idSource) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_VIDEO_SOURCE,
        payload: axios.get(API_SOURCE_VIDEO+'/all/'+idSource)
    });
    return result;
};
export const apiAddVideoSource = (form) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ADD_VIDEO_SOURCE_VIDEO,
        payload: axios.post(API_SOURCE_VIDEO, form)
    });
    return result;
};
export const apiUpdateVideoSource = (form, id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_UPDATE_VIDEO_SOURCE_VIDEO,
        payload: axios.put(API_SOURCE_VIDEO+'/'+id, form)
    });
    return result;
};
export const apiDeleteVideoSource = (id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_DELETE_VIDEO_SOURCE_VIDEO,
        payload: axios.delete(API_SOURCE_VIDEO+'/'+id)
    });
    return result;
};
