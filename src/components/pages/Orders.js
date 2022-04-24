import React from 'react';
import '../../App.css';
import '../orders.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Footer from '../Footer';

export default function Orders() {

  const style = {
    width: '100%',
    maxWidth: 400,
    bgcolor: 'background.paper',
  };

return ( <div style={{display:'block'}}>
<div className='orders'>
  <aside className='aside-left'>
  <List sx={style} component="nav" aria-label="mailbox folders">
    <ListItem button>
      <ListItemText primary="In Transit" />
    </ListItem>
    <Divider />
    <ListItem button divider>
      <ListItemText primary="Delivered" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Pending" />
    </ListItem>
    <Divider light />
    <ListItem button>
      <ListItemText primary="History" />
    </ListItem>
  </List>
  </aside>

  <aside className='aside-right'>
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="/images/1102680.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Titles
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Larger packages are charged $4 for every Extra KG
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

  <Divider style={{
    marginTop:'10px'
  }}/>


  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="/images/23192196.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Titles
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Larger packages are charged $4 for every Extra KG
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

  <Divider style={{
    marginTop:'10px'
  }}/>

  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="/images/img-home.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Titles
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Larger packages are charged $4 for every Extra KG
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </aside>

  
</div>
<Footer />
</div>)

}
