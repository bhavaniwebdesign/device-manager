import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchDevices, setDevices } from './deviceSlice';
import { API_ENDPOINTS } from '../config';

// Worker saga: fetch devices from backend
function* fetchDevicesSaga(): Generator<any, void, any> {
  const response = yield call(() => axios.get(API_ENDPOINTS.DEVICES));
  yield put(setDevices(response.data)); // Dispatch action to set devices
}

// Root saga: watch for fetchDevices action
export default function* rootSaga() {
  yield takeLatest(fetchDevices.type, fetchDevicesSaga);
}
