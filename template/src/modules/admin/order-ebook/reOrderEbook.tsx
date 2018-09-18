import axios from 'axios'
import { REQUEST, FAILURE, SUCCESS } from '../../../utils/action-type-util';
import { API } from '../../../config/const';
export const ACTION_TYPES = {
    API_ORDER_EBOOK: 'ReOrderEbook/API_ORDER_EBOOK',
    API_LIST_PACKAGE: 'ReOrderEbook/API_LIST_PACKAGE',
    IS_SHOWING_MODAL_EXPORT: 'ReOrderEbook/IS_SHOWING_MODAL_EXPORT',
    API_LIST_ORDER_EBOOK_BY_PACKAGE: 'ReOrderEbook/API_LIST_ORDER_EBOOK_BY_PACKAGE',
    API_ADD_PACKAGE: 'ReOrderEbook/API_ADD_PACKAGE',
    API_UPDATE_PACKAGE: 'ReOrderEbook/API_UPDATE_PACKAGE',
    API_SHOW_ALL_ORDER_EBOOK: 'ReOrderEbook/API_SHOW_ALL_ORDER_EBOOK'
}

const initialState = {
    resListOrderEbook: {},
    resListPackage: [],
    isShowingModalExportOrderModal: false,
    resListOrderEbookByPackage: {},
    resAddPackage: {},
    resUpdatePackage: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.API_ORDER_EBOOK): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_ORDER_EBOOK): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_ORDER_EBOOK): {
            return {
                ...state,
                resListOrderEbook: action.payload.data
            }
        }

        case REQUEST(ACTION_TYPES.API_SHOW_ALL_ORDER_EBOOK): {
          return {
              ...state
          }
      }
      case FAILURE(ACTION_TYPES.API_SHOW_ALL_ORDER_EBOOK): {
          return {
              ...state
          }
      }
      case SUCCESS(ACTION_TYPES.API_SHOW_ALL_ORDER_EBOOK): {
          return {
              ...state,
              resListOrderEbookByPackage: action.payload.data
          }
      }

        // list sche order
        case REQUEST(ACTION_TYPES.API_LIST_PACKAGE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_PACKAGE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_PACKAGE): {
            return {
                ...state,
                resListPackage: action.payload.data
            }
        }

        case (ACTION_TYPES.IS_SHOWING_MODAL_EXPORT): {
            return {
                ...state,
                isShowingModalExportOrderModal: action.payload
            }
        }
        // list  order sche
        case REQUEST(ACTION_TYPES.API_LIST_ORDER_EBOOK_BY_PACKAGE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_ORDER_EBOOK_BY_PACKAGE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_ORDER_EBOOK_BY_PACKAGE): {
            return {
                ...state,
                resListOrderEbookByPackage: action.payload.data
            }
        }

      // add package
      case REQUEST(ACTION_TYPES.API_ADD_PACKAGE): {
        return {
            ...state
        }
      }
      case FAILURE(ACTION_TYPES.API_ADD_PACKAGE): {
          return {
              ...state
          }
      }
      case SUCCESS(ACTION_TYPES.API_ADD_PACKAGE): {
          return {
              ...state,
              resAddPackage: action.payload.data
          }
      }
      // update package
      case REQUEST(ACTION_TYPES.API_UPDATE_PACKAGE): {
        return {
            ...state
        }
      }
      case FAILURE(ACTION_TYPES.API_UPDATE_PACKAGE): {
          return {
              ...state
          }
      }
      case SUCCESS(ACTION_TYPES.API_UPDATE_PACKAGE): {
          return {
              ...state,
              resUpdatePackage: action.payload.data
          }
      }
        default:
            return state;
    }
}
const API_PACKAGE = API+'package-ebook'
const API_ORDER_EBOOK = API + 'order-ebook'

export const reListOrderEbook = (page) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ORDER_EBOOK,
        payload: axios.get(API_ORDER_EBOOK+'/all/'+page)
    });
    return result;
};
export const reListAllOrderEbook = () => async dispatch => {
  const result = await dispatch({
      type: ACTION_TYPES.API_SHOW_ALL_ORDER_EBOOK,
      payload: axios.get(API_ORDER_EBOOK+'/export')
  });
  return result;
};
export const reListPackage = () => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_PACKAGE,
        payload: axios.get(API_PACKAGE)
    });
    return result;
};
export const reIsShowingModalExportOrderEbook = (status) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.IS_SHOWING_MODAL_EXPORT,
        payload: status
    });
    return result;
};
export const reListOrderEbookByPackage = (idPackage) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_ORDER_EBOOK_BY_PACKAGE,
        payload: axios.get(API_ORDER_EBOOK+'/filter/package/'+idPackage)
    });
    return result;
};
export const reUpdatePackage = (idPackage, form: any) => async dispatch => {
  const result = await dispatch({
      type: ACTION_TYPES.API_UPDATE_PACKAGE,
      payload: axios.put(API_PACKAGE+'/'+idPackage, form)
  });
  return result;
};
export const reAddPackage = (form: any) => async dispatch => {
  const result = await dispatch({
      type: ACTION_TYPES.API_UPDATE_PACKAGE,
      payload: axios.post(API_PACKAGE, form)
  });
  return result;
};