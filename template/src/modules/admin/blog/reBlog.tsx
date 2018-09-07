import axios from 'axios'
import { REQUEST, FAILURE, SUCCESS } from '../../../utils/action-type-util';
import { API } from '../../../config/const';
export const ACTION_TYPES = {
    API_ADD_BLOG: 'ReBlog/API_ADD_BLOG',
    API_LIST_AUHTOR: 'ReBlog/API_LIST_AUHTOR',
    API_LIST_CATEGORY: 'ReBlog/API_LIST_CATEGORY',
}

const initialState = {
    resAddBlog: {},
    resListCategory: {},
    resListAuthor: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.API_ADD_BLOG): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_ADD_BLOG): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_ADD_BLOG): {
            return {
                ...state,
                resAddBlog: action.payload.data
            }
        }

        case REQUEST(ACTION_TYPES.API_LIST_AUHTOR): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_AUHTOR): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_AUHTOR): {
            return {
                ...state,
                resListAuthor: action.payload.data
            }
        }

        case REQUEST(ACTION_TYPES.API_LIST_CATEGORY): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_CATEGORY): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_CATEGORY): {
            return {
                ...state,
                resListCategory: action.payload.data
            }
        }
        default:
            return state;
    }
}

const API_BLOG = API + 'blog'

export const reAddBlog = (form) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ADD_BLOG,
        payload: axios.post(API_BLOG, form)
    });
    return result;
};