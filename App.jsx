// src/App.jsx

import React from 'react';
import CustomerRegistrationForm from './pages/CustomerRegistrationForm';
import CustomerList from './pages/CustomerList';
import CustomerDetail from './pages/CustomerDetail';
import MerchantList from './pages/MerchantList';
import MerchantRegistrationForm from './pages/MerchantRegistrationForm';

const App = () => {
  return (
    <div>
      <h1>Customer Registration and List</h1>
      <CustomerRegistrationForm />
      <CustomerList />
      <CustomerDetail />
      <MerchantList/>
      <MerchantRegistrationForm/>
    </div>
  );
};

export default App;
