import React, { useEffect } from 'react';
import {
  FaRegThumbsUp,
  FaRegCommentAlt,
  FaShareAlt,
  FaThumbsUp,
} from 'react-icons/fa';
import { Form, Button, Col } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CommentService from '../../../services/CommentService';
import { connect, useSelector } from 'react-redux';
import LikeService from '../../../services/LikeService';
import { getPosts } from '../../../Action/postAction';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const ShowPost = ({ posts, user, profile }) => {
  const classes = useStyles();
  const [typedText, setTypedText] = React.useState([null]);
  const [clickedPost, setClickedPost] = React.useState(null);
  const [commentSectionOn, setCommentSectionOn] = React.useState(false);
  const [isLikedd, setIsLikedd] = React.useState(false);
  const [likeExist, setLikeExist] = React.useState(false);

  useEffect(() => {
    posts.map((post) => {
      let x = false;
      post.likes?.map((like) => {
        if (like?.user_id === user?.id) {
          console.log('user id equal');
          setLikeExist(true);
          return (x = true);
        }
        return 1;
      });
      if (x) {
        post.isLiked = true;
      } else {
        post.isLiked = false;
      }
      return post;
    });
    // getPosts(posts);
    console.log(posts);
  }, [posts, isLikedd]);

  const p = useSelector((state) => state.post.posts);
  const viewComments = (postId) => {
    setCommentSectionOn(!commentSectionOn);
    setTypedText(null);
    console.log('view comments', postId);
    setClickedPost(postId);
    console.log(clickedPost);
  };

  const likePost = async (id) => {
    setIsLikedd(!isLikedd);
    const data = {
      user_id: user.id,
      post_id: id,
    };
    const newData = p.map((post) => {
      if (post.id === id) {
        let x = false;
        console.log('user id is ', user.id);
        post.likes?.map((like) => {
          if (like.user_id === user.id) {
            console.log('user id equal');
            setLikeExist(true);
            return (x = true);
          }
          return 1;
        });

        if (x) {
          post.isLiked = false;
          post.likes = post.likes.filter((l) => l.user_id !== user.id);
        } else {
          post.isLiked = true;
          post.likes = [...post.likes, data];
        }

        return post;
      } else {
        return post;
      }
    });
    await LikeService.addLike(id, data);
    posts = newData;
    console.log(newData);
    console.log(posts);
    getPosts(posts);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('submitted', typedText);
    try {
      const data = {
        postId: clickedPost,
        comment: typedText,
      };
      const obj = {
        post_id: data.postId,
        comment: data.comment,
        user_id: user.id,
        created_at: new Date(),
        user: {
          name: user.name,
          profile: {
            profile_url: user?.profile?.profile_url,
          },
        },
      };
      posts = posts.map((p) => {
        if (p.id === clickedPost) {
          return (p.comments = [...p.comments, obj]);
        }
      });
      setTypedText([null]);
      const result = await CommentService.addComment(data);
    } catch (error) {}
  };

  const onChangedValue = (e) => {
    console.log('Value changed', e.target.value);
    setTypedText(e.target.value);
  };

  return (
    <div className='show'>
      {posts?.map((post) => (
        <div key={post.id} className='empty'>
          <div className='show__header'>
            <div className='show__header-img'>
              <img src={post?.user?.profile?.profile_url} alt='user' />
            </div>
            <div className='show__header-name'>
              {post?.user?.name}{' '}
              <div className='date'>
                {moment(post?.created_at).format('YYYY/MM/DD')}
              </div>
            </div>
          </div>
          <div className='show__body'>
            <div className='show__body-text'>{post.description}</div>
            <div className='show__body-img'>
              <img src={post.post_url} alt='post' />
            </div>
          </div>
          <div className='show__reactions'>
            <span className='reactions' onClick={() => likePost(post.id)}>
              {post?.isLiked ? (
                <FaThumbsUp fontSize='19px' />
              ) : (
                <FaRegThumbsUp fontSize='19px' />
              )}
              <span className='reactions-text'> {post.likes.length}</span>
            </span>
            <span className='reactions' onClick={() => viewComments(post.id)}>
              <FaRegCommentAlt />{' '}
              <span className='reactions-text'>Comments</span>
            </span>
            <span className='reactions'>
              <FaShareAlt /> <span className='reactions-text'>Share</span>
            </span>
          </div>
          {post.comments?.map((comment) => {
            if (
              comment.post_id === post.id &&
              clickedPost === post.id &&
              commentSectionOn
            ) {
              return (
                <List className={classes.root}>
                  <ListItem alignItems='flex-start'>
                    <ListItemAvatar>
                      <Avatar
                        alt='image'
                        src={comment.user.profile?.profile_url}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={comment.user.name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component='span'
                            variant='body2'
                            className={classes.inline}
                            color='textPrimary'
                          >
                            {comment.comment}
                            <br />
                          </Typography>
                          {moment(comment.created_at).format(
                            'YYYY/MM/DD HH:mm'
                          )}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant='inset' component='li' />
                </List>
              );
            }
            return null;
          })}
          {clickedPost === post.id && commentSectionOn && (
            <div style={{ marginLeft: '100px', marginTop: '15px' }}>
              <Form inline onSubmit={(e) => handleSubmit(e)}>
                <Form.Group>
                  <Form.Row>
                    <Col>
                      <Form.Control
                        type='text'
                        placeholder='Normal text'
                        value={typedText}
                        onChange={onChangedValue}
                      />
                    </Col>
                    <Button type='submit' className='mb-2'>
                      Submit
                    </Button>
                  </Form.Row>
                </Form.Group>
              </Form>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts,
    user: state.user.user,
    profile: state.profile.userProfile,
  };
};

export default connect(mapStateToProps)(ShowPost);
