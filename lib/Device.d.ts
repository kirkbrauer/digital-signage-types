import { IDeviceGroup } from './DeviceGroup';
import { IPage } from './Page';
import { ISlideshow } from './Slideshow';
import { IUser } from './User';
/**
 * The device type.
 */
export declare enum DeviceType {
    TELEVISION = "TELEVISION",
    MONITOR = "MONITOR",
    MOBILE = "MOBILE"
}
/**
 * The device orientation.
 */
export declare enum DeviceOrientation {
    PORTRAIT = "PORTRAIT",
    LANDSCAPE = "LANDSCAPE"
}
/**
 * The device role.
 */
export declare enum DeviceRole {
    PRIMARY = "PRIMARY",
    SECONDARY = "SECONDARY"
}
/**
 * Represents a device.
 */
export interface IDevice {
    id: string;
    pairCode: string;
    name: string | null;
    description: string | null;
    type: DeviceType | null;
    orientation: DeviceOrientation | null;
    role: DeviceRole | null;
    group: IDeviceGroup | null;
    height: number | null;
    width: number | null;
    currentPage: IPage | null;
    currentSlideshow: ISlideshow | null;
    owners: IUser[];
}
