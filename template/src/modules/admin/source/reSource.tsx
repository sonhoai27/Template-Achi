import axios  from 'axios'
import { REQUEST, FAILURE, SUCCESS } from "../../../utils/action-type-util";
import { API } from "../../../config/const";

export const ACTION_TYPES = {
    API_DETAIL_SOURCE: 'ReSource/API_DETAIL_SOURCE',
    API_ADD_SOURCE: 'ReSource/API_ADD_SOURCE',
    API_ADD_DATE_SCHE: 'ReSource/API_ADD_DATE_SCHE',
    API_ADD_SCHE: 'ReSource/API_ADD_SCHE',
    API_LIST_SOURCE: 'ReSource/API_LIST_SOURCE',
    API_LIST_SCHE: 'ReSource/API_LIST_SCHE',
    API_LIST_DATE_SCHE: 'ReSource/API_LIST_DATE_SCHE',
    API_UPDATE_SOURCE: 'ReSource/API_UPDATE_SOURCE',
    API_UPDATE_DATE_SCHE: 'ReSource/API_UPDATE_DATE_SCHE',
    API_UPDATE_SCHE: 'ReSource/API_UPDATE_SCHE',
    API_DETAIL_SCHE: 'ReSource/API_DETAIL_SCHE',
    API_LIST_CONTENT_UI_SOURCE: 'ReSource/API_LIST_CONTENT_UI_SOURCE',
    API_SHOW_EDIT_CONTENT: 'ReSource/API_SHOW_EDIT_CONTENT',
    SET_CONTENT_ELEMENT: 'ReSource/SET_CONTENT_ELEMENT',
    API_LIST_SOURCE_BY_0: 'ReSource/API_LIST_SOURCE_BY_0',
    API_LIST_SOURCE_BY_1: 'ReSource/API_LIST_SOURCE_BY_1',
    API_ADD_CONTACT: 'ReSource/API_ADD_CONTACT',
    API_FILTER_CONTACT: 'ReSource/API_ADD_CONTACT',
    API_LIST_CONTACT_PAGING: 'ReSource/API_LIST_CONTACT_PAGING',

    API_DELETE_DATE_SCHE: 'ReSource/API_DELETE_DATE_SCHE',
    API_DELETE_SCHE: 'ReSource/API_DELETE_SCHE',
}
const initialState = {
    resDetailSource: [],
    resAddSource: [],
    resAddDateSche: '',
    resAddSche: '',
    reslistSource: {},
    resListSche: [],
    resListDateSche: [],
    resUpdateSource: {},
    resUpdateDateSche: {},
    resUpdateSche: {},
    resDetailSche: {},
    resListContentUISource: [],
    resShowEditContent: false,
    resContentElement: "",
    resListSourceBy0: [],
    resListSourceBy1: [],
    resAddContact: {},
    resFilterContact: [],
    resListContactPaging: [],

    resDeleteDateSche: {},
    resDeleteSche: {}
}
export default (state = initialState, action) => {
    switch (action.type) {
        // detail source
        case REQUEST(ACTION_TYPES.API_DETAIL_SOURCE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_DETAIL_SOURCE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_DETAIL_SOURCE): {
            return {
                ...state,
                resDetailSource: action.payload.data.list
            }
        }
        // add source
        case REQUEST(ACTION_TYPES.API_ADD_SOURCE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_ADD_SOURCE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_ADD_SOURCE): {
            return {
                ...state,
                resAddSource: action.payload.data
            }
        }
        // add sche
        case REQUEST(ACTION_TYPES.API_ADD_SCHE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_ADD_SCHE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_ADD_SCHE): {
            return {
                ...state,
                resAddSche: action.payload.data.list
            }
        }
        // add type sche
        case REQUEST(ACTION_TYPES.API_ADD_DATE_SCHE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_ADD_DATE_SCHE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_ADD_DATE_SCHE): {
            return {
                ...state,
                resAddDateSche: action.payload.data
            }
        }
        // list source
        case REQUEST(ACTION_TYPES.API_LIST_SOURCE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_SOURCE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_SOURCE): {
            return {
                ...state,
                reslistSource: action.payload.data
            }
        }
        // update source
        case REQUEST(ACTION_TYPES.API_UPDATE_SOURCE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_UPDATE_SOURCE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_UPDATE_SOURCE): {
            return {
                ...state,
                resUpdateSource: action.payload.data
            }
        }
        // update typesche
        case REQUEST(ACTION_TYPES.API_UPDATE_DATE_SCHE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_UPDATE_DATE_SCHE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_UPDATE_DATE_SCHE): {
            return {
                ...state,
                resUpdateDateSche: action.payload.data
            }
        }
        // update sche
        case REQUEST(ACTION_TYPES.API_UPDATE_SCHE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_UPDATE_SCHE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_UPDATE_SCHE): {
            return {
                ...state,
                resUpdateSche: action.payload.data
            }
        }
        // list sche
        case REQUEST(ACTION_TYPES.API_LIST_SCHE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_SCHE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_SCHE): {
            return {
                ...state,
                resListSche: action.payload.data
            }
        }
        // detail sche
        case REQUEST(ACTION_TYPES.API_DETAIL_SCHE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_DETAIL_SCHE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_DETAIL_SCHE): {
            return {
                ...state,
                resDetailSche: action.payload.data
            }
        }
        // list date sche
        case REQUEST(ACTION_TYPES.API_LIST_DATE_SCHE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_DATE_SCHE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_DATE_SCHE): {
            return {
                ...state,
                resListDateSche: action.payload.data
            }
        }

        //list content ui source
        case REQUEST(ACTION_TYPES.API_LIST_CONTENT_UI_SOURCE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_CONTENT_UI_SOURCE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_CONTENT_UI_SOURCE): {
            return {
                ...state,
                resListContentUISource: action.payload.data
            }
        }
        //list source by type
        case REQUEST(ACTION_TYPES.API_LIST_SOURCE_BY_0): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_SOURCE_BY_0): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_SOURCE_BY_0): {
            return {
                ...state,
                resListSourceBy0: action.payload.data
            }
        }
        //list source by type
        case REQUEST(ACTION_TYPES.API_LIST_SOURCE_BY_1): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_SOURCE_BY_1): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_SOURCE_BY_1): {
            return {
                ...state,
                resListSourceBy1: action.payload.data
            }
        }
        //add contact
        case REQUEST(ACTION_TYPES.API_ADD_CONTACT): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_ADD_CONTACT): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_ADD_CONTACT): {
            return {
                ...state,
                resAddContact: action.payload.data
            }
        }
         //filter contact
         case REQUEST(ACTION_TYPES.API_FILTER_CONTACT): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_FILTER_CONTACT): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_FILTER_CONTACT): {
            return {
                ...state,
                resFilterContact: action.payload.data
            }
        }
         //list contact
         case REQUEST(ACTION_TYPES.API_LIST_CONTACT_PAGING): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_LIST_CONTACT_PAGING): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_LIST_CONTACT_PAGING): {
            return {
                ...state,
                resListContactPaging: action.payload.data
            }
        }
         //delete sche
         case REQUEST(ACTION_TYPES.API_DELETE_SCHE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_DELETE_SCHE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_DELETE_SCHE): {
            return {
                ...state,
                resDeleteSche: action.payload.data
            }
        }
        //delete date sche
        case REQUEST(ACTION_TYPES.API_DELETE_DATE_SCHE): {
            return {
                ...state
            }
        }
        case FAILURE(ACTION_TYPES.API_DELETE_DATE_SCHE): {
            return {
                ...state
            }
        }
        case SUCCESS(ACTION_TYPES.API_DELETE_DATE_SCHE): {
            return {
                ...state,
                resDeleteDateSche: action.payload.data
            }
        }
        case ACTION_TYPES.API_SHOW_EDIT_CONTENT: {
            return {
                ...state,
                resShowEditContent: action.payload
            }
        }
        case ACTION_TYPES.SET_CONTENT_ELEMENT: {
            return {
                ...state,
                resContentElement: action.payload
            }
        }
        default:
            return state;
    }
}
const API_SOURCE = API+'source/'
const API_UI = API+'ui/'
const API_CONTACT = API + "contact";
export const reDetailSource = (id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_DETAIL_SOURCE,
        payload: axios.get(API_SOURCE+'detail-source/'+id)
    });
    return result;
};
export const reAddSource = (form) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ADD_SOURCE,
        payload: axios.post(API_SOURCE+'add-source', form)
    });
    return result;
};
export const reAddSche = (form) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ADD_SCHE,
        payload: axios.post(API_SOURCE+'add-sche', form)
    });
    return result;
};
export const reAddDateSche = (form) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ADD_DATE_SCHE,
        payload: axios.post(API_SOURCE+'add-date-sche', form)
    });
    return result;
};
export const reListSource = (page) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_SOURCE,
        payload: axios.get(API_SOURCE+'all-source'+"/"+page)
    });
    return result;
};
export const reListSourceByType = (type) => async dispatch => {
    if(type=== 0){
        const result = await dispatch({
            type: ACTION_TYPES.API_LIST_SOURCE_BY_0,
            payload: axios.get(API_SOURCE+'filter-source'+"/"+type)
        });
        return result;
    }else {
        const result = await dispatch({
            type: ACTION_TYPES.API_LIST_SOURCE_BY_1,
            payload: axios.get(API_SOURCE+'filter-source'+"/"+type)
        });
        return result;
    }
};
export const reUpdateSource = (form, id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_UPDATE_SOURCE,
        payload: axios.put(API_SOURCE+'update-source'+"/"+id, form)
    });
    return result;
};
export const reUpdateDateSche = (form, id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_UPDATE_DATE_SCHE,
        payload: axios.put(API_SOURCE+'update-date-sche'+"/"+id, form)
    });
    return result;
};
export const reUpdateSche = (form, id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_UPDATE_SCHE,
        payload: axios.put(API_SOURCE+'update-sche'+"/"+id, form)
    });
    return result;
};
export const reListSche = (id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_SCHE,
        payload: axios.get(API_SOURCE+'all-sche/'+id)
    });
    return result;
};
export const reDetailSche = (id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_DETAIL_SCHE,
        payload: axios.get(API_SOURCE+'detail-sche/'+id)
    });
    return result;
};
export const reListDateSche = (id) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_DATE_SCHE,
        payload: axios.get(API_SOURCE+'all-date-sche/'+id)
    });
    return result;
};
export const reListContentUISource = (idUI, idSource) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_CONTENT_UI_SOURCE,
        payload: axios.get(API_UI+'detail-ui-source/'+idUI+'/'+idSource)
    });
    return result;
};

export const reShowEditContent = (status) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_SHOW_EDIT_CONTENT,
        payload: status
    });
    return result;
};

export const reSetContentElement = (content) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.SET_CONTENT_ELEMENT,
        payload: content
    });
    return result;
};
export const reAddContact = (form: any) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_ADD_CONTACT,
        payload: axios.post(API_CONTACT, form)
    });
    return result;
};
export const reListContactPaging = (page: number) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_LIST_CONTACT_PAGING,
        payload: axios.get(API_CONTACT+'/all/'+page)
    });
    return result;
};

export const reDeleteSche = (idSche: number) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_DELETE_SCHE,
        payload: axios.delete(API_SOURCE+'delete-sche/'+idSche)
    });
    return result;
};
export const reDeleteDateSche = (idDateSche: number) => async dispatch => {
    const result = await dispatch({
        type: ACTION_TYPES.API_DELETE_DATE_SCHE,
        payload: axios.delete(API_SOURCE+'delete-date-sche/'+idDateSche)
    });
    return result;
};