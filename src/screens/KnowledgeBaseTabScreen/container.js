import { connect } from 'react-redux';
import component from './component'

const mapStateToProps = (state) => ({
    base: state.base,
    appReducer: state.appReducer
})

export default connect(mapStateToProps)(component);