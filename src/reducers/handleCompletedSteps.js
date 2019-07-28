
import {
    ADD_COMPLETED_STEP
} from '../actions/types';


export default (state = [], action) => {
    switch (action.type) {
        case ADD_COMPLETED_STEP:
                return state.length + 1 === action.payload.number 
                ? 
                state[action.payload.number] = action.payload.data 
                : 
                [...state, action.payload.data]
        default:
            return state;
    }
};


