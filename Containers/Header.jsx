import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <nav className="nav" style={{ justifyContent: 'space-around', display: 'flex', flexDirection: 'row' }}>
              <Button><Link color="white" to="/">Home</Link></Button>
              <Button><Link color="inherit" to="/people">People</Link></Button>
              <Button><Link color="inherit" to="/planets">Planets</Link></Button>
            </nav>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>

  );
}
