import { combineReducers } from 'redux';
import reUI from '../modules/admin/ui/reUI';
import reInit from './init';
import reSource from '../modules/admin/source/reSource';
import reBlog from '../modules/admin/blog/reBlog';
import reOrder from '../modules/admin/source/order/reOrder';
import reVideos from '../modules/admin/videos/reVideos';
import reGift from '../modules/admin/gift/reGift';
import reOrderEbook from '../modules/client/ebook/reEbook';
import reOrderEbookAdmin from '../modules/admin/order-ebook/reOrderEbook';
import rePage from '../modules/admin/page/rePage';
import reVideoSource from "../modules/admin/video-source/reVideoSource";
import reSendGift from "../modules/admin/gift/send-gift/reSendGift";
export default combineReducers({
    reUI: reUI,
    reInit: reInit,
    reSource: reSource,
    reBlog: reBlog,
    reOrder: reOrder,
    reVideos: reVideos,
    reGift: reGift,
    reOrderEbook: reOrderEbook,
    reOrderEbookAdmin: reOrderEbookAdmin,
    rePage: rePage,
    reVideoSource: reVideoSource,
    reSendGift: reSendGift
});
//# sourceMappingURL=index.js.map