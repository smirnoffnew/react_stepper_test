import { CHANGE_STEPPER } from '../actions/types';
import { traceSteps } from '../actions';

export default (state = traceSteps, action) => {
    switch (action.type) {

        case CHANGE_STEPPER:
            return action.payload

        default:
            return state;
    }
};