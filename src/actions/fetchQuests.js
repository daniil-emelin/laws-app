import axios from 'axios';

export function fetchQuests(id){
    return function(dispatch){
        dispatch({type:'CHANGHE_SURV'});
        return axios.get(`http://api.mosobrnadzor.ru/web/api/survey/${id}`)
            .then((response) => {
                dispatch({type:'CHANGE_SURV_ANCETS_SUCCESS', payload: response.data});
            })
            .catch((err) => {
                dispatch({type:'CHANGE_SURV_ANCETS_ERROR', payload: err})
            })
    } 
}