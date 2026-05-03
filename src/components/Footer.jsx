import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-black)',
      borderTop: 'var(--border-width) solid var(--color-dark-gray)',
      padding: 'var(--spacing-xl) var(--spacing-md)',
      marginTop: 'auto',
      color: 'var(--color-white)',
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
    }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{
          fontSize: '1.2rem',
          fontWeight: '700',
          marginBottom: 'var(--spacing-sm)',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Brought to you by <span style={{ color: 'var(--color-yellow)', fontFamily: 'var(--font-display)', fontWeight: 900 }}>EXCESSUM</span>
        </p>
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--color-gray)',
          lineHeight: '1.5',
          opacity: 0.8
        }}>
          <strong>Disclaimer:</strong> This website is a fan-made guide and is not affiliated with, endorsed, sponsored, or specifically approved by the creators of Etheria: Restart. 
          All images, character names, and related properties are trademarks and copyright of their respective owners. We do not claim ownership over any of the game assets or artwork used on this site.
        </p>
      </div>
    </footer>
  );
}
