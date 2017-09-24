/**
 * Created by ZhouYinian on 2017/9/21.
 */
import React from 'react'

import {Carousel} from 'antd';
import banner1 from '../../../assets/images/banner_house.jpg';
import banner2 from '../../../assets/images/banner_mogu.jpg';
import banner3 from '../../../assets/images/banner_wall.jpg';
export const Banner = ()=>(
    <div className="carousel">
        <Carousel effect="fade" autoplay easing="ease-in-out" autoplaySpeed="3500" speed="500">
            <div className="banner_item"
                 style={{backgroundImage: `url(${banner1})`}}></div>
            <div className="banner_item"
                 style={{backgroundImage: `url(${banner2})`}}></div>
            <div className="banner_item"
                 style={{backgroundImage: `url(${banner3})`}}></div>
        </Carousel>
    </div>
)
