import { ISlide } from './Slide';
import { IUser } from './User';

/**
 * Represents a group of slides.
 */
export interface ISlideshow {
  id: string;
  shortid: string;
  name: string | null;
  description: string | null;
  autoRepeat: boolean;
  autoPlay: boolean;
  shuffle: boolean;
  slides: ISlide[];
  owners: IUser[];
}
