import { DeviceGroup } from './DeviceGroup';
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
 * Represents  adevice
 */
export interface Device {
    id: string;
    name: string;
    description?: string;
    type: DeviceType;
    orientation: DeviceOrientation;
    role: DeviceRole;
    group: DeviceGroup | null;
    height: number;
    width: number;
}