import axios from 'axios'
import { REQUEST, FAILURE, SUCCESS } from '../../../utils/action-type-util';
import { API } from '../../../config/const';
export const ACTION_TYPES = {
    API_LIST_GIFT: 'ReGift/API_LIST_GIFT',
    API_ADD_GIFT: 'ReGift/API_ADD_GIFT',
    API_UPDATE_GIFT: 'ReGift/API_UPDATE_GIFT',
    API_DELETE_GIFT: 'ReGift/API_DELETE_GIFT',
    API_DETAIL_GIFT: 'ReGift/API_DETAIL_GIFT'
}

const initialState = {
    resListGift: [],
    resAddGift: {},
    resUpdateGift: {},
    resDeleteGift: {},
    resDetailGift: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.API_LIST_GIFT): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_GIFT): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_GIFT): {
            return {
                ...state,
                resListGift: action.payload.data
            }
        }

        // add Gift
        case REQUEST(ACTION_TYPES.API_ADD_GIFT): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_ADD_GIFT): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_ADD_GIFT): {
            return {
                ...state,
                resAddGift: action.payload.data
            }
        }

        // update
        case REQUEST(ACTION_TYPES.API_UPDATE_GIFT): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_UPDATE_GIFT): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_UPDATE_GIFT): {
            return {
                ...state,
                resUpdateGift: action.payload.data
            }
        }
        // delete
        case REQUEST(ACTION_TYPES.API_DELETE_GIFT): {
          return {
              ...state
          }
        }
        case FAILURE(ACTION_TYPES.API_DELETE_GIFT): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_DELETE_GIFT): {
            return {
                ...state,
                resDeleteGift: action.payload.data
            }
        }
        // detail
        case REQUEST(ACTION_TYPES.API_DETAIL_GIFT): {
            return {
                ...state
            }
          }
          case FAILURE(ACTION_TYPES.API_DETAIL_GIFT): {
              return {
                  ...state
              }
          }
          case SUCCESS(ACTION_TYPES.API_DETAIL_GIFT): {
              return {
                  ...state,
                  resDetailGift: action.payload.data
              }
          }
        default:
            return state;
    }
}

const API_GIFT = API + 'gift'

export const reListGift = (page) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_GIFT,
        payload: axios.get(API_GIFT+'/all/'+page)
    });
    return result;
};
export const reAddGift = (form: any) => async dispatch => {
  const result = await dispatch({
      type: ACTION_TYPES.API_ADD_GIFT,
      payload: axios.post(API_GIFT, form)
  });
  return result;
};
export const reUpdateGift = (form: any, idGift: number) => async dispatch => {
  const result = await dispatch({
      type: ACTION_TYPES.API_UPDATE_GIFT,
      payload: axios.put(API_GIFT+'/'+idGift, form)
  });
  return result;
};
export const reDeleteGift = (idGift: number) => async dispatch => {
  const result = await dispatch({
      type: ACTION_TYPES.API_DELETE_GIFT,
      payload: axios.delete(API_GIFT+'/'+idGift)
  });
  return result;
};
export const reDetailGift = (idGift: number) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_DETAIL_GIFT,
        payload: axios.get(API_GIFT+'/'+idGift)
    });
    return result;
  };
