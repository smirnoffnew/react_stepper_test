import {
    STEP_FORTH,
    STEP_BACK,
    RESET_STEPPER
} from '../actions/types';

const initial = {
    number: 1,
    name: 'genres',
};

export default (state = initial, action) => {
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