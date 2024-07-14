// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import CustomerNavBar from '../pages/CustomerNavBar';
// import CustomerDetails from './CustomerDetails';
// import Transactions from './Transactions';
// import IssueCreditCard from './IssueCreditCard';

// const CustomerDashboard = () => {
//   return (
//     <div>
//       <CustomerNavBar />
//       <Routes>
//         <Route path="customer-details" element={<CustomerDetails />} />
//         <Route path="transactions" element={<Transactions />} />
//         <Route path="issue-credit-card" element={<IssueCreditCard />} />
//       </Routes>
//     </div>
//   );
// };

// export default CustomerDashboard;
import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import CustomerNavBar from '../pages/CustomerNavBar';
import CustomerDetails from './CustomerDetails';
import Transactions from './Transactions';
import IssueCreditCard from './IssueCreditCard';

const CustomerDashboard = () => {
  const { customerId } = useParams();
console.log(customerId);
  return (
    <div>
      <CustomerNavBar />
      <Routes>
        <Route path="customer-details" element={<CustomerDetails customerId={customerId} />} />
        <Route path="transactions" element={<Transactions customerId={customerId} />} />
        <Route path="issue-credit-card" element={<IssueCreditCard customerId={customerId} />} />
      </Routes>
    </div>
  );
};

export default CustomerDashboard;
