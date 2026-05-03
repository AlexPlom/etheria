import React from 'react';
import { Link, useRoute } from 'wouter';

export default function Header() {
  const [isHomeActive] = useRoute('/');
  const [isOverviewActive] = useRoute('/overview');

  return (
    <header className="navbar">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo">
          <Link href="/">
            <img src="/etheria-restart-logo.png" alt="Etheria Restart Logo" style={{ height: '45px', width: 'auto', display: 'block' }} />
          </Link>
        </div>
        <nav className="nav-links">
          <Link href="/">
            <a className={`nav-link ${isHomeActive ? 'active' : ''}`}>Home</a>
          </Link>
          <Link href="/overview">
            <a className={`nav-link ${isOverviewActive ? 'active' : ''}`}>Guides</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
