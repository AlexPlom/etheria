import React from 'react';
import { Link } from 'wouter';

export default function Hero() {
  return (
    <section className="section section-dark flex-center" style={{ minHeight: '100vh', paddingTop: '80px', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ zIndex: 2 }}>
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
      
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, var(--color-blue) 0%, transparent 70%)',
        opacity: 0.2,
        zIndex: 1,
        borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, var(--color-red) 0%, transparent 70%)',
        opacity: 0.2,
        zIndex: 1,
        borderRadius: '50%'
      }} />
    </section>
  );
}
