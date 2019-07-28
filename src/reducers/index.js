import { combineReducers } from "redux";
import handleSteps from "./handleSteps";
import handleCompletedSteps from './handleCompletedSteps';

export default combineReducers({
    step: handleSteps,
    completedSteps: handleCompletedSteps,
});
