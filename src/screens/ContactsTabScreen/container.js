import { connect } from 'react-redux';
import component from './component'

const mapStateToProps = (state) => ({
    contacts: state.contacts
})

export default connect(mapStateToProps)(component);