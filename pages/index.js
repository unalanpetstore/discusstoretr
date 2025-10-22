import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{ async function load(){ const res = await fetch('/api/admin/products'); setProducts(await res.json()); } load(); }, []);

  return (
    <div>
      <header style={{background:'#082b33', color:'white', padding:'80px 20px', textAlign:'left'}}>
        <div style={{maxWidth:1100, margin:'0 auto'}}>
          <h1 style={{fontSize:48, margin:0}}>DiscusStoreTR<sup style={{fontSize:18}}>®</sup></h1>
          <p style={{fontSize:18, marginTop:10}}>Premium A-Grade Discus — Imported from NA Discus, Malaysia<br/>Ünalan Pet Store® kuruluşudur.</p>
          <a href="#products" style={{display:'inline-block', marginTop:20, background:'#5fb4f0', color:'white', padding:'12px 20px', borderRadius:8}}>Koleksiyonu Gör</a>
        </div>
      </header>

      <main style={{maxWidth:1100, margin:'30px auto', padding:'0 20px'}}>
        <h2 id="products">Discus Koleksiyonu</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:20, marginTop:20}}>
          {products.map(p=>(
            <div key={p.id} style={{border:'1px solid #eee', borderRadius:8, overflow:'hidden'}}>
              <div style={{height:180, background:'#f6f6f6', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <img src={p.images?.[0]||'/uploads/hero-1.png'} alt={p.title} style={{maxHeight:160, objectFit:'contain'}} />
              </div>
              <div style={{padding:12}}>
                <div style={{fontWeight:700}}>{p.title}</div>
                <div style={{color:'#666', marginTop:6}}>{p.short}</div>
                <div style={{marginTop:10, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <div style={{fontWeight:800}}>₺{p.price}</div>
                  <a href={`/products/${p.slug}`} style={{color:'#0b76c9'}}>Detay</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer style={{background:'#111', color:'#ddd', padding:20, marginTop:40}}>
        <div style={{maxWidth:1100, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div>© 2025 DiscusStoreTR — Ünalan Pet Store® kuruluşudur.</div>
          <div>WhatsApp: +90 536 911 8111 · +60 11 5302 7877 · Instagram: @discusstoretr</div>
        </div>
      </footer>
    </div>
  );
}
