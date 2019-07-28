import {
    STEP_FORTH,
    STEP_BACK,
    RESET_STEPPER
} from '../actions/types';


export default (state = 1, action) => {
    switch (action.type) {
        case STEP_FORTH:
            return state+1;
        case STEP_BACK:
            return state-1;
        case RESET_STEPPER:
            return 1;
        default:
            return state;
    }
};