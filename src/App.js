import React from 'react';
import SportResa from './pages/SportResa';
import WebResa from './pages/WebResa';
import { Route, Routes } from 'react-router-dom';
import AppChoice from './pages/AppChoice';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
      <div>
        <Routes>
          <Route exact path="/" element={<AppChoice/>} />
          <Route path="/sport-resa" element={<SportResa/>} />
          <Route path="/web-resa" element={<WebResa/>} />
        </Routes>
      </div>
  );
};

export default App;
