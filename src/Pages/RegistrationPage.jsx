// // src/Pages/RegistrationPage.jsx
// import React, { useState } from 'react';
// // import axios from '../axiosInstance'; // Assuming axiosInstance is set up
// import axiosInstance from '../axiosInstance';

// const RegistrationPage = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     phone_number: '',
//     address: '',
//     password: '',
//   });

//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { username, email, phone_number, address, password } = formData;

//     if (!username || !email || !phone_number || !address || !password) {
//       setError('All fields are required.');
//       setSuccess(false);
//       return;
//     }

//     try {
//       await axiosInstance.post('customers/', { username, email, phone_number, address, password });
//       setError('');
//       setSuccess(true);
//       console.log('Registration successful');
//       setFormData({
//         username: '',
//         email: '',
//         phone_number: '',
//         address: '',
//         password: '',
//       });
//     } catch (err) {
//       setError('An error occurred during registration.');
//       console.error(err);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Register</h1>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="phone_number"
//           placeholder="Phone Number"
//           value={formData.phone_number}
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="address"
//           placeholder="Address"
//           value={formData.address}
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>
//           Register
//         </button>
//         {error && <p style={styles.error}>{error}</p>}
//         {success && <p style={styles.success}>Registration successful!</p>}
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     fontFamily: 'Arial, sans-serif',
//     width: '100%',
//     maxWidth: '400px',
//     margin: '50px auto',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '10px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   },
//   heading: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     fontSize: '24px',
//     color: '#6200ea',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '15px',
//   },
//   input: {
//     padding: '10px',
//     fontSize: '16px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     outline: 'none',
//     transition: 'border 0.3s',
//   },
//   button: {
//     padding: '10px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: '#fff',
//     backgroundColor: '#007bff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s',
//   },
//   error: {
//     color: '#d9534f',
//     textAlign: 'center',
//     marginTop: '10px',
//   },
//   success: {
//     color: '#28a745',
//     textAlign: 'center',
//     marginTop: '10px',
//   },
// };

// export default RegistrationPage;
import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone_number: '',
    address: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, phone_number, address, password } = formData;

    if (!username || !email || !phone_number || !address || !password) {
      setError('All fields are required.');
      setSuccess(false);
      return;
    }

    try {
      const response = await axiosInstance.post('customers/', {
        username,
        email,
        phone_number,
        address,
        password,
      });
      setError('');
      setSuccess(true);
      console.log('Registration successful:', response.data);
      setFormData({
        username: '',
        email: '',
        phone_number: '',
        address: '',
        password: '',
      });
    } catch (err) {
      // Enhanced error handling for backend errors
      const errorMessage = err.response?.data?.message || 'An error occurred during registration.';
      setError(errorMessage);
      setSuccess(false);
      console.error('Registration error:', err.response || err);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Register</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          value={formData.phone_number}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Register
        </button>
        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>Registration successful!</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    width: '100%',
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#6200ea',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'border 0.3s',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  error: {
    color: '#d9534f',
    textAlign: 'center',
    marginTop: '10px',
  },
  success: {
    color: '#28a745',
    textAlign: 'center',
    marginTop: '10px',
  },
};

export default RegistrationPage;
