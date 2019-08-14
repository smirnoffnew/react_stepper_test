import { takeEvery, put } from 'redux-saga/effects';
import {
    EDIT_DATA,
    EDIT_DATA_ASYNC,
} from '../actions/types';


function* editDataAsync(action) {
    yield put({ type: EDIT_DATA_ASYNC, payload: action.payload });
}

export default function* watchEditData() {
    yield takeEvery(EDIT_DATA, editDataAsync);
};
