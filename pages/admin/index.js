import { useEffect, useState } from 'react';
import Router from 'next/router';

function AdminPanel() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{ fetchData(); }, []);

  async function fetchData(){
    const res = await fetch('/api/admin/products');
    const data = await res.json();
    setProducts(data);
  }

  async function logout(){
    await fetch('/api/admin/logout');
    Router.push('/admin/login');
  }

  return (
    <div style={{padding:20}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:18}}>
        <h1 style={{fontSize:18, fontWeight:700}}>Admin Panel</h1>
        <div style={{display:'flex', gap:8}}>
          <button onClick={logout} style={{padding:'8px 12px', border:'1px solid #ddd', borderRadius:6}}>Çıkış</button>
        </div>
      </div>

      <div>
        <h2 style={{fontSize:14, fontWeight:700, marginBottom:8}}>Ürünler</h2>
        <ul style={{listStyle:'none', padding:0, margin:0}}>
          {products.map(p => (
            <li key={p.id} style={{border:'1px solid #eee', padding:10, borderRadius:6, marginBottom:8, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div>
                <div style={{fontWeight:700}}>{p.title}</div>
                <div style={{color:'#6b7280', fontSize:13}}>₺{p.price}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminPanel;
