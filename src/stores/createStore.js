/**
 * Created by ZhouYinian on 2017/9/6.
 */
import {createStore, applyMiddleware, compose,} from 'redux';

import thunk from 'redux-thunk';
import makeRootReducer from '../reducers/index.js'


export default (initialState = {}) => {
    const middleware = [thunk];

    const store = createStore(
        makeRootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
        )
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}