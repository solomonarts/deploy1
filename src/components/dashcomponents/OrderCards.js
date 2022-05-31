import React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const OrderCards = (props) => {

    const [orders, setOrders] = React.useState(props.orders);

    return (
        <>
        {orders && orders.length > 0 ? orders.splice(0,3).map((order, o_ind) => 
        <Card key={o_ind} sx={{marginBottom:'10px'}}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {order.pkg_status === "0" ? "New" : "Completed" }
            </Typography>
            <Typography variant="heading1" component="div">
             From : {order.pkg_from}
            </Typography>
            <Typography variant="heading1" component="div">
              To : {order.pkg_to}
            </Typography>
            <Typography variant="body2">
              Papkage Description: {order.pkg_description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Details</Button>
          </CardActions>
          </Card>) : "No orders"}
        </>
    );
}


export default OrderCards;