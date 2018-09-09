import { combineReducers } from 'redux';
import reUI from '../modules/admin/ui/reUI';
import reInit from './init'
import reSource from '../modules/admin/source/reSource';
import reBlog from '../modules/admin/blog/reBlog';
import reOrder from '../modules/admin/source/order/reOrder';
import reVideos from '../modules/admin/videos/reVideos';
import reGift from '../modules/admin/gift/reGift';
export default combineReducers({
    reUI,
    reInit,
    reSource,
    reBlog,
    reOrder,
    reVideos,
    reGift
})