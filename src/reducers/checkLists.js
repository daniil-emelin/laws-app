const initialState = {
   lists:[],
   survey_ids:[],
   fetching: false,
   fetched:false,
   error: null
}

export default function checklists(state = initialState, action){
    switch(action.type){
        case 'FETCH_LISTS':
        return {
            ...state,
            fetching: true,               
        }
    case 'FETCH_LISTS_SUCCESS':
        return{
            ...state,
            fetching: false,
            fetched: true,
            lists: action.payload
    }
    case 'FETCH_LISTS_ERROR':
        return {
            ...state,
            fetching: false,
            error: action.payload
        }
    case 'TOGGLE_TEST_BUTTON':
        return{
            ...state,
            disabled: action.payload
        }
    default:
        return state
    }
}