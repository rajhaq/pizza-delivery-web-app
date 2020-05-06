import Navbar from '../../components/navbar.js';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
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
import {useRouter} from 'next/router';
import { useState, useEffect } from 'react';
import cartReducer from '../../lib/cartReducer';
import axios from 'axios';
import React from 'react';
import Head from 'next/head';


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
        margin: 16,
        padding: 16,
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



function App(props) {
    const classes = useStyles();
    const router = useRouter();
    const [order, setOrder] = useState({
        item:[]
    });
    const [initialized, setInitialized] = useState(false);
    const {id} =router.query;
    const getNewPhotos =  () => {
        api.get(`web/order/${id}`)
        .then(response=>{
            setOrder(response.data) 
            setInitialized(true);            
        }).catch(error=>{
        });
        
    } 
    useEffect(() => {
        if (!initialized) {
            getNewPhotos();
        }
    });        
const orderStatus = () => {
    if(order.status==1)
    {
        return "On Process"
    }
    else if(order.status==2)
    {
        return "On Way"
    }
    if(order.status==3)
    {
        return "Delivered"
    }
    if(order.status==0)
    {
        return "Cancelled"
    }
    else return "Error"
            
};

    

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
                        Order # {id}
                    </Typography>
                    <Typography component="h6" variant="h6">
                        Order status : {orderStatus()}
                    </Typography>
                    <Typography component="p" variant="p">
                        Bookmark this page for order tracking
                    </Typography>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Card className={classes.card}>
                        <CardHeader
                        title="Customer information"
                    />
                    <Typography component="p" variant="p">
                        Name:
                    </Typography>
                    <Typography component="h6" variant="h6">
                        {order.name}
                    </Typography>
                    <Typography component="p" variant="p">
                        Address:
                    </Typography>
                    <Typography component="h6" variant="h6">
                        {order.address}
                    </Typography>
                    <Typography component="p" variant="p">
                        Phone:
                    </Typography>
                    <Typography component="h6" variant="h6">
                        {order.number}
                    </Typography>
           
                    </Card>
                    </Grid>
                    <Grid item xs={6}>
                    <Card className={classes.card}>
                    <CardHeader
                        title="Order items"
                    />
                    {order.item && order.item.length > 0
        ?order.item.map((item,index) => {
            return(
                        <div key={index}>
                        <Typography component="h6" variant="h6">
                           {index+1}. {item.name}
                        </Typography>
                        <Typography component="p" variant="p">
                       x {item.quantity}
                    </Typography>
                        </div>
                        )
                    }): "Loading..."}
                    <Typography component="h6" variant="h6">
                        Total amount ${order.total_price}
                    </Typography>
                    </Card>
                    </Grid>
                </Grid>
                </Container>
            </Provider>
    );
}
export default class Order extends React.Component {
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
                <title>Order | Zero Pizza</title>
                <meta name="description" content="Order pizza online at Zero Pizza. Access online food delivery near you including pizza from the Zero Pizza, Germany."></meta>
                <meta name="keywords" content="Order pizza online at Zero Pizza. Access online food delivery near you including pizza from the Zero Pizza, Germany."></meta>
                <meta name="title" content="Checkout | Zero Pizza"></meta>
            </Head>

                <App token={this.state.cartItem}></App>
            </div>
        );
    }
}