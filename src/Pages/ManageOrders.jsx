// src/Pages/ManageOrders.jsx
import React, { useState } from 'react';

const ManageOrders = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'ninja', product: 'T-shirt', status: 'Pending' },
    { id: 2, customer: 'said jureij', product: 'Jeans', status: 'Fulfilled' },
    { id: 3, customer: 'Laly', product: 'Jacket', status: 'Pending' },
  ]);

  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px',
    },
    th: {
      border: '1px solid #ddd',
      padding: '10px',
      backgroundColor: '#6200ea',
      color: '#fff',
    },
    td: {
      border: '1px solid #ddd',
      padding: '10px',
      textAlign: 'center',
    },
    button: {
      padding: '8px 12px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      color: '#fff',
      marginRight: '5px',
    },
    fulfillButton: {
      backgroundColor: '#28a745',
    },
    fulfillHover: {
      backgroundColor: '#218838',
    },
    deleteButton: {
      backgroundColor: '#dc3545',
    },
    deleteHover: {
      backgroundColor: '#c82333',
    },
  };

  const handleFulfillOrder = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: 'Fulfilled' } : order
    );
    setOrders(updatedOrders);
  };

  const handleDeleteOrder = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Manage Orders</h1>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Order ID</th>
            <th style={styles.th}>Customer</th>
            <th style={styles.th}>Product</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td style={styles.td}>{order.id}</td>
              <td style={styles.td}>{order.customer}</td>
              <td style={styles.td}>{order.product}</td>
              <td style={styles.td}>{order.status}</td>
              <td style={styles.td}>
                {order.status === 'Pending' && (
                  <button
                    style={{ ...styles.button, ...styles.fulfillButton }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = styles.fulfillHover.backgroundColor)}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = styles.fulfillButton.backgroundColor)}
                    onClick={() => handleFulfillOrder(order.id)}
                  >
                    Fulfill
                  </button>
                )}
                <button
                  style={{ ...styles.button, ...styles.deleteButton }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = styles.deleteHover.backgroundColor)}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = styles.deleteButton.backgroundColor)}
                  onClick={() => handleDeleteOrder(order.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
