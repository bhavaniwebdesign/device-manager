import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of a device
export interface Device {
  id: string;
  name: string;
}

// Initial state for the device list
interface DeviceState {
  devices: Device[];
}

const initialState: DeviceState = {
  devices: [],
};

// Create a slice for device-related actions and state
const deviceSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    // Trigger saga to fetch devices
    fetchDevices: () => {},

    // Set devices after fetching
    setDevices: (state, action: PayloadAction<Device[]>) => {
      state.devices = action.payload;
    },

    // Delete a device by ID
    deleteDevice: (state, action: PayloadAction<string>) => {
      state.devices = state.devices.filter(d => d.id !== action.payload);
    },

    // Edit a device by replacing it in the array
    editDevice: (state, action: PayloadAction<Device>) => {
      const index = state.devices.findIndex(d => d.id === action.payload.id);
      if (index !== -1) state.devices[index] = action.payload;
    },
  },
});

// Export actions and reducer
export const { fetchDevices, setDevices, deleteDevice, editDevice } = deviceSlice.actions;
export default deviceSlice.reducer;
