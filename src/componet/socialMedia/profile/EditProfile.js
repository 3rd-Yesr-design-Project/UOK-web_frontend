import React from 'react';

import { Modal } from 'react-bootstrap';

import { updateProfile } from '../../../Action/userActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EditProfileForm from './EditProfileForm';

const EditProfile = ({ updateProfile, show, handleClose }) => {
  return (
    <div className='col-md-12'>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Your profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditProfileForm handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

EditProfile.prototype = {
  updateProfile: PropTypes.func.isRequired,
};

export default connect(null, { updateProfile })(EditProfile);
