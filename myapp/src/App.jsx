import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/Forgotpassword';
import UpdatePassword from './components/Updatepassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-password" element={<UpdatePassword />} />
      </Routes>
    </Router>
  );
}

export default App;