import { put, call } from 'redux-saga/effects';
import * as api from '../api';
import * as actions from '../actions';
import {push} from 'react-router-redux';

export default function* loginDataSaga(action) {
	const data = action.payload;
	yield put(actions.loginDataAttempt());
	try {
		const res = yield call(api.loginDataApi, data);
		yield put(actions.loginDataSuccess());
		yield put(push('/data'))
		localStorage.setItem('token', res.token);
		localStorage.setItem('name', res.name);
		yield put(actions.resetLoginState());
	} catch (e) {
		yield put(actions.loginDataFail(e));
		yield put(actions.resetLoginState());
	}
}
