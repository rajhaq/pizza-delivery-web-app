import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

export default class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
        name:'',
        guest_id:'',
        total_price:'',
        type:'',
        name:'',
        number:'',
        note:'',
        address:'',
        state:'',
        country:'',
        zip:'',
    };
    this.handleSearchChange = (searchValue) => {
      this.setState({ searchValue });
      this.filter();
    };

  }
  onChangeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  onChangeAddress = (e) => {
    this.setState({
      address: e.target.value
    })
  }
  onChangeNumber = (e) => {
    this.setState({
      number: e.target.value
    })
  }
  onChangeState = (e) => {
    this.setState({
      state: e.target.value
    })
  }
  onChangeCountry = (e) => {
    this.setState({
      country: e.target.value
    })
  }
  onChangeZip = (e) => {
    this.setState({
      zip: e.target.value
    })
  }
  onChangeNote = (e) => {
    this.setState({
      note: e.target.value
    })
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
              variant="outlined"
              value={this.state.name}
              onChange={this.onChangeName}

            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              label="Mobile Number"
              fullWidth
              value={this.state.number}
              onChange={this.onChangeNumber}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              label="Address"
              fullWidth
              value={this.state.address}
              onChange={this.onChangeAddress}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
                variant="outlined"
              required
              label="City"
              fullWidth
              value={this.state.city}
              onChange={this.onChangeCity}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              id="state"
              variant="outlined"
              label="State/Province/Region"
              fullWidth
              value={this.state.state}
              onChange={this.onChangeState}
               />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="billing postal-code"
              value={this.state.zip}
              onChange={this.onChangeZip}

            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              label="Country"
              fullWidth
              value={this.state.country}
              onChange={this.onChangeCountry}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Note"
              fullWidth
              value={this.state.note}
              onChange={this.onChangeNote}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Primary
        </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}