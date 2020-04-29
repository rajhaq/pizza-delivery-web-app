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
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 400,
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
  return (
    <div>
        <Navbar title="Blog" sections={sections} />
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://storage.pizzahut.me/yum-resources/eb4ad1b2-e81d-4cb9-892b-ce07d90c8653/Images/userimages/50direng.jpg"
          title="Contemplative Reptile"
        />
        
      </CardActionArea>      
    </Card>
    <Grid container spacing={3}>
    <Grid item xs={6}>
    <PizzaCard></PizzaCard>
    </Grid>

    </Grid>

    </div>
  );
}