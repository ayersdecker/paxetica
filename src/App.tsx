import React, { useState } from 'react';
import FloatingTopNavBar from './components/FloatingTopNavBar';
import DarkModeToggle from './components/DarkModeToggle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AestheticPage from './pages/AestheticPage';
import FlourishPage from './pages/FlourishPage';
import InitiumPage from './pages/InitiumPage';
import EnzymePage from './pages/EnzymePage';
import SignUpPage from './pages/SignUpPage';
import RequireAuth from './components/RequireAuth';

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
    <Router>
      <FloatingTopNavBar />
      <DarkModeToggle darkMode={darkMode} onToggle={() => setDarkMode((d) => !d)} />
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/aesthetic"
          element={
            <RequireAuth>
              <AestheticPage />
            </RequireAuth>
          }
        />
        <Route
          path="/flourish"
          element={
            <RequireAuth>
              <FlourishPage />
            </RequireAuth>
          }
        />
        <Route
          path="/initium"
          element={
            <RequireAuth>
              <InitiumPage />
            </RequireAuth>
          }
        />
        <Route
          path="/enzyme"
          element={
            <RequireAuth>
              <EnzymePage />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;


