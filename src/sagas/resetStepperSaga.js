import { takeEvery, put } from 'redux-saga/effects';
import {
    RESET_STEPPER,
    RESET_STEPPER_ASYNC,
} from '../actions/types';


function* resetStepperAsync(action) {
    yield put({ type: RESET_STEPPER_ASYNC, payload: action.payload });
}

export default function* watchResetStepper() {
    yield takeEvery(RESET_STEPPER, resetStepperAsync);
};