import React, { useEffect, useState } from 'react';
import { useRoute } from 'wouter';

export default function CharacterDetail() {
  const [match, params] = useRoute('/character/:slug');
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.slug) {
      fetch('/data/characters.json')
        .then(res => res.json())
        .then(data => {
          const found = data.find(c => c.slug === params.slug);
          setCharacter(found);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [params?.slug]);

  if (loading) {
    return <main style={{ paddingTop: '100px', textAlign: 'center' }}>Loading...</main>;
  }

  if (!character) {
    return <main style={{ paddingTop: '100px', textAlign: 'center' }}>Character not found</main>;
  }

  // Get primary image
  let imageUrl = '/assets/placeholder.webp';
  if (character.images && character.images.length > 0) {
    const card = character.images.find(img => img.kind === 'card');
    const profile = character.images.find(img => img.kind === 'profile');
    if (card) imageUrl = `/${card.local_path}`;
    else if (profile) imageUrl = `/${profile.local_path}`;
  }

  const elementColors = {
    'Disorder': '#800080',
    'Constant': 'var(--color-yellow)',
    'Odd': 'var(--color-blue)',
    'Hollow': '#00FF41',
    'Reason': 'var(--color-red)'
  };
  
  const accentColor = elementColors[character.element] || 'var(--color-gray)';
  const isDisorder = character.element === 'Disorder';

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--color-black)', minHeight: '100vh', color: 'var(--color-white)' }}>
      {/* Hero Section */}
      <section style={{ 
        backgroundColor: 'var(--color-black)', 
        color: 'var(--color-white)', 
        borderBottom: `var(--border-width) solid ${accentColor}`, 
        position: 'relative', 
        overflow: 'hidden',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'stretch'
      }}>
        
        {/* Fandom Image moved inside container below */}
        
        {/* Subtle Ambient Glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '25%',
          transform: 'translateY(-50%)',
          width: '600px',
          height: '600px',
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
          opacity: 0.15,
          pointerEvents: 'none',
          zIndex: 1,
          mixBlendMode: 'screen'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 'var(--spacing-xl)', minHeight: '500px' }}>
          
          {/* Fandom Image (Anchored to the Container to keep constant distance from text) */}
          {character.fandom_image ? (
            <div style={{
              position: 'absolute',
              top: 0, right: 0, bottom: 0, left: '250px',
              backgroundImage: `url(${character.fandom_image})`,
              backgroundSize: 'contain',
              backgroundPosition: 'right 35%', // Middle-ground anchor
              backgroundRepeat: 'no-repeat',
              transform: 'scale(2.2)', 
              transformOrigin: 'right 35%', // Zoom from the middle-upper section
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
              zIndex: 1,
              pointerEvents: 'none'
            }} />
          ) : (
            <div style={{
              position: 'absolute',
              right: 0, bottom: 0, top: 0, width: '600px',
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'contain',
              backgroundPosition: 'right 35%',
              backgroundRepeat: 'no-repeat',
              transform: 'scale(1.8)',
              transformOrigin: 'right 35%',
              filter: 'drop-shadow(8px 8px 0px rgba(0,0,0,0.8))',
              zIndex: 1,
              pointerEvents: 'none'
            }} />
          )}

          <div style={{ maxWidth: '600px', position: 'relative', zIndex: 2 }}>
            <h1 style={{ 
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: '4.5rem',
              textTransform: 'uppercase',
              lineHeight: 1,
              letterSpacing: '-2px',
              textAlign: 'left', 
              marginBottom: 'var(--spacing-sm)', 
              textShadow: '6px 6px 0px var(--color-black)' 
            }}>
              {character.name}
            </h1>
            
            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              <span style={{ fontWeight: 900, fontSize: '1.5rem', padding: '4px 16px', backgroundColor: 'var(--color-white)', color: 'var(--color-black)', textShadow: 'none' }}>{character.rarity}</span>
              <span style={{ fontWeight: 900, fontSize: '1.5rem', padding: '4px 16px', backgroundColor: accentColor, color: isDisorder ? 'var(--color-white)' : 'var(--color-black)', textShadow: 'none' }}>{character.element}</span>
            </div>
          </div>
          
        </div>
      </section>

      {/* Compartments Grid */}
      <section className="section" style={{ padding: 'var(--spacing-xl) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
            
            {/* Overview Compartment */}
            <div className="card" style={{ '--card-shadow': accentColor, height: 'auto', display: 'block' }}>
              <div style={{ padding: 'var(--spacing-md)', backgroundColor: accentColor, borderBottom: 'var(--border-width) solid var(--color-black)', color: isDisorder ? 'var(--color-white)' : 'var(--color-black)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.5rem', textTransform: 'uppercase' }}>Overview</h3>
              </div>
              <div style={{ padding: 'var(--spacing-lg)', backgroundColor: '#1A1A1A', color: 'var(--color-white)', minHeight: '150px' }}>
                <p>Add {character.name}'s general context, pros/cons, and playstyle overview here.</p>
              </div>
            </div>

            {/* Best Teams Compartment */}
            <div className="card" style={{ '--card-shadow': accentColor, height: 'auto', display: 'block' }}>
              <div style={{ padding: 'var(--spacing-md)', backgroundColor: accentColor, borderBottom: 'var(--border-width) solid var(--color-black)', color: isDisorder ? 'var(--color-white)' : 'var(--color-black)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.5rem', textTransform: 'uppercase' }}>Best Teams</h3>
              </div>
              <div style={{ padding: 'var(--spacing-lg)', backgroundColor: '#1A1A1A', color: 'var(--color-white)', minHeight: '150px' }}>
                <p>List synergies, recommended teammates, and specific team compositions here.</p>
              </div>
            </div>

            {/* Skill Priority Compartment */}
            <div className="card" style={{ '--card-shadow': accentColor, height: 'auto', display: 'block' }}>
              <div style={{ padding: 'var(--spacing-md)', backgroundColor: accentColor, borderBottom: 'var(--border-width) solid var(--color-black)', color: isDisorder ? 'var(--color-white)' : 'var(--color-black)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.5rem', textTransform: 'uppercase' }}>Skill Priority</h3>
              </div>
              <div style={{ padding: 'var(--spacing-lg)', backgroundColor: '#1A1A1A', color: 'var(--color-white)', minHeight: '150px' }}>
                <p>Detail which skills to max first and specific skill rotation advice here.</p>
              </div>
            </div>

            {/* Recommended Gear Compartment */}
            <div className="card" style={{ '--card-shadow': accentColor, height: 'auto', display: 'block' }}>
              <div style={{ padding: 'var(--spacing-md)', backgroundColor: accentColor, borderBottom: 'var(--border-width) solid var(--color-black)', color: isDisorder ? 'var(--color-white)' : 'var(--color-black)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.5rem', textTransform: 'uppercase' }}>Recommended Gear</h3>
              </div>
              <div style={{ padding: 'var(--spacing-lg)', backgroundColor: '#1A1A1A', color: 'var(--color-white)', minHeight: '150px' }}>
                <p>Outline the best equipment sets, stat priorities, and artifact recommendations here.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
