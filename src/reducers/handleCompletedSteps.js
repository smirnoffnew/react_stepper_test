
import {
    EDIT_DATA_ASYNC,
    REMOVE_DATA_ASYNC,
    REMOVE_ALL_DATA_ASYNC,
} from '../actions/types';

export default (state = [], action) => {

    switch (action.type) {
        
        case EDIT_DATA_ASYNC:
            state[action.payload.number] = { ...state[action.payload.number], ...action.payload }
            return [...state];
            
        case REMOVE_DATA_ASYNC:
            const index = state.findIndex(step => step && step.name === action.payload)
            return index !== -1 ? (state.splice(index, 1),state) : state;

        case REMOVE_ALL_DATA_ASYNC: 
            return [];

        default:
            return state;
    }
};