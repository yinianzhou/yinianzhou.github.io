/**
 * Created by ZhouYinian on 2017/9/22.
 */

import {connect} from 'react-redux';
import Home from '../components/Home';

import {
    showText,

} from '../modules/reducer'
const mapActionCreators = {

    showText,

};

function mapStateToProps(state) {
    return {
        CssText: state.cssText.CssText,

    }
}

export default connect(mapStateToProps, mapActionCreators)(Home);