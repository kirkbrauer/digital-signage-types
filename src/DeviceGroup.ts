import { IDevice } from './Device';
import { IUser } from './User';

/**
 * Represents a device group.
 */
export interface IDeviceGroup {
  id: string;
  name: string;
  description: string | null;
  devices: IDevice[];
  owners: IUser[];
}
