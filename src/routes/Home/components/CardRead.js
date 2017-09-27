/**
 * Created by ZhouYinian on 2017/9/22.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Card} from 'antd'

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
                        <Card className="readCard" title="推荐阅读" extra={<a href="#">More</a>}>
                            <a href="http://www.cnblogs.com/aaronjs/p/3279314.html" target='_blank'>《Jquey 源码解读》</a>
                            <p>《zyn漂流记》</p>
                            <p>《zyn与狗》</p>
                        </Card>
                    </Col>
                    <Col xs={24} lg={12}>
                        <Card className="readCard" title="笔记分享" extra={<a href="#">More</a>}>
                            <a href="https://juejin.im/post/59c8c5fff265da064618a807" target='_blank'>《5分钟配置react的webpack》</a>
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