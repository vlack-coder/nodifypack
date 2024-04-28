import crypto from 'crypto';
import {ENCRYPTION_KEY} from '../utils';

const decrypt = (payloadBase64: any) => {
  const clientPayload = Buffer.from(payloadBase64, 'base64').toString('hex');
  const client_iv = clientPayload.substr(0, 32);
  const client_encrypted = clientPayload.substr(
    32,
    clientPayload.length - 32 - 32,
  );
  const client_auth_tag = clientPayload.substr(clientPayload.length - 32, 32);

  try {
    let clientSharedKey = ENCRYPTION_KEY!;
    const decipher = crypto.createDecipheriv(
      'aes-256-gcm',
      Buffer.from(clientSharedKey, 'hex'),
      Buffer.from(client_iv, 'hex'),
    );
    //

    decipher.setAuthTag(Buffer.from(client_auth_tag, 'hex'));

    let decrypted = decipher.update(client_encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return JSON.parse(decrypted);
  } catch (error) {}
};

export default decrypt;
