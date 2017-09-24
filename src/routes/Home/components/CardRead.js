/**
 * Created by ZhouYinian on 2017/9/22.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col,Card } from 'antd'

class CardReac extends React.Component {
    render() {
        return (
            <div className="baseContainer cardShow">
                <div className="card_title">
                    <p className="title_name">read / note</p>
                    <p className="title_desc">没有十全十美的文章，就如同没有彻头彻尾的绝望。</p>
                </div>
                <Row gutter={30}>
                    <Col xs={24} lg={12}>
                        <Card className="readCard"  title="推荐阅读" extra={<a href="#">More</a>} >
                            <p>《zyn自传》</p>
                            <p>《zyn漂流记》</p>
                            <p>《zyn与狗》</p>
                        </Card>
                    </Col>
                    <Col xs={24} lg={12}>
                        <Card className="readCard" title="笔记分享" extra={<a href="#">More</a>} >
                            <p>敬请期待</p>
                            <p>敬请期待</p>
                            <p>敬请期待</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default CardReac