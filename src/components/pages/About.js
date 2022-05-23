import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { Typography } from '@mui/material';
import './About.css'
const About = () => {
    return (
    <div className='about_us' id='About Us'>

        <Container className='about_container'>
            <Row>
                <Col>
                    <Typography align='center' variant='h6' sx={{color:'rgba(255, 85, 0, 0.925)', padding:'10px', fontWeight:'600'}}>
                        - About Us -
                    </Typography>
                </Col>
            </Row>

            <Row>
                <Col style={{backgroundColor:'rgb(239, 239, 239)', height:'150px'}}>
                    <Typography variant='heading1'>
                    SAME DAY EXPRESS DELIVERY
                    </Typography>
                    <Typography variant='body1' sx={{padding:'10px'}}>
                    Where our authorized crews collect an item and deliver it on the same day, latest 1700 hrs. Our latest collection time will be 3.00pm Monday to Saturday. Also we can collect bank vouchers from all branches after close of business and deliver them to their central clearing center within the day
                    </Typography>
                </Col>
                <Col style={{backgroundColor:'rgb(226, 226, 226)', height:'150px'}}>
                    <Typography variant='heading1'>
                    INMESSENGERIAL AND MAIL ROOM SERVICE
                    </Typography>
                    <Typography variant='body1' sx={{padding:'10px'}}>
                    This is a service where Big Orange Express Courier staff is seconded to work within the customer’s premises. It can be in the mailing room, reception, telephone operator e.t.c This solution will help the client to concentrate on their core business and leave the messengerial, mail room and courier duties to experts
                    </Typography>
                </Col>
            </Row>

            <Row>
                <Col style={{backgroundColor:'#fff', height:'150px'}}>
                    <Typography variant='heading1'>
                    DEDICATED SERVICES
                    </Typography>
                    <Typography variant='body1' sx={{color:'rgba(220, 127, 20, 0.546)', paddingTop:'5px'}}>
                    We will provide a dedicated resource (Vehicle, Motorcycle, highly trained staff) on a one off or permanent basis to be stationed at client's premises Monday to Saturday from 8.00am to 5.00pm to offer dedicated services to the client. Tailor made solutions can also be discussed to meet the clients’ needs like front office management, mail room management etc. The motorcycle with a rider can be allocated duties throughout the day with a maximum monthly mileage limit..
                    </Typography>
                </Col>
            </Row>
        </Container>

    </div>
    );
}

export default About;