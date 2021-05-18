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
} from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginUser } from '../../Action/userActions';
import ForgetPasswordModal from '../common/ForgetPasswordModal';

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
}));

const Login = ({ loginUser }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [show, setShow] = useState(false);
  const [emailErr, setEmailErr] = useState('');

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

  const submitForm = () => {
    if (validateEmail(state?.email)) {
      loginUser(state);
    }
  };
  return (
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
            value={state.email}
            onChange={handleChange}
            //autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            value={state.password}
            label='Password'
            type='password'
            id='password'
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          {emailErr !== '' ? (
            <span style={{ color: 'red' }}>{emailErr}</span>
          ) : null}
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
              <div onClick={handleShow}>Forgot password?</div>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
        <ForgetPasswordModal show={show} handleClose={handleClose} />
      </div>
    </Container>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default connect(null, { loginUser })(Login);
