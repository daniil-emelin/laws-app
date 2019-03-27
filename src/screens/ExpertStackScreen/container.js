import { connect } from 'react-redux';
import component from './component'
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
    experts: state.experts,
    appReducer: state.appReducer
})


export default connect(mapStateToProps)(component);