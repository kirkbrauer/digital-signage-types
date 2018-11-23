import { TextStyle } from '../TextStyle';
import { BaseProps } from './';
/**
 * Represents a date/time display widget.
 */
export interface DateTime extends BaseProps {
    /**
     * The style of the date/time
     */
    style?: TextStyle;
    /**
     * The date format to display.
     */
    format: string;
}
