import { takeEvery, put } from 'redux-saga/effects';
import {
    REMOVE_ALL_DATA,
    REMOVE_ALL_DATA_ASYNC,
} from '../actions/types';


function* removeAllDataAsync() {
    yield put({ type: REMOVE_ALL_DATA_ASYNC });
}

export default function* watchRemoveAllData() {
    yield takeEvery(REMOVE_ALL_DATA, removeAllDataAsync);
};