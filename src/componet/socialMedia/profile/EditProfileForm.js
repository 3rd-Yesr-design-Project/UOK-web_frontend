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

const EditProfileForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
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

  const handleFirstName = (input) => {
    setFirstName(input);
  };
  const handleLastName = (input) => {
    setLastName(input);
  };
  const handleCity = (input) => {
    setCity(input);
  };
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', image);

    data.append('upload_preset', 'insta-clone');
    data.append('cloud_name', 'ddeg8sl19');
    fetch('https://api.cloudinary.com/v1_1/ddeg8sl19/image/upload', {
      method: 'post',
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        setProfileUrl(data.url);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(
      firstName,
      lastName,
      city,
      hobby,
      gender,
      profileUrl,
      status,
      birthday,
      school,
      university,
      homeTown,
      currentCity
    );
    const isValid =
      firstName &&
      lastName &&
      city &&
      hobby &&
      gender &&
      image &&
      profileUrl &&
      birthday &&
      school &&
      currentCity &&
      university &&
      status &&
      homeTown &&
      currentCity;

    // if (isValid) {
    // updateProfile({
    //   firstName,
    //   lastName,
    //   city,
    //   hobby,
    //   gender,
    //   profileUrl,
    //   status,
    //   birthday,
    //   school,
    //   university,
    //   homeTown,
    //   currentCity,
    // });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>FirstName</Form.Label>
          <Form.Control
            type='text'
            onChange={(e) => handleFirstName(e.target.value)}
            placeholder='Password'
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>LastName</Form.Label>
          <Form.Control
            type='text'
            onChange={(e) => handleLastName(e.target.value)}
            placeholder='Password'
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            onChange={(e) => handleCity(e.target.value)}
            placeholder='Password'
          />
        </Form.Group>

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
            placeholder='Status'
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>University</Form.Label>
          <Form.Control
            type='text'
            value={university}
            onChange={(e) => handleUniversity(e.target.value)}
            placeholder='Status'
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Home Town</Form.Label>
          <Form.Control
            type='text'
            value={homeTown}
            onChange={(e) => handleHomeTown(e.target.value)}
            placeholder='Status'
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Current City</Form.Label>
          <Form.Control
            type='text'
            value={currentCity}
            onChange={(e) => setCurrentCity(e.target.value)}
            placeholder='Status'
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Hobby</Form.Label>
          <Form.Control
            type='text'
            onChange={(e) => handleHobby(e.target.value)}
            placeholder='Hobby'
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

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EditProfileForm;