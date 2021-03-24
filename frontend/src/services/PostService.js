import httpService from './HttpService';

class PostService{
  createPost = async (payload) => {
    httpService.post('/post');
  };

  deletePost = (postId) => {
    httpService.delete(`/post/${postId}`)
  }

  getPost = () => {
    httpService.get('/posts');
  }

  addComment = () => {
    httpService.post('/comment');
  }

  deleteComment = (commentId) => {
    httpService.delete(`comment/${commentId}`)
  }

  likePost = (postId) => {
    return httpService.put(`/like/${postId}`)
  }
}

export default new PostService();
