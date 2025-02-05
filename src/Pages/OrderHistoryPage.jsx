import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderHistoryPage = () => {
  const customerID = 2; // Static customer ID for demonstration
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the order history for the customer
    axios
      .get(`http://127.0.0.1:8000/api/customers/${customerID}/orders`)
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching order history:", error);
        setLoading(false);
      });
  }, [customerID]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>Order History</h1>
      </header>

      {loading ? (
        <p>Loading order history...</p>
      ) : orders.length === 0 ? (
        <p>No orders found for this customer.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              {[' id', 'customer', 'order_date', 'product', 'Status', 'Actions'].map((header) => (
                <th key={header} style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#f4f4f4' }}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{order.id}</td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{order.order_date}</td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>${order.product.toFixed(2)}</td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{order.customer}</td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                  <button
                    style={{
                      backgroundColor: '#2196F3',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                    onClick={() => alert(`Viewing details for order ID: ${order.id}`)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderHistoryPage;
