import React, {useEffect, useState} from 'react';
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

const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,

};


function CardItem(props, { submitForm }) {

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [boxlabel, setBoxLabel] = useState("")
  const [boximage, setBoxImage] = useState("")
  const [open, setOpen] = useState(false)

  const [paymentMethod, setPaymentMethod] = React.useState('');

  const handleChangePayment = (event) => {
    setPaymentMethod(event.target.value);
  };

  const selectparcel = (label, image, show) => {
    console.log("selected", label + image + show);
      setBoxImage(image)
      setBoxLabel(label)
      setOpen(show)

  }
   
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' onClick={handleOpen} >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
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
          <div>
          <form onSubmit={handleSubmit}  className='form' noValidate>
       
        <div className='form-inputs'>
          <label className='form-label'>Type of Package</label>
          <input
            className='form-input'
            type='text'
            name='locationFrom'
            placeholder='Enter your username'
            value={props.label}
            disabled
            onChange={handleChange}
          />
          {/* {errors.username && <p>{errors.username}</p>} */}
        </div>
        <div className='form-inputs'>
        <Box sx={{ width: 200 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={paymentMethod}
          label="Payment Method"
          onChange={handleChangePayment}
        >
          <MenuItem value={10}>Cash</MenuItem>
          <MenuItem value={20}>Mobile Money</MenuItem>
          <MenuItem value={30}>Other</MenuItem>
        </Select>
      </FormControl>
    </Box>
          {/* {errors.username && <p>{errors.username}</p>} */}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Charges</label>
          <input
            className='form-input'
            type='text'
            name='locationFrom'
            placeholder='Enter your username'
            value={props.text}
            disabled
            onChange={handleChange}
          />
          {/* {errors.username && <p>{errors.username}</p>} */}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>From</label>
          <input
            className='form-input'
            type='text'
            name='locationFrom'
            placeholder='Enter your username'
            value={values.from}
            onChange={handleChange}
          />
          {errors.from && <p>{errors.from}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>To</label>
          <input
            className='form-input'
            type='email'
            name='locationTo'
            placeholder='Enter your email'
            value={values.to}
            onChange={handleChange}
          />
          {errors.to && <p>{errors.to}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Description(optional)</label>
          <input
            className='form-input'
            type='Parcel Description'
            name='description'
            placeholder='Enter parcel Description'
            value={values.description}
            onChange={handleChange}
          />
          {/* {errors.password && <p>{errors.password}</p>} */}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Name of recepient</label>
          <input
            className='form-input'
            type='text'
            name='recepientName'
            placeholder='Recepient Name'
            value={values.reciepientName}
            onChange={handleChange}
          />
          {errors.reciepientName && <p>{errors.reciepientName}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Recepient Contact</label>
          <input
            className='form-input'
            type='text'
            name='recepientContact'
            placeholder='Recepient Name'
            value={values.reciepientContact}
            onChange={handleChange}
          />
          {errors.reciepientContact && <p>{errors.reciepientContact}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Submit Order Details
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
          </Box>
        </Fade>
      </Modal>     

    </>
  );
}

export default CardItem;
