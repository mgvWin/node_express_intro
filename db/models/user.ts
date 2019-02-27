import * as mongoose from 'mongoose';

import { UserModel } from '../../entities';
import { Crypto } from '../../utils';
import { APP_CONFIG } from '../../configs';

const UserSchema: mongoose.Schema = new mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      required: [true, "User name can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, 'User name is invalid'],
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, "User email can't be blank"],
      match: [/\S+@\S+\.\S+/, 'User email is invalid'],
      index: true,
    },
    password: String,
  },
);

UserSchema.pre<UserModel>('save', function (next) {
  this.lastModifiedDate = new Date().getTime();

  // only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) {
    return next();
  }

  // generate a salt
  this.password = Crypto.sha512(this.password, APP_CONFIG.PASSWORD_SALT);
});

UserSchema.methods.comparePassword = function(unHashPassword) {
  return Crypto.compareSha512(unHashPassword, this.password, APP_CONFIG.PASSWORD_SALT);
};

export const UserFactory = (): mongoose.Model<UserModel> => mongoose.model('user', UserSchema);
