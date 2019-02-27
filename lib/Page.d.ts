import { User } from './User';
/**
 * Represents a page of content.
 */
export interface Page {
    /**
     * The unique identifier of the Page.
     */
    id: string;
    /**
     * The short identifier of the page.
     */
    shortid: string;
    /**
     * The name of the page.
     */
    name?: string;
    /**
     * The description of the page.
     */
    description?: string;
    /**
     * The document to display on the page.
     */
    document?: any;
    /**
     * The owners of the page.
     */
    owners?: User[];
}
