import axios from 'axios';

export function postAnswers(id,answers){
    return function(dispatch){
        dispatch({ type:'POST_ANSWERS' });
        return axios.post(`http://api.mosobrnadzor.ru/web/api/survey/${id}`, {
            surveyId: id,
            answers:answers
        })
        .then(function (response) {
            dispatch({type:'POST_ANSWERS_SUCCESS', payload: response.data });
        })
        .catch(function (error) {
            dispatch({type:'POST_ANSWERS_ERROR', payload: error});
        });
    } 
}