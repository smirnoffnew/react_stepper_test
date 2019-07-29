import { combineReducers } from "redux";
import handleSteps from "./handleSteps";
import handleCompletedSteps from './handleCompletedSteps';
import handlePossibleStepsWithNewSubgenre from './handlePossibleStepsWithNewSubgenre'
import handlePossibleStepsWithoutNewSubgenre from './handlePossibleStepsWithoutNewSubgenre'
import handleStepper from './handleStepper';
import handleInformationFields from './handleInformationFields';

export default combineReducers({
    step: handleSteps,
    completedSteps: handleCompletedSteps,
    possibleStepsWithNewSubgenre: handlePossibleStepsWithNewSubgenre,
    possibleStepsWithoutNewSubgenre: handlePossibleStepsWithoutNewSubgenre,
    stepper: handleStepper,
    fields: handleInformationFields,
});
