import React from 'react';
import './login.css';
import {
  Button,
  Grid,
  Paper,
  AppBar,
  Typography,
  Toolbar,
} from '@material-ui/core';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/authAction';

const useStyles = makeStyles((theme) => ({
  primary: {
    '&:hover': {
      background: '#3f51b5',
      color: 'white',
    },
  },
}));

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div>
      <AppBar position="static" alignitems="center" color="primary">
        <Toolbar>
          <Grid container justify="center" wrap="wrap">
            <Grid item>
              <Typography variant="h6"> Prueba Frontend Rokket</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid
        container
        spacing={0}
        justify="center"
        direction="row"
        alignContent="center"
      >
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            spacing={2}
            className="login-form"
          >
            <Paper
              variant="elevation"
              elevation={2}
              className="login-background"
            >
              <Grid item>
                <Typography
                  component="h1"
                  variant="h5"
                  style={{ paddingBottom: 20 }}
                >
                  Sign in
                </Typography>
              </Grid>
              <Grid item>
                <form>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<SendOutlinedIcon />}
                        className={classes.primary}
                        onClick={handleLogin}
                      >
                        Send
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item></Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
