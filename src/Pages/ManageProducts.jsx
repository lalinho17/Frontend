// src/Pages/ManageProducts.jsx
import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance'; // Import axios instance for API calls

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

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
    form: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
      justifyContent: 'center',
    },
    input: {
      padding: '8px',
      border: '1px solid #ddd',
      borderRadius: '5px',
    },
    button: {
      padding: '8px 12px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#6200ea',
      color: '#fff',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'background-color 0.3s',
    },
  };

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = async () => {
    if (newProduct.name && newProduct.price) {
      try {
        const response = await axiosInstance.post('/products', {
          name: newProduct.name,
          price: parseFloat(newProduct.price),
        });
        setProducts([...products, response.data]);
        setNewProduct({ name: '', price: '' });
      } catch (error) {
        console.error('Error adding product:', error);
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axiosInstance.delete(`/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Manage Products</h1>

      {/* Product Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Price</th>
            <th style={styles.th}>Stock Level</th>
            <th style={styles.th}>Category</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td style={styles.td}>{product.id}</td>
              <td style={styles.td}>{product.name}</td>
              <td style={styles.td}>{product.description}</td>
              <td style={styles.td}>${product.price.toFixed(2)}</td>
              <td style={styles.td}>{product.stock}</td>
              <td style={styles.td}>{product.category}</td>
              <td style={styles.td}>
                <button
                  style={styles.button}
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Product Form */}
      <form
        style={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          handleAddProduct();
        }}
      >
        <input
          style={styles.input}
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          style={styles.input}
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <button style={styles.button} type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ManageProducts;
