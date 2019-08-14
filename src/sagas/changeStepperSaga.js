import { takeEvery, put } from 'redux-saga/effects';
import {
    CHANGE_STEPPER,
    CHANGE_STEPPER_ASYNC,
} from '../actions/types';


function* changeStepperAsync(action) {
    yield put({ type: CHANGE_STEPPER_ASYNC, payload: action.payload });
}

export default function* watchChangeStepper() {
    yield takeEvery(CHANGE_STEPPER, changeStepperAsync);
};