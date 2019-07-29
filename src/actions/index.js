import {
  STEP_FORTH,
  STEP_BACK,
  RESET_STEPPER,
  REMOVE_DATA,
  CHANGE_STEPPER,
  EDIT_DATA,
  ADD_DATA,
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

export const resetStepper = (data) => {
  return {
    type: RESET_STEPPER,
    payload: data
  };
}

export const addData = (data) => {
  return {
    type: ADD_DATA,
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

export const changeStepper = (data) => {
  return {
    type: CHANGE_STEPPER,
    payload: data
  };
}

export const traceSteps = [
  {number: 0, name: 'Genre'},
  {number: 1, name: 'Subgenre'},
  {number: 2, name: 'Information'},
  {number: 3, name: 'Completion'},
];

export const traceStepsWithNewSubgenre = [
  {number: 0, name: 'Genre'},
  {number: 1, name: 'Subgenre'},
  {number: 2, name: 'Add new subgenre'},
  {number: 3, name: 'Information'},
  {number: 4, name: 'Completion'},
];