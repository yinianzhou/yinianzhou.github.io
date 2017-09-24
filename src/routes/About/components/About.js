/**
 * Created by ZhouYinian on 2017/9/21.
 */
import React from 'react'

import Header from '../../../components/Header/index';
import { Carousel } from 'antd';
import '../assets/About.less'
export default class About extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Header/>
                <div className="carousel">
                    <Carousel effect="fade" autoplay easing="ease-in-out" autoplaySpeed="5000" speed="500">
                        <div className="banner_item" style={{backgroundImage:`url(../../../assets/images/banner_house.jpg)`}}><h3>1</h3></div>
                        <div className="banner_item" style={{backgroundImage:`url(../../../assets/images/banner_mogu.jpg)`}}><h3>2</h3></div>
                        <div className="banner_item" style={{backgroundImage:`url(../../../assets/images/banner_wall.jpg)`}}><h3>3</h3></div>
                    </Carousel>
                </div>
                <div>
                    about
                </div>

            </div>
        )
    }
}