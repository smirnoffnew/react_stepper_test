import { combineReducers } from "redux";
import handleSteps from "./handleSteps";

export default combineReducers({
    step: handleSteps,
});
