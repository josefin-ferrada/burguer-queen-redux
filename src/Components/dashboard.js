import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles({
  button: {
    margin:"10px",
    backgroundColor: "orange"
  },
  root: {
    flexGrow: 1,
  },
  input: {
    display: 'none',
  },
  colorFav: {
    backgroundColor: "black"
  }
  
});

function SimpleAppBar (props) {
    const {history} = props;
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
          <Button color="primary"  variant="contained" onClick={()=>{history.push("./cocina")}} className={classes.button}>COCINA</Button>
          <Button color="primary"  variant="contained"  onClick={()=>{history.push("./mesero")}} className={classes.button}>MESERO</Button>
          
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(SimpleAppBar)