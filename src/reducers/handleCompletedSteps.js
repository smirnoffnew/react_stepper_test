
import {
    ADD_DATA,
    EDIT_DATA,
    REMOVE_DATA,
} from '../actions/types';


export default (state = [], action) => {
    switch (action.type) {
        case ADD_DATA:
            state[action.payload.number] = action.payload;
            return state[action.payload.number]
                ?
                [...state]
                :
                [...state, action.payload];
        case EDIT_DATA:
            if (state[action.payload.number]) {
                let newStateItem = {}
                newStateItem = { ...state[action.payload.number], ...action.payload }
                let newState = state
                newState[action.payload.number] = newStateItem
                return newState
            } else {
                state[action.payload.number] = action.payload;
                return state[action.payload.number]
                    ?
                    [...state]
                    :
                    [...state, action.payload];
            }
        case REMOVE_DATA:
  
            console.log('state', state)
            let newState = state
            const index = state.findIndex(step => {
                
                return step && step.name === action.payload
            })
            if (index !== -1) {
                newState.splice(index, 1)
                return newState
            }
            else { return state }

        default:
            return state;
    }
};


