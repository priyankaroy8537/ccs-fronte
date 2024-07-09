// src/App.jsx

import React from 'react';
import CustomerRegistrationForm from './pages/CustomerRegistrationForm';
import CustomerList from './pages/CustomerList';

const App = () => {
  return (
    <div>
      <h1>Customer Registration and List</h1>
      <CustomerRegistrationForm />
      <CustomerList />
    </div>
  );
};

export default App;
