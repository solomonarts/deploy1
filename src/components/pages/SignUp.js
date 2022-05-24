import React from 'react';
import '../../App.css';
import Form from '../register/Form'
import Footer from '../Footer';
import { Typography } from '@mui/material';

export default function SignUp() {
  return (
    <>
    <div style={{
      display:'flex',
      backgroundColor:'#f1f2f4'
  }}>
    
     <Form />
    </div>
    </>
   
  );

}
