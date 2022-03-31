import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Box from '@mui/material/Box';
import  OrderModal  from './OrderModal';


function CardItem(props) {

  const [boxlabel, setBoxLabel] = useState("")
  const [boximage, setBoxImage] = useState("")
  const [open, setOpen] = useState(false)

  const selectparcel = (label, image, show) => {
    console.log("selected", label + image + show);
      setBoxImage(image)
      setBoxLabel(label)
      setOpen(show)

  }
   


  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' onClick={()=> { selectparcel(props.label, props.src, true);}} >
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

      <OrderModal openModal={open} />

    </>
  );
}

export default CardItem;
