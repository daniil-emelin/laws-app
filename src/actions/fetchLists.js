import axios from 'axios';

export function fetchLists(){
    return function(dispatch){
        dispatch({ type:'FETCH_LISTS' });
        return axios.get(`http://api.mosobrnadzor.ru/web/api/surveys`)
            .then((response) => {
                dispatch({type:'FETCH_LISTS_SUCCESS', payload: response.data});
            })
            .catch((err) => {
                dispatch({type:'FETCH_LISTS_ERROR', payload: err})
            })
    } 
}