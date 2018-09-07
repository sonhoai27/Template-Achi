import { combineReducers } from 'redux';
import reUI from '../modules/admin/ui/reUI';
import reInit from './init'
import reSource from '../modules/admin/source/reSource';
import reBlog from '../modules/admin/blog/reBlog';
import reOrder from '../modules/admin/source/order/reOrder';
export default combineReducers({
    reUI,
    reInit,
    reSource,
    reBlog,
    reOrder
})