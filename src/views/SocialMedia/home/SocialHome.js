import React, { useEffect } from 'react';
import SideBar from '../../../componet/socialMedia/home/Sidebar';
import FriendRequest from '../../../componet/socialMedia/home/FriendRequest';
import Posts from '../../../componet/socialMedia/home/Posts';
import SocialLayout from '../../../componet/layout/SocialLayout';
import HomeLayout from '../../../componet/layout/HomeLayout';
import userServices from '../../../services/UserServices';
import FriendService from '../../../services/FriendService';
import { getAllUsers } from '../../../Action/userActions';
import { getPosts } from '../../../Action/postAction';
import { getFriendRequest, getUOKFriends } from '../../../Action/friendAction';
import { connect } from 'react-redux';
import postService from '../../../services/PostService';

const SocialHome = ({ getAllUsers, getPosts, getUOKFriends }) => {
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
      getUOKFriends(friends?.data?.data);
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

  return (
    <HomeLayout>
      <SocialLayout>
        <div className='facebook'>
          <SideBar />
          <Posts />
          <FriendRequest />
        </div>
      </SocialLayout>
    </HomeLayout>
  );
};

export default connect(null, {
  getAllUsers,
  getPosts,
  getFriendRequest,
  getUOKFriends,
})(SocialHome);
