import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import './register/Form.css'
import useForm from './submitdetails/Submit';
import validate from './submitdetails/validateInfo';
import { Container, Row, Col, Stack } from 'react-bootstrap';

const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  backgroundColor: '#fff',
  border: 'none',
  padding: '25px'
};


function CardItem(props) {

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [boxlabel, setBoxLabel] = useState("")
  const [boximage, setBoxImage] = useState("")
  
  const [open, setOpen] = useState(false)

  const selectparcel = (label, image, show) => {
    console.log("selected", label + image + show);
    setBoxImage(image)
    setBoxLabel(label)
    setOpen(show)

  }

  const { handleChange, handleSubmit, values, errors } = useForm(
    props.submitForm,
    validate
  );

  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' onClick={handleOpen} >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              src={props.src}
              alt='Travel Image'

            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>

        </div>
      </li>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}

      >
        <Fade in={open}>

          <Box sx={style}>

            <Container>

              <Row>

            <Col style={{marginBottom:'10px'}}>
                  <div className='form-inputs'>
                    <Box sx={{ width: 200, margin: 'auto', padding: '5px' }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Type of Package</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name='package'
                          value={values.package}
                          label="Payment Method"
                          onChange={handleChange}
                        >
                          <MenuItem value='2x2'>2x2 Box</MenuItem>
                          <MenuItem value='4x5'>4x5 Box</MenuItem>
                          <MenuItem value='6x8'>6x8 Box</MenuItem>
                          <MenuItem value='9x9'>9x9 Box</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    {errors.package && <p>{errors.package}</p>}
                  </div>
                </Col>

                <Col style={{marginBottom:'10px'}}>
                  <div className='form-inputs'>
                    <Box sx={{ width: 200, margin: 'auto', padding: '5px' }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Move By</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name='charges'
                          value={values.charges}
                          label="Payment Method"
                          onChange={handleChange}
                        >
                          <MenuItem value='Road'>Road</MenuItem>
                          <MenuItem value='Train'>Train</MenuItem>
                          <MenuItem value='Water'>Water</MenuItem>
                          <MenuItem value='Air'>Air</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    {errors.charges && <p>{errors.charges}</p>}
                  </div>
                </Col>
              
              <Col style={{marginBottom:'10px'}}>
                  <div className='form-inputs'>
                    <Box sx={{ width: 200, margin: 'auto', padding: '5px' }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name='paymentmethod'
                          value={values.paymentmethod}
                          label="Payment Method"
                          onChange={handleChange}
                        >
                          <MenuItem value='Cash'>Cash</MenuItem>
                          <MenuItem value='Mobile Money'>Mobile Money</MenuItem>
                          <MenuItem value='Other'>Other</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    {errors.paymentmethod && <p>{errors.paymentmethod}</p>}
                  </div>
                </Col>
              </Row>
              <Row>

                <Col style={{marginBottom:'10px'}}>
                  <div className='form-inputs'>
                    <label className='form-label'>From</label>
                    <input
                      className='form-input'
                      type='text'
                      name='from'
                      placeholder='Enter your Location/address'
                      value={values.from}
                      onChange={handleChange}
                      style={{ border: '1px solid grey' }}
                    />
                    {errors.from && <p>{errors.from}</p>}
                  </div>
                </Col>
                <Col style={{marginBottom:'10px'}}>
                  <div className='form-inputs'>
                    <label className='form-label'>To</label>
                    <input
                      className='form-input'
                      type='text'
                      name='to'
                      placeholder='Enter destination address'
                      value={values.to}
                      onChange={handleChange}
                      style={{ border: '1px solid grey' }}
                    />
                    {errors.to && <p>{errors.to}</p>}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col style={{marginBottom:'10px'}}>
                  <div className='form-inputs'>
                    <label className='form-label'>Description(optional)</label>
                    <input
                      className='form-input'
                      type='text'
                      name='description'
                      placeholder='Enter parcel Description and extra information'
                      value={values.description}
                      onChange={handleChange}
                      style={{ border: '1px solid grey' }}
                    />
                    {/* {errors.password && <p>{errors.password}</p>} */}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col style={{marginBottom:'10px'}}>
                  <div className='form-inputs'>
                    <label className='form-label'>Name of recepient</label>
                    <input
                      className='form-input'
                      type='text'
                      name='reciepientName'
                      placeholder='Recepient Name'
                      value={values.reciepientName}
                      onChange={handleChange}
                      style={{ border: '1px solid grey' }}
                    />
                    {errors.reciepientName && <p>{errors.reciepientName}</p>}
                  </div>
                </Col>
                <Col style={{marginBottom:'10px'}}>

                  <div className='form-inputs'>
                    <label className='form-label'>Recepient Contact</label>
                    <input
                      className='form-input'
                      type='text'
                      name='reciepientContact'
                      placeholder='Recepient Contact'
                      value={values.reciepientContact}
                      onChange={handleChange}
                      style={{ border: '1px solid grey' }}
                    />
                    {errors.reciepientContact && <p>{errors.reciepientContact}</p>}
                  </div>
                </Col>
              </Row>



              <Button variant='contained' size='large' onClick={handleSubmit}>
                Submit Order Details
              </Button>
            </Container>
          </Box>
        </Fade>
      </Modal>

    </>
  );
}

export default CardItem;
