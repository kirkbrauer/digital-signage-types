import { BaseProps } from './';
/**
 * Represents the types of shapes.
 */
export declare enum ShapeType {
    RECTANGLE = "RECTANGLE",
    ROUND_RECTANGLE = "ROUND_RECTANGLE",
    ELLIPSE = "ELLIPSE"
}
/**
 * Represents the content alignments for a shape.
 */
export declare enum ContentAligment {
    TOP = "TOP",
    MIDDLE = "MIDDLE",
    BOTTOM = "BOTTOM"
}
/**
 * Represents a shape widget.
 */
export interface Shape extends BaseProps {
    /**
     * The text content of the widget.
     *
     * This content is stored in the raw draft.js format.
     */
    text?: any;
    /**
     * The type of shape.
     */
    shapeType?: ShapeType;
    /**
     * The alignment of the text content.
     */
    contentAlignment?: ContentAligment;
    /**
     * The border radius of the shape.
     */
    radius: number;
}
