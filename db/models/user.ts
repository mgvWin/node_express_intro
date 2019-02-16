import { User } from '../../entities';
import { Crypto } from '../../utils';
import { APP_CONFIG } from '../../configs';

export const users: User[] = [
  {
    id: '1',
    name: 'Jon Smeet',
    email: 'admin@i.com',
    password: Crypto.sha512('123', APP_CONFIG.PASSWORD_SALT),
  },
  {
    id: '2',
    name: 'Jimm Doe',
    email: 'user@i.com',
    password: Crypto.sha512('456', APP_CONFIG.PASSWORD_SALT),
  },
];
