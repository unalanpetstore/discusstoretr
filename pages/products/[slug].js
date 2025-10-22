import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ProductPage(){
  const router = useRouter();
  const { slug } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(()=>{ if(!slug) return; async function load(){ const res = await fetch('/api/admin/products'); const data = await res.json(); setProduct(data.find(p=>p.slug===slug)); } load(); }, [slug]);

  if(!product) return <div style={{padding:40}}>Yükleniyor veya ürün bulunamadı.</div>;

  return (
    <div style={{maxWidth:900, margin:'30px auto', padding:'0 20px'}}>
      <h1>{product.title}</h1>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:20}}>
        <div><img src={product.images?.[0]||'/uploads/hero-1.png'} alt="" style={{width:'100%', objectFit:'contain'}}/></div>
        <div>
          <p style={{fontWeight:700, fontSize:22}}>₺{product.price}</p>
          <p style={{marginTop:10}}>{product.description}</p>
          <button style={{marginTop:20, padding:'10px 16px', background:'#0b76c9', color:'white', borderRadius:6}}>Sepete Ekle</button>
        </div>
      </div>
    </div>
  );
}
