import  React, {useEffect, useState} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import './Cards.css';
import CardItem from './CardItem';
import image1 from '../images/box1.jpg'
import image2 from '../images/box2.jpg'
import image3 from '../images/box3.jpg'
import image4 from '../images/box4.jpg'

export default function HomeCard() {
  const theme = useTheme();

  const [images, setimages] = useState([
    image1,
    image2,
    image3,
    image4,
  ])
  const [packages, setPackages] = useState([
    {"label":"2X2 Box", "image":images[0], "text": "Parcels shipped by road"},
    {"label":"4X5 Box", "image":images[1], "text": "Package charged per KG"},
    {"label":"6X8 Box", "image":images[2], "text": "Charges apply based on Volumetric scale"},
    {"label":"9X9 Box", "image":images[3], "text": "Larger packages are charged $4 for every Extra KG"}
    ])


  return (
      <Container className='Home-Card-Container'>

        <Row>
    
        {packages.map((parcel, index)=><Col>
        <CardItem
              key={index}
              src={parcel.image}
              text={parcel.text}
              label={parcel.label}
              
            />
            </Col>)}

            </Row>
       
      </Container>
    
  );
}