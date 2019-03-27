import { connect } from 'react-redux';
import component from './component'
import checkLists from '../../reducers/checkLists';
import { bindActionCreators } from 'redux';
import { fetchLists } from '../../actions/fetchLists';
import { changeSurvId } from '../../actions/changeSurvId';

const mapStateToProps = (state) => ({
    lists: state.checkLists.lists,  
    fetched: state.checkLists.fetched,
    fetching: state.checkLists.fetching,
    error: state.checkLists.error,
    disabled: state.checkLists.disabled  
  });
  
  const mapDispatchToProps = (dispatch) => bindActionCreators(
    { fetchLists, changeSurvId },
    dispatch
  );
  
  export default connect(mapStateToProps, mapDispatchToProps)(component);