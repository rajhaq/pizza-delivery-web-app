import Navbar from '../../components/navbar.js';
import Topping from '../../components/Topping.js';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import { Provider } from 'react-redux';
import cartReducer from '../../lib/cartReducer';
import { createStore } from 'redux';
import axios from 'axios';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Head from 'next/head';

const add = (data) => {
    return {
        type: 'add',
        data: data
    }
}


const api = axios.create(
    {
        baseURL: `http://adminpizza.salwagarden.com/`
    }
)
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    media: {
        height: 80,
        weight: 80,
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    card:{
        padding:8,
        margin:8
    }
}));

function CounterX(props) {
    const styles = useStyles();
    const carts = useSelector(state => state.cartItem);
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        
        const newProps = Object.assign({}, props);
        Object.assign(newProps.item, { quantity: 1 });
        Object.assign(newProps.item, { price: newProps.price });
        Object.assign(newProps.item, { guest_id: localStorage.getItem('token') });
        var note = "";
        for (let d of newProps.topping) {
            note = note + d.name + "<br/>";
        }
        Object.assign(newProps.item, { note: note });
            api.post(`web/cart`, newProps.item)
                .then(response => {
                    console.log(response.data)
                    dispatch(add(response.data.data))

                });
        setOpen(true);

    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <div>
            <Button
                className={styles.formControl}
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                onClick={() => {

                    handleClick()
                }
                }
            >
                Add to Order
        </Button>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Added to cart"
                action={
                    <React.Fragment>
                        <IconButton size="small"  color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>


    )
}

function App(props) {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const router = useRouter();

    const [topping, setTopping] = useState([]);
    const [newTopping, setNewTopping] = useState([]);
    const [pizza, setPizza] = useState({
        item: [],
        type: 'pan',
        size: 'large'
    });
    const [initialized, setInitialized] = useState(false);
    const { id } = router.query;
    const ItemPrice = () => {
        var price = 0;
        if (pizza.size == 'large')
            price = pizza.large
        else if (pizza.size == 'medium')
            price = pizza.medium
        else if (pizza.size == 'small')
            price = pizza.small
        if (pizza.type == 'pan')
            price = price + pizza.pan
        else if (pizza.type == 'thin')
            price = price + pizza.thin
        else if (pizza.type == 'cheesy')
            price = price + pizza.cheesy
        else if (pizza.type == 'sfo')
            price = price + pizza.sfo

        for (let d of newTopping) {
            price = parseInt(price) + parseInt(d.price);
        }

        return price;

    }
    const getNewPhotos = () => {
        api.get(`web/pizza/${id}`)
            .then(response => {
                Object.assign(response.data, { type: 'pan' });
                Object.assign(response.data, { size: 'large' });
                console.log(response.data)
                setPizza(response.data)
                setInitialized(true);
            }).catch(error => {
            });
        api.get(`web/topping`)
            .then(response => {
                setTopping(response.data)
                setInitialized(true);
            }).catch(error => {
            });

    }
    useEffect(() => {
        if (!initialized) {
            getNewPhotos();
        }
    });
    const handleChangeSize = (e) => {
        setPizza({
            ...pizza,    // keep all other key-value pairs
            size: e.target.value       // update the value of specific key
        })


    };

    const handleToppingAdd = (value, index) => {

        const newData = [...newTopping];
        newData.push(value);
        setNewTopping(newData);

        const newArray = [...topping]
        newArray[index] = { ...newArray[index], status: 0 }
        setTopping(newArray);

    };
    const handleToppingRemove = (value, index) => {
        const indexOfNewTopping = newTopping.indexOf(value)

        const newData = [...newTopping];
        newData.splice(indexOfNewTopping, 1);
        setNewTopping(newData);

        const newArray = [...topping]
        newArray[index] = { ...newArray[index], status: 1 }
        setTopping(newArray);

    };
    const handleChangeType = (e) => {

        setPizza({
            ...pizza,    // keep all other key-value pairs
            type: e.target.value       // update the value of specific key
        })
    };
    return (
        <Provider store={createStore(cartReducer, {
            cartCount: props.token.length,
            cartItem: props.token
        })}>
            <Container fixed>

                <Navbar />
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    padding="16"
                >
                    <Typography component="h6" variant="h6">
                        You've chosen a
            </Typography>
                    <Typography component="h4" variant="h4">
                        {pizza.name}
                    </Typography>
                </Grid>
                <Grid container spacing={8}>

                    <Grid item xs={6}>
                        <Grid container spacing={3} >
                            <Grid item xs={12} >
                                <Typography component="h4" variant="h4">
                                    Total ${ItemPrice()}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <div>
                                    <img className={classes.imagesOver} src={pizza.base_image} alt="image 1" />
                                    {newTopping && newTopping.length > 0 ? newTopping.map((section, index) => {
                                        return (
                                            <img className={classes.imagesOver} src={section.image} alt={section.name} />

                                        )
                                    }) : ""}
                                </div>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={6} >
                        <Card className={classes.card} >
                            <CardContent>
                                <CounterX item={pizza} topping={newTopping} price={ItemPrice()}></CounterX>
                       
                                <FormControl className={classes.formControl} variant="filled">
                                    <InputLabel >Size</InputLabel>
                                    <Select
                                        value={pizza.size}
                                        onChange={(e) => handleChangeSize(e)}
                                    >
                                        <MenuItem value='large'>Large</MenuItem>
                                        <MenuItem value='medium'>Medium</MenuItem>
                                        <MenuItem value='small'>Small</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl} variant="filled">
                                    <InputLabel >Type</InputLabel>
                                    <Select
                                        value={pizza.type}
                                        onChange={(e) => handleChangeType(e)}
                                    >
                                        <MenuItem value='pan'>Pan</MenuItem>
                                        <MenuItem value='thin'>Thin n Chrispy</MenuItem>
                                        <MenuItem value='cheesy'>Cheesy Crust</MenuItem>
                                        <MenuItem value='sfo'>SFO</MenuItem>
                                    </Select>
                                </FormControl>
                                <Typography variant="subtitle1" >
                                    Included toppings:
                            </Typography>
                            {pizza.topping && pizza.topping.length > 0 ? pizza.topping.map((section, index) => {
                                        return (
                                        <span>{section.name}, </span>

                                        )
                                    }) : ""}
                            </CardContent>
                        </Card>
                        <Card className={classes.card} >
                            <Typography variant="h6" component="h6">
                                Choose Toppings
          </Typography>
                            <Grid container spacing={3}>

                                {topping && topping.length > 0 ? topping.map((section, index) => {
                                    return (
                                        <Grid item xs={4}>
                                            <Card className={classes.root} style={section.status ? {} : { backgroundColor: 'green' }}>
                                                <CardHeader
                                                    subheader={section.name}
                                                />
                                                <CardMedia
                                                    className={classes.media}
                                                    image={section.image}
                                                    title={section.name}
                                                />
                                                <CardContent>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        +${section.price}

                                                    </Typography>
                                                </CardContent>
                                                <CardActions >
                                                    {section.status ? <Button onClick={() => handleToppingAdd(section, index)} variant="outlined">Add</Button> : <Button onClick={() => handleToppingRemove(section, index)} variant="outlined">Remove</Button>}
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    )
                                }
                                ) :
                                    <Grid item xs={4}>
                                        <Card className={classes.root}>
                                            <CardHeader
                                                subheader="Loading"
                                            />
                                        </Card>
                                    </Grid>
                                }

                            </Grid>
                        </Card>
                    </Grid>


                </Grid>

            </Container>
        </Provider>
    );
}
export default class Pizza extends React.Component {
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
                <title>Pizza | Zero Pizza</title>
                <meta name="description" content="Order pizza online at Zero Pizza. Access online food delivery near you including pizza from the Zero Pizza, Germany."></meta>
                <meta name="keywords" content="Order pizza online at Zero Pizza. Access online food delivery near you including pizza from the Zero Pizza, Germany."></meta>
                <meta name="title" content="Checkout | Zero Pizza"></meta>
            </Head>

                <App token={this.state.cartItem}></App>
            </div>
        );
    }
}