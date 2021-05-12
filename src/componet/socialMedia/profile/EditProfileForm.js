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
import ProfileService from '../../../services/ProfileService';
import { useSelector, connect } from 'react-redux';
import { useParams } from 'react-router';
import Moment from 'moment';
import { editProfile } from '../../../Action/profileAction';

const EditProfileForm = ({ editProfile, handleClose, userProfile }) => {
  console.log(
    'user profile',
    Moment(userProfile?.profile?.birthday).format('L')
  );

  const [hobby, setHobby] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState('');
  const [university, setUniversity] = useState(
    userProfile?.profile?.university || ''
  );
  const [status, setStatus] = useState(userProfile?.profile?.status || '');
  const [birthday, setBirthDay] = useState(
    new Date(Moment(userProfile?.profile?.birthday).format('YYYY-MM-DD')) || ''
  );
  const [profileUrl, setProfileUrl] = useState('');
  const [school, setSchool] = useState(userProfile?.profile?.school || '');
  const [homeTown, setHomeTown] = useState(
    userProfile?.profile?.home_town || ''
  );
  const [currentCity, setCurrentCity] = useState(
    userProfile?.profile?.current_city || ''
  );
  const [mobile, setMobile] = useState(userProfile?.profile?.mobile || '');
  const [religan, setReligan] = useState(userProfile?.profile?.religioun || '');
  const [language, setLanguage] = useState(
    userProfile?.profile?.language || ''
  );
  const [workingPlace, setWorkingPlace] = useState(
    userProfile?.profile?.working_place || ''
  );
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user);
  let { userId } = useParams();

  const handleHobby = (input) => {
    setHobby(input);
  };
  const handleGender = (input) => {
    setGender(input);
  };
  const handleImage = (input) => {
    setImage(input);
  };

  const handleBirthDate = (input) => {
    setBirthDay(input);
  };

  const handleStatus = (input) => {
    setStatus(input);
  };

  const handleSchool = (input) => {
    setSchool(input);
  };
  const handleUniversity = (input) => {
    setUniversity(input);
  };

  const handleHomeTown = (input) => {
    setHomeTown(input);
  };

  const handleMobile = (input) => {
    setMobile(input);
  };
  const handleLanguage = (input) => {
    setLanguage(input);
  };
  const handleReligan = (input) => {
    setReligan(input);
  };
  const handleWorkingPlace = (input) => {
    setWorkingPlace(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', image);

    data.append('upload_preset', 'insta-clone');
    data.append('cloud_name', 'ddeg8sl19');
    // fetch('https://api.cloudinary.com/v1_1/ddeg8sl19/image/upload', {
    //   method: 'post',
    //   body: data,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setProfileUrl(data.url);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   } );

    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/ddeg8sl19/image/upload',
        {
          method: 'post',
          body: data,
        }
      );

      const newRes = await response.json();
      setProfileUrl(newRes.url);
      const isValid =
        gender &&
        //   profileUrl &&
        birthday &&
        school &&
        currentCity &&
        university &&
        status &&
        homeTown &&
        mobile &&
        language &&
        religan &&
        workingPlace;

      if (isValid && newRes?.url?.trim()) {
        try {
          const body = {
            profileUrl: newRes.url,
            mobile,
            birthDay: birthday,
            status,
            gender,
            language,
            religioun: religan,
            workingPlace,
            school,
            university,
            homeTown,
            currentCity,
            user_id: user.id,
          };
          const result = await ProfileService.editProfileByUserId(userId, {
            ...body,
          });

          editProfile(result?.data);
          setLoading(false);
          handleClose();
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {}
  };
  return (
    <div>
      <Form>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Birthday</Form.Label>
          <Form.Control
            type='date'
            value={Moment(birthday).format('YYYY-MM-DD')}
            onChange={(e) => handleBirthDate(e.target.value)}
            placeholder='BirthDay'
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Status</Form.Label>
          <Form.Control
            type='text'
            value={status}
            onChange={(e) => handleStatus(e.target.value)}
            placeholder='Status'
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>School</Form.Label>
          <Form.Control
            type='text'
            value={school}
            onChange={(e) => handleSchool(e.target.value)}
            placeholder='School'
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>University</Form.Label>
          <Form.Control
            type='text'
            value={university}
            onChange={(e) => handleUniversity(e.target.value)}
            placeholder='University'
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Home Town</Form.Label>
          <Form.Control
            type='text'
            value={homeTown}
            onChange={(e) => handleHomeTown(e.target.value)}
            placeholder='Home Town'
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Current City</Form.Label>
          <Form.Control
            type='text'
            value={currentCity}
            onChange={(e) => setCurrentCity(e.target.value)}
            placeholder='Current City'
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type='text'
            value={mobile}
            onChange={(e) => handleMobile(e.target.value)}
            placeholder='Mobile'
          />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Language</Form.Label>
          <Form.Control
            type='text'
            value={language}
            onChange={(e) => handleLanguage(e.target.value)}
            placeholder='Language'
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Religan</Form.Label>
          <Form.Control
            type='text'
            value={religan}
            onChange={(e) => handleReligan(e.target.value)}
            placeholder='Religan'
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>workingPlace</Form.Label>
          <Form.Control
            type='text'
            value={workingPlace}
            onChange={(e) => handleWorkingPlace(e.target.value)}
            placeholder='Working Place'
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <DropdownButton id='Gender' title='Gender' onSelect={handleGender}>
            <Dropdown.Item eventKey='male'>Male</Dropdown.Item>
            <Dropdown.Item eventKey='female'>Female</Dropdown.Item>
          </DropdownButton>
        </Form.Group>

        <Form.Group>
          <Form.File
            id='exampleFormControlFile1'
            label='Upload Your Profile Picture'
            accept='image/x-png,image/gif,image/jpeg'
            onChange={(e) => handleImage(e.target.files[0])}
          />
        </Form.Group>

        <Button
          variant='secondary'
          type='submit'
          onClick={(e) => {
            handleSubmit(e);
            setLoading(true);
          }}
          block
        >
          {loading ? 'Updating...' : 'Update'}
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userProfile: state.profile.userProfile,
  };
};

export default connect(mapStateToProps, { editProfile })(EditProfileForm);
