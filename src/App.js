import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/Footer';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
        <Navbar />

        <Home />

        <About />

        <Footer />
        
    </>
  );
}

export default App;
