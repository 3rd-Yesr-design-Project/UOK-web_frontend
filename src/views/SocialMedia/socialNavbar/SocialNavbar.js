import React, { useState } from 'react';
import { Chip, Avatar } from '@material-ui/core';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import {
  FaFacebook,
  FaSistrix,
  FaHome,
  FaFontAwesomeFlag,
  FaVideo,
  FaUsers,
  FaGamepad,
  FaPlus,
  FaFacebookMessenger,
  FaBell,
  FaCaretDown,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CreatePost from '../../../componet/socialMedia/post/CreatePost';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className='navbar' style={{ marginTop: '70px' }}>
        <div className='navbar__first'>
          <div className='navbar__first-logo'>
            <FaFacebook className='navbar__logo' />
          </div>
          <div className='navbar__first-search'>
            <input
              type='text'
              className='navbar__first-searchbar'
              placeholder='Facebook Search'
            />
            <FaSistrix className='navar__searchIcon' />
          </div>
        </div>
        <div className='navbar__middle'>
          <span className='middleIcon'>
            <Link to='/social/home'>
              <FaHome className='navbar__middle-icons' />
            </Link>
          </span>
          {/* <span className='middleIcon'>
          <FaFontAwesomeFlag className='navbar__middle-icons' />
          <span className='navbar__notify'>3</span>
        </span> */}
          {/* <span className='middleIcon'>
          <FaVideo className='navbar__middle-icons' />
          <span className='navbar__notify'>10</span>
        </span> */}
          {/* <span className='middleIcon'>
          <FaUsers className='navbar__middle-icons' />
          <span className='navbar__notify'>22</span>
        </span> */}
          <span className='middleIcon'>
            <Link to='/social/profile/home'>
              {/* <FaGamepad className='navbar__middle-icons' /> */}
              <Chip
                avatar={<Avatar>P</Avatar>}
                label='Profile'
                variant='outlined'
              />
            </Link>
          </span>
        </div>
        <div className='navbar__last'>
          <span className='navbar__last-section' onClick={handleShow}>
            <FaPlus />
          </span>
          <span className='navbar__last-section'>
            <FaFacebookMessenger />
          </span>
          <span className='navbar__last-section'>
            <FaBell />
          </span>
          <span className='navbar__last-section'>
            <FaCaretDown />
          </span>
        </div>
      </div>
      <CreatePost show={show} handleClose={handleClose} />
    </div>
  );
};

export default Navbar;
