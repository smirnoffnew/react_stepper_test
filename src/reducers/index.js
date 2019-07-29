import { combineReducers } from "redux";
import handleSteps from "./handleSteps";
import handleCompletedSteps from './handleCompletedSteps';
import handleStepper from './handleStepper';
import handleInformationFields from './handleInformationFields';

export default combineReducers({
    currentStep: handleSteps,
    completedSteps: handleCompletedSteps,
    stepper: handleStepper,
    fields: handleInformationFields,
});
