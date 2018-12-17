import { AutoScroll } from './AutoScroll';
import { Calendar } from './Calendar';
import { DateTime } from './DateTime';
import { Group } from './Group';
import { Image } from './Image';
import { Shape } from './Shape';
import { TextBox } from './TextBox';
import { Video } from './Video';
import { Weather } from './Weather';
import { SolidFill } from '../SolidFill';
import { Color } from '../Color';
import { BorderStyle } from '../BorderStyle';

export * from './AutoScroll';
export * from './Calendar';
export * from './DateTime';
export * from './Group';
export * from './Image';
export * from './Shape';
export * from './TextBox';
export * from './Video';
export * from './Weather';

/**
 * Represents all the available widget properties.
 */
export type WidgetProps =
  AutoScroll &
  Calendar &
  DateTime &
  Group &
  Image &
  Shape &
  TextBox &
  Video &
  Weather;
  
/**
 * The base propteries of a widget.
 */
export interface BaseProps {
  /**
   * The widget's fill.
   */
  fill?: SolidFill;
  /**
   * The height.
   */
  height?: number;

  /**
   * The width.
   */
  width?: number;

  /**
   * The margin on all sides.
   */
  margin?: number;

  /**
   * The top margin.
   */
  marginTop?: number;

  /**
   * The left margin.
   */
  marginLeft?: number;

  /**
   * The right margin.
   */
  marginRight?: number;

  /**
   * The bottom margin.
   */
  marginBottom?: number;

  /**
   * The padding on all sides.
   */
  padding?: number;

  /**
   * The top padding.
   */
  paddingTop?: number;

  /**
   * The left padding.
   */
  paddingLeft?: number;

  /**
   * The right padding.
   */
  paddingRight?: number;

  /**
   * The bottom padding.
   */
  paddingBottom?: number;

  /**
   * The border style.
   */
  borderStyle?: BorderStyle;

  /**
   * The border width.
   */
  borderWidth?: number;

  /**
   * The border color.
   */
  borderColor?: Color;

  /**
   * The flex grow.
   */
  grow?: number;

  /**
   * The rotation of the widget in degrees.
   * 
   * This value should be between 0 and 359.
   */
  rotation?: number;

  /**
   * The order of the widget in a group.
   */
  order?: number;
}
