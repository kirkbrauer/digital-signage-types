import { IPage } from './Page';
import { ISlideshow } from './Slideshow';
/**
 * The type of transition between slides.
 */
export declare enum TransitionType {
    LEFT_TO_RIGHT = "LEFT_TO_RIGHT",
    RIGHT_TO_LEFT = "RIGHT_TO_LEFT",
    TOP_TO_BOTTOM = "TOP_TO_BOTTOM",
    BOTTOM_TO_TOP = "BOTTOM_TO_TOP",
    FADE_RIGHT = "FADE_RIGHT",
    FADE_LEFT = "FADE_LEFT",
    FADE_TOP = "FADE_TOP",
    FADE_BOTTOM = "FADE_BOTTOM",
    SLIDES = "SLIDES",
    SLIDE = "SLIDE"
}
/**
 * Represents a single slide.
 */
export interface ISlide {
    /**
     * The unique identifier of the Slid.
     */
    id: string;
    /**
     * The duration of the slide in seconds.
     */
    duration?: number;
    /**
     * The transition to the next slide.
     */
    transition?: TransitionType;
    /**
     * The page to be displayed by this slide.
     */
    page?: IPage;
    /**
     * The parent slideshow.
     */
    slideshow?: ISlideshow;
}
