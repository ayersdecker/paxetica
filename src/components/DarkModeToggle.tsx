import React from 'react';

interface DarkModeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ darkMode, onToggle }) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        userSelect: 'none',
      }}
      onClick={onToggle}
    >
      <div
        style={{
          width: '56px',
          height: '32px',
          borderRadius: '16px',
          background: darkMode ? '#444' : '#ccc',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          padding: '4px',
          transition: 'background 0.3s',
        }}
      >
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: darkMode ? '#444' : '#fff',
            boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: darkMode ? 'translateX(24px)' : 'translateX(0)',
            transition: 'transform 0.3s, background 0.3s',
          }}
        >
          {darkMode ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffe066" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f7b500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default DarkModeToggle;
