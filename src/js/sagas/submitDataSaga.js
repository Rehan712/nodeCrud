import { put, call } from 'redux-saga/effects';
import * as api from '../api';
import * as actions from '../actions';

export default function* submitDataSaga(action) {
	const data = action.payload;
	yield put(actions.submitDataAttempt());
	try {
		const res = yield call(api.submitDataApi, data);
		yield put(actions.submitDataSuccess());
		yield put(actions.resetStateForm());
	} catch (e) {
		yield put(actions.submitDataFail(e));
		yield put(actions.resetStateForm());
	}
}
