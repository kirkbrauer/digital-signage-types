import { IDevice } from './Device';
import { IDeviceGroup } from './DeviceGroup';
import { IPage } from './Page';
import { ISlideshow } from './Slideshow';

/**
 * An enum of user roles.
 */
export enum Role {
  USER = 'user',
  ADMIN = 'admin',
  UNPAIRED_DEVICE = 'unpairedDevice',
  PAIRED_DEVICE = 'pairedDevice'
}

/**
 * Represents the name of a user.
 */
export interface IName {
  familyName?: string;
  givenName?: string;
  middleName?: string;
}

/**
 * Represents a user.
 */
export interface IUser {
  id: string;
  provider: string | null;
  providerId: string | null;
  displayName: string | null;
  name: IName;
  email: string;
  roles: Role[];
  photoUrl: string;
  devices: IDevice[];
  deviceGroups: IDeviceGroup[];
  pages: IPage[];
  slideshows: ISlideshow[];
}
