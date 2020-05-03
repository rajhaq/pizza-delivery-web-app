import { withStyles, useTheme } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import CardHeader from '@material-ui/core/CardHeader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import cartReducer from '../lib/cartReducer';
import {createStore} from 'redux';
import {useSelector, useDispatch} from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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

function CounterX(props){
    
  const counter =useSelector(state=> state.cartCount);
  const dispatch =useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClick = (data) => {
    Object.assign(props.item, {quantity: 1});
    Object.assign(props.item, {price: props.price});
    Object.assign(props.item, {guest_id: localStorage.getItem('token')});
    setOpen(true);    
    api.post(`web/cart`, props.item)
    .then(response=>{
        console.log(response.data)
        
        dispatch(add(response.data.data))
    });

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
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
        </div>


  )
}
const api = axios.create(
  {
    baseURL: `http://192.168.1.118/pizza-app/server/public/`
  }
)
const styles = (theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 250,
        height: 250,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 160,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
});

class pizzaCard extends React.Component {
    constructor()
    {
        super();
        this.state={
            users:[
               
            ],
            filtered:[],
            loading:true,
            age:''
        };
        this.handleSearchChange = (searchValue) => {
            this.setState({searchValue});
            this.filter();
          };
    }
    handleChangeSize = (field,e) => {
        let newArray = [...this.state.users]
        newArray[field] = {...newArray[field], size: e.target.value}
        this.setState({
            users: newArray,
            });
          console.log('state'+this.state.users[field].size);
          console.log('field'+field);
          console.log('vale'+e.target.value);
        
      };
      handleChangeType = (field,e) => {
        let newArray = [...this.state.users]
        newArray[field] = {...newArray[field], type: e.target.value}
        this.setState({
            users: newArray,
            });
          console.log('state'+this.state.users[field].type);
          console.log('field'+field);
          console.log('vale'+e.target.value);
        
      };
      addToCart(index)
      {
          console.log(index);
        store.dispatch(add(this.state.users[index]))
        console.log('add')
        console.log(store.getState())

      };
    ItemPrice(i)
    {
        var price=0;
        if(this.state.users[i].size=='large')
            price=this.state.users[i].large
        else if(this.state.users[i].size=='medium')
            price=this.state.users[i].medium
        else if(this.state.users[i].size=='small')
            price=this.state.users[i].small
        if(this.state.users[i].type=='pan')
            price=price+this.state.users[i].pan
        else if(this.state.users[i].type=='thin')
            price=price+this.state.users[i].thin
        else if(this.state.users[i].type=='cheesy')
            price=price+this.state.users[i].cheesy
        else if(this.state.users[i].type=='sfo')
            price=price+this.state.users[i].sfo

        return price;

    }
    componentDidMount()
        {
            api.get(`web/pizza`)
            .then(response=>{
                this.state.loading=false
                this.setState({users:response.data})
            });
        }

    render() {
        const { classes } = this.props;
    return (
        <Grid container spacing={3}>
        {this.state.users.map((section,index) => (
            <Grid item xs={6} key={index}>
                
            <Card className={classes.root} variant="outlined">
                <Grid container spacing={3}>
                    <Grid item xs={5}>
                    <Grid container spacing={3}>
                    <Grid item xs={12}>

                        <CardMedia
                            className={classes.cover}
                            image={section.image}
                            title={section.name}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <Typography component="h3" variant="h3" align='center'>
                        ${this.ItemPrice(index)}
                                </Typography>
                        </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={7}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h6" variant="h6">
                                {section.name}
                                </Typography>
                                <Typography color="textSecondary">
                                {section.description}

                                </Typography>
                            </CardContent>
                            <div className={classes.controls}>
                                <FormControl className={classes.formControl} variant="filled">
                                    <InputLabel id="demo-simple-select-label">Size</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={section.size}
                                        onChange={(e)=>this.handleChangeSize(index,e)}
                                    >
                                        <MenuItem value='large'>Large</MenuItem>
                                        <MenuItem value='medium'>Medium</MenuItem>
                                        <MenuItem value='small'>Small</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl} variant="filled">
                                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={section.type}
                                        onChange={(e)=>this.handleChangeType(index,e)}
                                    >
                                        <MenuItem value='pan'>Pan</MenuItem>
                                        <MenuItem value='thin'>Thin n Chrispy</MenuItem>
                                        <MenuItem value='cheesy'>Cheesy Crust</MenuItem>
                                        <MenuItem value='sfo'>SFO</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className={classes.controls}>
                                <Button className={classes.formControl} variant="outlined">Customize</Button>
                                <CounterX item={section} price={this.ItemPrice(index)}></CounterX>
                                
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Card>
            </Grid>
        ))}
        </Grid>
    );
}
}
export default withStyles(styles)(pizzaCard);
