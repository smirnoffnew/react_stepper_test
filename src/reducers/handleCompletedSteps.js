
import {
    EDIT_DATA,
    REMOVE_DATA,
    REMOVE_ALL_DATA,
} from '../actions/types';

export default (state = [], action) => {

    switch (action.type) {

        case EDIT_DATA:
            state[action.payload.number] = { ...state[action.payload.number], ...action.payload }
            return [...state];
            
        case REMOVE_DATA:
            const index = state.findIndex(step => step && step.name === action.payload)
            return index !== -1 ? (state.splice(index, 1),state) : state;

        case REMOVE_ALL_DATA: 
            return [];

        default:
            return state;
    }
};