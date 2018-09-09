import axios from 'axios'
import { REQUEST, FAILURE, SUCCESS } from '../../../utils/action-type-util';
import { API } from '../../../config/const';
export const ACTION_TYPES = {
    API_LIST_VIDEO: 'ReVideo/API_LIST_VIDEO',
    API_ADD_VIDEO: 'ReVideo/API_ADD_VIDEO',
    API_UPDATE_VIDEO: 'ReVideo/API_UPDATE_VIDEO',
    API_DELETE_VIDEO: 'ReVideo/API_DELETE_VIDEO',
    API_DETAIL_VIDEO: 'ReVideo/API_DETAIL_VIDEO'
}

const initialState = {
    resListVideo: [],
    resAddVideo: {},
    resUpdateVideo: {},
    resDeleteVideo: {},
    resDetailVideo: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.API_LIST_VIDEO): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_VIDEO): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_VIDEO): {
            return {
                ...state,
                resListVideo: action.payload.data
            }
        }

        // add video
        case REQUEST(ACTION_TYPES.API_ADD_VIDEO): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_ADD_VIDEO): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_ADD_VIDEO): {
            return {
                ...state,
                resAddVideo: action.payload.data
            }
        }

        // update
        case REQUEST(ACTION_TYPES.API_UPDATE_VIDEO): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_UPDATE_VIDEO): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_UPDATE_VIDEO): {
            return {
                ...state,
                resUpdateVideo: action.payload.data
            }
        }
        // delete
        case REQUEST(ACTION_TYPES.API_DELETE_VIDEO): {
          return {
              ...state
          }
        }
        case FAILURE(ACTION_TYPES.API_DELETE_VIDEO): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_DELETE_VIDEO): {
            return {
                ...state,
                resDeleteVideo: action.payload.data
            }
        }
        // detail
        case REQUEST(ACTION_TYPES.API_DETAIL_VIDEO): {
            return {
                ...state
            }
          }
          case FAILURE(ACTION_TYPES.API_DETAIL_VIDEO): {
              return {
                  ...state
              }
          }
          case SUCCESS(ACTION_TYPES.API_DETAIL_VIDEO): {
              return {
                  ...state,
                  resDetailVideo: action.payload.data.list
              }
          }
        default:
            return state;
    }
}

const API_VIDEO = API + 'video'

export const reListVideo = (page) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_VIDEO,
        payload: axios.get(API_VIDEO+'/all/'+page)
    });
    return result;
};
export const reAddVideo = (form: any) => async dispatch => {
  const result = await dispatch({
      type: ACTION_TYPES.API_ADD_VIDEO,
      payload: axios.post(API_VIDEO, form)
  });
  return result;
};
export const reUpdateVideo = (form: any, idVideo: number) => async dispatch => {
  const result = await dispatch({
      type: ACTION_TYPES.API_UPDATE_VIDEO,
      payload: axios.put(API_VIDEO+'/'+idVideo, form)
  });
  return result;
};
export const reDeleteVideo = (idVideo: number) => async dispatch => {
  const result = await dispatch({
      type: ACTION_TYPES.API_DELETE_VIDEO,
      payload: axios.delete(API_VIDEO+'/'+idVideo)
  });
  return result;
};
export const reDetailVideo = (idVideo: number) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_DETAIL_VIDEO,
        payload: axios.get(API_VIDEO+'/'+idVideo)
    });
    return result;
  };
