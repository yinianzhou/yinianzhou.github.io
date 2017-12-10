/**
 * Created by ZhouYinian on 2017/9/6.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Redirect, Switch } from 'react-router-dom';// 引入router ,同步history 和 store

import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();

import createStore from './stores/createStore.js';
const initialState = window.___INITIAL_STATE__ || {};
const store = createStore(initialState);

import routers from './pages/index'
const ROOT_NODE = document.getElementById('root');

import './assets/base.less';

// 封装 render
const render = (routes) => {
    ReactDOM.render((
        <Provider store={store}>
            <Router onUpdate={() => window.scrollTo(0, 0)} history={history} children={routers}/>
        </Provider>
    ), ROOT_NODE);
};

render(routers);
