import axios from 'axios'
import { REQUEST, FAILURE, SUCCESS } from '../../../utils/action-type-util';
import { API } from '../../../config/const';
export const ACTION_TYPES = {
    API_ADD_BLOG: 'ReBlog/API_ADD_BLOG',
    API_LIST_BLOG: 'ReBlog/API_LIST_BLOG',
    API_LIST_AUHTOR: 'ReBlog/API_LIST_AUHTOR',
    API_LIST_CATEGORY: 'ReBlog/API_LIST_CATEGORY',
    API_DETAIL_BLOG: 'ReBlog/API_DETAIL_BLOG',
    API_UPDATE_BLOG: 'ReBlog/API_UPDATE_BLOG',
    API_DELETE_BLOG: 'ReBlog/API_DELETE_BLOG',

    API_ADD_AUTHOR: 'ReBlog/API_ADD_AUTHOR',
    API_ADD_CATEGORY: 'ReBlog/API_ADD_CATEGORY',
    API_DELETE_AUTHOR: 'ReBlog/API_DELETE_AUTHOR',
    API_DELETE_CATEGORY: 'ReBlog/API_DELETE_CATEGORY',
    API_UPDATE_AUTHOR: 'ReBlog/API_UPDATE_AUTHOR',
    API_UPDATE_CATEGORY: 'ReBlog/API_UPDATE_CATEGORY',
    API_STATUS: 'ReBlog/API_STATUS',
    
    API_CLIENT_LIST_BLOG: 'ReBlog/API_STATUS',
    API_CLIENT_LIST_BLOG_CATEGORY: 'ReBlog/API_CLIENT_LIST_BLOG_CATEGORY'
}

const initialState = {
    resAddBlog: {},
    resListBlog: {},
    resListCategory: {},
    resListAuthor: {},
    resDetailBlog: {},
    resUpdateBlog: {},
    resDeleteBlog: {},
    resAddAuthor: {},
    resAddCategory: {},
    resDeleteAuthor: {},
    resDeleteCategory: {},
    resUpdateAuthor: {},
    resUpdateCategory: {},
    resListStatus: [],

    resClientListBlog: [],
    resCLientListBlogCategory: {}
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
        // list blog 
        case REQUEST(ACTION_TYPES.API_LIST_BLOG): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_BLOG): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_BLOG): {
            return {
                ...state,
                resListBlog: action.payload.data
            }
        }
        // detail blog 
        case REQUEST(ACTION_TYPES.API_DETAIL_BLOG): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_DETAIL_BLOG): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_DETAIL_BLOG): {
            return {
                ...state,
                resDetailBlog: action.payload.data
            }
        }
         // update blog 
         case REQUEST(ACTION_TYPES.API_UPDATE_BLOG): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_UPDATE_BLOG): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_UPDATE_BLOG): {
            return {
                ...state,
                resUpdateBlog: action.payload.data
            }
        }

         // update category 
         case REQUEST(ACTION_TYPES.API_UPDATE_CATEGORY): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_UPDATE_CATEGORY): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_UPDATE_CATEGORY): {
            return {
                ...state,
                resUpdateCategory: action.payload.data
            }
        }
         // update auhtor 
         case REQUEST(ACTION_TYPES.API_UPDATE_AUTHOR): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_UPDATE_AUTHOR): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_UPDATE_AUTHOR): {
            return {
                ...state,
                resUpdateAuthor: action.payload.data
            }
        }
         // delete blog 
         case REQUEST(ACTION_TYPES.API_DELETE_BLOG): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_DELETE_BLOG): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_DELETE_BLOG): {
            return {
                ...state,
                resDeleteBlog: action.payload.data
            }
        }

         // add author
         case REQUEST(ACTION_TYPES.API_ADD_AUTHOR): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_ADD_AUTHOR): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_ADD_AUTHOR): {
            return {
                ...state,
                resAddAuthor: action.payload.data
            }
        }

         // add CAtegory 
         case REQUEST(ACTION_TYPES.API_ADD_CATEGORY): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_ADD_CATEGORY): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_ADD_CATEGORY): {
            return {
                ...state,
                resAddCategory: action.payload.data
            }
        }
         // delete author 
         case REQUEST(ACTION_TYPES.API_DELETE_AUTHOR): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_DELETE_AUTHOR): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_DELETE_AUTHOR): {
            return {
                ...state,
                resDeleteAuthor: action.payload.data
            }
        }
         // delete Ccategory 
         case REQUEST(ACTION_TYPES.API_DELETE_CATEGORY): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_DELETE_CATEGORY): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_DELETE_CATEGORY): {
            return {
                ...state,
                resDeleteCategory: action.payload.data
            }
        }
        // list status
        case REQUEST(ACTION_TYPES.API_STATUS): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_STATUS): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_STATUS): {
            return {
                ...state,
                resListStatus: action.payload.data
            }
        }


         // list client blog
         case REQUEST(ACTION_TYPES.API_CLIENT_LIST_BLOG): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_CLIENT_LIST_BLOG): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_CLIENT_LIST_BLOG): {
            return {
                ...state,
                resClientListBlog: action.payload.data
            }
        }

         // list client blog category
         case REQUEST(ACTION_TYPES.API_CLIENT_LIST_BLOG_CATEGORY): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_CLIENT_LIST_BLOG_CATEGORY): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_CLIENT_LIST_BLOG_CATEGORY): {
            return {
                ...state,
                resCLientListBlogCategory: action.payload.data
            }
        }
        default:
            return state;
    }
}

const API_BLOG = API + 'blog'
const API_CATEGORY = API + 'category'
const API_AUTHOR = API + 'author'
const API_STATUS = API + 'status'

export const reAddBlog = (form) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ADD_BLOG,
        payload: axios.post(API_BLOG, form)
    });
    return result;
};
export const reListBlog = (page) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_BLOG,
        payload: axios.get(API_BLOG+"/"+page)
    });
    return result;
};
export const reDetailBlog = (idBlog: string) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_DETAIL_BLOG,
        payload: axios.get(API_BLOG+"/detail/"+idBlog)
    });
    return result;
};
export const reUpdateBlog = (form: any, idBlog: string) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_UPDATE_BLOG,
        payload: axios.put(API_BLOG+"/"+idBlog, form)
    });
    return result;
};
export const reDeleteBlog = (idBlog: string) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_DELETE_BLOG,
        payload: axios.delete(API_BLOG+"/"+idBlog)
    });
    return result;
};

export const reClientListBlog = (page, category) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_CLIENT_LIST_BLOG,
        payload: axios.post(API_BLOG+"/all/"+page, category)
    });
    return result;
};
export const reClientListBlogCategory = (idCategory) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_CLIENT_LIST_BLOG_CATEGORY,
        payload: axios.get(API_BLOG+"/category/"+idCategory)
    });
    return result;
};
// author category
// all
export const reListCategory = () => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_CATEGORY,
        payload: axios.get(API_CATEGORY)
    });
    return result;
};
export const reListAuthor = () => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_AUHTOR,
        payload: axios.get(API_AUTHOR)
    });
    return result;
};
export const reListStatus = () => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_STATUS,
        payload: axios.get(API_STATUS)
    });
    return result;
};
// add
export const reAddAuthor = (form) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ADD_AUTHOR,
        payload: axios.post(API_AUTHOR, form)
    });
    return result;
};
export const reAddCategory = (form) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ADD_CATEGORY,
        payload: axios.post(API_CATEGORY, form)
    });
    return result;
};
// delete
export const reDeleteAuthor = (id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_DELETE_AUTHOR,
        payload: axios.delete(API_AUTHOR+"/"+id)
    });
    return result;
};
export const reDeleteCategory = (id: number) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_DELETE_CATEGORY,
        payload: axios.delete(API_CATEGORY+"/"+id)
    });
    return result;
};
// put
export const reUpdateAuthor = (form, id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_UPDATE_AUTHOR,
        payload: axios.put(API_AUTHOR+"/"+id, form)
    });
    return result;
};
export const reUpdateCategory = (form: any, id: number) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_UPDATE_CATEGORY,
        payload: axios.put(API_CATEGORY+"/"+id, form)
    });
    return result;
};