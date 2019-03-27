import { connect } from 'react-redux';
import component from './component'

const mapStateToProps = (state) => ({
    experts: state.experts
})

export default connect(mapStateToProps)(component);