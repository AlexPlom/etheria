import React from 'react';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="section section-light">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="heading-lg" style={{ marginBottom: 'var(--spacing-md)' }}>Why Etheria Restart?</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem' }}>
            The world of Etheria is vast and full of challenges. Our guides are designed to give you the competitive edge, whether you are rerolling for the best start or looking to clear the hardest content.
          </p>
        </div>
      </section>
    </main>
  );
}
