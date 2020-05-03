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
import cartReducer from '../lib/cartReducer';

let store = createStore(cartReducer)

const add = (data) => {
    return {
        type: 'add',
        data: data
    }
}
const remove = () => {
    return {
        type: 'remove'
    }
}

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
const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
];
const tileData = [
    {
        img: 'https://storage.pizzahut.me/cdn-cgi/image/width=360,quality=75,format=auto,fit=cover,g=top/yum-resources/eb4ad1b2-e81d-4cb9-892b-ce07d90c8653/Images/ProductImages/Source/Beef_Regular.png',
        title: 'Image',
        author: 'author',
    },
];
export default function Index() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Container fixed>
            <Provider store={store}>
                <Navbar title="Blog" sections={sections} />
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
                        <CartPizza></CartPizza>
                        <CartPizza></CartPizza>
                        <CartPizza></CartPizza>
                        <CartPizza></CartPizza>
                        <CartPizza></CartPizza>
                        <CartPizza></CartPizza>
                        <CartPizza></CartPizza>
                        <CartPizza></CartPizza>
                        <CartPizza></CartPizza>

                    </Grid>
                </Grid>
            </Provider>
        </Container>
    );
}