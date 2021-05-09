import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Popover,
  Typography,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '400px',
    maxWidth: '300px',
    backgroundColor: theme.palette.background.paper,
  },
}));

const UserSearchPopover = ({ handleClick, handleClose, anchorEl }) => {
  const classes = useStyles();

  const [state] = useState([
    { id: 1, image: '/images/ellon.jpg', name: 'Flutter Development' },
    { id: 2, image: '/images/ellon.jpg', name: 'PHP Development' },
    { id: 3, image: '/images/ellon.jpg', name: 'React Native Development' },
    { id: 4, image: '/images/ellon.jpg', name: 'Node JS Development' },
    { id: 5, image: '/images/ellon.jpg', name: 'Vue JS Development' },
    { id: 6, image: '/images/ellon.jpg', name: 'React Development' },
    { id: 7, image: '/images/ellon.jpg', name: 'Flutter Development' },
    // { id: 7, image: '/images/ellon.jpg', name: 'Flutter Development' },
  ]);

  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const onChange = () => {
    console.log('xxxxxxxxxxxxxx');
  };

  return (
    <div>
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
        {/* <div className={classes.root}>
          <List component='nav' aria-label='main mailbox folders'>
            <ListItem button>
              <ListItemAvatar>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
              </ListItemAvatar>
              <ListItemText primary='Inbox' />
            </ListItem>
          </List>
        </div> */}
        <div>
          <div className='m-2'>
            <input
              type='text'
              className='navbar__first-searchbar'
              placeholder='Facebook Search'
              onChange={onChange}
            />
          </div>

          {state?.map((user) => (
            <div className={classes.root}>
              <List component='nav' aria-label='main mailbox folders'>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar
                      alt='Remy Sharp'
                      src='/static/images/avatar/1.jpg'
                    />
                  </ListItemAvatar>
                  <ListItemText primary='Inbox' />
                </ListItem>
              </List>
            </div>
          ))}
        </div>
      </Popover>
    </div>
  );
};

export default UserSearchPopover;
