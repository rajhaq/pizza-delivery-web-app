
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/Remove';
import RemoveICon from '@material-ui/icons/Delete';
import SkipNextIcon from '@material-ui/icons/Add';
import cartReducer from '../lib/cartReducer';
import {createStore} from 'redux';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
const api = axios.create(
  {
    baseURL: `http://192.168.1.118/pizza-app/server/public/`
  }
)
let store =createStore(cartReducer)

const add=(data)=>{
    return{
        type:'add',
        data:data
    }
}
const edit=(index,edit)=>{
    return{
        type:'edit',
        index:index,
        edit:edit
    }
}
const remove=()=>{
    return{
        type:'remove'
    }
}

const useStyles = makeStyles((theme) => ({
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
    width: 180,
    width: 180,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    width: 50,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  
}));

export default function CartPizza() {
  const classes = useStyles();
  const theme = useTheme();
  const counter =useSelector(state=> state.cartCount);
  const carts =useSelector(state=> state.cartItem);
  
  const dispatch =useDispatch();
  const addQuantity = (index) => {
    dispatch(edit(index,'add'))
  };
  const cartTotal = (index) => {
    let total =0; 
    for(let d of carts)
    {
        total= total+ d.quantity*d.price;

    }
    return total;
  };
  const removeQuantity = (index,quantity) => {
      if(quantity>1)
        dispatch(edit(index,'reduce'))
        else
        {
           api.delete(`web/cart/${carts[index].id}`)
    .then(response=>{
        dispatch(edit(index,'remove'))
        
    });
        }
        
  };
  

  return (
      <div>
    {carts.map((section,index) => (
    <Card className={classes.root} key={index}>
        <Grid container spacing={3}>
        <Grid item xs={6}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {section.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          Size: {section.size}, Type: {section.type}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous" onClick={() => removeQuantity(index,section.quantity)}>
            {section.quantity>1 ? <SkipPreviousIcon /> : <RemoveICon/>}
          </IconButton>
          <TextField className={classes.formControl} value={section.quantity} id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small" />
          <IconButton aria-label="next" onClick={() => addQuantity(index)}>
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div>
        <Typography variant="h5" color="textSecondary" align="center">
          ${section.quantity*section.price}
          </Typography>
      </div>
      </Grid>
      <Grid item xs={6}>
      <CardMedia
        className={classes.cover}
        image={section.image}
        title="Live from space album cover"
      />
        </Grid>
    </Grid>


    </Card>
    ))}
    </div>
  );
}