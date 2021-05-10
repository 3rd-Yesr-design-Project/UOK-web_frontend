import React, { useEffect } from 'react';
import More from '../icons/more';
import SLike from '../icons/likesmall';
import CommentButton from '../icons/lovesmall';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import postService from '../../../../services/PostService';
import { getPostByUserId } from '../../../../Action/postAction';

const MainPost = ({ getPostByUserId, posts }) => {
  const { userId } = useParams();
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const result = await postService.getPostsByUserId(userId);
    console.log(result.data.data);
    getPostByUserId(result.data.data);
  };

  console.log('mainpost', posts);
  const convertDate = (date) => {
    const newDate = new Date(date);
    console.log(newDate);
    return newDate;
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
                    Ronald Oliver
                  </span>{' '}
                  was with{' '}
                  <span className='cursor-pointer font-bold'>
                    Steve Cunningham
                  </span>{' '}
                  <br />
                  <span className='text-fGrey text-opacity-50 text-sm'>
                    {' '}
                    {post?.created_at}{' '}
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
              <div>26 Likes</div>
              <div>1 Comment</div>
            </div>
            <div className='border border-fGray border-opacity-10 mt-4' />
            <div className='flex justify-between items-center mt-4'>
              <button className='w-1/2 flex items-center justify-center focus:outline-none'>
                <SLike />
                <span className='ml-1'>Like</span>
              </button>
              <button className='w-1/2 flex items-center justify-center focus:outline-none'>
                <CommentButton />
                <span className='ml-1'>Comment</span>
              </button>
            </div>
            <div className='border border-fGray border-opacity-10 mt-4' />
            <div className='flex space-x-2 mt-4'>
              <img
                src={post?.post_url}
                alt='img'
                className='h-10 w-10 rounded-full'
              />
              <input
                className='bg-fFill px-4 py-3 w-full focus:outline-none rounded-full'
                placeholder='Write something to Roland…'
              />
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
