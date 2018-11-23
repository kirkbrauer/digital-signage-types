import { TextStyle } from '../TextStyle';
import { Color } from '../Color';
import { BaseProps } from './';
/**
 * Represents the units of temperature.
 */
export declare enum TemperatureUnit {
    CELSIUS = "CELSIUS",
    FAHRENHEIT = "FAHRENHEIT"
}
/**
 * Represents a weather display widget.
 */
export interface Weather extends BaseProps {
    /**
     * The text style for the temperature display.
     */
    style: TextStyle;
    /**
     * The color of the weather icon.
     */
    iconColor: Color;
    /**
     * The temperature unit to display.
     */
    unit: TemperatureUnit;
}
