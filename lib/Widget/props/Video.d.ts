import { BaseProps } from './';
/**
 * Represents the types of videos.
 */
export declare enum VideoType {
    YOUTUBE = "YOUTUBE",
    VIMEO = "VIMEO"
}
/**
 * Represents a video display widget.
 */
export interface Video extends BaseProps {
    /**
     * The type of video.
     */
    videoType: VideoType;
    /**
     * The video id.
     */
    video: string;
    /**
     * Should captions be shown on the video.
     */
    showCaptions: boolean;
    /**
     * Is the video muted.
     */
    muted: boolean;
}
