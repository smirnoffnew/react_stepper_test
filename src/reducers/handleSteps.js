import {
    STEP_FORTH,
    STEP_BACK,
    RESET_STEPPER
} from '../actions/types';

const initial = {
    number: 0,
    name: 'Genre',
};

export default (state = initial, action) => {
    debugger;
    switch (action.type) {
        case STEP_FORTH: 
            return action.payload;
        case STEP_BACK:
            return action.payload;
        case RESET_STEPPER:
            return initial;
        default:
            return state;
    }
};