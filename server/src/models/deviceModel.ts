export interface Device {
  id: string;
  name: string;
}

let devices: Device[] = [
  { id: '1', name: 'Router' },
  { id: '2', name: 'Switch' },
];

export const getDevices = () => devices;
export const deleteDevice = (id: string) => {
  devices = devices.filter(d => d.id !== id);
};
export const editDevice = (updated: Device) => {
  devices = devices.map(d => (d.id === updated.id ? updated : d));
};
