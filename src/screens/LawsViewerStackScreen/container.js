import { connect } from 'react-redux';
import component from './component'
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
    base: state.base,
    appReducer: state.appReducer
})


export default connect(mapStateToProps)(component);