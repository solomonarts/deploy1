import  React, {useEffect, useState} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import './Cards.css';
import CardItem from './CardItem';

export default function HomeCard() {
  const theme = useTheme();

  const [packages, setPackages] = useState([
    {"label":"2X2 Box", "image":"images/box1.jpg", "text": "Parcels shipped by road"},
    {"label":"4X5 Box", "image":"images/box2.jpg", "text": "Package charged per KG"},
    {"label":"6X8 Box", "image":"images/box3.jpg", "text": "Charges apply based on Volumetric scale"},
    {"label":"9X9 Box", "image":"images/box4.jpg", "text": "Larger packages are charged $4 for every Extra KG"}
    ])


  return (
      <div className="Home-Card-Container">
    
        {packages.map((parcel, index)=><CardItem
              key={index}
              src={parcel.image}
              text={parcel.text}
              label={parcel.label}
              // {mm}
            />)}
       
      </div>
    
  );
}