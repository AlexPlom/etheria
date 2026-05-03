import React, { useEffect } from 'react';
import { Link } from 'wouter';

export default function NewbieGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const accentColor = '#FF9500'; // Amber color used in Overview.jsx

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--color-black)', minHeight: '100vh', color: 'var(--color-white)' }}>
      {/* Hero Section */}
      <section style={{ 
        backgroundColor: 'var(--color-black)', 
        color: 'var(--color-white)', 
        borderBottom: `var(--border-width) solid ${accentColor}`, 
        position: 'relative', 
        overflow: 'hidden',
        padding: 'var(--spacing-xxl) 0'
      }}>
        
        {/* Subtle Ambient Glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '10%',
          transform: 'translateY(-50%)',
          width: '600px',
          height: '600px',
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
          opacity: 0.15,
          pointerEvents: 'none',
          zIndex: 1,
          mixBlendMode: 'screen'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
              <span style={{ fontWeight: 900, fontSize: '1.2rem', padding: '4px 16px', backgroundColor: accentColor, color: 'var(--color-black)' }}>GUIDE</span>
            </div>
            
            <h1 style={{ 
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: '4.5rem',
              textTransform: 'uppercase',
              lineHeight: 1,
              letterSpacing: '-2px',
              textAlign: 'left', 
              marginBottom: 'var(--spacing-md)', 
              textShadow: '6px 6px 0px var(--color-black)' 
            }}>
              General Newbie Advice
            </h1>
            
            <p style={{ fontSize: '1.2rem', opacity: 0.9, lineHeight: '1.6' }}>
              Welcome to Etheria: Restart! This comprehensive guide covers everything you need to know as a beginner—from rerolling and early-game progression to optimal team building and shop exchange priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Compartments Grid */}
      <section className="section" style={{ padding: 'var(--spacing-xl) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--spacing-lg)' }}>
            
            {/* Rerolling */}
            <div className="card" style={{ '--card-shadow': accentColor, height: 'auto', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: 'var(--spacing-md)', backgroundColor: accentColor, borderBottom: 'var(--border-width) solid var(--color-black)', color: 'var(--color-black)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.5rem', textTransform: 'uppercase' }}>Rerolling Strategy</h3>
              </div>
              <div style={{ padding: 'var(--spacing-lg)', backgroundColor: '#1A1A1A', color: 'var(--color-white)', flexGrow: 1, fontSize: '1.1rem', lineHeight: '1.6' }}>
                <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li>You want at least 1 premier unit like <strong>Raymerry</strong> or <strong>Xuan Li</strong>. They will dramatically improve your clear speed.</li>
                  <li>Target only <strong>Plume</strong> from her LD banner.</li>
                  <li>Delay your Day 2 SSR Selector until you have pulled a good amount on Permanent Banner (purple discs). Then if you don't have <strong>Lily</strong>, pick her. If you have Lily, you can delay picking and choose based on your pulls.</li>
                  <li>SR Diting (the purple one) is extremely useful and clears all single target pve content so prioritize building him.</li>
                  <li>Don't spend a lot of gems for pulls (unless the limited banner is Xuan Li or Raymerry).</li>
                </ul>
              </div>
            </div>

            {/* Early Game Checklist */}
            <div className="card" style={{ '--card-shadow': accentColor, height: 'auto', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: 'var(--spacing-md)', backgroundColor: accentColor, borderBottom: 'var(--border-width) solid var(--color-black)', color: 'var(--color-black)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.5rem', textTransform: 'uppercase' }}>Early Game Priorities</h3>
              </div>
              <div style={{ padding: 'var(--spacing-lg)', backgroundColor: '#1A1A1A', color: 'var(--color-white)', flexGrow: 1, fontSize: '1.1rem', lineHeight: '1.6' }}>
                <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li>Clear the story when you have a chapter available.</li>
                  <li>The most expensive currency is <strong>Golden Lattice</strong> for Skill ups. Don't waste them.</li>
                  <li>Prioritize doing whatever the Hyperlink Charter tells you to do.</li>
                  <li>Do your dailies and weeklies.</li>
                  <li>Level up your main DPS first and then Plume/Lily.</li>
                  <li>Do any event you have since they are generally generous.</li>
                  <li>When you hit level/chapter bottlenecks, do Investigation or GP Outpost for units you want to level up.</li>
                  <li>Shadowprints (promoting material) are timegated, so don't fret if you don't have enough for multiple 5-star units.</li>
                  <li><strong style={{ color: accentColor }}>MAX REFRESH ENERGY EVERY DAY.</strong> Abuse your 2x 14-day event for new accounts as much as possible and get to inferno as fast as possible.</li>
                </ul>
              </div>
            </div>

            {/* Team Building */}
            <div className="card" style={{ '--card-shadow': accentColor, height: 'auto', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: 'var(--spacing-md)', backgroundColor: accentColor, borderBottom: 'var(--border-width) solid var(--color-black)', color: 'var(--color-black)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.5rem', textTransform: 'uppercase' }}>Team Building</h3>
              </div>
              <div style={{ padding: 'var(--spacing-lg)', backgroundColor: '#1A1A1A', color: 'var(--color-white)', flexGrow: 1, fontSize: '1.1rem', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '1rem' }}>Lian initially is ok, but you will reset her after you complete Animus Fates I in Hyperlink Charter.</p>
                <p style={{ marginBottom: '0.5rem', fontWeight: 'bold', color: accentColor }}>Optimal Initial Team Structure:</p>
                <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li><strong>Buffer:</strong> Lily</li>
                  <li><strong>Main DPS:</strong> Raymerry or Xuan Li</li>
                  <li><strong>Second DPS:</strong> Anything like SR Diting</li>
                  <li><strong>Debuffer:</strong> Plume (Kloss and Viper are ok too, but avoid investing Lattice in Kloss)</li>
                  <li><strong>Healer:</strong> Lingluo (Day 7 login). Valerian/Sania are great SR units that do most of the part for some content.</li>
                </ul>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#AAA' }}>Priority: Level your DPS first, and then Plume and Lily.</p>
              </div>
            </div>

            {/* Lattice Investments */}
            <div className="card" style={{ '--card-shadow': accentColor, height: 'auto', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: 'var(--spacing-md)', backgroundColor: accentColor, borderBottom: 'var(--border-width) solid var(--color-black)', color: 'var(--color-black)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.5rem', textTransform: 'uppercase' }}>Lattice Investments</h3>
              </div>
              <div style={{ padding: 'var(--spacing-lg)', backgroundColor: '#1A1A1A', color: 'var(--color-white)', flexGrow: 1, fontSize: '1.1rem', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '1rem' }}>Be careful where you spend your Golden Lattices. They are the main boost to your characters stats and skills.</p>
                
                <div style={{ backgroundColor: '#000', padding: '1rem', borderLeft: `4px solid ${accentColor}`, marginBottom: '1rem' }}>
                  <strong>Notation Guide:</strong><br />
                  <code style={{ color: accentColor }}>111</code> = S1 no investment, S2 level 1, S3 level 1.<br />
                  <code style={{ color: accentColor }}>555</code> = all skills at level 5.<br />
                  <code style={{ color: accentColor }}>515</code> = S1 level 5, S2 level 1, S3 level 5.
                </div>

                <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Early Game Priorities & Minimums:</p>
                <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li><strong>Plume:</strong> S3 &gt; S1 <span style={{ color: '#888' }}>(Min: 415)</span></li>
                  <li><strong>Lily:</strong> S1 <span style={{ color: '#888' }}>(Min: 511)</span></li>
                  <li><strong>Raymerry:</strong> S3 &gt; S1 &gt; S2 <span style={{ color: '#888' }}>(Min: 555)</span></li>
                  <li><strong>SR Diting:</strong> S3 &gt; S2 &gt; S1 <span style={{ color: '#888' }}>(Min: 555)</span></li>
                  <li><strong>Lingluo:</strong> Doesn't need lattice for PvE <span style={{ color: '#888' }}>(Min: 511)</span></li>
                  <li><strong>Xuan Li:</strong> S3 &gt; S1 &gt; S2 <span style={{ color: '#888' }}>(Min: 515)</span></li>
                </ul>
              </div>
            </div>

            {/* Social */}
            <div className="card" style={{ '--card-shadow': accentColor, height: 'auto', display: 'flex', flexDirection: 'column', gridColumn: '1 / -1' }}>
              <div style={{ padding: 'var(--spacing-md)', backgroundColor: accentColor, borderBottom: 'var(--border-width) solid var(--color-black)', color: 'var(--color-black)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.5rem', textTransform: 'uppercase' }}>Social & Unions</h3>
              </div>
              <div style={{ padding: 'var(--spacing-lg)', backgroundColor: '#1A1A1A', color: 'var(--color-white)', flexGrow: 1, fontSize: '1.1rem', lineHeight: '1.6', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 300px' }}>
                  <h4 style={{ color: accentColor, fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.2rem' }}>How to make Friends</h4>
                  <p>Ask in chat, ignore Nikos, don't take Riggerz too seriously (he means well).</p>
                </div>
                <div style={{ flex: '1 1 300px' }}>
                  <h4 style={{ color: accentColor, fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Unions</h4>
                  <p>Join whatever active union you can find (ask in chat). You will get access to a good shop that gives you some very cool stuff.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Shop Priorities - Full Width Section */}
          <h2 style={{ 
            fontFamily: 'var(--font-display)', 
            fontSize: '3rem', 
            fontWeight: 900, 
            marginTop: 'var(--spacing-xxl)', 
            marginBottom: 'var(--spacing-lg)',
            borderBottom: `2px solid var(--color-dark-gray)`,
            paddingBottom: '1rem',
            textTransform: 'uppercase',
            color: accentColor
          }}>
            Shop Exchange Priorities
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-lg)' }}>
            
            <div style={{ backgroundColor: '#111', border: '2px solid var(--color-dark-gray)', padding: 'var(--spacing-lg)' }}>
              <h3 style={{ borderBottom: `2px solid ${accentColor}`, paddingBottom: '0.5rem', marginBottom: '1rem' }}>Summon Shop</h3>
              <p>Only get yellow Lattice and Purple lattice occasionally.</p>
            </div>

            <div style={{ backgroundColor: '#111', border: '2px solid var(--color-dark-gray)', padding: 'var(--spacing-lg)' }}>
              <h3 style={{ borderBottom: `2px solid ${accentColor}`, paddingBottom: '0.5rem', marginBottom: '1rem' }}>Union Shop</h3>
              <ol style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Yellow Lattice fragments</li>
                <li>Pulls</li>
                <li>Shadowprints</li>
                <li>Whatever you need. In a good union you should be buying out the whole shop every week.</li>
              </ol>
            </div>

            <div style={{ backgroundColor: '#111', border: '2px solid var(--color-dark-gray)', padding: 'var(--spacing-lg)' }}>
              <h3 style={{ borderBottom: `2px solid ${accentColor}`, paddingBottom: '0.5rem', marginBottom: '1rem' }}>Etherena Shop</h3>
              <p>Get Lattice here if you can.</p>
            </div>

            <div style={{ backgroundColor: '#111', border: '2px solid var(--color-dark-gray)', padding: 'var(--spacing-lg)' }}>
              <h3 style={{ borderBottom: `2px solid ${accentColor}`, paddingBottom: '0.5rem', marginBottom: '1rem' }}>RTA (Summit) Shop</h3>
              <p>Get Lattice fragments, pulls, and save for <strong>Octanode</strong> (8k points). Then get Animus copy cards.</p>
            </div>

            <div style={{ backgroundColor: '#111', border: '2px solid var(--color-dark-gray)', padding: 'var(--spacing-lg)', gridColumn: '1 / -1' }}>
              <h3 style={{ borderBottom: `2px solid ${accentColor}`, paddingBottom: '0.5rem', marginBottom: '1rem' }}>Paid Shops</h3>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Never</strong> get modules from these.</li>
                <li>Most valuable are <strong>30-day pass</strong> and <strong>Battle Pass</strong> if you're a spender.</li>
                <li>The daily $1 for 5 lattice fragments is ok, but you shouldn't consider it in the beginning unless you are committing to the game for real.</li>
                <li>Any value packs that you deem are good for your account, ask in chat before buying them or in discord servers.</li>
                <li><strong>Growth Fund</strong> is insane currently, if you are a spender, get it.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
