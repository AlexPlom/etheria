import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';

export default function GuideSection() {
  const [groupedCharacters, setGroupedCharacters] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/characters.json')
      .then(res => res.json())
      .then(data => {
        const ssrCharacters = data.filter(char => char.rarity === 'SSR');
        
        const grouped = ssrCharacters.reduce((acc, char) => {
          const element = char.element || 'Unknown';
          if (!acc[element]) {
            acc[element] = [];
          }
          acc[element].push(char);
          return acc;
        }, {});
        
        setGroupedCharacters(grouped);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading characters:', err);
        setLoading(false);
      });
  }, []);

  const elementColors = {
    'Disorder': '#800080',
    'Constant': 'var(--color-yellow)',
    'Odd': 'var(--color-blue)',
    'Hollow': '#00FF41',
    'Reason': 'var(--color-red)'
  };

  return (
    <section className="section section-dark">
      <div className="container">
        <h2 className="heading-lg" style={{ marginBottom: 'var(--spacing-md)' }}>SSR Characters by Element</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-xl)', maxWidth: '800px' }}>
          A complete overview of all SSR units currently available, grouped by their element.
        </p>

        {loading ? (
          <div>Loading characters...</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xxl)' }}>
            {Object.entries(groupedCharacters).map(([element, chars]) => {
              const headerColor = elementColors[element] || 'var(--color-white)';
              return (
                <div key={element}>
                  <h3 className="heading-lg" style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-lg)', borderBottom: `4px solid ${headerColor}`, color: headerColor, paddingBottom: 'var(--spacing-sm)', display: 'inline-block' }}>
                    {element}
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: 'var(--spacing-lg)'
                  }}>
                    {chars.map(char => (
                      <CharacterCard key={char.slug} character={char} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
