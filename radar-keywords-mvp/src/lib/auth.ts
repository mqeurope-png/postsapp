import { cookies } from 'next/headers';
export function isAuthenticated() { const password = process.env.APP_PASSWORD; if (!password) return true; return cookies().get('radar_auth')?.value === password; }
export function requireAuth() { if (!isAuthenticated()) throw new Error('No autorizado'); }
