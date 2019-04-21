import { IDevice } from './Device';

/**
 * Represents the pair status of a device.
 */
export interface IPairStatus extends IDevice {
  id: string;
  pairCode: string;
  token: string;
  expires: number;
}
