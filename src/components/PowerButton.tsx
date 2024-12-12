import React from 'react';
import '../styles/power-button.css';

export const PowerButton = ({ active }: { active: boolean }) => {
  return (
    <div className={`power-button ${active ? 'active' : ''}`}>
      <div className="power-ring"></div>
      <div className="power-line"></div>
    </div>
  );
};