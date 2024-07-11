// src/App.jsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './pages/MainLayout';

const App = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

export default App;
