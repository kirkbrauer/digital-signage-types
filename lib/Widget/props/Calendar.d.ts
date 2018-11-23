import { TextStyle } from '../TextStyle';
import { BaseProps } from './';
/**
 * Represents a type of calendar.
 */
export declare enum CalendarType {
    MONTH = "MONTH",
    WEEK = "WEEK",
    UPCOMING = "UPCOMING"
}
/**
 * Represents the days of the week.
 */
export declare enum DayName {
    MONDAY = "MONDAY",
    TUESDAY = "TUESDAY",
    WEDNESDAY = "WEDNESDAY",
    THURSDAY = "THURSDAY",
    FRIDAY = "FRIDAY",
    SATURDAY = "SATURDAY",
    SUNDAY = "SUNDAY"
}
/**
 * Represents a calendar display widget.
 */
export interface Calendar extends BaseProps {
    /**
     * The type of calendar to display.
     */
    calendarType: CalendarType;
    /**
     * The text style of the month name.
     */
    monthStyle?: TextStyle;
    /**
     * The text style of the day number.
     */
    dayStyle?: TextStyle;
    /**
     * The text style of the day name.
     */
    dayNameStyle?: TextStyle;
    /**
     * The text style of the event title.
     */
    eventTitleStyle?: TextStyle;
    /**
     * The text style of the event description.
     */
    eventDescriptionStyle?: TextStyle;
    /**
     * Should event descriptions be displayed.
     */
    showEventDescriptions: boolean;
    /**
     * Should weekends be displayed.
     */
    showWeekends: boolean;
    /**
     * Should day names be displayed.
     */
    showDayNames: boolean;
    /**
     * The first day of the week.
     */
    weekStart: DayName;
}
