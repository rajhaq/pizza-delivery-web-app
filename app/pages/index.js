import Navbar from '../components/navbar.js';
import NavCat from '../components/NavCat.js';
import PizzaCard from '../components/pizzaCard.js';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import cartReducer from '../lib/cartReducer';
import axios from 'axios';
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
  media: {
    height: 400,
  },
});

function App(props) {
  const classes = useStyles();
  const [CartData,setCartData]=React.useState([]);
  // api.get(`web/cart?token=${props.token}`)
  //   .then(response=>{
  //     setCartData(response.data)
        
  //   });

  return (
    <Provider store={createStore(cartReducer, {
      cartCount: props.token.length,
      cartItem: props.token
    })  }>
      <Navbar title="Blog" />
      {props.token.lenght}
      
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://storage.pizzahut.me/yum-resources/eb4ad1b2-e81d-4cb9-892b-ce07d90c8653/Images/userimages/50direng.jpg"
            title="Contemplative Reptile"
          />

        </CardActionArea>
      </Card>
      <Container fixed>
      
      <PizzaCard></PizzaCard>
      </Container>
      </Provider>
  );
}[];
export default class Index extends React.Component {
  constructor() {
  super();
  this.state = {
    
    token:[]
  };

}
componentDidMount()
      {
        if(!localStorage.getItem('token'))
        {
          let guid = () => {
              let s4 = () => {
                  return Math.floor((1 + Math.random()) * 0x10000)
                      .toString(16)
                      .substring(1);
              }
              //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
              return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
          }
          localStorage.setItem('token',guid());
        }
        else
        {
            api.get(`web/cart?token=${localStorage.getItem('token')}`)
            .then(response=>{
              this.setState({token:response.data})
                
            });
        }       

      }

render() {

  
  return (
    <div>
      <Head>
        <title>Home | Zero Pizza</title>
        <meta name="description" content="Free Web tutorials"></meta>
        <meta name="keywords" content="Order pizza online at Zero Pizza. Access online food delivery near you including pizza from the Zero Pizza, Germany."></meta>
        <meta name="title" content="Home | Zero Pizza"></meta>
      </Head>
      <App token={this.state.token}></App>
    </div>
  );
}
}