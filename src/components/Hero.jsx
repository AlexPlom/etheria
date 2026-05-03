import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';

export default function Hero() {
  const [randomChar, setRandomChar] = useState(null);

  useEffect(() => {
    fetch('/data/characters.json')
      .then(res => res.json())
      .then(data => {
        const ssrFandomChars = data.filter(c => c.rarity === 'SSR' && c.fandom_image);
        if (ssrFandomChars.length > 0) {
          const randomIndex = Math.floor(Math.random() * ssrFandomChars.length);
          setRandomChar(ssrFandomChars[randomIndex]);
        }
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="section section-dark flex-center" style={{ minHeight: '100vh', paddingTop: '80px', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ zIndex: 2, position: 'relative', width: '100%' }}>
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <img src="/etheria-restart-logo.png" alt="Etheria Restart Logo" style={{ maxWidth: '400px', width: '100%', display: 'block', filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.5))' }} />
        </div>
        <h1 className="heading-jumbo">
          Master The <br />
          <span className="text-outline">Restart</span>
        </h1>
        <p style={{ maxWidth: '600px', fontSize: '1.2rem', marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)', opacity: 0.9 }}>
          Welcome to the ultimate hub for Etheria: Restart. Dive into our comprehensive guides, master team compositions, and optimize your strategy.
        </p>
        <Link href="/overview">
          <a className="btn">Explore Guides</a>
        </Link>
      </div>
      
      {/* Random SSR Fandom Image */}
      {randomChar && (
        <div style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 'clamp(300px, 50vw, 800px)',
          height: '80vh',
          backgroundImage: `url(${randomChar.fandom_image})`,
          backgroundSize: 'contain',
          backgroundPosition: 'right bottom',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
          pointerEvents: 'none',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
          filter: 'drop-shadow(-10px 10px 20px rgba(0,0,0,0.8))',
          animation: 'fadeIn 1s ease forwards'
        }} />
      )}
    </section>
  );
}
