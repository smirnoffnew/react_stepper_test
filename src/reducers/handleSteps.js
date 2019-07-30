import { STEP_FORTH, STEP_BACK, RESET_STEPPER } from '../actions/types';
import { initialCurrentStep } from '../actions';

export default (state = initialCurrentStep, action) => {
    switch (action.type) {

        case STEP_FORTH:
            return action.payload;

        case STEP_BACK:
            return action.payload;

        case RESET_STEPPER:
            return initialCurrentStep;

        default:
            return state;
    }
};