import { connect } from 'react-redux';
import component from './component';
import { bindActionCreators } from 'redux';
import surveys from '../../reducers/surveys';
import { fetchQuests } from '../../actions/fetchQuests';
import { postAnswers } from '../../actions/postAnswers';
import { nextQuestion } from '../../actions/nextQuestion';
import { clearUserAnswers } from '../../actions/clearUserAnswers';
import { addUserAnswer } from '../../actions/addUserAnswer';
import { passQuestionAction } from '../../actions/passQuestionAction';
import { refreshIndicator } from '../../actions/refreshIndicator';
import { againButtonPressed } from '../../actions/againButtonPressed';


const mapStateToProps = (state) => ({
    indexQ: state.surveys.indexQ,
    positionQ: state.surveys.positionQ,
    survey_id: state.surveys.survey_id,
    anketa: state.surveys.anketa,
    answers: state.surveys.answers,
    actId: state.surveys.actId,
    isClear: state.surveys.isClear,
  });
  
  const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
      fetchQuests,
      postAnswers,
      nextQuestion,
      clearUserAnswers,
      addUserAnswer,
      passQuestionAction,
      refreshIndicator,
      againButtonPressed
    },
    dispatch
  );
  
  export default connect(mapStateToProps, mapDispatchToProps)(component)