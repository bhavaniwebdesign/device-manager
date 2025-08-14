import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDevices } from './redux/deviceSlice';
import AppRoutes from './routes/AppRoutes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDevices());
  }, [dispatch]);

  return (
    <div>
      <h1>Device Manager</h1>
      <AppRoutes />
    </div>
  );
}

export default App;
