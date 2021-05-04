import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
  Container,
  Card,
  CardActionArea,
  CardContent,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import UokLogo from '../../assets/Kelaniya.png';
import userServices from '../../services/UserServices';
import { resultLoginUser } from '../../Action/userActions';
import { Redirect, useHistory } from 'react-router';
import HomeLayout from '../../componet/layout/HomeLayout';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    maxWidth: 370,
  },
  media: {
    height: 140,
  },
}));

const ResultLogin = ({ resultLoginUser }) => {
  const classes = useStyles();
  const history = useHistory();

  const [state, setState] = useState({ email: null, password: null });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const user = await userServices.resultLogin(state);
      console.log(user);
      resultLoginUser(user.data.data);
      history.push('/results/view');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HomeLayout>
      <div>
        <div className='row'>
          <div className='col-md-6 m-auto flex justify-center'>
            <CardActionArea>
              <div className='flex justify-center'>
                <img src={UokLogo} width={200} />
              </div>

              <CardContent className='text-center'>
                <Typography gutterBottom variant='h5' component='h2'>
                  University Of Kelaniya
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Please login to see your Result
                </Typography>
              </CardContent>
            </CardActionArea>
          </div>

          <div className='col-md-6'>
            <Container component='main' maxWidth='xs'>
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                  Sign in
                </Typography>

                <form className={classes.form} onSubmit={submitForm}>
                  <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    // value={state.email}
                    onChange={handleChange}
                    //autoFocus
                  />
                  <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    name='password'
                    // value={state.password}
                    label='Password'
                    type='password'
                    id='password'
                    onChange={handleChange}
                  />
                  <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    className={classes.submit}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href='#' variant='body2'>
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href='#' variant='body2'>
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default connect(null, { resultLoginUser })(ResultLogin);
