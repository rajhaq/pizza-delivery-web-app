import Navbar from '../components/navbar.js';
import NavCat from '../components/NavCat.js';
import PizzaCard from '../components/pizzaCard.js';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import cartReducer from '../lib/cartReducer';

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
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 400,
  },
});

export default function Index() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Navbar title="Blog" />
      
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://storage.pizzahut.me/yum-resources/eb4ad1b2-e81d-4cb9-892b-ce07d90c8653/Images/userimages/50direng.jpg"
            title="Contemplative Reptile"
          />

        </CardActionArea>
      </Card>
      <NavCat></NavCat>
      <PizzaCard></PizzaCard>
      </Provider>
  );
}