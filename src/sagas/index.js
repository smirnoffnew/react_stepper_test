import { all, fork } from 'redux-saga/effects';
import watchStepForth from './stepForthSaga.js';
import watchStepBack from './stepBackSaga.js';
import watchChangeStepper from './changeStepperSaga.js';
import watchResetStepper from './resetStepperSaga';
import watchEditData from './editDataSaga';
import watchRemoveData from './removeDataSaga';
import watchRemoveAllData from './removeAllDataSaga';



export default function* rootSaga() {
    yield all([
        fork(watchStepForth), 
        fork(watchStepBack), 
        fork(watchChangeStepper), 
        fork(watchResetStepper), 
        fork(watchEditData), 
        fork(watchRemoveData), 
        fork(watchRemoveAllData),
    ]);
}
