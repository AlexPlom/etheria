import React from 'react';
import { Link } from 'wouter';

export default function CharacterCard({ character }) {
  // Use card or profile image, avoid team-thumb which has wrong characters
  let imageUrl = '/assets/placeholder.webp';
  if (character.images && character.images.length > 0) {
    const card = character.images.find(img => img.kind === 'card');
    const profile = character.images.find(img => img.kind === 'profile');
    
    if (card) {
       imageUrl = `/${card.local_path}`;
    } else if (profile) {
       imageUrl = `/${profile.local_path}`;
    }
  }

  // Element color
  const elementColors = {
    'Disorder': '#c4a7e7',
    'Constant': '#f6c177',
    'Odd':      '#9ccfd8',
    'Hollow':   '#31748f',
    'Reason':   '#eb6f92',
  };

  const elementShadows = {
    'Disorder': '#403d52',
    'Constant': '#524f67',
    'Odd':      '#26233a',
    'Hollow':   '#1f1d2e',
    'Reason':   '#403d52',
  };
  
  const bgColor = elementColors[character.element] || 'var(--color-gray)';
  const shadowColor = elementShadows[character.element] || 'var(--color-dark-gray)';

  return (
    <Link href={`/character/${character.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', '--card-shadow': shadowColor, cursor: 'pointer' }}>
        <div style={{
          padding: 'var(--spacing-md)',
          backgroundColor: bgColor,
          borderBottom: 'var(--border-width) solid var(--color-black)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: character.element === 'Disorder' ? 'var(--color-white)' : 'var(--color-black)'
        }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}>{character.name}</span>
          <span style={{ fontWeight: 700, padding: '2px 8px', backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }}>{character.rarity}</span>
        </div>
        
        <div className="char-card-img-container" style={{ position: 'relative', flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1A1A1A', aspectRatio: '4/5', overflow: 'hidden' }}>
          {character.fandom_image && (
            <img 
              src={character.fandom_image} 
              alt={`${character.name} Fandom Art`} 
              className="fandom-image"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0, transition: 'opacity 0.3s ease', zIndex: 1 }} 
            />
          )}
          <img 
            src={imageUrl} 
            alt={character.name} 
            className="main-image"
            style={{ position: 'relative', width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(4px 4px 0px rgba(0,0,0,0.5))', transition: 'opacity 0.3s ease', zIndex: 2 }} 
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </div>
      </div>
    </Link>
  );
}
