import { REQUEST, FAILURE, SUCCESS } from "../../../utils/action-type-util";
import axios from 'axios'
import { API } from "../../../config/const";
export const ACTION_TYPES = {
  API_LIST_PAGE_UI: "RePage/API_LIST_PAGE_UI",
  API_SAVE_CONTENT: "RePage/API_SAVE_CONTENT"
};

const initialState = {
  resListPageUI: [],
  resSaveContent: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.API_LIST_PAGE_UI): {
      return {
        ...state
      };
    }
    case FAILURE(ACTION_TYPES.API_LIST_PAGE_UI): {
      return {
        ...state
      };
    }
    case SUCCESS(ACTION_TYPES.API_LIST_PAGE_UI): {
      return {
        ...state,
        resListPageUI: action.payload.data
      };
    }
    //save content
    case REQUEST(ACTION_TYPES.API_SAVE_CONTENT): {
      return {
        ...state
      };
    }
    case FAILURE(ACTION_TYPES.API_SAVE_CONTENT): {
      return {
        ...state
      };
    }
    case SUCCESS(ACTION_TYPES.API_SAVE_CONTENT): {
      return {
        ...state,
        resSaveContent: action.payload.data
      };
    }
    default:
            return state;
  }
};

const PAGEURL = API+'page'
export const reListPageUI = (idPage) => async dispatch => {
  const result = await dispatch({
      type: ACTION_TYPES.API_LIST_PAGE_UI,
      payload: axios.get(PAGEURL+'/detail/'+idPage)
  });
  return result;
};
export const reSaveContent = (form) => async dispatch => {
  const result = await dispatch({
      type: ACTION_TYPES.API_SAVE_CONTENT,
      payload: axios.post(PAGEURL+'/add-update-content-page', form)
  });
  return result;
};
