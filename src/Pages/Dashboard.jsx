// src/Pages/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      minHeight: '100vh',
      padding: '20px',
    },
    nav: {
      backgroundColor: '#6200ea',
      padding: '15px',
      borderRadius: '8px',
      marginBottom: '20px',
    },
    ul: {
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-around',
      margin: 0,
      padding: 0,
    },
    li: {
      margin: 0,
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '16px',
      transition: 'color 0.3s',
    },
    linkHover: {
      color: '#ffd700',
    },
    header: {
      textAlign: 'center',
      color: '#333',
    },
    cards: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      marginTop: '20px',
    },
    card: {
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      padding: '20px',
      width: '250px',
      textAlign: 'center',
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
    cardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
    },
    cardTitle: {
      margin: '10px 0',
      color: '#6200ea',
    },
    cardDescription: {
      color: '#555',
    },
  };

  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li><a href="/dashboard" style={styles.link}>Dashboard</a></li>
          <li><a href="/products" style={styles.link}>Manage Products</a></li>
          <li><a href="/orders" style={styles.link}>Manage Orders</a></li>
          <li><a href="/customers" style={styles.link}>Manage Customers</a></li>
        </ul>
      </nav>

      {/* Dashboard Content */}
      <div style={styles.header}>
        <h1>Admin Dashboard</h1>
        <p>Welcome to the Admin Dashboard! Use the navigation above to manage the system.</p>
      </div>

      {/* Info Cards */}
      <div style={styles.cards}>
        <div
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style = { ...styles.card, ...styles.cardHover })}
          onMouseLeave={(e) => (e.currentTarget.style = styles.card)}
        >
          <h3 style={styles.cardTitle}>Products</h3>
          <p style={styles.cardDescription}>Manage all the products in the system.</p>
        </div>
        <div
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style = { ...styles.card, ...styles.cardHover })}
          onMouseLeave={(e) => (e.currentTarget.style = styles.card)}
        >
          <h3 style={styles.cardTitle}>Orders</h3>
          <p style={styles.cardDescription}>Track and manage customer orders.</p>
        </div>
        <div
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style = { ...styles.card, ...styles.cardHover })}
          onMouseLeave={(e) => (e.currentTarget.style = styles.card)}
        >
          <h3 style={styles.cardTitle}>Customers</h3>
          <p style={styles.cardDescription}>View and manage customer accounts.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
