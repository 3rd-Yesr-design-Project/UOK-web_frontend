import React, { useState } from 'react';
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
import ChatPic from '../../../assets/chat.jpg';
import UserServices from '../../../services/UserServices';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { socialLoginUser } from '../../../Action/userActions';
import HomeLayout from '../../../componet/layout/HomeLayout';
import ForgetPasswordModal from '../../../componet/common/ForgetPasswordModal';

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
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

const SocialLogin = ({ socialLoginUser }) => {
  const classes = useStyles();
  const history = useHistory();

  const [state, setState] = useState({ email: null, password: null });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const user = await UserServices.socialLogin(state);
      socialLoginUser(user.data.data);
      history.push('/social/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HomeLayout>
      <div className='container-fluid mt-20'>
        <div className='row'>
          <div className='col-md-6 m-auto'>
            <Card className='text-center'>
              <CardActionArea>
                <div className='flex justify-center'>
                  <img src={ChatPic} width={200} />
                </div>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    U Chat
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    Please login to Chat world
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
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
                  {/* <FormControlLabel
                    control={<Checkbox value='remember' color='primary' />}
                    label='Remember me'
                  /> */}
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
                    <Grid item xs className='cursor-pointer'>
                      <Link
                        variant='body2'
                        onClick={handleShow}
                        className='no-underline'
                      >
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item></Grid>
                  </Grid>
                </form>
              </div>
            </Container>
          </div>
        </div>
        <ForgetPasswordModal show={show} handleClose={handleClose} />
      </div>
    </HomeLayout>
  );
};

export default connect(null, { socialLoginUser })(SocialLogin);
