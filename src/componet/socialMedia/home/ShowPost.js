import React from 'react';
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from 'react-icons/fa';
import { connect } from 'react-redux';

const ShowPost = ({ posts }) => {
  const [state, setState] = React.useState([
    {
      id: 1,
      userImg: '/images/ellon.jpg',
      name: 'Shakil Khan',
      time: '2h',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
        magnam quo illum expedita',
      postImg: '/images/ellon.jpg',
    },
    {
      id: 2,
      userImg: '/images/ellon.jpg',
      name: 'Sajjad Khan',
      time: '4h',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
        magnam quo illum expedita',
      postImg: '/images/ellon.jpg',
    },
    {
      id: 3,
      userImg: '/images/ellon.jpg',
      name: 'Rahul',
      time: '2h',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
        magnam quo illum expedita',
      postImg: '/images/ellon.jpg',
    },
    {
      id: 4,
      userImg: '/images/ellon.jpg',
      name: 'David',
      time: '2h',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
        magnam quo illum expedita',
      postImg: '/images/ellon.jpg',
    },
  ]);

  return (
    <div className='show'>
      {posts.map((post) => (
        <div key={post.id} className='empty'>
          <div className='show__header'>
            <div className='show__header-img'>
              <img src={post.post_url} alt='user' />
            </div>
            <div className='show__header-name'>
              {post?.user?.name} <div className='date'>{post?.created_at}</div>
            </div>
          </div>
          <div className='show__body'>
            <div className='show__body-text'>{post.description}</div>
            <div className='show__body-img'>
              <img src={post.post_url} alt='post' />
            </div>
          </div>
          <div className='show__reactions'>
            <span className='reactions'>
              <FaRegThumbsUp /> <span className='reactions-text'>Like</span>
            </span>
            <span className='reactions'>
              <FaRegCommentAlt />{' '}
              <span className='reactions-text'>Comments</span>
            </span>
            <span className='reactions'>
              <FaShareAlt /> <span className='reactions-text'>Share</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts,
  };
};

export default connect(mapStateToProps)(ShowPost);
