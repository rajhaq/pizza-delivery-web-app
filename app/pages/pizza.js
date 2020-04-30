import Navbar from '../components/navbar.js';
import Topping from '../components/Topping.js';
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
        <Navbar title="Blog" sections={sections} />
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
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
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
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
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
  );
}