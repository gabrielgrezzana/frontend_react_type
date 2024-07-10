import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from '../pages/home/home.pages';
import LoginPage from '../pages/login/login.pages';

const Rotas: React.FC = () => {
  return (
    <Router>    
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomeScreen />} />          
        </Routes>
      
    </Router>
  );
};

export default Rotas;
