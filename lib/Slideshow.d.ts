import { ISlide } from './Slide';
import { IUser } from './User';
/**
 * Represents a group of slides.
 */
export interface ISlideshow {
    /**
     * The unique identifier of the Slideshow.
     */
    id: string;
    /**
     * The short identifier of the Slideshow.
     */
    shortid: string;
    /**
     * The name of the slideshow.
     */
    name?: string;
    /**
     * The description of the slideshow.
     */
    description?: string;
    /**
     * Does the slideshow automatically repeat.
     */
    autoRepeat: boolean;
    /**
     * Does the slideshow start automatically.
     */
    autoPlay: boolean;
    /**
     * Are the slides shuffled.
     */
    shuffle: boolean;
    /**
     * All the slides in the slideshow.
     */
    slides?: ISlide[];
    /**
     * The owners of the slideshow.
     */
    owners?: IUser[];
}
