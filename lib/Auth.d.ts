import { User } from './User';
/**
 * Represents the metadata for a newly created token.
 */
export interface Auth {
    token: string;
    scopes: string[];
    expires: number;
    sub: string;
    user?: User;
}
