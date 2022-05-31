import React from 'react';
import validateLogin from '../submitdetails/loginValidation';
import { Container, Row, Col } from 'react-bootstrap';
import useForm from '../submitdetails/LoginSubmit';
import { Button } from '@mui/material';
import './Form.css';
import { useNavigate } from 'react-router-dom';

const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validateLogin
  );

  const navigate = useNavigate();

  return (
    <div className='form-container'>
      <Container style={{backgroundColor:'rgb(241, 242, 244)', padding:'20px'}}>
        <Row style={{ marginBottom: '20px' }}>
          <Col>
            <h4>
              Login
            </h4>
          </Col>
        </Row>
        <Row style={{ marginBottom: '20px' }}>
          <Col>
            <div className='form-inputs'>
              <label className='form-label'>Email</label>
              <input
                className='form-input'
                type='email'
                name='email'
                placeholder='Enter your email'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
          </Col>
          <Col>
            <div className='form-inputs'>
              <label className='form-label'>Password</label>
              <input
                className='form-input'
                type='password'
                name='password'
                placeholder='Enter your password'
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
          </Col>
        </Row>
        <Row style={{ marginBottom: '20px', alignContent:'center' }}>
          <Col>
            <Button variant='contained' size='large' onClick={handleSubmit}>
              Login
            </Button>
          </Col>
        </Row>

        <Row style={{ marginBottom: '20px' }}>
          <Col>
            <span className='form-input-login'>
              Don't Have an account Yet? SignUp <span onClick={()=>navigate('/Signup')}>here</span>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormLogin;
