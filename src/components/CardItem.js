import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import OrderModal from './OrderModal';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function CardItem(props) {

  const [open, setOpen] = React.useState(props.openModal);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [boxlabel, setBoxLabel] = useState("")
  const [boximage, setBoxImage] = useState("")

  const selectparcel = (label, image) => {
    console.log("selected", label + image);
    if(label !== " " && image !== " ") {
      handleOpen()
      setBoxImage(image)
      setBoxLabel(label)
    } else {
      handleClose()
      setBoxImage("")
      setBoxLabel("")
    }
  
}



  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' onClick={()=>selectparcel(props.label, props.src)} >
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

     
     
    </>
  );
}

export default CardItem;
