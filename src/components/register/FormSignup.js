import React from 'react';
import validate from './validateInfo';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <Container>
          <Row>
            <Col>
              <h1>
                To start Moving Your Packages with us today, Sign up here.
              </h1>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className='form-inputs'>
                <label className='form-label'>Full Name</label>
                <input
                  className='form-input'
                  type='text'
                  name='username'
                  placeholder='Enter your username'
                  value={values.username}
                  onChange={handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
              </div>
            </Col>

            <Col>
              <div className='form-inputs'>
                <label className='form-label'>Company Name</label>
                <input
                  className='form-input'
                  type='text'
                  name='company_name'
                  placeholder='Enter your Company Name'
                  value={values.company_name}
                  onChange={handleChange}
                />
                {errors.company_name && <p>{errors.company_name}</p>}
              </div>
            </Col>
          </Row>


          <Row>
            <Col>

              <div className='form-inputs'>
                <label className='form-label'>Physical Address</label>
                <input
                  className='form-input'
                  type='text'
                  name='physical_address'
                  placeholder='Enter your Address'
                  value={values.physical_address}
                  onChange={handleChange}
                />
                {errors.physical_address && <p>{errors.physical_address}</p>}
              </div>
            </Col>

          </Row>
          <Row>
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

          </Row>
          <Row>
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
          <Row>
            <Col>
              <div className='form-inputs'>
                <label className='form-label'>Confirm Password</label>
                <input
                  className='form-input'
                  type='password'
                  name='password2'
                  placeholder='Confirm your password'
                  value={values.password2}
                  onChange={handleChange}
                />
                {errors.password2 && <p>{errors.password2}</p>}
              </div>
            </Col>

          </Row>

          <Row>
            <Col>
              <div className='form-inputs'>
                <label className='form-label'>Telephone Number</label>
                <input
                  className='form-input'
                  type='number'
                  name='telnumber'
                  placeholder='Enter telephone number'
                  value={values.telnumber}
                  onChange={handleChange}
                />
                {errors.telnumber && <p>{errors.telnumber}</p>}
              </div>
            </Col>
          </Row>

          <Row>
            <Col>

              <button className='form-input-btn' type='submit'>
                Sign up
              </button>
            </Col>

            <Col>
              <button className='form-input-btn' type='reset'>
                Reset
              </button>
            </Col>
          </Row>

          <Row>
            <Col>
              <span className='form-input-login'>
                Already have an account? Login <a href='#'>here</a>
              </span>
            </Col>
          </Row>



        </Container>
      </form>
    </div>
  );
};

export default FormSignup;
