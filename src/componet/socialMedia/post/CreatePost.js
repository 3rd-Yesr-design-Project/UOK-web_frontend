import React, { useState } from 'react';
import UploadPost from './UploadPost';
import {
  Form,
  Button,
  DropdownButton,
  Dropdown,
  Image,
  Row,
  Modal,
} from 'react-bootstrap';

import elon from '../../../assets/ellon.jpg';
import { updateProfile } from '../../../Action/userActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CreatePost = ({ updateProfile, show, handleClose }) => {
  return (
    <div className='col-md-12'>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Your profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UploadPost />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

CreatePost.prototype = {
  updateProfile: PropTypes.func.isRequired,
};

export default connect(null, { updateProfile })(CreatePost);
