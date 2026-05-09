import React, { useState } from 'react';
import { calculateAwakeningNeeds } from '../../utils/awakeningCalc';

const accentColor = '#f6c177';

const RARITY_COLORS = {
  blue:    '#9ccfd8',
  purple:  '#c4a7e7',
  yellow:  '#f6c177',
  red:     '#eb6f92',
  lattice: '#31748f',
};

// For each deficit material, the lower-tier alternatives that could cover it.
// ratio = how many of the lower-tier material equal 1 of the deficit material.
const TIER_EQUIVALENTS = {
  gp3:     [{ label: 'GP 2',     rarity: 'purple', ratio: 5  }, { label: 'GP',       rarity: 'blue',   ratio: 25 }],
  gp2:     [{ label: 'GP',       rarity: 'blue',   ratio: 5  }],
  shadow3: [{ label: 'Shadow 2', rarity: 'yellow', ratio: 5  }, { label: 'Shadow 1', rarity: 'purple', ratio: 20 }, { label: 'Shadow 0', rarity: 'blue', ratio: 60 }],
  shadow2: [{ label: 'Shadow 1', rarity: 'purple', ratio: 4  }, { label: 'Shadow 0', rarity: 'blue',   ratio: 12 }],
  shadow1: [{ label: 'Shadow 0', rarity: 'blue',   ratio: 3  }],
};

const MATERIAL_GROUPS = [
  {
    label: 'Experience',
    items: [
      { key: 'xp', label: 'XP', required: 350, rarity: 'blue' },
    ],
  },
  {
    label: 'Growth Points',
    sublabel: '5 GP = 1 GP 2 · 5 GP 2 = 1 GP 3',
    items: [
      { key: 'gp',  label: 'GP',   required: 1500, rarity: 'blue'   },
      { key: 'gp2', label: 'GP 2', required: 600,  rarity: 'purple' },
      { key: 'gp3', label: 'GP 3', required: 200,  rarity: 'yellow' },
    ],
  },
  {
    label: 'Shadowprints',
    sublabel: '3 blue = 1 purple · 4 purple = 1 yellow · 5 yellow = 1 red · Shadow 0 req is 0 (all surplus)',
    items: [
      { key: 'shadow0', label: 'Shadow 0', required: 0,  rarity: 'blue'   },
      { key: 'shadow1', label: 'Shadow 1', required: 45, rarity: 'purple' },
      { key: 'shadow2', label: 'Shadow 2', required: 20, rarity: 'yellow' },
      { key: 'shadow3', label: 'Shadow 3', required: 8,  rarity: 'red'    },
    ],
  },
  {
    label: 'Lattice',
    sublabel: 'Cannot be converted — must be farmed directly',
    items: [
      { key: 'lattice', label: 'Lattice', required: 12, rarity: 'lattice' },
    ],
  },
];

function InputField({ item, value, onChange }) {
  const [focused, setFocused] = useState(false);
  const color = RARITY_COLORS[item.rarity];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '140px', flex: '1 1 140px', maxWidth: '200px' }}>
      <label style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color }}>
        {item.label}
        {item.required > 0 && (
          <span style={{ color: '#555', fontWeight: 400, textTransform: 'none', letterSpacing: 0, marginLeft: '6px' }}>
            / {item.required}
          </span>
        )}
      </label>
      <input
        type="number"
        min="0"
        value={value}
        onChange={e => onChange(item.key, e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="0"
        style={{
          width: '100%',
          padding: '8px 12px',
          backgroundColor: '#111',
          border: `1px solid ${focused ? color : 'rgba(255,255,255,0.1)'}`,
          borderRadius: '4px',
          color: '#e0def4',
          fontFamily: 'var(--font-primary)',
          fontSize: '1rem',
          outline: 'none',
          transition: 'border-color 0.15s ease',
        }}
      />
    </div>
  );
}

function ResultCard({ item }) {
  const color = RARITY_COLORS[item.rarity];
  return (
    <div style={{
      padding: '12px 20px',
      backgroundColor: 'rgba(0,0,0,0.3)',
      border: `1px solid ${color}44`,
      borderLeft: `3px solid ${color}`,
      borderRadius: '4px',
      display: 'flex',
      flexDirection: 'column',
      gap: '3px',
      minWidth: '110px',
    }}>
      <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color }}>
        {item.label}
      </span>
      <span style={{ fontSize: '1.75rem', fontWeight: 900, fontFamily: 'var(--font-display)', color: '#e0def4', lineHeight: 1 }}>
        {item.amount}
      </span>
    </div>
  );
}

export default function AwakeningCalculator() {
  const [inputs, setInputs] = useState({
    xp: '', gp: '', gp2: '', gp3: '',
    shadow0: '', shadow1: '', shadow2: '', shadow3: '',
    lattice: '',
  });
  const [result, setResult] = useState(null);

  function handleChange(key, value) {
    setInputs(prev => ({ ...prev, [key]: value }));
    setResult(null);
  }

  function handleCalculate() {
    setResult(calculateAwakeningNeeds(inputs));
  }

  function handleReset() {
    setInputs({ xp: '', gp: '', gp2: '', gp3: '', shadow0: '', shadow1: '', shadow2: '', shadow3: '', lattice: '' });
    setResult(null);
  }

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--color-black)', minHeight: '100vh', color: 'var(--color-white)' }}>

      {/* ── Hero ── */}
      <section style={{
        backgroundColor: 'var(--color-black)',
        borderBottom: `1px solid ${accentColor}`,
        position: 'relative',
        overflow: 'hidden',
        padding: 'var(--spacing-xxl) 0',
      }}>
        <div style={{
          position: 'absolute', top: '50%', right: '10%',
          transform: 'translateY(-50%)',
          width: '500px', height: '500px',
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
          opacity: 0.10, pointerEvents: 'none', zIndex: 1,
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <span style={{ fontWeight: 900, fontSize: '1.2rem', padding: '4px 16px', backgroundColor: accentColor, color: 'var(--color-black)' }}>
                CALCULATOR
              </span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '4.5rem',
              textTransform: 'uppercase', lineHeight: 1, letterSpacing: '-2px',
              marginBottom: 'var(--spacing-md)', textShadow: '6px 6px 0px var(--color-black)',
            }}>
              Full Awakening
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.9, lineHeight: '1.6' }}>
              Enter how many materials you currently have. The calculator accounts for upward tier conversions automatically and shows exactly what you still need to farm.
            </p>
          </div>
        </div>
      </section>

      {/* ── Form ── */}
      <section style={{ padding: 'var(--spacing-xl) 0 var(--spacing-xxl)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>

          {MATERIAL_GROUPS.map(group => (
            <div key={group.label} style={{ marginBottom: '2.5rem' }}>
              <div style={{ marginBottom: '0.75rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-subtle)',
                }}>
                  {group.label}
                </span>
                {group.sublabel && (
                  <span style={{ marginLeft: '12px', fontSize: '0.75rem', color: '#555', fontStyle: 'italic' }}>
                    {group.sublabel}
                  </span>
                )}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {group.items.map(item => (
                  <InputField
                    key={item.key}
                    item={item}
                    value={inputs[item.key]}
                    onChange={handleChange}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* ── Actions ── */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={handleCalculate}
              className="btn"
              style={{
                backgroundColor: accentColor, color: '#000', border: 'none',
                fontSize: '1rem', padding: '0.75rem 2.5rem', fontWeight: 900,
              }}
            >
              Calculate
            </button>
            <button
              onClick={handleReset}
              style={{
                background: 'none',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '6px',
                color: '#666',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                padding: '0.75rem 1.5rem',
                cursor: 'pointer',
                transition: 'color 0.15s ease, border-color 0.15s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#aaa'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#666'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
            >
              Reset
            </button>
          </div>

          {/* ── Result ── */}
          {result && (
            <div style={{ marginTop: '2.5rem' }}>
              {result.complete ? (
                <div style={{
                  padding: '1.5rem 2rem',
                  backgroundColor: 'rgba(156, 207, 216, 0.07)',
                  border: '1px solid rgba(156, 207, 216, 0.3)',
                  borderRadius: '6px',
                  color: '#9ccfd8',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.3rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}>
                  ✓ You have enough for a full awakening!
                </div>
              ) : (
                <>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem',
                    textTransform: 'uppercase', letterSpacing: '0.1em',
                    color: 'var(--color-subtle)', marginBottom: '1rem',
                  }}>
                    Still needed
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    {result.needed.map(item => <ResultCard key={item.key} item={item} />)}
                  </div>

                  {result.conversions.length > 0 && (
                    <div style={{
                      padding: '1rem 1.25rem',
                      backgroundColor: 'rgba(246,193,119,0.05)',
                      border: '1px solid rgba(246,193,119,0.15)',
                      borderRadius: '4px',
                      marginBottom: '1rem',
                    }}>
                      <div style={{
                        fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase',
                        letterSpacing: '0.08em', color: '#f6c177', marginBottom: '0.5rem',
                      }}>
                        Conversions applied
                      </div>
                      {result.conversions.map((line, i) => (
                        <div key={i} style={{ fontSize: '0.875rem', color: '#777', lineHeight: '1.9' }}>
                          {line}
                        </div>
                      ))}
                    </div>
                  )}

                  {result.needed.some(n => TIER_EQUIVALENTS[n.key]) && (
                    <div style={{
                      padding: '1rem 1.25rem',
                      backgroundColor: 'rgba(156,207,216,0.04)',
                      border: '1px solid rgba(156,207,216,0.12)',
                      borderRadius: '4px',
                    }}>
                      <div style={{
                        fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase',
                        letterSpacing: '0.08em', color: '#9ccfd8', marginBottom: '0.75rem',
                      }}>
                        Farming equivalents
                      </div>
                      {result.needed.filter(n => TIER_EQUIVALENTS[n.key]).map(item => {
                        const alts = TIER_EQUIVALENTS[item.key];
                        return (
                          <div key={item.key} style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '6px', marginBottom: '0.5rem', lineHeight: 1.6 }}>
                            <span style={{ fontSize: '0.8rem', color: RARITY_COLORS[item.rarity], fontWeight: 700, minWidth: '80px' }}>
                              {item.amount} {item.label}
                            </span>
                            <span style={{ fontSize: '0.8rem', color: '#444' }}>=</span>
                            {alts.map((alt, i) => (
                              <React.Fragment key={alt.label}>
                                <span style={{ fontSize: '0.8rem', color: '#aaa' }}>
                                  <span style={{ fontWeight: 700, color: RARITY_COLORS[alt.rarity] }}>{item.amount * alt.ratio}</span>
                                  {' '}{alt.label}
                                </span>
                                {i < alts.length - 1 && <span style={{ fontSize: '0.8rem', color: '#333' }}>or</span>}
                              </React.Fragment>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          <p style={{ marginTop: '3rem', fontSize: '0.85rem', color: '#444', fontStyle: 'italic' }}>
            GP conversions: 5:1 per step. Shadow conversions: 3:1 (blue→purple), 4:1 (purple→yellow), 5:1 (yellow→red). Higher-tier materials are never converted downward.
          </p>
        </div>
      </section>
    </main>
  );
}
