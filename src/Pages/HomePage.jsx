// src/Pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '0',
      margin: '0',
    },
    nav: {
      backgroundColor: '#6200ea',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
    },
    link: {
      textDecoration: 'none',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '16px',
      transition: 'color 0.3s',
    },
    linkHover: {
      color: '#d1c4e9',
    },
    banner: {
      backgroundColor: '#f8f9fa',
      textAlign: 'center',
      padding: '50px 20px',
      borderBottom: '2px solid #ddd',
    },
    title: {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '18px',
      marginBottom: '20px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: '#28a745',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#218838',
    },
  };

  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <nav style={styles.nav}>
        <h1 style={{ color: '#fff' }}>Fashion Store</h1>
        <div style={styles.navLinks}>
          <Link
            to="/"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
            onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
          >
            Home
          </Link>
          <Link
            to="/register"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
            onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
          >
            Register
          </Link>
          <Link
            to="/login"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
            onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
          >
            Login
          </Link>
          <Link
            to="/products"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
            onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
          >
            Products
          </Link>
          <Link
            to="/cart"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
            onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
          >
            Cart
          </Link>
          <Link
            to="/checkout"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
            onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
          >
            Checkout
          </Link>
          <Link
            to="/order-history"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
            onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
          >
            Order History
          </Link>
          <Link
            to="/profile"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
            onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
          >
            Profile
          </Link>
        </div>
      </nav>

      {/* Banner Section */}
      <div style={styles.banner}>
        <h1 style={styles.title}>Welcome to Fashion Store!</h1>
        <p style={styles.subtitle}>Discover the latest trends and shop your favorite styles.</p>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HomePage;
