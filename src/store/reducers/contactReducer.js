const INITIAL_STATE = {
    contacts: null,
    filterBy: null,
}

export function contactReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CONTACTS':
            return {
                ...state,
                contacts: action.contacts
            }
        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: action.filterBy
            }

        default:
            return state
    }
}