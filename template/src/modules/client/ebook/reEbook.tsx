import axios  from 'axios'
import { REQUEST, FAILURE, SUCCESS } from '../../../utils/action-type-util';
import { API } from '../../../config/const';

export const ACTION_TYPES = {
  API_ORDER_EBOOK: 'ReEbook/API_ORDER_EBOOK',
}
const initialState = {
    resOrderEbook: {},

}
export default (state = initialState, action) => {
    switch (action.type) {
        // add image
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
          console.log(action.payload)
            return {
                ...state,
                resOrderEbook: action.payload.data
            }
        }
        default:
            return state;
    }
}

const API_ORDER_EBOOK = API+'order-ebook'
export const reOrderEbook = (form: any) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ORDER_EBOOK,
        payload: axios.post(API_ORDER_EBOOK, form)
    });
    return result;
};