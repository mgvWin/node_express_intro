import { Document } from 'mongoose';

// fields of a single database row
export interface UserAttributes {
  username: string;
  email: string;
  password?: string;
  lastModifiedDate?: Number;
}

// Object of schema methods wthere we describe it
export interface UserModel extends UserAttributes, Document {
  comparePassword: (password) => boolean;
}
