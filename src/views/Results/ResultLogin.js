import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  CardActionArea,
  CardContent,
} from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import ResultLogo from '../../assets/result.jpg';
import userServices from '../../services/UserServices';
import { resultLoginUser } from '../../Action/userActions';
import { useHistory } from 'react-router';
import HomeLayout from '../../componet/layout/HomeLayout';
import ForgetPasswordModal from '../../componet/common/ForgetPasswordModal';

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
        const user = await userServices.resultLogin(state);
        console.log(user);
        resultLoginUser(user.data.data);
        history.push('/results/view');
      }
    } catch (error) {
      setErrorMsg(error?.data?.message);
    }
  };

  return (
    <HomeLayout>
      <div>
        <div className='row'>
          <div className='col-md-6 m-auto flex justify-center'>
            <CardActionArea>
              <div className='flex justify-center'>
                <img src={ResultLogo} alt={ResultLogo} />
              </div>

              <CardContent className='text-center'>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Please login to see your Result
                </Typography>
              </CardContent>
            </CardActionArea>
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
                    // value={state.email}
                    onChange={handleChange}
                    //autoFocus
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
                    <Grid item xs className='cursor-pointer'>
                      <Link variant='body2' onClick={handleShow}>
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

export default connect(null, { resultLoginUser })(ResultLogin);
