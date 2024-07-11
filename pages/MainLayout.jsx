// src/pages/MainLayout.jsx

import React, { useState } from 'react';
import CustomerRegistrationForm from './CustomerRegistrationForm';
import CustomerLoginForm from './CustomerLoginForm';
//import MerchantLoginForm from './MerchantLoginForm';
import MerchantRegistrationForm from './MerchantRegistrationForm';
import '../style/MainLayout.css';

const MainLayout = () => {
  const [selectedForm, setSelectedForm] = useState('CustomerLoginForm');

  const renderForm = () => {
    switch (selectedForm) {
      case 'CustomerLoginForm':
        return <CustomerLoginForm />;
      case 'CustomerRegistrationForm':
        return <CustomerRegistrationForm />;
      
      case 'MerchantRegistrationForm':
        return <MerchantRegistrationForm />;
      default:
        return <CustomerLoginForm />;
    }
  };

  return (
    <div className="main-layout">
      <nav>
        <ul>
          <li onClick={() => setSelectedForm('CustomerLoginForm')}>Customer Login</li>
          <li onClick={() => setSelectedForm('CustomerRegistrationForm')}>Register Customer</li>
          <li onClick={() => setSelectedForm('MerchantRegistrationForm')}>Register Merchant</li>
        </ul>
      </nav>
      <div className="content">
        <div className="image-container">
          <img src="C:\Users\Priyanka Roy\OneDrive\Desktop\ccs-frontend\ccs\src\pages\free-images.avif" alt="Main Visual" />
        </div>
        <div className="form-container">
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
