import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import axios from 'axios';
const api = axios.create(
  {
    baseURL: `http://192.168.1.118/pizza-app/server/public/`
  }
)

const drawerWidth = 480;
const styles = theme => ({
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
});
// componentDidMount()
//   {
//     api.get('web/category')
//     .then(function (response) {
//       // handle success
//       console.log(response);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .then(function () {
//       // always executed
//     });

//   }


class NavCat extends React.Component {
    constructor()
    {
        super();
        this.state={
            users:[
               
            ],
            filtered:[],
            loading:true,
            searchValue:''
        };
        this.handleSearchChange = (searchValue) => {
            this.setState({searchValue});
            this.filter();
          };
    }
    componentDidMount()
        {
            api.get(`web/category`)
            .then(response=>{
                this.state.loading=false
                this.setState({users:response.data})
            });
        }

  render() {
    const { classes } = this.props;
  return (
    <React.Fragment>
        
        <Toolbar component="nav"  className={classes.toolbarSecondary}>
        {this.state.users.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.name}
            variant="body2"
            href={section.id}
            className={classes.toolbarLink}
          >
            {section.name}
          </Link>
        ))}
      </Toolbar>

      
    </React.Fragment>
  );
}
}
export default withStyles(styles)(NavCat);
