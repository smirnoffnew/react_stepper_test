import { STEP_FORTH_ASYNC, STEP_BACK_ASYNC, RESET_STEPPER_ASYNC } from '../actions/types';
import { initialCurrentStep } from '../constants';

export default (state = initialCurrentStep, action) => {
    switch (action.type) {

        case STEP_FORTH_ASYNC:
            return action.payload;

        case STEP_BACK_ASYNC:
            return action.payload;

        case RESET_STEPPER_ASYNC:
            return initialCurrentStep;

        default:
            return state;
    }
};