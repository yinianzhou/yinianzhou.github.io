/**
 * Created by ZhouYinian on 2017/9/6.
 */
import {combineReducers} from 'redux';
import{cssText} from '../pages/Home/modules/reducer'
const makeRootReducer = combineReducers({
    cssText
});
export default makeRootReducer;