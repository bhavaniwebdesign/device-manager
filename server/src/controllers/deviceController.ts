import { Request, Response } from 'express';
import { getDevices, deleteDevice, editDevice } from '../models/deviceModel';

export const fetchDevices = (req: Request, res: Response) => {
  res.json(getDevices());
};

export const removeDevice = (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: 'Device id is required' });
  }
  deleteDevice(id);
  res.sendStatus(204);
};

export const updateDevice = (req: Request, res: Response) => {
  editDevice(req.body);
  res.sendStatus(200);
};
export const addDevice = (req: Request, res: Response) => {
  const newDevice = req.body;
  if (!newDevice.id || !newDevice.name) {
    return res.status(400).json({ error: 'Invalid device data' });
  }
  getDevices().push(newDevice);
  res.status(201).json(newDevice);
};