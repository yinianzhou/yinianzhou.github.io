/**
 * Created by ZhouYinian on 2017/9/22.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col,} from 'antd'

class CardShow extends React.Component {
    render() {
        return (
            <div className="baseContainer cardShow">
                <div className="card_title">
                    <p className="title_name">life / job</p>
                    <p className="title_desc">鱼和熊掌焉能兼得？</p>
                </div>
                <Row gutter={30}>
                    <Col xs={12} lg={6}>
                        <div className="card" style={{background:'#f2b535'}}>

                            <i className="light"/>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="card" style={{background:'#53824c'}}>
                            <i className="light"/>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="card" style={{background:'#7f8ea0'}}>
                            <i className="light"/>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="card" style={{background:'#815530'}}>
                            <i className="light"/>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default CardShow