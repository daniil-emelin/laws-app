import { connect } from 'react-redux';
import component from './component';
import { bindActionCreators } from 'redux';
import { fetchQuests } from '../../actions/fetchQuests';
import {addTitle} from '../../actions/addTitle';
import {removeLastTitle} from '../../actions/removeLastTitle';
import surveys from '../../reducers/surveys';

const mapStateToProps = (state) => ({
    fetched: state.surveys.fetched,
    error: state.surveys.error,
    lists: state.checkLists.lists,
    appReducer: state.appReducer
  });
  
  const mapDispatchToProps = (dispatch) => bindActionCreators(
    {fetchQuests, addTitle, removeLastTitle},
    dispatch
  );
  
  export default connect(mapStateToProps, mapDispatchToProps)(component)