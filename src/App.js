import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/Footer';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import Orders from './components/pages/Orders';
import PrivateRoute from './PrivateRoute';
import FormLogin from './components/register/login';


function App() {
  return (
    <>
      <Router>
        <Container className='main_container'>
          <Row>
            <Col>
            <Navbar />
            </Col>
          </Row>
        
        <Row>
          <Col>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/Login' element={<FormLogin />} />
          <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/Dashboard' element={<Orders />} />
          </Route>
          
        </Routes>
        </Col>
        </Row>
        <Row>
          <Col>
          
          </Col>
        </Row>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
