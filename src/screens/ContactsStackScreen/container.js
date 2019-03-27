import { connect } from 'react-redux';
import component from './component'
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
    contacts: state.contacts,
    appReducer: state.appReducer
})

export default connect(mapStateToProps)(component);