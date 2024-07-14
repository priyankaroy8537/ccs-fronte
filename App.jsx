import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import CustomerLoginForm from './pages/CustomerLoginForm';
import CustomerDashboard from './pages/CustomerDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/login" element={<CustomerLoginForm />} />
        <Route path="/customer-dashboard/*" element={<CustomerDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
