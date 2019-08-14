import { takeEvery, put } from 'redux-saga/effects';
import {
    STEP_FORTH,
    STEP_FORTH_ASYNC,
} from '../actions/types';


function* stepForthAsync(action) {
    yield put({ type: STEP_FORTH_ASYNC, payload: action.payload });
}

export default function* watchStepForth() {
    yield takeEvery(STEP_FORTH, stepForthAsync);
};
