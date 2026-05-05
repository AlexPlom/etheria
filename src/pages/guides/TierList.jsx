import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import generalMd    from '../../data/tierlists/general.md?raw';
import investmentMd from '../../data/tierlists/investment.md?raw';
import pveMd        from '../../data/tierlists/pve.md?raw';
import pvpMd        from '../../data/tierlists/pvp.md?raw';

const accentColor = '#FF3B30';

const TIER_COLORS = {
  S:             { color: '#FFD600', bg: 'rgba(255, 214, 0, 0.12)',    border: 'rgba(255, 214, 0, 0.35)'    },
  A:             { color: '#FF3B30', bg: 'rgba(255, 59, 48, 0.12)',    border: 'rgba(255, 59, 48, 0.35)'    },
  B:             { color: '#FF9500', bg: 'rgba(255, 149, 0, 0.12)',    border: 'rgba(255, 149, 0, 0.35)'    },
  C:             { color: '#0047FF', bg: 'rgba(0, 71, 255, 0.12)',     border: 'rgba(0, 71, 255, 0.35)'     },
  D:             { color: '#888888', bg: 'rgba(136, 136, 136, 0.08)',  border: 'rgba(136, 136, 136, 0.25)'  },
  Undistributed: { color: '#333333', bg: 'rgba(30, 30, 30, 0.6)',      border: 'rgba(80, 80, 80, 0.3)'      },
};

function parseTierMarkdown(markdown) {
  return markdown
    .split(/^## /m)
    .filter(Boolean)
    .map(section => {
      const lines = section.trim().split('\n');
      const label = lines[0].trim();
      const characters = lines
        .slice(1)
        .filter(l => l.trim().startsWith('-'))
        .map(l => {
          const raw  = l.replace(/^-\s*/, '').trim();
          const match = raw.match(/^(.+?)\s*\((.+)\)\s*$/);
          return match
            ? { name: match[1].trim(), note: match[2].trim() }
            : { name: raw, note: null };
        })
        .filter(c => c.name);
      return { label, ...TIER_COLORS[label], characters };
    })
    .filter(t => t.label in TIER_COLORS && t.characters.length > 0);
}

const tierData = {
  general:    parseTierMarkdown(generalMd),
  investment: parseTierMarkdown(investmentMd),
  pve:        parseTierMarkdown(pveMd),
  pvp:        parseTierMarkdown(pvpMd),
};

const TABS = [
  { key: 'general',    label: 'General'         },
  { key: 'investment', label: 'Investment Worth' },
  { key: 'pve',        label: 'PvE'             },
  { key: 'pvp',        label: 'PvP'             },
];

function buildImageLookup(characters) {
  const map = {};
  for (const c of characters) {
    const card    = c.images?.find(i => i.kind === 'card');
    const profile = c.images?.find(i => i.kind === 'profile');
    const img     = card ?? profile;
    map[c.name] = {
      slug:     c.slug,
      imageUrl: img ? `/${img.local_path}` : '/assets/placeholder.webp',
    };
  }
  return map;
}

function CharacterPortrait({ name, note, lookup, tierColor }) {
  const [hovered, setHovered] = useState(false);
  const info     = lookup[name];
  const slug     = info?.slug     ?? name.toLowerCase().replace(/\s+/g, '-');
  const imageUrl = info?.imageUrl ?? '/assets/placeholder.webp';

  return (
    <Link href={`/character/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', width: '80px', cursor: 'pointer', position: 'relative' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Tooltip */}
        {note && hovered && (
          <div style={{
            position: 'absolute',
            bottom: 'calc(100% + 8px)',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '180px',
            backgroundColor: '#0a0a0a',
            border: `1px solid ${tierColor}`,
            padding: '8px 10px',
            fontSize: '0.75rem',
            lineHeight: '1.4',
            color: '#ddd',
            zIndex: 100,
            pointerEvents: 'none',
            boxShadow: `0 4px 16px rgba(0,0,0,0.7), 0 0 0 1px ${tierColor}22`,
          }}>
            <div style={{ fontWeight: 700, color: tierColor, marginBottom: '4px', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{name}</div>
            {note}
            {/* Arrow */}
            <div style={{
              position: 'absolute',
              bottom: '-5px',
              left: '50%',
              transform: 'translateX(-50%) rotate(45deg)',
              width: '8px',
              height: '8px',
              backgroundColor: '#0a0a0a',
              borderRight: `1px solid ${tierColor}`,
              borderBottom: `1px solid ${tierColor}`,
            }} />
          </div>
        )}

        <div style={{
          width: '80px',
          height: '80px',
          overflow: 'hidden',
          border: `1px solid ${hovered ? tierColor : 'rgba(255,255,255,0.1)'}`,
          backgroundColor: '#111',
          flexShrink: 0,
          transition: 'border-color 0.15s ease, transform 0.15s ease',
          transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        }}>
          <img
            src={imageUrl}
            alt={name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
            onError={e => { e.target.src = '/assets/placeholder.webp'; }}
          />
        </div>
        <span style={{
          fontSize: '0.7rem',
          fontWeight: 600,
          textAlign: 'center',
          color: hovered ? '#fff' : '#ddd',
          lineHeight: 1.2,
          maxWidth: '80px',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          transition: 'color 0.15s ease',
        }}>
          {name}
        </span>
      </div>
    </Link>
  );
}

function TierRow({ tier, lookup }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'stretch',
      border: `1px solid ${tier.border}`,
      backgroundColor: tier.bg,
      minHeight: '110px',
    }}>
      <div style={{
        width: tier.label === 'Undistributed' ? '120px' : '72px',
        minWidth: tier.label === 'Undistributed' ? '120px' : '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: tier.color,
        color: tier.label === 'Undistributed' ? '#888' : '#000',
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: tier.label === 'Undistributed' ? '0.75rem' : '2.5rem',
        letterSpacing: tier.label === 'Undistributed' ? '0.08em' : '-1px',
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: '0 8px',
        flexShrink: 0,
      }}>
        {tier.label}
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 16px',
        flexGrow: 1,
      }}>
        {tier.characters.map(({ name, note }) => (
          <CharacterPortrait key={name} name={name} note={note} lookup={lookup} tierColor={tier.color} />
        ))}
      </div>
    </div>
  );
}

export default function TierList() {
  const [activeTab, setActiveTab]   = useState('general');
  const [lookup, setLookup]         = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('/data/characters.json')
      .then(r => r.json())
      .then(data => setLookup(buildImageLookup(data)));
  }, []);

  const tiers = tierData[activeTab];

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--color-black)', minHeight: '100vh', color: 'var(--color-white)' }}>
      {/* Hero */}
      <section style={{
        backgroundColor: 'var(--color-black)',
        color: 'var(--color-white)',
        borderBottom: `var(--border-width) solid ${accentColor}`,
        position: 'relative',
        overflow: 'hidden',
        padding: 'var(--spacing-xxl) 0',
      }}>
        <div style={{
          position: 'absolute', top: '50%', right: '10%',
          transform: 'translateY(-50%)',
          width: '600px', height: '600px',
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
          opacity: 0.12, pointerEvents: 'none', zIndex: 1, mixBlendMode: 'screen',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
              <span style={{ fontWeight: 900, fontSize: '1.2rem', padding: '4px 16px', backgroundColor: accentColor, color: 'var(--color-black)' }}>TIER LIST</span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '4.5rem',
              textTransform: 'uppercase', lineHeight: 1, letterSpacing: '-2px',
              marginBottom: 'var(--spacing-md)', textShadow: '6px 6px 0px var(--color-black)',
            }}>
              Unit Tier List
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.9, lineHeight: '1.6' }}>
              A ranking of all SSR units across general use, PvE content, and PvP. Rankings reflect overall value to your account at reasonable investment levels.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ padding: 'var(--spacing-xl) 0 0' }}>
        <div className="container">
          <div className="card" style={{ '--card-shadow': accentColor, height: 'auto', display: 'flex', flexDirection: 'column', marginBottom: 'var(--spacing-xl)' }}>
            <div style={{ padding: 'var(--spacing-md)', backgroundColor: accentColor, borderBottom: 'var(--border-width) solid var(--color-black)', color: 'var(--color-black)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.5rem', textTransform: 'uppercase' }}>About This Tier List</h3>
            </div>
            <div style={{ padding: 'var(--spacing-lg)', backgroundColor: '#1A1A1A', color: 'var(--color-white)', flexGrow: 1, fontSize: '1.1rem', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '1rem' }}>
                This tier list reflects my personal experience and opinion after extensive play time. Rankings are based on <strong>overall account value</strong> — how much a unit improves your progression across all content, not just one mode.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Units are evaluated on <strong>damage output</strong>, <strong>team synergy</strong>, <strong>versatility</strong> (PvE story, investigation, RTA, GvG), and <strong>investment efficiency</strong> at minimum vs. full investment.
              </p>
              <p style={{ marginBottom: 0, color: '#AAA', fontStyle: 'italic' }}>
                Limited units are rated at base value without copies. The PvE and PvP tabs reflect mode-specific performance — a unit strong in PvE may have a lower PvP ranking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs + Tier List */}
      <section style={{ padding: '0 0 var(--spacing-xxl)' }}>
        <div className="container">
          {/* Tab Bar */}
          <div style={{ display: 'flex', gap: '0', marginBottom: '1.5rem', borderBottom: `2px solid rgba(255,255,255,0.08)` }}>
            {TABS.map(tab => {
              const active = tab.key === activeTab;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  style={{
                    padding: '10px 28px',
                    background: 'none',
                    border: 'none',
                    borderBottom: active ? `3px solid ${accentColor}` : '3px solid transparent',
                    marginBottom: '-2px',
                    color: active ? accentColor : '#888',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    transition: 'color 0.15s ease',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tier Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {tiers.map(tier => (
              <TierRow key={tier.label} tier={tier} lookup={lookup} />
            ))}
          </div>

          <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#555', textAlign: 'right', fontStyle: 'italic' }}>
            Last updated: May 2026
          </p>
        </div>
      </section>
    </main>
  );
}
