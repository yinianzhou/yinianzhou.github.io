/**
 * Created by ZhouYinian on 2017/9/21.
 */
import React from 'react'
import HOCComponent from '../../../layout/index';
import {Banner} from './Banner';
import CardShow from './CardShow';
import CardRead from './CardRead'
import '../assets/Home.less'
@HOCComponent('home')
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.showText('周奕年123hotfix111')

    }

    render() {
        console.log('csstext', this.props.CssText)
        return (
            <div>
                {Banner()}
                <div className="home_main">
                    <div className="baseContainer">
                        <CardShow/>
                        <CardRead/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home