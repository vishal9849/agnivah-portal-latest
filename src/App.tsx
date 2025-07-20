import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;