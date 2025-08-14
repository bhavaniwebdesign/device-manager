import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';

const DeviceDetail = () => {
  const { id } = useParams();
  const device = useSelector((state: RootState) =>
    state.devices.devices.find(d => d.id === id)
  );

  if (!device) return <p>Device not found</p>;

  return (
    <div>
      <h2>Device Detail</h2>
      <p>ID: {device.id}</p>
      <p>Name: {device.name}</p>
    </div>
  );
};

export default DeviceDetail;
