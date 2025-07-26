import React from 'react';

function AestheticPage() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 'calc(60px + 20px)', // 60px nav bar height + 20px spacing
        left: 20,
        right: 20,
        bottom: 'calc(60px + 20px)', // 60px dark toggle height + 20px spacing
        background: 'rgba(255, 255, 255, 0.29)', // semi-transparent
        borderRadius: '1.5rem',
        boxShadow: '0 8px 48px rgba(0,0,0,0.12)', // darker shadow
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div style={{ position: 'absolute', top: 24, right: 32, zIndex: 2 }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#444', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))' }}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09c.7 0 1.3-.4 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06c.43.43 1.06.56 1.82.33h.09c.7 0 1.3-.4 1.51-1V3a2 2 0 0 1 4 0v.09c0 .7.4 1.3 1 1.51.76.23 1.39.1 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09c0 .7.4 1.3 1 1.51.76.23 1.39.1 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09c0 .7.4 1.3 1 1.51z" />
        </svg>
      </div>
        <h1 style={{ color: '#333', fontSize: '2rem', marginBottom: '1rem' }}>Content Area</h1>

    </div>
  );
}

export default AestheticPage;
