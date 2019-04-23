import { IUser } from './User';
import { RawDocument } from 'digital-signage-editor';
/**
 * Represents a page of content.
 */
export interface IPage {
    id: string;
    shortid: string;
    name: string;
    description: string;
    document: RawDocument;
    owners: IUser[];
}
