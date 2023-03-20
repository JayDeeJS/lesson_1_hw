import React from 'react';
import NavBar from './components/navBar/NavBar';
import AppRouter from './router/AppRouter';
import './index.css';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <AppRouter/>
    </div>
  );
}

export default App;