// // import HttpService from './HttpService';
// import { API } from '../utils/config';

// class PostService extends HttpService {
//   createPost = async (payload) => {
//     return await this.sendRequest({
//       method: 'POST',
//       url: API.post,
//       responseType: 'json',
//       data: payload,
//     });
//   };
// }

// export default new PostService();

import httpService from './HttpScicalService';

class PostService {
  createPost(payload) {
    console.log('post service', payload);
    let url;
    const data = new FormData();
    data.append('file', payload.image);

    data.append('upload_preset', 'insta-clone');
    data.append('cloud_name', 'ddeg8sl19');
    fetch('https://api.cloudinary.com/v1_1/ddeg8sl19/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        url = data.url;
      })
      .catch((error) => {
        console.log(error);
      });
    payload.post_url = url;

    return httpService.post('/post', payload);
  }
}

export default new PostService();
