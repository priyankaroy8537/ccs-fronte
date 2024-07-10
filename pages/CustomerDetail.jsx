// src/pages/CustomerDetail.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CustomerDetail = () => {
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/customers/${id}`);
        setCustomer(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomer();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!customer) return <p>No customer found</p>;

  return (
    <div>
      <h1>Customer Detail</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>PAN</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{customer.id}</td>
            <td>{customer.name}</td>
            <td>{customer.dateOfBirth}</td>
            <td>{customer.address}</td>
            <td>{customer.mobile}</td>
            <td>{customer.pan}</td>
            <td>{customer.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerDetail;
