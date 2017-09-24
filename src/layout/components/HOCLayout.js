/**
 * Created by ZhouYinian on 2017/9/21.
 */
import React from 'react'
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import '../assets/HOCLayout.less';

let getDisplayName = component=> {
    return component.displayName || component.name || 'Component'
};

/**
 * 接受参数，当前页
 * @param currentPage
 */
export default currentPage =>PackagedComponent=>
    class HOC extends React.Component {
        static displayName = `HOC(${getDisplayName(PackagedComponent)})`;

        render() {
            return (
                <div className="hocLayout">
                    <Header currentPage={currentPage}/>
                    <PackagedComponent {...this.props}/>
                    {
                        Footer()
                    }
                </div>
            )
        }
    }
