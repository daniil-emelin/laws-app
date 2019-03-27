const initialState = {
        titles: []
    };

export default function appReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TITLE':
            return {
                ...state,
                titles: [...state.titles, action.payload]
            }
        case 'REMOVE_LAST_TITLE':
            return {
                ...state,
                titles: state.titles.slice(0, state.titles.length - 1)
            }
        default:
            return state     
    }
}