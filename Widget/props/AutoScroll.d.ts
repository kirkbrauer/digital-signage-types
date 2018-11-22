import { BaseProps } from './';

/**
 * Represents a scroll direction.
 */
export enum ScrollDirection {
  VERITCAL = 'VERITCAL',
  HORIZONTAL = 'HORIZONTAL'
}

/**
 * Represents an automatically scrolling widget.
 * 
 * This widget allows content to automatically scroll on the screen without user interaction.
 */
export interface AutoScroll extends BaseProps {

  /**
   * The speed of the scroll measured in points per second.
   */
  scrollSpeed: number;

  /**
   * Should the content be recycled continuiously.
   */
  continuous: boolean;

  /**
   * The direction of the scroll.
   */
  scrollDirection: ScrollDirection;

}
