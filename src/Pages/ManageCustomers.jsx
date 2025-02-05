import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [setEditCustomer] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    email: '',
    phone_number: '',
    address: '',
    password: '',
    
  });

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/customers/')
      .then((response) => setCustomers(response.data))
      .catch((error) => console.error("Error fetching customers:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCustomer = () => {
    if (!newCustomer.name || !newCustomer.email || !newCustomer.password) {
      alert('All fields are required!');
      return;
    }

    axios.post('http://127.0.0.1:8000/api/customers/', newCustomer)
      .then((response) => {
        setCustomers((prev) => [...prev, response.data]);
        setNewCustomer({ name: '', email: '', phone_number: '', password: '', address: '' });
        setShowAddForm(false);
        alert('Customer added successfully!');
      })
      .catch((error) => console.error("Error adding customer:", error));
  };

  const handleDelete = (customerId) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      axios.delete(`http://127.0.0.1:8000/api/customers/${customerId}`)
        .then(() => {
          setCustomers(customers.filter((customer) => customer.id !== customerId));
          alert('Customer deleted successfully!');
        })
        .catch((error) => console.error("Error deleting customer:", error));
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>Manage Customers</h1>
      </header>

      <button
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          marginBottom: '20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => setShowAddForm(true)}
      >
        Add Customer
      </button>

      {showAddForm && (
        <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
          <h2>Add New Customer</h2>
          <div style={{ marginBottom: '10px' }}>
            <label>Name:</label>
            <input type="text" name="name" value={newCustomer.name} onChange={handleInputChange} style={{ marginLeft: '10px' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Email:</label>
            <input type="email" name="email" value={newCustomer.email} onChange={handleInputChange} style={{ marginLeft: '10px' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Phone:</label>
            <input type="text" name="phone_number" value={newCustomer.phone_number} onChange={handleInputChange} style={{ marginLeft: '10px' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Address:</label>
            <input type="text" name="address" value={newCustomer.address} onChange={handleInputChange} style={{ marginLeft: '10px' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Password:</label>
            <input type="password" name="password" value={newCustomer.password} onChange={handleInputChange} style={{ marginLeft: '10px' }} />
          </div>
          <button onClick={handleAddCustomer} style={{ marginRight: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '10px', borderRadius: '5px' }}>Save</button>
          <button onClick={() => setShowAddForm(false)} style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '10px', borderRadius: '5px' }}>Cancel</button>
        </div>
      )}

      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr>
            {['ID', 'Name', 'Email', 'Phone Number', 'Address', 'Password', 'Actions'].map((header) => (
              <th key={header} style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#f4f4f4' }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{customer.id}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{customer.name}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{customer.email}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{customer.phone_number}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{customer.address}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{'*'.repeat(customer.password.length)}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                <button
                  style={{ marginRight: '10px', backgroundColor: '#2196F3', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }}
                  onClick={() => setEditCustomer(customer.id)}
                >
                  Edit
                </button>
                <button
                  style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }}
                  onClick={() => handleDelete(customer.id)}
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

export default ManageCustomers;
