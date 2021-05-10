import React from 'react';
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from 'react-icons/fa';
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
import { connect } from 'react-redux';
import LikeService from '../../../services/LikeService';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}))

const ShowPost = ({ posts }) => {
  
  const classes = useStyles();
  const [typedText, setTypedText] = React.useState([null]);
  const [clickedPost, setClickedPost] = React.useState([null]);
  const viewComments = (postId) => {
    setTypedText(null);
    console.log('view comments', postId);
    setClickedPost(postId);
    console.log(clickedPost);
  }

  const AddLikePost = async (postId) => {
    console.log('Like post', postId);
    try {
      const data = {
        user_id:1,
        post_id: postId
      }
      const likeAdd = await LikeService.addLike(postId, data);
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('submitted', typedText);
    try {
      const data = {
        postId:clickedPost,
        comment:typedText,
      }
      const obj = {
        post_id: data.postId,
        comment: data.comment,
        user_id: 1,
        userName: 'user1',
        created_at:'Today at 5:42PM'
      }
      posts = posts.map(p => {
        if (p.id === clickedPost) {
          return p.comments = [...p.comments, obj];
        }
      } )
      setTypedText(null);
       const result = await CommentService.addComment(data);
    } catch (error) {
      
    }
  }

  const onChangedValue = (e) => {
    console.log('Value changed', e.target.value);
    setTypedText(e.target.value);
  }
  return (
    <div className='show'>
      {posts?.map((post) => (
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
            <span className='reactions' onClick={() => AddLikePost(post.id)}>
              <FaRegThumbsUp /> <span className='reactions-text'>Like</span>
            </span>
            <span className='reactions' onClick={() => viewComments(post.id)}>
              <FaRegCommentAlt/>{' '}
              <span className='reactions-text' >Comments</span>
            </span>
            <span className='reactions'>
              <FaShareAlt /> <span className='reactions-text'>Share</span>
            </span>
          </div>
          {post.comments?.map(comment => {
            if (comment.post_id === post.id && clickedPost === post.id ){
              return (
                <List className={classes.root}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="image" src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary={comment.user_id}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                          >
                            {comment.comment}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </List>
              )
            }
            return null;
            })
            }
            {clickedPost === post.id && (
              <div style={{marginLeft:"100px", marginTop:"15px"}}>
              <Form inline onSubmit={(e) => handleSubmit(e)}>
                <Form.Group>
                  <Form.Row>
                    <Col>
                      <Form.Control type="text" placeholder="Normal text" value={typedText} onChange={onChangedValue}/>
                    </Col>
                    <Button type="submit" className="mb-2">
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
  };
};

export default connect(mapStateToProps)(ShowPost);
