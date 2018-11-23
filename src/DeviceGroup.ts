import { Device } from './Device';

/**
 * Represents a device group.
 */
export interface DeviceGroup {
  id: string;
  name: string;
  description?: string;
  devices: Device[];
}
