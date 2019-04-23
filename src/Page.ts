import { IUser } from './User';
import { RawDocument } from 'digital-signage-editor';

/**
 * Represents a page of content.
 */
export interface IPage {

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
  document?: RawDocument;

  /**
   * The owners of the page.
   */
  owners?: IUser[];
  
}
