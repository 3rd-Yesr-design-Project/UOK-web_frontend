import React, { useState } from 'react';
import {
  Avatar,
  Button,
  TextField,
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
import socialMedia from '../../../assets/social-media.jpg';
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
    width: '100%',
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
  const [emailErr, setEmailErr] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (input) => {
    if (input == null || !input?.trim()) {
      setEmailErr('email can not be empty');
      return false;
    }
    if (input?.indexOf('@') >= 0) {
      const emailParts = input?.split('@');

      const EMAIL_USERNAME_PATTERN =
        /^[a-z0-9]+(?:[._][a-z0-9]+)*(?:\+[0-9]+)*$/;
      const EMAIL_DOMAIN_PATTERN =
        /^([a-z0-9]+?(-[a-z0-9]+)*(?:[a-z0-9]*[a-z0-9])?\.)+[a-z0-9]+$/;
      if (
        !emailParts[0].match(EMAIL_USERNAME_PATTERN) ||
        !emailParts[1].match(EMAIL_DOMAIN_PATTERN)
      ) {
        setEmailErr('email is invalid');
        return false;
      }
    } else {
      setEmailErr('email is invalid');
      return false;
    }
    setEmailErr('');
    return true;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      if (validateEmail(state?.email)) {
        const user = await UserServices.socialLogin(state);
        socialLoginUser(user.data.data);
        history.push('/social/home');
      }
    } catch (error) {
      setErrorMsg(error?.data?.message);
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
                  <img src={socialMedia} className='mt-5' />
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
                {errorMsg !== '' ? (
                  <span className='bg-red-400 p-2'>{errorMsg}</span>
                ) : null}
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
                    onChange={handleChange}
                  />
                  {emailErr !== '' ? (
                    <span style={{ color: 'red' }}>{emailErr}</span>
                  ) : null}
                  <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    name='password'
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
