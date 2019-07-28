import {
    STEP_FORTH,
    STEP_BACK,
    RESET_STEPPER,
    ADD_COMPLETED_STEP
} from './types';

export const stepForth = (data) => {
    return {
      type: STEP_FORTH,
      payload: data
    };
  };
  
  export const stepBack = (data) => {
    return {
      type: STEP_BACK,
      payload: data
    };
  };

  export const resetStepper = (data) => {
    return {
        type: RESET_STEPPER,
        payload: data
      };
  }

  export const addData = (data) => {
    return {
        type: ADD_COMPLETED_STEP,
        payload: data
      };
  }