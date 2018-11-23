import { Color } from './Color';

/**
 * Represents a style applied to a block of text.
 */
export interface TextStyle {

  /**
   * The text background color.
   */
  backgroundColor?: Color;

  /**
   * The text font family.
   */
  fontFamily: string;

  /**
   * The text font size.
   */
  fontSize: number;

  /**
   * The text font weight.
   */
  fontWeight?: number;

  /**
   * Is the text bold.
   */
  bold: boolean;

  /**
   * Is the text italic.
   */
  italic: boolean;

  /**
   * Does the text have a strikethrough.
   */
  strikethrough: boolean;

  /**
   * Is the text underlined.
   */
  underline: boolean;

  /**
   * The text foreground color.
   */
  color: Color;

}
