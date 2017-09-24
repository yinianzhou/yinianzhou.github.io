/**
 * Created by ZhouYinian on 2017/9/22.
 */
import React from 'react';
import '../assets/Footer.less';
import {Row,Col} from 'antd';
export const Footer = ()=>(
    <footer className="footer">
        <Row className="baseContainer">
            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <img src="../../../../assets/images/logo.png" alt="zyn"/>
                <p>Crazyn Dandelion</p>
            </Col>
            <Col xs={12} sm={6} md={8} lg={8} xl={8}>
                <ul>
                    <li>推荐阅读</li>
                    <li>XXXXXXXXXXXXX</li>
                    <li>XXXXXXXXXXXXX</li>
                    <li>XXXXXXXXXXXXX</li>
                    <li>XXXXXXXXXXXXX</li>
                    <li>XXXXXXXXXXXXX</li>

                </ul>
            </Col>
            <Col xs={12} sm={6} md={8} lg={8} xl={8}>
                <ul>
                    <li>友情链接</li>
                    <li>XXXXXXXXXXXXX</li>
                    <li>XXXXXXXXXXXXX</li>
                    <li>XXXXXXXXXXXXX</li>
                    <li>XXXXXXXXXXXXX</li>
                    <li>XXXXXXXXXXXXX</li>
                </ul>
            </Col>
        </Row>
    </footer>
);