// ActionTypes
const BUG_ADDED = "BUG_ADDING"
const BUG_REMOVED = "BUG_REMOVE"
const BUG_RESOLVED = "BUG_RESOLVED"

// ActionCreators

export function bugAdded(description) {
    return {
        type: BUG_ADDED,
        payload: {
            description
        }
    }
}
export function bugRemove(id) {
    return {
        type: BUG_REMOVED,
        payload: {
            id
        }
    }
}

export function bugResolved(id) {
    return {
        type: BUG_RESOLVED,
        payload: {
            id
        }
    }
}


//  Reducers 

let lastId = 0;
export default function bugReducer(state = [], action) {
    console.log(action);
    switch (action.type) {
        case BUG_ADDED:
            return [
                ...state, {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case BUG_REMOVED:
            return state.filter(item => item.id !== action.payload.id)
        case BUG_RESOLVED:
            return state.filter(item => item.id === action.payload.id ? item.resolved = true : item)
        default:
            return state
    }
}