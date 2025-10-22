DiscusStore — Ready scaffold (Next.js)

İçindekiler:
- pages/ (Next.js pages)
- pages/admin (admin UI)
- pages/api/admin (login, logout, products)
- pages/api/upload (image upload)
- lib/auth.js (jwt helpers)
- data/products.json (örnek ürünler)
- public/uploads (örnek görseller)

Hızlı kurulum:
1) Bilgisayarınızda Node.js yüklü olmalı (LTS önerilir).
2) ZIP'i açın, terminalde proje köküne gidin.
3) .env.local dosyası oluşturun:
   ADMIN_PASSWORD=seninSifre123
   JWT_SECRET=UzunGizliAnahtar
4) npm install
5) npm run dev
6) http://localhost:3000 adresini açın, admin: http://localhost:3000/admin/login

Notlar:
- Vercel'e deploy ederken resim yüklemeleri için /public/uploads kalıcı değildir.
  Prod için Amazon S3 veya benzeri storage kullanın.
