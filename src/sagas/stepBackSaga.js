import { takeEvery, put } from 'redux-saga/effects';
import {
    STEP_BACK,
    STEP_BACK_ASYNC,
} from '../actions/types';


function* stepBackAsync(action) {
    yield put({ type: STEP_BACK_ASYNC, payload: action.payload });
}

export default function* watchStepBack() {
    yield takeEvery(STEP_BACK, stepBackAsync);
};