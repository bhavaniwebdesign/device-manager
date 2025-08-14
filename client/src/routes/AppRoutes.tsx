import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DeviceList from '../components/DeviceList';
import DeviceDetail from '../components/DeviceDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DeviceList />,
  },
  {
    path: '/devices/:id',
    element: <DeviceDetail />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
