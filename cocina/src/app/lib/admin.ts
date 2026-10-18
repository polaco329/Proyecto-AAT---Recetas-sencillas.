export const ADMIN_EMAIL = 'fsfiligoyborkoski@gmail.com';

export function isAdminEmail(email: string | null | undefined) {
  return email?.trim().toLowerCase() === ADMIN_EMAIL;
}
