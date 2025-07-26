import React, { useState } from 'react';
import FloatingTopNavBar from './components/FloatingTopNavBar';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Add/remove .dark-mode class on body for color inversion
  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <>
      <FloatingTopNavBar />
      <DarkModeToggle darkMode={darkMode} onToggle={() => setDarkMode((d) => !d)} />
    </>
  );
}

export default App;


