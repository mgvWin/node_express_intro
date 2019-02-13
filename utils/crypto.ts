import { createHmac } from 'crypto';

const HASHING_ALGORITHM = 'sha512';

function encode(payload: string, salt: string): string {
  const hmac = createHmac(HASHING_ALGORITHM, salt);
  hmac.update(payload);

  return hmac.digest('hex');
}

export const crypto = {
  encode,
};
