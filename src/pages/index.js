/**
 * Created by ZhouYinian on 2017/9/6.
 */
import React from 'react'
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'

const NotFound = () => (
    <div>not fount

    </div>
)


import Home from './Home/index';
import About from './About/index'
import Header from '../components/Header/index'
let routes = (
    <div>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Redirect to="/" />
        </Switch>
    </div>

)
export default routes;