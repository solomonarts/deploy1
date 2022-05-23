import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-scroll';
import {Container, Row, Col, Stack} from 'react-bootstrap';
import {FaInstagram} from 'react-icons/fa';
import {ImYoutube2, ImTwitter, ImFacebook} from 'react-icons/im'
import { IconButton, Typography } from '@mui/material';

const Footer = () => {

  const today = new Date()
  const CurrentYear = today.getFullYear();

  return (
    <div className='footer-container' id='Contact'>
      <div className='footer-links'>
        <Container>
          <Row>
        {/* <div className='footer-link-wrapper'> */}
        <Col>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} delay={1000}>Our Services</Link>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} delay={1000}>Testimonials</Link>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} delay={1000}>Careers</Link>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} delay={1000}>Major Clients</Link>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} delay={1000}>Terms of Service</Link>
          </div>
          </Col>
          <Col>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} delay={1000}>Contact</Link>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} delay={1000}>Support</Link>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} delay={1000}>Destinations</Link>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} delay={1000}>Suggestions</Link>
          </div>
          </Col>
        {/* </div> */}
        <Col>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Stack gap={2} direction='horizontal'>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} delay={1000}>
              <IconButton>
                <FaInstagram color='white'/>
              </IconButton>
            </Link>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} delay={1000}>
              <IconButton size='small'>
                <ImFacebook color='white'/>
              </IconButton>
            </Link>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} delay={1000}>
              <IconButton size='large'>
                <ImYoutube2 color='white'/>
              </IconButton>
            </Link>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} delay={1000}>
              <IconButton>
                <ImTwitter color='white'/>
              </IconButton>
            </Link>
            </Stack>
          </div>
        </div>
        </Col>
        </Row>
        </Container>
      </div>
      <section className='social-media'>
        <Container>
          <Row>
        <Col>
          <div className='footer-logo'>
          <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} delay={1000} className='social-logo'>
              SGA     
            </Link>
          </div>
          </Col>

          <Col>
          <Typography variant='body2' className='website-rights' sx={{margin:'20px auto'}}>SGA © {CurrentYear}</Typography>
          </Col>
        </Row>
        </Container>
      </section>
    </div>
  );
}

export default Footer;
