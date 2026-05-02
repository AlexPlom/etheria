import React from 'react';

export default function PlaceholderGuide({ title, description, color = 'var(--color-yellow)' }) {
  return (
    <main style={{ paddingTop: '150px', backgroundColor: 'var(--color-black)', minHeight: '100vh', color: 'var(--color-white)' }}>
      <div className="container" style={{ textAlign: 'center', border: `4px solid ${color}`, padding: 'var(--spacing-xxl)', boxShadow: `16px 16px 0px ${color}` }}>
        <h1 className="heading-jumbo" style={{ color: color, marginBottom: 'var(--spacing-lg)' }}>
          {title}
        </h1>
        <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
          {description || `This section is currently under construction. Check back later for detailed guides and strategies on ${title}.`}
        </p>
      </div>
    </main>
  );
}
