import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';


const drawerWidth = 240;

const cardData = [
  {}
]
 
const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        blent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

function Orders(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openNew, setOpenNew] = React.useState(false)

  Chart.register(...registerables);

  const OpenNewSection = () => {
    setOpenNew(true)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        
          <ListItem disablePadding onClick={OpenNewSection}>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary="New" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary="Pending" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary="Completed" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItemButton>
          </ListItem>
    
      </List>
      <Divider />
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
           <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Incoming Mail" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
           <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Read Mail" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
           <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Trash Mail" />
            </ListItemButton>
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: 80 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
       {openNew? <Container >
        <Row>
        <Row>
            <Col>
            <Row>
            <Box sx={{ minWidth: 275, marginBottom:'10px' }}>
                <Card variant="outlined">{card}</Card>
              </Box>
            </Row>
            <Row>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
              </Box>
            </Row>
              
            </Col>
            <Col>
              <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined" sx={{height:'400px', padding:'10px'}}>{card}</Card>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col>
              <Box sx={{ minWidth: 275, paddingTop:'10px' }}>
                <Card variant="outlined" sx={{height:'400px'}}>
                <Line
                            data={{
                                labels: ['Seed', 'Private', 'Public', 'Liquidity', 'Liquidity Mining', 'Platform Rewards', 'Partnerships', 'Marketing and further Dev', 'Reserve', 'Advisors', 'Team'],
                                datasets: [
                                    {
                                        backgroundColor: [
                                            '#1976d2',
                                            '#0277bd',
                                            '#0288d1',
                                            '#039be5',
                                            '#03a9f4',
                                            '#29b6f6',
                                            '#4fc3f7',
                                            '#90caf9',
                                            '#64b5f6',
                                            '#42a5f5',
                                            '#2196f3'],
                                        data: [12500000, 15500000, 1000000, 1000000, 10000000, 10000000, 5000000, 10000000, 10000000, 6000000, 9000000],
                                    },
                                ],
                            }}
                        />
                </Card>
              </Box>
            </Col>
            </Row>
            </Row>
            
        </Container> : "No new consignments"}
      </Box>
    </Box>
  );
}

Orders.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Orders;
