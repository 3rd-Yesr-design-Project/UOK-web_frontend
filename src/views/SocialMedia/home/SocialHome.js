import React, { useEffect, useState } from 'react';

// import SideBar from '../views/userprofile/Sidebar';
// import ChatBar from '../views/userprofile/ChatBar';
// import Posts from '../views/userprofile/Posts';
// import ChatBox from '../views/userprofile/ChatBox';
import SideBar from '../../../componet/socialMedia/home/Sidebar';
import FriendRequest from '../../../componet/socialMedia/home/FriendRequest';
import ChatBar from '../../../componet/socialMedia/home/ChatBar';
import Posts from '../../../componet/socialMedia/home/Posts';
import ChatBox from '../../../componet/socialMedia/home/ChatBox';
import SocialLayout from '../../../componet/layout/SocialLayout';
import HomeLayout from '../../../componet/layout/HomeLayout';
import userServices from '../../../services/UserServices';
import FriendService from '../../../services/FriendService';
import { getAllUsers } from '../../../Action/userActions';
import { getPosts } from '../../../Action/postAction';
import { getFriendRequest, getUOKFriends } from '../../../Action/friendAction';
import { connect } from 'react-redux';
import postService from '../../../services/PostService';

const SocialHome = ({
  getAllUsers,
  getPosts,
  getFriendRequest,
  getUOKFriends,
}) => {
  useEffect(() => {
    fetchFriends();
    fetchPosts();
    fetchUOKFriends();
  }, []);

  const fetchFriends = async () => {
    try {
      const friends = await userServices.fetchAllUsers();
      getAllUsers(friends.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUOKFriends = async () => {
    try {
      const friends = await FriendService.fetchUOKFriends();
      console.log('xxxxxxxxxxxxxx', friends);
      getUOKFriends(friends?.data?.data);
      // getFriendRequest(friends?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPosts = async () => {
    try {
      const posts = await postService.fetchPosts();

      getPosts(posts.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // const [state, setState] = useState(false);
  // const [current, setCurrent] = useState({});

  // const openChat = (user) => {
  //   setState(true);
  //   setCurrent(user);
  // };
  // const closeChat = () => {
  //   setState(false);
  // };

  return (
    // <div>
    <HomeLayout>
      <SocialLayout>
        <div className='facebook'>
          <SideBar />
          <Posts />
          {/* <ChatBar openChat={openChat} />
          <ChatBox state={state} current={current} closeChat={closeChat} /> */}
          <FriendRequest />
        </div>
      </SocialLayout>
    </HomeLayout>
    // </div>
  );
};

export default connect(null, {
  getAllUsers,
  getPosts,
  getFriendRequest,
  getUOKFriends,
})(SocialHome);
