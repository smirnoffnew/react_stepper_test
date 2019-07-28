import {
    STEP_FORTH,
    STEP_BACK,
    RESET_STEPPER
} from './types';

export const stepForth = () => {
    return {
      type: STEP_FORTH
    };
  };
  
  export const stepBack = () => {
    return {
      type: STEP_BACK
    };
  };

  export const resetStepper = () => {
    return {
        type: RESET_STEPPER
      };
  }