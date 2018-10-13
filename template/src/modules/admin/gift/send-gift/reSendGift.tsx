import {FAILURE, REQUEST, SUCCESS} from "../../../../utils/action-type-util";
import {API} from "../../../../config/const";
import axios from "axios";

export const ACTION_TYPES = {
  API_LIST_COUNTER: "reSendGift/API_LIST_COUNTER",
  API_SEND_GIFT: "reSendGift/API_SEND_GIFT",
  API_CLIENT_GET_GIFT: "reSendGift/API_CLIENT_GET_GIFT"
};

const initialState = {
  resListCounter: [],
  resAddSendGift: {},
  resClientGetGift: {}
};
export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.API_LIST_COUNTER):
        case FAILURE(ACTION_TYPES.API_LIST_COUNTER): {
            return {
                ...state
            };
        }
        case SUCCESS(ACTION_TYPES.API_LIST_COUNTER): {
            return {
                ...state,
                resListCounter: action.payload.data
            };
        }
        case REQUEST(ACTION_TYPES.API_CLIENT_GET_GIFT):
        case FAILURE(ACTION_TYPES.API_CLIENT_GET_GIFT): {
            return {
                ...state
            };
        }
        case SUCCESS(ACTION_TYPES.API_CLIENT_GET_GIFT): {
            return {
                ...state,
                resClientGetGift: action.payload.data
            };
        }

        case REQUEST(ACTION_TYPES.API_SEND_GIFT):
        case FAILURE(ACTION_TYPES.API_SEND_GIFT): {
            return {
                ...state
            };
        }
        case SUCCESS(ACTION_TYPES.API_SEND_GIFT): {
            return {
                ...state,
                resAddSendGift: action.payload.data
            };
        }
        default:
            return state;
    }
}

const API_GOI_QUA_TANG = API + "goi-qua-tang";
export const reListCounter = () => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_COUNTER,
        payload: axios.get(API_GOI_QUA_TANG + "/count")
    });
    return result;
};
export const reClientGetGift = (form, idGift) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_CLIENT_GET_GIFT,
        payload: axios.post(API_GOI_QUA_TANG + "/add/"+idGift, form)
    });
    return result;
};
export const reAddSendGift = (form, count) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_SEND_GIFT,
        payload: axios.post(API_GOI_QUA_TANG + "/tang/"+count,form)
    });
    return result;
};