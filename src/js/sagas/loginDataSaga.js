import { put, call } from 'redux-saga/effects';
import * as api from '../api';
import * as actions from '../actions';

export default function* getDataSaga(action) {
	const data = action.payload;
	yield put(actions.loginDataAttempt());
	try {
		const res = yield call(api.loginDataApi, data);
		yield put(actions.loginDataSuccess());
		yield put(actions.resetLoginState());
		localStorage.setItem('token', res.data.token);
		localStorage.setItem('name', res.data.name);
	} catch (e) {
		yield put(actions.loginDataFail(e));
		yield put(actions.resetLoginState());
	}
}
