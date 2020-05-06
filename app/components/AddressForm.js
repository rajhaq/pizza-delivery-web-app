import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {useSelector, useDispatch} from 'react-redux';
import Router , {useRouter}  from 'next/router';
const useStyles = makeStyles((theme) => ({
  
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },

  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  buttonSuccess: {
    
  },
}));
const api = axios.create(
  {
    baseURL: `http://adminpizza.salwagarden.com/`
  }
)
function Add(props){
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState(false);
  const carts =useSelector(state=> state.cartItem);
  const router = useRouter()
  const cartTotal = () => {
    let total =0; 
    for(let d of carts)
    {
        total= total+ d.quantity*d.price;

    }
    return total;
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      if(props.data.number && props.data.name && props.data.address)
      {
        Object.assign(props.data, {total_price: cartTotal()});
            api.post(`web/order`,props.data)
            .then(response=>{
              if(response.data.status)
              {
                setSuccess(true);
                setLoading(false);
                setMessage('Successfully Ordered');  
                setOpen(true);
                router.push('/order/[id]', `/order/${response.data.data.id}`);

              }
              else{
                setSuccess(true);
              setLoading(false);
              setMessage('Sorry, Error in order');    
              setOpen(true); 
              }


            }).catch(error=>{
              setSuccess(true);
              setLoading(false);
              setMessage('Sorry, Error in order');    
              setOpen(true);  
            });          
      }
      else
      {
        setSuccess(true);
        setLoading(false);
        setMessage('Please, Fill data');    
        setOpen(true);    
        

      }  
    }
  };
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });
  return(
    <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          className={buttonClassname}
          disabled={loading}
          onClick={handleButtonClick}
        >
          Place Order
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      </div>
  );

}
export default class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      guest_id: '',
      total_price: '',
      type: '',
      name: '',
      number: '',
      note: '',
      address: '',
      state: '',
      country: 'USA',
      zip: '',
      name_error_text: '',
      number_error_text: '',
      address_error_text: '',
      disabled: true
    };
    this.handleSearchChange = (searchValue) => {
      this.setState({ searchValue });
      this.filter();
    };

  }
  componentDidMount()
  {
    this.setState(
      {
        guest_id: localStorage.getItem('token')
      }
    );
        
  }

  // onChangeName = (e) => {
  //   this.setState({
  //     name: e.target.value
  //   })
  // }
  // onChangeAddress = (e) => {
  //   this.setState({
  //     address: e.target.value
  //   })
  // }
  // onChangeNumber = (e) => {
  //   this.setState({
  //     number: e.target.value
  //   })
  // }
  // onChangeState = (e) => {
  //   this.setState({
  //     state: e.target.value
  //   })
  // }
  // onChangeCountry = (e) => {
  //   this.setState({
  //     country: e.target.value
  //   })
  // }
  // onChangeZip = (e) => {
  //   this.setState({
  //     zip: e.target.value
  //   })
  // }
  // onChangeNote = (e) => {
  //   this.setState({
  //     note: e.target.value
  //   })
  // }
  isDisabled= () => {
    if(this.state.name=="")
    {
      this.setState({        
        name_error_text: "Sorry, fill name"
      });
    }
    else
    {
      this.setState({        
        name_error_text: null
      });
    }
    if(this.state.address=="")
    {
      this.setState({        
        address_error_text: "Sorry, fill address"
      });
    }
    else
    {
      this.setState({        
        address_error_text: null
      });
    }

      if(this.state.number=="")
    {
      this.setState({        
        number_error_text: "Sorry, fill number"
      });
    }
    else
    {
      this.setState({        
        number_error_text: null
      });
    }
    
    
  }

  
  changeValue(e, type) {

    const value = e.target.value;
    const nextState = {};
    nextState[type] = value;
    this.setState(nextState);
    
  }
  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Shipping address
      </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              label="Name"
              fullWidth
              onBlur={this.isDisabled} 
              helperText={this.state.name_error_text}
              variant="outlined"
              value={this.state.name}
              error={this.state.name_error_text?true:false}
              onChange={e => this.changeValue(e, 'name')}
              onKeyUp={e => this.isDisabled()}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              label="Mobile Number"
              fullWidth
              value={this.state.number}
              helperText={this.state.number_error_text}
              onChange={e => this.changeValue(e, 'number')}
              error={this.state.number_error_text?true:false}
              onKeyUp={e => this.isDisabled()}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              label="Address"
              fullWidth
              value={this.state.address}
              helperText={this.state.address_error_text}

              onChange={e => this.changeValue(e, 'address')}
              error={this.state.address_error_text?true:false}
              onKeyUp={e => this.isDisabled()}

            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              label="City"
              fullWidth
              value={this.state.city}
              onChange={e => this.changeValue(e, 'city')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              label="State/Province/Region"
              fullWidth
              value={this.state.state}
              onChange={e => this.changeValue(e, 'state')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              label="Zip / Postal code"
              fullWidth
              autoComplete="billing postal-code"
              value={this.state.zip}
              onChange={e => this.changeValue(e, 'zip')}

            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              label="Country"
              fullWidth
              disabled
              value={this.state.country}
              onChange={e => this.changeValue(e, 'country')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Note"
              fullWidth
              value={this.state.note}
              onChange={e => this.changeValue(e, 'note')}
            />
          </Grid>
          <Grid item xs={12}>
            <Add data={this.state}></Add>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}