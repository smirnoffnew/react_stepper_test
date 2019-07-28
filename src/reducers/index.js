import { combineReducers } from "redux";
import handleSteps from "./handleSteps";
import handleCompletedSteps from './handleCompletedSteps';
import handlePossibleStepsWithNewSubgenre from './handlePossibleStepsWithNewSubgenre'
import handlePossibleStepsWithoutNewSubgenre from './handlePossibleStepsWithoutNewSubgenre'

export default combineReducers({
    step: handleSteps,
    completedSteps: handleCompletedSteps,
    possibleStepsWithNewSubgenre: handlePossibleStepsWithNewSubgenre,
    possibleStepsWithoutNewSubgenre: handlePossibleStepsWithoutNewSubgenre,
});
