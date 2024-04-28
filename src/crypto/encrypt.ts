import crypto from 'crypto';
import { ENCRYPTION_KEY } from '../utils';

// USED FOR PAYLOAD ENCRYPTION

const encrypt = async (payloadData: any | {}) => {
  let data = JSON.stringify(payloadData);
console.log('crypto', crypto)
  try {
    const IV = crypto.randomBytes(16);
    // Create a cipher with AES-256-GCM algorithm, key, and IV
    const cipher = crypto.createCipheriv(
      'aes-256-gcm',
      Buffer.from(ENCRYPTION_KEY, 'hex'),
      IV,
    );
    // Encrypt the data
    let encrypted = cipher.update(data, 'utf8', 'hex');
    // Finalize the encryption
    encrypted += cipher.final('hex');
    // Get the authentication tag
    const auth_tag = cipher.getAuthTag().toString('hex');
    // Combine IV, encrypted data, and auth tag into a single payload
    const payload = IV.toString('hex') + encrypted + auth_tag;

    // Convert the payload to base64
    const encryptedData = Buffer.from(payload, 'hex').toString('base64');

    return encryptedData;
  } catch (error) {
    // handleCatch(error)
  }
};

export default encrypt;
