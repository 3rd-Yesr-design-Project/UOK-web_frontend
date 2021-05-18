import React, { useState } from 'react';
import { Chip, Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {
  FaSistrix,
  FaHome,
  FaPlus,
  FaFacebookMessenger,
  FaBell,
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
            <img src={kelaniyaLogo} width='40px' height='40px' />
          </div>
          <div className='navbar__first-search'>
            <input
              type='text'
              className='navbar__first-searchbar'
              placeholder='Friend Search'
              onClick={handleClick}
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

          <span className='middleIcon'>
            <Link to={`/social/profile/home/${user?.id}`}>
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
