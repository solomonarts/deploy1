import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Typography } from "@mui/material";

function RegCarousel() {
return ( <CarouselProvider
    naturalSlideWidth={300}
    naturalSlideHeight={400}
    totalSlides={3}
    isPlaying={true}
    className="reg_carousel"
  >
    <Slider>
      <Slide index={0}>
          <Typography variant="h4" align="center">I am the first Slide.</Typography>
          <Typography variant="h6" align="center">I am the first. bdsavbljbavlkjavjabvafdvlj</Typography>
          <Typography variant="h6" align="center">I am the first. bdsavbljbavlkjavjabvafdvlj</Typography>
      </Slide>
      <Slide index={1}>
          <Typography variant="h4" align="center">I am the first Slide.</Typography>
          <Typography variant="h6" align="center">I am the first.</Typography>
          <Typography variant="h6" align="center">I am the first.</Typography>
      </Slide>
      <Slide index={2}>
          <Typography variant="h4" align="center">I am the first Slide.</Typography>
          <Typography variant="h6" align="center">I am the first.</Typography>
          <Typography variant="h6" align="center">I am the first.</Typography>
      </Slide>
      
    </Slider>
    {/* <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext> */}
  </CarouselProvider>
)
}

export default RegCarousel;