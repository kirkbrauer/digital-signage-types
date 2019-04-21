import { IDevice } from './Device';

/**
 * Represents a device group.
 */
export interface IDeviceGroup {
  id: string;
  name: string;
  description?: string;
  devices: IDevice[];
}
