initialState = {
    survey_id: null,
    anketa:[],
    answers:[],
    indexQ: 0,
    positionQ: 0,
    fetching: false,
    fetched:false,
    error: null,
    posting: false,
    posted: false,
    actId: null,
    isClear: false,
}

export default function surveys(state = initialState, action){
    switch(action.type){
        case 'CHANGE_SURV':
            return {
                ...state,
                survey_id: action.payload,
                fetching: true,               
            }
        case 'CHANGE_SURV_ID':
            return {
                ...state,
                survey_id: action.payload,       
            }
        case 'CHANGE_SURV_ANCETS_SUCCESS':
            return{
                ...state,
                fetching: false,
                fetched: true,
                anketa: action.payload
        }
        case 'CHANGE_SURV_ANCETS_ERROR':
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        case 'ADD_USER_ANSWER':
            return {
                ...state,
                answers: state.answers.concat(action.payload),
            }
        case 'CLEAR_USER_ANSWERS':
            return {
                ...state,
                answers:[],
                indexQ: 0,
                positionQ: 0,
            }
        case 'NEXT_QUESTION':
            return {
                ...state,
                indexQ: state.indexQ + 1,
                positionQ: state.positionQ + 1
            }
        case 'REFRESH_INDICATOR':
            return {
                ...state,
                positionQ: action.positionQ
            }
        case 'PASS_QUESTION':
            return{
                ...state,
                answers: state.answers.concat(action.payload)
            }
        case 'POST_ANSWERS':
            return{
                ...state,
                fetching: true
            }
        case 'POST_ANSWERS_SUCCESS':
            return{
                ...state,
                posting: false,
                posted: true,
                actId: action.payload
        }
        case 'POST_ANSWERS_ERROR':
            return {
                ...state,
                posting: false,
                error: action.payload
            }
        case 'AGAIN_BUTTON_PRESSED':
            return {
                ...state,
                isClear: action.payload
            }
        default:
            return state
    }
}