import React from 'react';
import UploadPost from './UploadPost';
import { Modal } from 'react-bootstrap';

import { updateProfile } from '../../../Action/userActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CreatePost = ({ updateProfile, show, handleClose }) => {
  return (
    <div className='col-md-12'>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create Your Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UploadPost handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

CreatePost.prototype = {
  updateProfile: PropTypes.func.isRequired,
};

export default connect(null, { updateProfile })(CreatePost);
