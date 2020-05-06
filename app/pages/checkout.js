import Navbar from '../components/navbar.js';
import AddressForm from '../components/AddressForm.js';
import CartPizza from '../components/cartPizza.js';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import Head from 'next/head';

import cartReducer from '../lib/cartReducer';
import axios from 'axios';
import React from 'react';

const api = axios.create(
    {
      baseURL: `http://adminpizza.salwagarden.com/`
    }
  )

  const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    card: {
        minWidth: 400,
    },
    media: {
        height: 400,
    },
    formControl: {
        minWidth: 250,
        margin: 8
    },
    selectEmpty: {
        marginTop: 8
    },
    gridList: {
        width: 500,
        height: 450,
    },
    imagesOver: {
        position: 'absolute'

    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});


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
function App(props) {
    const classes = useStyles();

    return (
            <Provider store={createStore(cartReducer, {
                cartCount: props.token.length,
                cartItem: props.token
            })}>
                <Navbar />
                <Container fixed>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >

                    <Typography component="h4" variant="h4">
                        Checkout
                    </Typography>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <AddressForm></AddressForm>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card className={classes.card}>
                            <CardContent>
                            <Typography variant="h6" gutterBottom>
                                    Cart
                                </Typography>
                                <Typography variant="subtitle1">
                                    Delivery Chagre: Free
                                </Typography>
                                <Total></Total>
                                <CartPizza></CartPizza>
                            </CardContent>
                        </Card>

                    </Grid>
                </Grid>
                </Container>
            </Provider>
    );
}
export default class Checkout extends React.Component {
    constructor() {
        super();
        this.state = {

            cartItem: []
        };

    }
    componentDidMount() {
        if (!localStorage.getItem('token')) {
            let guid = () => {
                let s4 = () => {
                    return Math.floor((1 + Math.random()) * 0x10000)
                        .toString(16)
                        .substring(1);
                }
                //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
                return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
            }
            localStorage.setItem('token', guid());
        }
        else {
            api.get(`web/cart?token=${localStorage.getItem('token')}`)
                .then(response => {
                    this.setState({ cartItem: response.data })

                });
        }

    }

    render() {


        return (
            <div>
                <Head>
                <title>Checkout | Zero Pizza</title>
                <meta name="description" content="Order pizza online at Zero Pizza. Access online food delivery near you including pizza from the Zero Pizza, Germany."></meta>
                <meta name="keywords" content="Order pizza online at Zero Pizza. Access online food delivery near you including pizza from the Zero Pizza, Germany."></meta>
                <meta name="title" content="Checkout | Zero Pizza"></meta>
            </Head>

                <App token={this.state.cartItem}></App>
            </div>
        );
    }
}