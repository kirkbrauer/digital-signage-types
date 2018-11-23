import { BaseProps } from './';
/**
 * Represents the flex directions.
 */
export declare enum FlexDirection {
    ROW = "ROW",
    COLUMN = "COLUMN",
    ROW_REVERSE = "ROW_REVERSE",
    COLUMN_REVERSE = "COLUMN_REVERSE"
}
/**
 * Represents the wrap types.
 */
export declare enum WrapType {
    NO_WRAP = "NO_WRAP",
    WRAP = "WRAP",
    WRAP_REVERSE = "WRAP_REVERSE"
}
/**
 * Represents the justify types.
 */
export declare enum JustifyType {
    START = "START",
    END = "END",
    CENTER = "CENTER",
    SPACE_BETWEEN = "SPACE_BETWEEN",
    SPACE_AROUND = "SPACE_AROUND",
    SPACE_EVENLY = "SPACE_EVENLY"
}
/**
 * Represents a group of widgets.
 */
export interface Group extends BaseProps {
    /**
     * The flex direction of the widgets.
     */
    direction?: FlexDirection;
    /**
     * The wrap type of the children.
     */
    wrap?: WrapType;
    /**
     * The justify type of the children.
     */
    justify?: JustifyType;
}
