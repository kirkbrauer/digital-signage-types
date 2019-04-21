import { IDeviceGroup } from './DeviceGroup';
import { IPage } from './Page';
import { ISlideshow } from './Slideshow';

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
export interface IDevice {
  id: string;
  shortid: string;
  name: string;
  description?: string;
  type: DeviceType;
  orientation: DeviceOrientation;
  role: DeviceRole;
  group: IDeviceGroup | null;
  height: number;
  width: number;
  currentPage?: IPage;
  currentSlideshow?: ISlideshow;
}
