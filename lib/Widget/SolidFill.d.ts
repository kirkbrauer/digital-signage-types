import { Color } from './Color';
export declare enum FillType {
    NONE = "NONE",
    SOLID = "SOLID"
}
/**
 * Represents a solid color fill.
 *
 * {@link Shape}s and {@link Line}s use the SolidFill object to define their fill color.
 */
export interface SolidFill {
    /**
     * The alpha value of the fill.
     * Represents the transparency.
     */
    alpha: number;
    /**
     * The fill type.
     */
    type?: FillType;
    /**
     * The fill color.
     */
    color: Color;
}
