import React from 'react';
import '../styles/taglines.css';

export const Taglines = ({ phase }: { phase: number }) => {
  return (
    <div className="taglines-container">
      <div className={`tagline primary ${phase >= 3 ? 'visible' : ''}`}>
        TRANSCEND THE DIGITAL FRONTIER
      </div>
      <div className={`tagline secondary ${phase >= 4 ? 'visible' : ''}`}>
        WHERE IMAGINATION MEETS INFINITY
      </div>
    </div>
  );
};