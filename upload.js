import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { verifyToken } from '../../lib/auth';

export const config = {
  api: {
    bodyParser: false,
  },
};

function getTokenFromReq(req){
  const cookie = req.headers.cookie || '';
  const match = cookie.match(/discus_admin=([^;]+)/);
  return match ? match[1] : null;
}

export default async function handler(req, res) {
  const token = getTokenFromReq(req);
  if (!verifyToken(token)) return res.status(401).json({ error: 'unauth' });

  const form = formidable({ multiples: false });
  const uploadsDir = path.join(process.cwd(), '/public/uploads');
  if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).json({ error: err.message });
    const file = files.file;
    if (!file) return res.status(400).json({ error: 'no file' });

    const data = fs.readFileSync(file.filepath);
    const ext = path.extname(file.originalFilename || '') || '.jpg';
    const fileName = `${Date.now()}${ext}`;
    const filePath = path.join(uploadsDir, fileName);
    fs.writeFileSync(filePath, data);
    return res.json({ url: `/uploads/${fileName}` });
  });
}
