import { WidgetType } from './WidgetType';
import { WidgetProps } from './props';
import { Page } from '../Page';

export * from './props';
export * from './WidgetType';
export * from './Color';
export * from './BorderStyle';
export * from './SolidFill';
export * from './TextStyle';
export * from './WidgetType'

/**
 * Represents a widget.
 */
export interface Widget {
  
  /**
   * The unique identifier of the Widget.
   */
  id: string;

  /**
   * The widget's type.
   */
  type: WidgetType;

  /**
   * The widget's properties.
   */
  props: Partial<WidgetProps>;

  /**
   * The children of the widget.
   */
  children?: Widget[];

   /**
   * The parent page of the widget.
   */
  page?: Page;

   /**
   * The parent widget.
   */
  parent?: Widget;
}
