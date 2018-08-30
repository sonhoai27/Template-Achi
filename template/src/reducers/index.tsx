import { combineReducers } from 'redux';
import reUI from '../modules/admin/ui/reUI';
import reInit from './init'
import reSource from '../modules/admin/source/reSource';
export default combineReducers({
    reUI,
    reInit,
    reSource
})