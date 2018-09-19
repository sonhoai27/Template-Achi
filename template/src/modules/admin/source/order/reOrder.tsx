import axios from 'axios'
import { API } from '../../../../config/const';
import { SUCCESS, FAILURE, REQUEST } from '../../../../utils/action-type-util';
export const ACTION_TYPES = {
    API_ORDER: 'ReOrder/API_ORDER',
    API_LIST_SCHE_ORDER: 'ReOrder/API_LIST_SCHE_ORDER',
    IS_SHOWING_MODAL_EXPORT: 'ReOrder/IS_SHOWING_MODAL_EXPORT',
    API_LIST_ORDER_BY_SCHE: 'ReOrder/API_LIST_ORDER_BY_SCHE',
    API_ADD_ORDER: 'ReOrder/API_ADD_ORDER',
}

const initialState = {
    resListOrder: {},
    resListScheOrder: [],
    isShowingModalExport: false,
    resListOrderBySche: {},
    resAddOrder: {}
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

        // list sche order
        case REQUEST(ACTION_TYPES.API_LIST_SCHE_ORDER): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_SCHE_ORDER): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_SCHE_ORDER): {
            return {
                ...state,
                resListScheOrder: action.payload.data
            }
        }

        case (ACTION_TYPES.IS_SHOWING_MODAL_EXPORT): {
            return {
                ...state,
                isShowingModalExport: action.payload
            }
        }
        // list  order sche
        case REQUEST(ACTION_TYPES.API_LIST_ORDER_BY_SCHE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_ORDER_BY_SCHE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_ORDER_BY_SCHE): {
            return {
                ...state,
                resListOrderBySche: action.payload.data
            }
        }

        // add order
        case REQUEST(ACTION_TYPES.API_ADD_ORDER): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_ADD_ORDER): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_ADD_ORDER): {
            return {
                ...state,
                resAddOrder: action.payload.data
            }
        }
        default:
            return state;
    }
}

const API_ORDER = API + 'source/order'
const API_LIST_SCHE_ORDER = API+'source/sche/all'
const API_LIST_ORDER_BY_SCHE = API+'source/order/sche/'

export const reListOrder = (page) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ORDER,
        payload: axios.get(API_ORDER+'/all/'+page)
    });
    return result;
};
export const reListScheOrder = () => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_SCHE_ORDER,
        payload: axios.get(API_LIST_SCHE_ORDER)
    });
    return result;
};
export const reIsShowingModalExport = (status) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.IS_SHOWING_MODAL_EXPORT,
        payload: status
    });
    return result;
};
export const reListOrderBySche = (idSche) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_ORDER_BY_SCHE,
        payload: axios.get(API_LIST_ORDER_BY_SCHE+idSche)
    });
    return result;
};
export const reAddOrder = (form) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ADD_ORDER,
        payload: axios.post(API_ORDER, form)
    });
    return result;
};