import { Device } from './Device';

/**
 * Represents the pair status of a device.
 */
export interface PairStatus extends Device {
  id: string;
  pairCode: string;
  token: string;
  expires: number;
}