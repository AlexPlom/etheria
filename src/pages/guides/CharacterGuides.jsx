import React from 'react';
import GuideSection from '../../components/GuideSection';

export default function CharacterGuides() {
  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-black)' }}>
      <div className="container">
        <h1 className="heading-jumbo" style={{ color: 'var(--color-yellow)', marginBottom: 'var(--spacing-lg)' }}>
          Character <span className="text-outline" style={{ WebkitTextStroke: '2px var(--color-yellow)' }}>Guides</span>
        </h1>
      </div>
      <GuideSection />
    </main>
  );
}
