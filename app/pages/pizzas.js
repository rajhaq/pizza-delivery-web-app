import Navbar from '../components/navbar.js';
import Topping from '../components/Topping.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import {Provider} from 'react-redux';
import cartReducer from '../lib/cartReducer';
import {createStore} from 'redux';
import axios from 'axios';
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
  formControl: {
    minWidth: 250,
    margin: 8
  },
  selectEmpty: {
    marginTop:8
  },
  gridList: {
    width: 500,
    height: 450,
  },
  imagesOver: {
    position: 'absolute'

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

  const tileData = [
       {
         img: 'https://storage.pizzahut.me/cdn-cgi/image/width=360,quality=75,format=auto,fit=cover,g=top/yum-resources/eb4ad1b2-e81d-4cb9-892b-ce07d90c8653/Images/ProductImages/Source/Beef_Regular.png',
         title: 'Image',
         author: 'author',
       },
      ];
function App(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Provider store={createStore(cartReducer, {
      cartCount: props.token.length,
      cartItem: props.token
    })  }>
    <Container fixed>
      
        <Navbar/>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
        <Typography component="h6" variant="h6">
        You've chosen a
          </Typography>
          <Typography component="h4" variant="h4">
          Dynamite-Shrimp
          </Typography>
          </Grid>
          <Grid container spacing={3}>
      <Grid item xs={7}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div >
              <img  className={classes.imagesOver} src="https://storage.pizzahut.me/cdn-cgi/image/width=360,quality=75,format=auto,fit=cover,g=top/yum-resources/eb4ad1b2-e81d-4cb9-892b-ce07d90c8653/Images/ProductImages/Source/Crust_Pan.png" alt="image 1" />
              <img  className={classes.imagesOver} src="https://storage.pizzahut.me/cdn-cgi/image/width=360,quality=75,format=auto,fit=cover,g=top/yum-resources/eb4ad1b2-e81d-4cb9-892b-ce07d90c8653/Images/ProductImages/Source/Pepperoni_Regular.png" alt="image 2" />
              <img  className={classes.imagesOver} src="https://storage.pizzahut.me/cdn-cgi/image/width=360,quality=75,format=auto,fit=cover,g=top/yum-resources/eb4ad1b2-e81d-4cb9-892b-ce07d90c8653/Images/ProductImages/Source/Beef_Regular.png" alt="image 3" />
            </div>
          </Grid>
          <Grid item xs={6}>
            </Grid>
          <Grid item xs={6}>
            </Grid>
        </Grid>
      </Grid>
      <Grid item xs={5}>
      <Card>
      <CardContent>
        <Typography variant="h6" component="h6">
          Chosse Size
        </Typography>
        <FormControl className={classes.formControl} variant="filled">
        <InputLabel >Age</InputLabel>
        <Select
          label
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        
      </FormControl>
      <Typography variant="h6" component="h6">
          Choose Crust Type
        </Typography>
        <FormControl className={classes.formControl} variant="filled">
        <InputLabel >Age</InputLabel>
        <Select
          label
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        
      </FormControl>
      </CardContent>
    </Card>
    <Card className={classes.root}>
      <Typography variant="h6" component="h6">
            Choose Toppings
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Topping/>
          </Grid>
          <Grid item xs={4}>
            <Topping/>
          </Grid>
          <Grid item xs={4}>
            <Topping/>
          </Grid>
        </Grid>
        </Card>
      </Grid>

    </Grid>

    </Container>
    </Provider>
  );
}
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
      <App token={this.state.token}></App>
    </div>
  );
}
}