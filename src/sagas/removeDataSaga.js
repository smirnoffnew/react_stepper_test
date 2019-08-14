import { takeEvery, put } from 'redux-saga/effects';
import {
    REMOVE_DATA,
    REMOVE_DATA_ASYNC,
} from '../actions/types';


function* removeDataAsync(action) {
    yield put({ type: REMOVE_DATA_ASYNC, payload: action.payload });
}

export default function* watchRemoveData() {
    yield takeEvery(REMOVE_DATA, removeDataAsync);
};