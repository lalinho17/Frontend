// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import ManageProducts from './Pages/ManageProducts';
import ManageOrders from './Pages/ManageOrders';
import ManageCustomers from './Pages/ManageCustomers';
import HomePage from './Pages/HomePage';
import RegistrationPage from './Pages/RegistrationPage';
import LoginPage from './Pages/LoginPage';
import OrderHistoryPage from './Pages/OrderHistoryPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<ManageProducts />} />
        <Route path="/orders" element={<ManageOrders />} />
        <Route path="/customers" element={<ManageCustomers />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/order-history" element={<OrderHistoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
