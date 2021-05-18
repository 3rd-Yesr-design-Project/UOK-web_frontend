import httpService from './HttpService';

class PostService {
  async createPost(payload) {
    try {
      const data = new FormData();
      data.append('file', payload.image);

      data.append('upload_preset', 'insta-clone');
      data.append('cloud_name', 'ddeg8sl19');

      const res = await fetch(
        'https://api.cloudinary.com/v1_1/ddeg8sl19/image/upload',
        {
          method: 'post',
          body: data,
        }
      );
      const datas = await res.json();

      if (datas && datas?.url?.trim()) {
        return await httpService.post('/post', {
          ...payload,
          postUrl: datas?.url,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  fetchPosts() {
    return httpService.get('/all-posts');
  }

  getPostsByUserId(id) {
    return httpService.get(`/posts/${id}`);
  }
}

export default new PostService();
