import {call, put, takeEvery} from 'redux-saga/effects'

const
	settingsResp = fetch('http://localhost:4000/API/', {})
	.then(res => res.json())
	.then(data => data)

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchSettings() {
	try {
		const settings = yield call(() => settingsResp);
		yield put({id: settings.number, type: 'SET'});
	} catch(e) {
		yield put({message: e.message, type: 'SETTINGS_FETCH_FAILED'});
	}
}

function* mySaga() {
	yield takeEvery('SETTINGS_FETCH_REQUESTED', fetchSettings);
}
export default mySaga;
