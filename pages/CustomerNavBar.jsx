// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import '../style/CustomerNavBar.css'; // Ensure this path is correct for your CSS

// const CustomerNavBar = () => {
    
//   return (
//     <nav className="customer-nav-bar">
//       <NavLink to="/customer-dashboard/:customerId/customer-details" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//         Customer Details
//       </NavLink>
//       <NavLink to="/customer-dashboard/transactions" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//         Transactions
//       </NavLink>
//       <NavLink to="/customer-dashboard/issue-credit-card" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//         Issue Credit Card
//       </NavLink>

//     </nav>
//   );
// };

// export default CustomerNavBar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/CustomerNavBar.css'; // Ensure this path is correct for your CSS

const CustomerNavBar = ({ customerId }) => {
  return (
    <nav className="customer-nav-bar">
      <NavLink to={`/customer-dashboard/${customerId}/customer-details`} className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Customer Details
      </NavLink>
      <NavLink to={`/customer-dashboard/${customerId}/transactions`} className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Transactions
      </NavLink>
      <NavLink to={`/customer-dashboard/${customerId}/credit-carddetails`} className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Credit Card Details
      </NavLink>
    </nav>
  );
};

export default CustomerNavBar;
