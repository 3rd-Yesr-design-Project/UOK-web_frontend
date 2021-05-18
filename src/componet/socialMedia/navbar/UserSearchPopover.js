import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Popover,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import socialSearch from '../../../services/SearchService';
import { searchFilter } from '../../../Action/SearchAction';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '400px',
    maxWidth: '300px',
    backgroundColor: theme.palette.background.paper,
  },
}));

const UserSearchPopover = ({
  handleClose,
  anchorEl,
  friends,
  searchFilter,
}) => {
  const classes = useStyles();

  const filterFriends = async (input) => {
    let values = {
      name: input?.target?.value,
    };
    const data = await socialSearch.socialSearchInfo(values);
    searchFilter(data.data.data);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div style={{ zIndex: '10000' }}>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div>
          <div>
            <input
              type='text'
              className='navbar__first-searchbar'
              placeholder='Friend Search'
              onChange={filterFriends}
            />
          </div>

          {friends?.map((user) => (
            <Link to={`/social/profile/home/${user?.id}`}>
              <div className={classes.root}>
                <List component='nav' aria-label='main mailbox folders'>
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar
                        alt='Remy Sharp'
                        src={user?.profile?.profile_url}
                      />
                    </ListItemAvatar>
                    <ListItemText primary={user?.name} />
                  </ListItem>
                </List>
              </div>
            </Link>
          ))}
        </div>
      </Popover>
    </div>
  );
};
//important theory
const mapStateToProps = (state) => {
  return {
    friends: state?.searchFriend?.filterFriend,
  };
};

export default connect(mapStateToProps, { searchFilter })(UserSearchPopover);
