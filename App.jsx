// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CustomerRegistrationForm from './pages/CustomerRegistrationForm';
import CustomerList from './pages/CustomerList';

import MerchantList from './pages/MerchantList';
import MerchantRegistrationForm from './pages/MerchantRegistrationForm';
import CustomerLoginForm from './pages/CustomerLoginForm';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/register-customer">Register Customer</Link>
            </li>
            <li>
              <Link to="/customers">Customer List</Link>
            </li>
            <li>
              <Link to="/merchants">Merchant List</Link>
            </li>
            <li>
              <Link to="/register-merchant">Register Merchant</Link>
            </li>
            <li>
              <Link to="/CustomerLoginForm">Customer Login Form</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/register-customer" element={<CustomerRegistrationForm />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/merchants" element={<MerchantList />} />
          <Route path="/register-merchant" element={<MerchantRegistrationForm />} />
          <Route path="/CustomerLoginForm" element={<CustomerLoginForm />}/>
          <Route path="/" element={<h1>Welcome to the XYZ Bank Credit Card Management System</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
