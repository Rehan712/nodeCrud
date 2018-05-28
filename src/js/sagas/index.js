import { takeLatest, all, fork } from 'redux-saga/effects';

import * as types from '../constants';
import getDataSaga from './getDataSaga';
import submitDataSaga from './submitDataSaga';
import loginDataSaga from './loginDataSaga';
import signOutSaga from './signOutSaga';

function* watchGetData() {
	yield takeLatest(types.GET_DATA, getDataSaga);
}

function* watchSubmitData() {
	yield takeLatest(types.SUBMIT_DATA, submitDataSaga);
}

function* watchLoginData() {
	yield takeLatest(types.LOGIN_DATA, loginDataSaga);
}

function* watchsignOutData() {
	yield takeLatest(types.SIGN_OUT_DATA, signOutSaga);
}

export default function* rootSaga() {
	yield all([
		fork(watchGetData),
		fork(watchLoginData),
		fork(watchSubmitData),
		fork(watchsignOutData)
	]);
}
