import { signToken } from '../../../lib/auth';
export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { password } = req.body;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Erhan1957';
  if (!password || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const token = signToken({ role: 'admin' }, '8h');
  res.setHeader('Set-Cookie', `discus_admin=${token}; HttpOnly; Path=/; Max-Age=${8*3600}`);
  return res.json({ ok: true });
}
