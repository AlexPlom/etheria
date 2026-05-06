import React from 'react';
import { Link } from 'wouter';

export default function Overview() {
  const guideLinks = [
    { title: 'Tier List',            path: '/guides/tierlist',    color: '#eb6f92', gradient: 'linear-gradient(135deg, rgba(235, 111, 146, 0.15), rgba(235, 111, 146, 0))', live: true  },
    { title: 'Newbie General Advice',path: '/guides/newbie',      color: '#f6c177', gradient: 'linear-gradient(135deg, rgba(246, 193, 119, 0.15), rgba(246, 193, 119, 0))', live: true  },
    { title: 'Character Guides',     path: '/guides/characters',  color: '#9ccfd8', gradient: 'linear-gradient(135deg, rgba(156, 207, 216, 0.15), rgba(156, 207, 216, 0))', live: true  },
    { title: 'Rerolling Guide',      path: '/guides/rerolling',   color: '#c4a7e7', gradient: 'linear-gradient(135deg, rgba(196, 167, 231, 0.15), rgba(196, 167, 231, 0))', live: false },
    { title: 'Who to Invest',        path: '/guides/invest',      color: '#31748f', gradient: 'linear-gradient(135deg, rgba(49, 116, 143, 0.15), rgba(49, 116, 143, 0))',   live: false },
    { title: 'RTA (PvP)',            path: '/guides/rta',         color: '#eb6f92', gradient: 'linear-gradient(135deg, rgba(235, 111, 146, 0.15), rgba(235, 111, 146, 0))', live: false },
    { title: 'Guild Versus Guild',   path: '/guides/gvg',         color: '#c4a7e7', gradient: 'linear-gradient(135deg, rgba(196, 167, 231, 0.15), rgba(196, 167, 231, 0))', live: false },
    { title: 'Objectives by Level',  path: '/guides/objectives',  color: '#f6c177', gradient: 'linear-gradient(135deg, rgba(246, 193, 119, 0.15), rgba(246, 193, 119, 0))', live: false },
    { title: 'Modules',              path: '/guides/modules',     color: '#9ccfd8', gradient: 'linear-gradient(135deg, rgba(156, 207, 216, 0.15), rgba(156, 207, 216, 0))', live: false },
    { title: 'Shells',               path: '/guides/shells',      color: '#ebbcba', gradient: 'linear-gradient(135deg, rgba(235, 188, 186, 0.15), rgba(235, 188, 186, 0))', live: false },
  ].filter(g => g.live);

  return (
    <main style={{
      paddingTop: '120px',
      backgroundColor: 'var(--color-base)',
      minHeight: '100vh',
      color: 'var(--color-text)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Ambient glow */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(196,167,231,0.07) 0%, transparent 70%)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(156,207,216,0.07) 0%, transparent 70%)', zIndex: 0 }} />

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
                background: 'rgba(38, 35, 58, 0.65)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '10px',
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
