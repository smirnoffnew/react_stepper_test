import {
  STEP_FORTH,
  STEP_BACK,
  CHANGE_STEPPER,
  RESET_STEPPER,
  EDIT_DATA,
  REMOVE_DATA,
  REMOVE_ALL_DATA,
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

export const changeStepper = (data) => {
  return {
    type: CHANGE_STEPPER,
    payload: data
  };
}

export const resetStepper = (data) => {
  return {
    type: RESET_STEPPER,
    payload: data
  };
}

export const editData = (name) => {
  return {
    type: EDIT_DATA,
    payload: name
  };
}

export const removeData = (name) => {
  return {
    type: REMOVE_DATA,
    payload: name
  };
}

export const removeAllData = () => {
  return {
    type: REMOVE_ALL_DATA,
  };
}

