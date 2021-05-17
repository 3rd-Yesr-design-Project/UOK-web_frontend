import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import userServices from '../../services/UserServices';
import { toast } from 'react-toastify';
const ForgetPasswordModal = ({ show, handleClose }) => {
  const [email, setEmail] = useState(null);
  const [emailErr, setEmailErr] = useState('');
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

  const onSubmit = async () => {
    try {
      if (validateEmail(email)) {
        await userServices.forgetPassword({ email });
        toast.success('Send Email Success To Reset Password');
        handleClose();
      }
    } catch (error) {
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
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
              <Form.Text className='text-muted'>
                {emailErr ? (
                  <span style={{ color: 'red' }}>{emailErr}</span>
                ) : null}
              </Form.Text>
            </Form.Group>
          </Form>
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

export default ForgetPasswordModal;
