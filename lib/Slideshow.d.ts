import { Slide } from './Slide';
import { User } from './User';
/**
 * Represents a group of slides.
 */
export interface Slideshow {
    /**
     * The unique identifier of the Slideshow.
     */
    id: string;
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
    slides?: Slide[];
    /**
     * The owners of the slideshow.
     */
    owners?: User[];
}
