import {
    CHANGE_STEPPER
} from '../actions/types';

const initial = [
    {number: 0, name: 'Genre'},
    {number: 1, name: 'Subgenre'},
    {number: 2, name: 'Information'},
];

export default (state = initial, action) => {
    
    switch (action.type) {
        case CHANGE_STEPPER:
            return action.payload
        default:
            return state;
    }
};


