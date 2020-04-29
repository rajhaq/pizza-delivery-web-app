import Navbar from '../components/navbar.js';
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
});
const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  ];

export default function Index() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
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
      </Grid>
      <Grid item xs={5}>
      <Card className={classes.root}>
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
      </Grid>

      </Grid>

    </div>
  );
}