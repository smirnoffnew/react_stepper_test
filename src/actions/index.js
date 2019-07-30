import {
  STEP_FORTH,
  STEP_BACK,
  RESET_STEPPER,
  REMOVE_DATA,
  CHANGE_STEPPER,
  EDIT_DATA,
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
  { number: 0, name: 'Genre' },
  { number: 1, name: 'Subgenre' },
  { number: 2, name: 'Information' },
  { number: 3, name: 'Completion' },
];

export const traceStepsWithNewSubgenre = [
  { number: 0, name: 'Genre' },
  { number: 1, name: 'Subgenre' },
  { number: 2, name: 'Add new subgenre' },
  { number: 3, name: 'Information' },
  { number: 4, name: 'Completion' },
];

export const initialCurrentStep = {
  number: 0,
  name: 'Genre',
};

export const informationFields = [
  {
    name: "Book title",
    value: "",
    type: "text",
    fullWidth: true,
    key: "Book title",
  },
  {
    name: "Author",
    value: "",
    type: "select",
    fullWidth: true,
    key: "Author",
  },
  {
    name: "ISBN",
    value: "",
    type: "text",
    fullWidth: true,
    key: "ISBN",
  },
  {
    name: "Publisher",
    value: "",
    type: "select",
    fullWidth: true,
    key: "Publisher",
  },
  {
    name: "Date published",
    value: "",
    type: "date",
    fullWidth: false,
    key: "Date published",
  },
  {
    name: "Number of pages",
    value: "",
    type: "number",
    fullWidth: false,
    key: "Number of pages",
  },
  {
    name: "Format",
    value: "",
    type: "select",
    fullWidth: false,
    key: "Format",
  },
  {
    name: "Edition",
    value: "",
    type: "text",
    fullWidth: false,
    key: "Edition",
  },

  {
    name: "Edition language",
    value: "",
    type: "select",
    fullWidth: false,
    key: "Edition language",
  },
  {
    name: "Description",
    value: "",
    type: "multiline",
    fullWidth: true,
    key: "Description",
  },
];