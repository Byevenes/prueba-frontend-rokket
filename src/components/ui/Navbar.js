import React from 'react';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, AppBar, Typography, Toolbar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/authAction';
import { setTagPostFailed } from '../../actions/postAction';

const useStyles = makeStyles((theme) => ({
  secondary: {
    marginRight: 50,
    background: '#DC004E',
    color: 'white',

    '&:hover': {
      background: '#DC004E',
      color: 'white',
    },
  },
}));

export const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(setTagPostFailed());
  };

  const classes = useStyles();
  return (
    <div className=" navbar navbar-dark bg-dark mb-4 ">
      <AppBar position="static" alignitems="center" color="primary">
        <Toolbar>
          <Grid container justify="center" wrap="wrap">
            <Grid item>
              <Typography variant="h6"> Rokket Tag</Typography>
            </Grid>
          </Grid>
          <Button
            variant="outlined"
            className={classes.secondary}
            color="secondary"
            onClick={handleLogout}
            startIcon={<ExitToAppOutlinedIcon />}
          >
            Exit
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
