/**
 * Created by ZhouYinian on 2017/9/21.
 */
import React from 'react'

import {Carousel} from 'antd';
export const Banner = ()=>(
    <div className="carousel">
        <Carousel effect="fade" autoplay easing="ease-in-out" autoplaySpeed="3500" speed="500">
            <div className="banner_item"
                 style={{backgroundImage: `url(../../../assets/images/banner_house.jpg)`}}></div>
            <div className="banner_item"
                 style={{backgroundImage: `url(../../../assets/images/banner_mogu.jpg)`}}></div>
            <div className="banner_item"
                 style={{backgroundImage: `url(../../../assets/images/banner_wall.jpg)`}}></div>
        </Carousel>
    </div>
)
