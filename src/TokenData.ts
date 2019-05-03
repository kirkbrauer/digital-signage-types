import { IUser, Role } from './User';

/**
 * Represents the metadata for an auth token.
 */
export interface ITokenData {
  token: string;
  scopes: string[];
  roles?: Role[];
  expires: number;
  sub: string;
  user?: IUser;
  tokenId: string;
}
