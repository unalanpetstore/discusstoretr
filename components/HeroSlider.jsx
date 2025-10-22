import { useEffect, useRef } from 'react';

export default function HeroSlider({ slides }){
  const idx = useRef(0);
  const containerRef = useRef();

  useEffect(()=>{
    const el = containerRef.current;
    let timer = setInterval(()=>{
      idx.current = (idx.current + 1) % slides.length;
      const width = el.clientWidth;
      el.querySelector('.slides').style.transform = `translateX(-${idx.current * width}px)`;
    }, 3500);
    const resize = ()=>{
      el.querySelector('.slides').style.transition = 'none';
      el.querySelector('.slides').style.transform = `translateX(-${idx.current * el.clientWidth}px)`;
      setTimeout(()=> el.querySelector('.slides').style.transition = '', 50);
    }
    window.addEventListener('resize', resize);
    return ()=>{ clearInterval(timer); window.removeEventListener('resize', resize); }
  }, [slides.length]);

  return (
    <div style={{overflow:'hidden', position:'relative'}} ref={containerRef}>
      <div className="slides" style={{display:'flex', transition:'transform 600ms ease'}}>
        {slides.map((s,i)=> (
          <div key={i} style={{minWidth:'100%', boxSizing:'border-box', padding:20, background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
            <img src={s.image} alt={s.title} style={{maxHeight:360, objectFit:'contain'}}/>
            <h2 style={{marginTop:12, fontSize:22}}>{s.title}</h2>
            <p style={{marginTop:6, color:'#555'}}>{s.subtitle}</p>
            <button style={{marginTop:12, padding:'10px 16px', background:'#0b76c9', color:'white', border:'none', borderRadius:6}}>Shop Now</button>
          </div>
        ))}
      </div>
      <div style={{position:'absolute', bottom:12, left:'50%', transform:'translateX(-50%)', display:'flex', gap:8}}>
        {slides.map((_,i)=> <div key={i} style={{width:10,height:10,borderRadius:999, background:'#ddd'}} />)}
      </div>
    </div>
  );
}
