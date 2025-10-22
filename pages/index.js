import HeroSlider from '../components/HeroSlider';

const slides = [
  { image: '/uploads/slide-1.png', title: 'Marlboro Red Discus', subtitle: 'A fiery touch of elegance.' },
  { image: '/uploads/slide-2.png', title: 'Blue Diamond Discus', subtitle: 'Pure calm in motion.' },
  { image: '/uploads/slide-3.png', title: 'Alenquer Red Discus', subtitle: "Nature's masterpiece." },
  { image: '/uploads/slide-4.png', title: 'Pigeon Blood Discus', subtitle: 'The iconic pattern of perfection.' },
];

export default function Page(){
  return (
    <div style={{fontFamily:'sans-serif'}}>
      <header style={{padding:24, display:'flex', alignItems:'center', gap:12}}>
        <img src="/logo.png" alt="logo" style={{height:48}}/>
        <div>
          <div style={{fontWeight:700}}>Ünalan Pet Store® DiscusStoreTR</div>
          <div style={{fontSize:12, color:'#666'}}>Türkiye'nin A GRADE Discus Koleksiyonu</div>
        </div>
      </header>
      <HeroSlider slides={slides} />
      <main style={{maxWidth:1100, margin:'30px auto', padding:'0 20px'}}>
        <h2>Featured collection</h2>
        <p>Example products will appear here after you upload via admin panel.</p>
      </main>
    </div>
  );
}
