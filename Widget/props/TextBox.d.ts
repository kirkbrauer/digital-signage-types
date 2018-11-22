import { BaseProps } from './';

/**
 * Represents a text box widget.
 */
export interface TextBox extends BaseProps {

  /**
   * The text content of the widget.
   * 
   * This content is stored in the raw draft.js format.
   */
  text: any;

}
