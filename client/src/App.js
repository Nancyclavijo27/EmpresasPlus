import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import LoginForm from './components/Auth/LoginForm';
import Home from './pages/HomePage';
import AdminDashboard from './pages/AdminPanelPage';

const App = () => {
  return (
    <Router>
      <Routes>
     
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
