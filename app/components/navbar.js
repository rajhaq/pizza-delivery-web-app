import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartPizza from '../components/cartPizza';
import NavCat from '../components/NavCat';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import AppBar from '@material-ui/core/AppBar';
import Cancel from '@material-ui/icons/Cancel';
import axios from 'axios';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Link from 'next/link'
import cartReducer from '../lib/cartReducer';
import {createStore} from 'redux';
import {useSelector, useDispatch} from 'react-redux';
let store =createStore(cartReducer)

const add=(data)=>{
    return{
        type:'add',
        data:data
    }
}
const remove=()=>{
    return{
        type:'remove'
    }
}
store.subscribe(() => {
  console.log(store.getState()); // Some DOM api calls.
});

function CounterX(){
  const counter =useSelector(state=> state.cartCount);
  const dispatch =useDispatch();
  return (
    <div>
        
        ({counter})
        
    </div>

  )
}
function cartTotal(){
  const cartCount =useSelector(state=> state.cartCount);
  return (
    {cartCount}
       

  )
}
function Total(){
  const carts =useSelector(state=> state.cartItem);
  const cartTotal = (index) => {
    let total =0; 
    for(let d of carts)
    {
        total= total+ d.quantity*d.price;

    }
    return total;
  };
  return (
    <Typography variant="h5" color="textSecondary" component="h5">
                      Total ${cartTotal()}
        </Typography>

  )
}
const api = axios.create(
  {
    baseURL: `http://192.168.1.118/pizza-app/server/public/`
  }
)

const drawerWidth = 480;
const styles = (theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
});

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      users: [

      ],
      filtered: [],
      loading: true,
      searchValue: '',
      count:0
    };

  }

  totalItem (){
    return store.getState().cartCount
  }

  

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }
  handleDrawerClose = () => {
    this.setState({ open: false })
  }
  componentDidMount()
        {
          
          
          if(localStorage.getItem('token'))
          localStorage.setItem('token','dfja;lsngpoiajofij');
          else
          {
            localStorage.setItem('token','new');
          }
        }

  render() {

    const { classes } = this.props;
    
    return (
      <React.Fragment>
        <AppBar className={classes.toolbar}>
        <Toolbar >
          <Link href="/"><Button size="small">Home</Button>
          </Link>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Pizza 
        </Typography>
        
          <Button variant="outlined" startIcon={<ShoppingCart />} size="small" onClick={this.handleDrawerOpen}>
            Cart <CounterX></CounterX>
        </Button>
        </Toolbar>
        </AppBar>
        

        <Drawer
          className={classes.drawer}
          anchor="right"
          open={this.state.open}

          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerContainer}>

            <Card className={classes.root}>
              <CardHeader

                action={

                  <IconButton aria-label="settings" onClick={this.handleDrawerClose}>
                    <Cancel />
                  </IconButton>
                }
                title="Cart"
                subheader="Total Item"
              />
              <CardContent >
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                  <Total></Total>
                    
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" color="primary">
                      Checkout
</Button>
                  </Grid>
                </Grid>
                <div className={classes.drawerContainer}>
                  <CartPizza ></CartPizza>

                </div>
              </CardContent>
              <CardActions disableSpacing>


              </CardActions>

            </Card>
          </div>
        </Drawer>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Navbar);