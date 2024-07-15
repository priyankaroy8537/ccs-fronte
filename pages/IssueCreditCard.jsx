import React, { useState } from 'react';
import axios from 'axios';

const IssueCreditCard = () => {
  const [customerId, setCustomerId] = useState('');
  const [productId, setProductId] = useState('');
  const [maker, setMaker] = useState('');
  const [checker, setChecker] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/api/customers/${customerId}/issueCreditCard`, null, {
        params: {
          productId: productId,
          maker: maker,
          checker: checker
        }
      });
      setSuccess('Credit Card issued successfully');
      setError('');
    } catch (error) {
      console.error('Error issuing credit card:', error);
      setSuccess('');
      setError('Failed to issue credit card');
    }
  };

  return (
    <div>
      <h1>Issue Credit Card</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Customer ID:</label>
          <input
            type="text"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Product ID:</label>
          <input
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Maker:</label>
          <input
            type="text"
            value={maker}
            onChange={(e) => setMaker(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Checker:</label>
          <input
            type="text"
            value={checker}
            onChange={(e) => setChecker(e.target.value)}
            required
          />
        </div>
        <button type="submit">Issue Credit Card</button>
      </form>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default IssueCreditCard;
