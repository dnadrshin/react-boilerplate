import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'


const
	settingsResp = fetch('http://localhost:4000/API/', {})
	.then(res => res.json())
	.then(data => data)

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   try {
      const settings = yield call(() => settingsResp);
      yield put({type: "SET", id: settings.number});
   } catch (e) {
      yield put({type: "SETTINGS_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("SETTINGS_FETCH_REQUESTED", fetchUser);
}
export default mySaga;
