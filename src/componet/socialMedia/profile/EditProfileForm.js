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
import { editProfile } from '../../../Action/profileAction';

const EditProfileForm = ({ editProfile }) => {
  const [hobby, setHobby] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState('');
  const [university, setUniversity] = useState('');
  const [status, setStatus] = useState('');
  const [birthday, setBirthDay] = useState('2020-08-01');
  const [profileUrl, setProfileUrl] = useState('');
  const [school, setSchool] = useState('');
  const [homeTown, setHomeTown] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [mobile, setMobile] = useState('');
  const [religan, setReligan] = useState('');
  const [language, setLanguage] = useState('');
  const [workingPlace, setWorkingPlace] = useState('');

  const user = useSelector((state) => state.user);
  let { userId } = useParams();

  const handleHobby = (input) => {
    setHobby(input);
  };
  const handleGender = (input) => {
    setGender(input);
    console.log(input);
  };
  const handleImage = (input) => {
    setImage(input);
    console.log(input);
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
            value={birthday}
            onChange={(e) => handleBirthDate(e.target.value)}
            placeholder='Password'
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Status</Form.Label>
          <Form.Control
            type='text'
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
          <Form.Label>Hobby</Form.Label>
          <Form.Control
            type='text'
            value={hobby}
            onChange={(e) => handleHobby(e.target.value)}
            placeholder='Hobby'
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
            <Dropdown.Item eventKey='Male'>Male</Dropdown.Item>
            <Dropdown.Item eventKey='Female'>Female</Dropdown.Item>
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
          variant='primary'
          type='submit'
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default connect(null, { editProfile })(EditProfileForm);
