import { DeviceGroup } from './DeviceGroup';
import { Page } from './Page';
import { Slideshow } from './Slideshow';

/**
 * The device type.
 */
export enum DeviceType {
  TELEVISION = 'TELEVISION',
  MONITOR = 'MONITOR',
  MOBILE = 'MOBILE'
}

/**
 * The device orientation.
 */
export enum DeviceOrientation {
  PORTRAIT = 'PORTRAIT',
  LANDSCAPE = 'LANDSCAPE'
}

/**
 * The device role.
 */
export enum DeviceRole {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY'
}

/**
 * Represents  adevice
 */
export interface Device {
  id: string;
  shortid: string;
  name: string;
  description?: string;
  type: DeviceType;
  orientation: DeviceOrientation;
  role: DeviceRole;
  group: DeviceGroup | null;
  height: number;
  width: number;
  page: Page;
  slideshow: Slideshow;
}
