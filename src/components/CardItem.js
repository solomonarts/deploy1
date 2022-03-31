import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Box from '@mui/material/Box';
import Button from 'react-bootstrap/Button';


function CardItem(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [boxlabel, setBoxLabel] = useState("")
  const [boximage, setBoxImage] = useState("")

  const selectparcel = (label, image) => {
    console.log("selected", label + image + show);
      setBoxImage(image)
      setBoxLabel(label)

      OrderModal(show)
   
}

const OrderModal = (show) => {
  console.log(show)
  return (

<>   

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  );
}

  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' onClick={()=> { setShow(true); selectparcel(props.label, props.src);}} >
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
