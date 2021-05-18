import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { createPost } from '../../../Action/postAction';
import PostService from '../../../services/PostService';
import { connect } from 'react-redux';
const UploadPost = ({ handleClose, createPost }) => {
  const [title, SetTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [image, SetImage] = useState('');

  const user = useSelector((state) => state.user);

  const PostDetails = async () => {
    try {
      // handleClose();
      const user_id = user?.user?.id;
      const postData = {
        user_id,
        title,
        description,
        image,
        postUrl: '',
      };

      const data = await PostService.createPost(postData);
      setLoading(false);
      handleClose();

      if (data?.data?.post_url !== '') {
        createPost(data?.data?.data);
      }
    } catch (error) {
      console.log('Upload Post error', error);
    }
  };

  return (
    <div
      className='card input-field'
      style={{
        margin: '30px auto',
        maxWidth: '500px',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <div class='mb-3'>
        <input
          type='text'
          class='form-control'
          id='exampleFormControlInput1'
          placeholder='Title'
          value={title}
          onChange={(e) => {
            SetTitle(e.target.value);
          }}
        />
      </div>
      <div class='mb-3'>
        <textarea
          class='form-control'
          id='exampleFormControlTextarea1'
          rows='3'
          placeholder='Some thing write here...'
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
      </div>
      <div className='file-field input-field'>
        <div className='btn'>
          <input type='file' onChange={(e) => SetImage(e.target.files[0])} />
        </div>
      </div>

      <div class='form-group'>
        <button
          type='button'
          onClick={() => {
            PostDetails();
            setLoading(true);
          }}
          id='upload'
          class='btn btn-block btn-dark'
        >
          {loading ? 'Uploading...' : 'Post'}
        </button>
      </div>
    </div>
  );
};

export default connect(null, { createPost })(UploadPost);
