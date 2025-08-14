import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import deviceReducer from './deviceSlice';
import rootSaga from './deviceSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    devices: deviceReducer,
  },
  middleware: getDefault => getDefault().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export default store;
