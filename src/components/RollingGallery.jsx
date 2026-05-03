import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import './RollingGallery.css';

export default function RollingGallery() {
  const [galleryCharacters, setGalleryCharacters] = useState([]);

  useEffect(() => {
    fetch('/data/characters.json')
      .then(res => res.json())
      .then(data => {
        // Filter characters that have a fandom_image
        const fandomChars = data.filter(c => c.fandom_image);
        // Shuffle or just slice a good amount (e.g., 20) to keep the DOM reasonable
        // Duplicating the array to create a seamless infinite scroll loop
        setGalleryCharacters([...fandomChars, ...fandomChars]);
      })
      .catch(err => console.error("Error loading characters for gallery:", err));
  }, []);

  if (galleryCharacters.length === 0) return null;

  return (
    <div className="marquee-container">
      {/* Decorative gradients for the edges to fade out the scrolling images */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(to right, var(--color-black) 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(to left, var(--color-black) 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
      
      <div className="marquee-content">
        {galleryCharacters.map((char, index) => (
          <Link key={`${char.slug}-${index}`} href={`/character/${char.slug}`}>
            <a className="gallery-item">
              <img src={char.fandom_image} alt={char.name} className="gallery-image" loading="lazy" />
              <div className="gallery-name">{char.name}</div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
