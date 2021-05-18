import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));
const PhotosList = ({ posts }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{ overflowY: 'scroll', height: '600px' }}
    >
      <GridList cellHeight={180} className={classes.gridList}>
        {posts.map((post) => (
          <GridListTile key={post.id}>
            <img src={post.post_url} alt={post.id} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
const mapToProps = (state) => {
  return {
    profile: state?.profile?.userProfile,
    posts: state?.post?.userPost,
  };
};
export default connect(mapToProps)(PhotosList);
