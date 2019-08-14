import { CHANGE_STEPPER_ASYNC } from '../actions/types';
import { traceSteps } from '../constants';

export default (state = traceSteps, action) => {
    switch (action.type) {

        case CHANGE_STEPPER_ASYNC:
            return action.payload

        default:
            return state;
    }
};