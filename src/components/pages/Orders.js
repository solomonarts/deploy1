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
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Chart, registerables } from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import Tables from '../dashcomponents/Tables';
import OrderCards from '../dashcomponents/OrderCards';


const drawerWidth = 240;

const cardData = [
  {}
]

function Orders(props) {

  const [clients, SetClients] = React.useState([]);
  const [packages, SetPackages] = React.useState([]);

  const getClients = () => {
    axios
        ({
          method: 'get',
          url: "http://localhost:8080/API/users.php",
          headers: { 'content-type': 'application/json' },
        })
        .then(res => {
          console.log("res", res);
          SetClients(res.data)
        })
        .catch(err => console.log("error", err))
    }

  const getPackages = () => {
    axios
        ({
          method: 'get',
          url: "http://localhost:8080/API/packages.php",
          headers: { 'content-type': 'application/json' },
        })
        .then(res => {
          console.log("res", res);
          SetPackages(res.data)
        })
        .catch(err => console.log("error", err))
    }

  React.useEffect(() => {
    getClients();
    getPackages()
  }, [])


  
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openNew, setOpenNew] = React.useState(false)
  const [orders, setOrders] = React.useState(false);
  const [users, setUsers] = React.useState(false);

  const openAnalytics = () => {
    setOrders(true)
    setUsers(false)
  }

  const openUsers = () => {
    setUsers(true)
    setOrders(false)
  }

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
        
          <ListItem disablePadding onClick={openAnalytics}>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary="Analytics" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
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
          <ListItem disablePadding onClick={openUsers}>
            <ListItemButton>
              <ListItemIcon>
           <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Users" />
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
       {orders ? <Container >
        <Row>
        <Row>
            <Col>
            <Row>
            <Box sx={{ minWidth: 275, marginBottom:'10px' }}>
                <OrderCards orders={packages}/>
              </Box>
            </Row>
            <Row>
            <Box sx={{ minWidth: 275, marginBottom:'10px' }}>
                {/* <Card variant="outlined">{card2}</Card> */}
              </Box>
            </Row>
            <Row>
            <Box sx={{ minWidth: 275 }}>
                {/* <Card variant="outlined">{card3}</Card> */}
              </Box>
            </Row>
              
            </Col>
            <Col>
              <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined" sx={{height:'550px', padding:'10px'}}>
                <Doughnut
                            data={{
                                labels: ["New", "Completed", "Pending", "Cancelled"],
                                datasets: [
                                    {
                                        backgroundColor: [
                                            '#1976d2',
                                            '#0277bd',
                                            '#0288d1',
                                            '#039be5',
                                            ],
                                        data: [120, 250, 20, 5],
                                    },
                                ],
                            }}
                        />
                </Card>
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
            
        </Container> :

        /* users */

        users? <Tables clients={clients} />
         : "No Connection" }

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
