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
import { connect } from 'react-redux';
import UserSearchPopover from '../../../componet/socialMedia/navbar/UserSearchPopover';

const Navbar = ({ user }) => {
  const [show, setShow] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModalClose = () => setShow(false);
  const handleModalShow = () => setShow(true);

  const onChange = (e) => {
    console.log(e.target.value);
  };

  const filterFriend = async (input) => {
    try {
      const result = await socialFrienSearch.socialSearchInfo(input);
    } catch (error) {
      console.log(error);
    }
  };

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
              onClick={handleClick}
              onChange={filterFriend}
            />
            <FaSistrix className='navar__searchIcon' />
          </div>
          <div></div>
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
            <Link to={`/social/profile/home/${user?.id}`}>
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
          <span className='navbar__last-section' onClick={handleModalShow}>
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

      <CreatePost show={show} handleClose={handleModalClose} />
      <UserSearchPopover
        handleClick={handleClick}
        handleClose={handleClose}
        anchorEl={anchorEl}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state?.user?.user,
  };
};
export default connect(mapStateToProps)(Navbar);
