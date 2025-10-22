import fs from 'fs';
import path from 'path';
const DATA = path.join(process.cwd(), 'data', 'products.json');
export default function handler(req, res) {
  if (req.method === 'GET') {
    const raw = fs.readFileSync(DATA, 'utf8');
    res.json(JSON.parse(raw));
    return;
  }
  res.status(405).end();
}
