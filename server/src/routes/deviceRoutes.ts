import express from 'express';
import { fetchDevices, removeDevice, updateDevice } from '../controllers/deviceController';

const router = express.Router();

router.get('/', fetchDevices);
router.delete('/:id', removeDevice);
router.put('/', updateDevice);

export default router;
