import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../redux/store';
import { deleteDevice, editDevice } from '../redux/deviceSlice';
import { Link } from 'react-router-dom';
import { API_ENDPOINTS } from '../config';
import { Button } from './Button';

const DeviceList = () => {
  const devices = useSelector((state: RootState) => state.devices.devices);
  const dispatch = useDispatch();

 const handleDelete = (id: string) => {
  dispatch(deleteDevice(id));
  fetch(`${API_ENDPOINTS.DEVICES}/${id}`, { method: 'DELETE' });
};

  const handleEdit = (device: { id: string; name: string }) => {
    const updated = { ...device, name: device.name + ' (Updated)' };
    dispatch(editDevice(updated));
    fetch(API_ENDPOINTS.DEVICES, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updated),
  });
  };

  return (
    <div>
      <h2>Device List</h2>
      <ul>
        {devices.map(device => (
          <li key={device.id}>
            <Link to={`/devices/${device.id}`}>{device.name}</Link>
            <button onClick={() => handleEdit(device)}>Edit</button>
             <Button variant="secondary"  onClick={() => handleDelete(device.id)}>Close</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceList;
