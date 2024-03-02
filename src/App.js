//import React from 'react';
//import { Container, Navbar, NavbarBrand } from 'reactstrap';
//import NucampLogo from './app/assets/img/logo.png';
//import { CAMPSITES } from './app/shared/CAMPSITES';

import './App.css';
import CampsitesList from './features/campsites/CampsitesList.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';



function App() {
  return (
    <div className="App">
        <Header/>
        <CampsitesList/>
        <Footer/>
    </div>
  );
}

export default App;
