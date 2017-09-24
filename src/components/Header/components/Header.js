/**
 * Created by ZhouYinian on 2017/9/21.
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import '../assets/Header.less'
import {Button, Carousel, Icon} from 'antd'
import {_throttle} from '../../../tools/tools';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navData: [
                {id: 'home', name: '首页', link: '/'},
                {id: 'project', name: '项目', link: '/project'},
                {id: 'demo', name: 'Demo', link: '/demo'},
                {id: 'tools', name: '工具', link: '/tools'},
                {id: 'about', name: '关于', link: '/about'},
            ],
            collapseShow: false,
            scroll: false
        }

        this.showCollapse = this.showCollapse.bind(this);
        this.getScrollTop = this.getScrollTop.bind(this);
        this.windowOnScroll = this.windowOnScroll.bind(this);
        this.throttle = this.throttle.bind(this)

    }

    componentDidMount() {
        const _this = this;
        this.getScrollTop() > 0 &&
        this.setState({
            scroll: true
        });
        document.addEventListener('scroll',_this.windowOnScroll)
    }

    throttle(fn, delay, mustDelay) {
        let timer = null;
        let star_time;
        return function () {
            let context = this, args = arguments, curr_time = +new Date();
            clearTimeout(timer);
            if (!star_time) {
                star_time = curr_time
            }
            if (curr_time - star_time >= mustDelay) {
                fn.apply(context, args);
                star_time = curr_time
            } else {
                timer = setTimeout(function () {
                    fn.apply(context, args);
                }, delay);
            }
        }
    }

    getScrollTop() {
        let scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        }
        else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    }

    windowOnScroll() {
        this.setState({
            scroll: this.getScrollTop() !== 0
        })
    }


    showCollapse() {
        const {collapseShow} = this.state
        this.setState({
            collapseShow: !collapseShow
        })
    }

    componentWillUnmount() {
        const _this = this;
        document.removeEventListener('scroll', _this.windowOnScroll)
    }

    render() {
        const {currentPage} = this.props;
        const {navData, collapseShow, scroll} = this.state
        return (
            <header id="header" className={["header_container", scroll && 'scroll'].join(' ')}>
                <div className="baseContainer clearfix">
                    <h1 className="logo">
                        <Link to="/"><img
                            src={scroll ? require('../../../assets/images/logo2.png') : require('../../../assets/images/logo.png')}
                            alt="logo"/></Link>
                    </h1>
                    <nav className="main_nav clearfix">
                        <div className="nav_header clearfix">
                            <Button onClick={this.showCollapse}><Icon type="bars"/></Button>
                        </div>
                        <div className={["nav_collapse", "clearfix", collapseShow && "showCollapse"].join(' ')}>
                            <ul className="nav clearfix">
                                {
                                    navData.map(navItem=> {
                                        return (
                                            <li key={navItem.id} className="nav-item "><Link
                                                className={currentPage == navItem.id && 'active' }
                                                to={navItem.link}>{navItem.name}</Link></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }


}

export default Header;