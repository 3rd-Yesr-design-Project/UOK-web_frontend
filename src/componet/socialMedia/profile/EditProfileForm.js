import React, { useState } from 'react';
import { Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import ProfileService from '../../../services/ProfileService';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import Moment from 'moment';
import { editProfile, createProfile } from '../../../Action/profileAction';

const EditProfileForm = ({
  editProfile,
  handleClose,
  userProfile,
  createProfile,
}) => {
  const [gender, setGender] = useState(userProfile?.gender || '');
  const [image, setImage] = useState('');
  const [university, setUniversity] = useState(userProfile?.university || '');
  const [status, setStatus] = useState(userProfile?.status || '');
  const [birthday, setBirthDay] = useState(
    new Date(Moment(userProfile?.birthday).format('YYYY-MM-DD')) || ''
  );
  const [profileUrl, setProfileUrl] = useState(userProfile?.profile_url || '');
  const [school, setSchool] = useState(userProfile?.school || '');
  const [homeTown, setHomeTown] = useState(userProfile?.home_town || '');
  const [currentCity, setCurrentCity] = useState(
    userProfile?.current_city || ''
  );
  const [mobile, setMobile] = useState(userProfile?.mobile || '');
  const [religan, setReligan] = useState(userProfile?.religioun || '');
  const [language, setLanguage] = useState(userProfile?.language || '');
  const [workingPlace, setWorkingPlace] = useState(
    userProfile?.working_place || ''
  );

  const [genderErr, setGenderErr] = useState('');
  const [imageErr, setImageErr] = useState('');
  const [universityErr, setUniversitErr] = useState('');
  const [statusErr, setStatusErr] = useState('');
  const [birthdayErr, setBirthdayErr] = useState('');
  const [schoolErr, setSchoolErr] = useState('');
  const [homeTownErr, setHomeTownErr] = useState('');
  const [currentCityErr, setCurrentCityErr] = useState('');
  const [mobileErr, setMobileErr] = useState('');
  const [religanErr, setReliganErr] = useState('');
  const [languageErr, setLanguageErr] = useState('');
  const [workingPlaceErr, setWorkingPlaceErr] = useState('');

  const [loading, setLoading] = useState(false);

  let { userId } = useParams();

  // const handleHobby = (input) => {
  //   setHobby(input);
  // };
  const handleGender = (input) => {
    setGender(input);
    validateGender(input);
  };

  const validateGender = (input) => {
    if (!input?.trim()) {
      setGenderErr('Enter your gender');
    }
    setGenderErr('');
  };

  const handleImage = (input) => {
    setImage(input);
  };

  const validateImage = (input) => {
    if (!input?.trim()) {
      setImageErr('Add your Image');
    }

    setImageErr('');
  };

  const handleBirthDate = (input) => {
    setBirthDay(input);
    validateBirthDay(input);
  };

  const validateBirthDay = (input) => {
    if (!input?.trim()) {
      setBirthdayErr('Enter birthday');
    }
    setBirthdayErr('');
  };

  const handleStatus = (input) => {
    setStatus(input);
    validateStatus(input);
  };

  const validateStatus = (input) => {
    if (!input?.trim()) {
      setStatusErr('Enter your status');
    }
    setStatusErr('');
  };

  const handleSchool = (input) => {
    setSchool(input);
    validateSchool(input);
  };

  const validateSchool = (input) => {
    if (!input?.trim()) {
      setSchoolErr('Enter your School');
    }
    setSchoolErr('');
  };

  const handleUniversity = (input) => {
    setUniversity(input);
    validateUniversity(input);
  };

  const validateUniversity = (input) => {
    if (!input?.trim()) {
      setUniversitErr('Enter your University');
    }
    setUniversitErr('');
  };

  const handleHomeTown = (input) => {
    setHomeTown(input);
    validateHomeTown(input);
  };

  const validateHomeTown = (input) => {
    if (!input?.trim()) {
      setHomeTownErr('Enter your Home Town');
    }
    setHomeTownErr('');
  };

  const handleMobile = (input) => {
    setMobile(input);
    validateMobile(input);
  };

  const validateMobile = (input) => {
    if (!input?.trim()) {
      setMobileErr('Enter your Mobile');
    }
    setMobileErr('');
  };

  const handleLanguage = (input) => {
    setLanguage(input);
    validateLanguage(input);
  };

  const validateLanguage = (input) => {
    if (!input?.trim()) {
      setLanguageErr('Enter your language');
    }
  };

  const handleReligan = (input) => {
    setReligan(input);
    validateReligan(input);
  };

  const validateReligan = (input) => {
    if (!input?.trim()) {
      setReliganErr('Enter your religen');
    }
  };

  const handleWorkingPlace = (input) => {
    setWorkingPlace(input);
    validateWorkingPlace(input);
  };

  const validateWorkingPlace = (input) => {
    if (!input?.trim()) {
      setWorkingPlaceErr('Enter your Working Place');
    }
    setWorkingPlaceErr('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', image);

    data.append('upload_preset', 'insta-clone');
    data.append('cloud_name', 'ddeg8sl19');

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

      try {
        const body = {
          profileUrl: newRes.url ? newRes?.url : profileUrl,
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
          user_id: userId,
        };

        if (userProfile?.id === undefined) {
          const result = await ProfileService.createUserProfile(body);
          const data = {
            ...result.data.data,
            email: userProfile?.email,
            name: userProfile?.name,
          };
          createProfile(data);
          handleClose();
        } else {
          const result = await ProfileService.editProfileByUserId(userId, {
            ...body,
          });

          const data = {
            ...result.data.data,
            email: userProfile?.email,
            name: userProfile?.name,
          };

          editProfile(data);
          setLoading(false);
          handleClose();
        }
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
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
          <Form.Label style={{ color: 'red' }}>{birthdayErr}</Form.Label>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Status</Form.Label>
          <Form.Control
            type='text'
            value={status}
            onChange={(e) => handleStatus(e.target.value)}
            placeholder='Status'
          />
          <Form.Label style={{ color: 'red' }}>{statusErr}</Form.Label>
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
          <Form.Label style={{ color: 'red' }}>{universityErr}</Form.Label>
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
    userProfile: state.profile?.userProfile,
  };
};

export default connect(mapStateToProps, { editProfile, createProfile })(
  EditProfileForm
);
