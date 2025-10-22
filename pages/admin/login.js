import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const router = useRouter();

  async function submit(e){
    e.preventDefault();
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    });
    if (res.ok) {
      router.push('/admin');
    } else {
      setErr('Şifre yanlış. Tekrar deneyin.');
    }
  }

  return (
    <div style={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'#f3f4f6'}}>
      <form onSubmit={submit} style={{padding:20, background:'white', borderRadius:8, boxShadow:'0 4px 12px rgba(0,0,0,0.08)', width:360}}>
        <h2 style={{fontSize:18, fontWeight:700, marginBottom:12}}>DiscusStore Admin Girişi</h2>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Admin şifresi" style={{width:'100%', padding:10, marginBottom:10, border:'1px solid #ddd', borderRadius:6}} />
        {err && <div style={{color:'#ef4444', marginBottom:8}}>{err}</div>}
        <button style={{width:'100%', padding:10, background:'#0b76c9', color:'white', borderRadius:6}}>Giriş Yap</button>
      </form>
    </div>
  );
}
