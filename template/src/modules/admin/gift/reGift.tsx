import axios from "axios";
import { REQUEST, FAILURE, SUCCESS } from "../../../utils/action-type-util";
import { API } from "../../../config/const";
export const ACTION_TYPES = {
  API_LIST_GIFT: "ReGift/API_LIST_GIFT",
  API_ADD_GIFT: "ReGift/API_ADD_GIFT",
  API_UPDATE_GIFT: "ReGift/API_UPDATE_GIFT",
  API_DELETE_GIFT: "ReGift/API_DELETE_GIFT",
  API_DETAIL_GIFT: "ReGift/API_DETAIL_GIFT",
  API_LIST_CONTACT: "ReGift/API_LIST_CONTACT",
  API_SEND_GIFT: "ReGift/API_SEND_GIFT",
  API_SEND_GIFT_BY_USER: 'ReGift/API_SEND_GIFT_BY_USER',
  API_CUSTOMER_LIST: 'ReGift/API_CUSTOMER_LIST',
  API_DELETE_CUSTOMER: 'ReGift/API_DELETE_CUSTOMER'
};

const initialState = {
  resListGift: [],
  resAddGift: {},
  resUpdateGift: {},
  resDeleteGift: {},
  resDetailGift: {},
  resListContact: [],
  resSendGift: {},
  resSendGiftByUser: {},
  resCustomerList: [],
  resDeleteCustomer: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.API_LIST_GIFT): {
      return {
        ...state
      };
    }
    case FAILURE(ACTION_TYPES.API_LIST_GIFT): {
      return {
        ...state
      };
    }
    case SUCCESS(ACTION_TYPES.API_LIST_GIFT): {
      return {
        ...state,
        resListGift: action.payload.data
      };
    }

    // add Gift
    case REQUEST(ACTION_TYPES.API_ADD_GIFT): {
      return {
        ...state
      };
    }
    case FAILURE(ACTION_TYPES.API_ADD_GIFT): {
      return {
        ...state
      };
    }
    case SUCCESS(ACTION_TYPES.API_ADD_GIFT): {
      return {
        ...state,
        resAddGift: action.payload.data
      };
    }

    // update
    case REQUEST(ACTION_TYPES.API_UPDATE_GIFT): {
      return {
        ...state
      };
    }
    case FAILURE(ACTION_TYPES.API_UPDATE_GIFT): {
      return {
        ...state
      };
    }
    case SUCCESS(ACTION_TYPES.API_UPDATE_GIFT): {
      return {
        ...state,
        resUpdateGift: action.payload.data
      };
    }
    // delete
    case REQUEST(ACTION_TYPES.API_DELETE_GIFT): {
      return {
        ...state
      };
    }
    case FAILURE(ACTION_TYPES.API_DELETE_GIFT): {
      return {
        ...state
      };
    }
    case SUCCESS(ACTION_TYPES.API_DELETE_GIFT): {
      return {
        ...state,
        resDeleteGift: action.payload.data
      };
    }
    // detail
    case REQUEST(ACTION_TYPES.API_DETAIL_GIFT): {
      return {
        ...state
      };
    }
    case FAILURE(ACTION_TYPES.API_DETAIL_GIFT): {
      return {
        ...state
      };
    }
    case SUCCESS(ACTION_TYPES.API_DETAIL_GIFT): {
      return {
        ...state,
        resDetailGift: action.payload.data
      };
    }

    // list contact
    case REQUEST(ACTION_TYPES.API_LIST_CONTACT): {
        return {
          ...state
        };
      }
      case FAILURE(ACTION_TYPES.API_LIST_CONTACT): {
        return {
          ...state
        };
      }
      case SUCCESS(ACTION_TYPES.API_LIST_CONTACT): {
        return {
          ...state,
          resListContact: action.payload.data
        };
      }
    // send gift
    case REQUEST(ACTION_TYPES.API_SEND_GIFT): {
        return {
          ...state
        };
      }
      case FAILURE(ACTION_TYPES.API_SEND_GIFT): {
        return {
          ...state
        };
      }
      case SUCCESS(ACTION_TYPES.API_SEND_GIFT): {
        return {
          ...state,
          resSendGift: action.payload.data
        };
      }

      // customer list
    case REQUEST(ACTION_TYPES.API_CUSTOMER_LIST):
    case FAILURE(ACTION_TYPES.API_CUSTOMER_LIST): {
      return {
        ...state
      };
    }
    case SUCCESS(ACTION_TYPES.API_CUSTOMER_LIST): {
      return {
        ...state,
        resCustomerList: action.payload.data
      };
    }

      // delete customer
      case REQUEST(ACTION_TYPES.API_DELETE_CUSTOMER):
      case FAILURE(ACTION_TYPES.API_DELETE_CUSTOMER): {
        return {
          ...state
        };
      }
      case SUCCESS(ACTION_TYPES.API_DELETE_CUSTOMER): {
        return {
          ...state,
          resDeleteCustomer: action.payload.data
        };
      }
    default:
      return state;
  }
};

const API_GIFT = API + "gift";
const API_SEND_GIFT = API + "send-gift";
const API_CONTACT = API + "contact";
const GOI_QUA = API+'goi-qua-tang'
export const reListGift = page => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.API_LIST_GIFT,
    payload: axios.get(API_GIFT + "/all/" + page)
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
    payload: axios.put(API_GIFT + "/" + idGift, form)
  });
  return result;
};
export const reDeleteGift = (idGift: number) => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.API_DELETE_GIFT,
    payload: axios.delete(API_GIFT + "/" + idGift)
  });
  return result;
};
export const reDetailGift = (idGift: number) => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.API_DETAIL_GIFT,
    payload: axios.get(API_GIFT + "/" + idGift)
  });
  return result;
};
export const reSendGift = (form: {
  listEmails: any;
  content: string;
  name: string;
}) => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.API_SEND_GIFT,
    payload: axios.post(API_SEND_GIFT, form)
  });
  return result;
};
export const reListContact = () => async dispatch => {
    const result = await dispatch({
      type: ACTION_TYPES.API_LIST_CONTACT,
      payload: axios.get(API_CONTACT+'/without-page')
    });
    return result;
};

export const reCustomerList = (page: number) => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.API_CUSTOMER_LIST,
    payload: axios.get(GOI_QUA+'/customers/'+page)
  });
  return result;
};
export const reDeleteCustomer = (id: number) => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.API_DELETE_CUSTOMER,
    payload: axios.delete(GOI_QUA+'/customers/'+id)
  });
  return result;
};
  
