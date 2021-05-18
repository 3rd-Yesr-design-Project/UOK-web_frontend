import React, { useEffect } from 'react';
import More from '../icons/more';

import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import postService from '../../../../services/PostService';
import { getPostByUserId } from '../../../../Action/postAction';
import moment from 'moment';

const MainPost = ({ getPostByUserId, posts }) => {
  const { userId } = useParams();
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const result = await postService.getPostsByUserId(userId);

    getPostByUserId(result?.data?.data);
  };

  return (
    <div className='card' style={{ overflowY: 'scroll', height: '600px' }}>
      <>
        {posts?.map((post, i) => (
          <div className='w-full shadow-fb rounded bg-white p-4' key={i}>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                <img
                  src={post?.post_url}
                  alt='img'
                  className='h-10 w-10 rounded-full'
                />
                <div className='ml-4'>
                  <span className='cursor-pointer font-bold'>
                    {post?.user?.name}
                  </span>
                  <br />
                  <span className='text-fGrey text-opacity-50 text-sm'>
                    {' '}
                    {moment(post?.created_at).format('YYYY-MM-DD')}{' '}
                  </span>
                </div>
              </div>
              <button className='w-9 h-9 rounded-full bg-fFill flex items-center justify-center focus:outline-none'>
                <More />
              </button>
            </div>
            <div className='w-full mt-4'>{post?.description}</div>
            <img
              src={post?.post_url}
              alt='img'
              className='w-full h-72 object-cover mt-4 rounded'
            />
            <div className='flex justify-between mt-4 items-center text-fGrey text-opacity-50'>
              <div>{post?.likes.length} Likes</div>
              <div>{post?.comments.length} Comment</div>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.post.userPost,
  };
};

export default connect(mapStateToProps, { getPostByUserId })(MainPost);
