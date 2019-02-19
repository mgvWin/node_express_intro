import { createHmac } from 'crypto';

export class Crypto {
  static sha512(payload: string, salt: string): string {
    const hmac = createHmac('sha512', salt);
    hmac.update(payload);

    return hmac.digest('hex');
  }

  static compareSha512(payload: string, encodeString: string, salt: string): boolean {
    return encodeString === Crypto.sha512(payload, salt);
  }
}
