import { User } from '../../entities';
import { crypto } from '../../utils';
import { APP_CONFIG } from '../../core';

export const users: User[] = [
  {
    name: 'Jon Smeet',
    email: 'admin@i.com',
    password: crypto.encode('123', APP_CONFIG.PASSWORD_SALT),
  },
  {
    name: 'Jimm Doe',
    email: 'user@i.com',
    password: crypto.encode('456', APP_CONFIG.PASSWORD_SALT),
  },
];
