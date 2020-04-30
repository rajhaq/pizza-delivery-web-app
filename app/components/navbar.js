import React from 'react';
import PropTypes from 'prop-types';
import CartPizza from '../components/cartPizza';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Cancel from '@material-ui/icons/Cancel';
const drawerWidth = 480;
const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const { sections, title } = props;
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small" onClick={handleDrawerOpen}>
          Sign up
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>

      <Drawer
        className={classes.drawer}
        anchor="right"
        open={open}
        
        classes={{
          paper: classes.drawerPaper,
        }}
      >
              <div className={classes.drawerContainer}>

        <Card className={classes.root}>
      <CardHeader
        
        action={
          
          <IconButton aria-label="settings" onClick={handleDrawerClose}>
          <Cancel />
        </IconButton>
        }
        title="Cart"
        subheader="Total Item"
      />
      <CardContent >
      <Grid container spacing={3}>
          <Grid item xs={6}>

 <Typography variant="h5" color="textSecondary" component="h5">
          Total $6$
        </Typography>
        </Grid>
        <Grid item xs={6}>
        <Button variant="contained" color="primary">
  Checkout
</Button>
</Grid>
</Grid>
      <div className={classes.drawerContainer}>
        <CartPizza></CartPizza>
        <CartPizza></CartPizza>
        <CartPizza></CartPizza>
        <CartPizza></CartPizza>
        <CartPizza></CartPizza>
        <CartPizza></CartPizza>
        <CartPizza></CartPizza>
        <CartPizza></CartPizza>
        <CartPizza></CartPizza>
        </div>
      </CardContent>
      <CardActions disableSpacing>
      

      </CardActions>
      
    </Card>
    </div>
       
      </Drawer>
    </React.Fragment>
  );
}

Navbar.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};