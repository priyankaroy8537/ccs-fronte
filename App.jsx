// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MainLayout from './pages/MainLayout';
// import CustomerLoginForm from './pages/CustomerLoginForm';
// import CustomerDashboard from './pages/CustomerDashboard';
// import ProductType from './pages/ProductType';


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MainLayout />} />
//         <Route path="/login" element={<CustomerLoginForm />} />
//         <Route path="/customer-dashboard/:customerId/*" element={<CustomerDashboard />} />
//          <Route path="/products" element={<ProductType />} /> 
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import CustomerLoginForm from './pages/CustomerLoginForm';
import CustomerDashboard from './pages/CustomerDashboard';
import ProductType from './pages/ProductType';
//import CustomerNavBar from './pages/CustomerNavBar';
import TransactionForm from './pages/TransactionForm';
import TransactionDetails from './pages/TransactionDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/login" element={<CustomerLoginForm />} />
        <Route path="/customer-dashboard/:customerId/*" element={<CustomerDashboard />}>
          <Route path="transaction-form" element={<TransactionForm />} />
          <Route path="transactions/:transactionType" element={<TransactionDetails />} />
          {/* Add other nested routes for CustomerDashboard as needed */}
        </Route>
        <Route path="/products" element={<ProductType />} />
      </Routes>
    </Router>
  );
};

export default App;
