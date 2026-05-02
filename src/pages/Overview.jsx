import React from 'react';
import { Link } from 'wouter';

export default function Overview() {
  const guideLinks = [
    { title: 'Character Guides', path: '/guides/characters', color: '#FFD600', gradient: 'linear-gradient(135deg, rgba(255, 214, 0, 0.2), rgba(255, 214, 0, 0))' },
    { title: 'Rerolling Guide', path: '/guides/rerolling', color: '#0047FF', gradient: 'linear-gradient(135deg, rgba(0, 71, 255, 0.2), rgba(0, 71, 255, 0))' },
    { title: 'Who to Invest', path: '/guides/invest', color: '#00FF41', gradient: 'linear-gradient(135deg, rgba(0, 255, 65, 0.2), rgba(0, 255, 65, 0))' },
    { title: 'RTA (PvP)', path: '/guides/rta', color: '#FF3B30', gradient: 'linear-gradient(135deg, rgba(255, 59, 48, 0.2), rgba(255, 59, 48, 0))' },
    { title: 'Guild Versus Guild', path: '/guides/gvg', color: '#800080', gradient: 'linear-gradient(135deg, rgba(128, 0, 128, 0.2), rgba(128, 0, 128, 0))' },
    { title: 'Objectives by Level', path: '/guides/objectives', color: '#FFD600', gradient: 'linear-gradient(135deg, rgba(255, 214, 0, 0.2), rgba(255, 214, 0, 0))' },
    { title: 'Modules', path: '/guides/modules', color: '#0047FF', gradient: 'linear-gradient(135deg, rgba(0, 71, 255, 0.2), rgba(0, 71, 255, 0))' },
    { title: 'Shells', path: '/guides/shells', color: '#00FF41', gradient: 'linear-gradient(135deg, rgba(0, 255, 65, 0.2), rgba(0, 255, 65, 0))' },
  ];

  return (
    <main style={{ 
      paddingTop: '120px', 
      backgroundColor: '#050505', 
      minHeight: '100vh', 
      color: '#FAFAFA',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Soft glowing ambient background elements */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,71,255,0.1) 0%, rgba(0,0,0,0) 70%)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,59,48,0.1) 0%, rgba(0,0,0,0) 70%)', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
          <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: '3.5rem', fontWeight: 600, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Guides Hub
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#888', maxWidth: '600px', margin: '0 auto' }}>
            Master your strategies. Discover comprehensive knowledge across every aspect of Etheria.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem',
          paddingBottom: 'var(--spacing-xxl)'
        }}>
          {guideLinks.map((guide, idx) => (
            <Link key={idx} href={guide.path} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div className="glass-card" style={{ 
                '--hover-color': guide.color,
                height: '220px', 
                background: `rgba(20, 20, 20, 0.6)`, 
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.05)', 
                borderRadius: '16px',
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center', 
                alignItems: 'center',
                textAlign: 'center',
                padding: 'var(--spacing-lg)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
              }}>
                {/* Glowing subtle gradient overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: guide.gradient,
                  opacity: 0.5,
                  zIndex: 0,
                  transition: 'opacity 0.3s ease'
                }} className="glass-gradient" />

                <h2 style={{ 
                  fontFamily: 'var(--font-primary)', 
                  fontSize: '1.8rem', 
                  fontWeight: 600, 
                  letterSpacing: '-0.02em',
                  color: 'var(--color-white)',
                  zIndex: 1,
                  position: 'relative'
                }}>
                  {guide.title}
                </h2>
                
                <div style={{
                  marginTop: '1rem',
                  fontSize: '0.9rem',
                  color: guide.color,
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  zIndex: 1,
                  position: 'relative',
                  opacity: 0.8
                }} className="glass-subtitle">
                  Explore &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
