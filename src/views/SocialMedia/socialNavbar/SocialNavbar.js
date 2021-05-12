import React, { useState } from 'react';
import { Chip, Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
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
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CreatePost from '../../../componet/socialMedia/post/CreatePost';
import { connect } from 'react-redux';
import UserSearchPopover from '../../../componet/socialMedia/navbar/UserSearchPopover';
import kelaniyaLogo from '../../../assets/Kelaniya.png';
import { logOutUser } from '../../../Action/userActions';

const Navbar = ({ user, logOutUser }) => {
  const [show, setShow] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModalClose = () => setShow(false);
  const handleModalShow = () => setShow(true);

  // const onChange = (e) => {
  //   console.log(e.target.value);
  // };

  const filterFriend = async (input) => {
    try {
      // const result = await socialFrienSearch.socialSearchInfo(input);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = async () => {
    try {
      await logOutUser();
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='navbar' style={{ marginTop: '70px' }}>
        <div className='navbar__first'>
          <div className='navbar__first-logo'>
            {/* <FaFacebook className='navbar__logo' /> */}
            <img src={kelaniyaLogo} width='40px' height='40px' />
          </div>
          <div className='navbar__first-search'>
            <input
              type='text'
              className='navbar__first-searchbar'
              placeholder='Friend Search'
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
          <span
            className='navbar__last-section'
            onClick={() => history.push('/signup')}
          >
            <FaFacebookMessenger />
          </span>
          <span className='navbar__last-section'>
            <FaBell />
          </span>
          <span className='navbar__last-section'>
            <FiLogOut onClick={() => logOut()} />
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
export default connect(mapStateToProps, { logOutUser })(Navbar);
