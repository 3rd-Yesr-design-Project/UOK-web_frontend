import React, { useState } from 'react';
import {
  Form,
  Button,
  DropdownButton,
  Dropdown,
  Image,
  Row,
  Modal,
} from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import userServices from '../../services/UserServices';

const ResetPassword = () => {
  const [state, setState] = useState({ password: null, conformPassword: null });
  const [show, setShow] = useState(true);
  const [ispasswordErr, setIsPasswordErr] = useState(false);

  const { userId } = useParams();
  const history = useHistory();

  const handleClose = () => setShow(false);

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const compairePassword = () => {};

  const onSubmit = async () => {
    try {
      if (state?.password === state?.conformPassword) {
        const body = { password: state.password };
        await userServices.resetPassword(userId, body);
        history.push('/');
        setIsPasswordErr('');
      }
      setIsPasswordErr('Passwords are mismatch');
    } catch (error) {
      setIsPasswordErr('Passwords are mismatch');
      console.log(error);
    }
  };

  return (
    <div className='col-md-12'>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Forget Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              name='password'
              placeholder='Password'
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              name='conformPassword'
              placeholder='Conform Password'
              onChange={onChange}
            />
          </Form.Group>
          <Form.Label>
            {ispasswordErr === '' ? null : (
              <h5 style={{ color: 'red' }}>{ispasswordErr}</h5>
            )}
          </Form.Label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={onSubmit}>
            Reset Password
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ResetPassword;
