import { hash } from 'bcryptjs';

export default async function hashPassword(password) {
  const hashedPassword = await hash(password, 8);
  return hashedPassword;
}
