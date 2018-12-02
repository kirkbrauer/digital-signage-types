import { Device } from './Device';
import { DeviceGroup } from './DeviceGroup';
import { Page } from './Page';
import { Slideshow } from './Slideshow';

/**
 * Represents the name of a user.
 */
export interface Name {
  familyName?: string;
  givenName?: string;
  middleName?: string;
}

/**
 * Represents a user.
 */
export interface User {
  id: string;
  provider?: string;
  providerId?: string;
  displayName: string;
  name: Name;
  email: string;
  photoUrl: string;
  devices: Device[];
  deviceGroups: DeviceGroup[];
  pages: Page[];
  slideshows: Slideshow[];
}
