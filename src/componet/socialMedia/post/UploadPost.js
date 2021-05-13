import React, { useState, useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../../Action/postAction';
import PostService from '../../../services/PostService';
import { connect } from 'react-redux';
const UploadPost = ({ handleClose, createPost }) => {
  const history = useHistory();

  const [title, SetTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [image, SetImage] = useState('');
  const [postUrl, setPostUrl] = useState('');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

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
      console.log(data);
      if (data?.data?.post_url !== '') {
        createPost(data?.data?.data);
      }
    } catch (error) {
      console.log('Upload Post error', error);
    }

    // console.log({ title, description, image, postUrl });
    //  dispatch(postAction({ title, description, image, postUrl }));

    //  fetch("http://localhost:5000/post/UploadPost", {
    //         method: "post",
    //         headers: {
    //            "Content-Type": "application/json",
    //            "Authorization": "Bearer "+ localStorage.getItem("jwt")
    //         },
    //        body: JSON.stringify({
    //                title,
    //                body,
    //                url
    //        })
    //    }).then(res => res.json())
    //        .then(data =>{
    //           if(data.error){
    //            M.toast({html: data.error, classes:"#c62828 red darken-3" })
    //         } else {
    //            M.toast({html: "Created post success", classes:'#76ff03 light-green accent-3'})
    //           history.push('/')
    //     }
    //   }).catch(error => {
    //     console.log(error)
    //  })
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
      {/* <Button variant='primary' disabled>
        <Spinner
          as='span'
          animation='border'
          size='sm'
          role='status'
          aria-hidden='true'
        />
        <span className='sr-only'>Loading...</span>
      </Button> */}
      <div class='form-group'>
        <button
          type='button'
          onClick={() => {
            PostDetails();
            setLoading(true);
          }}
          // name='upload'
          // value='upload'
          id='upload'
          class='btn btn-block btn-dark'
        >
          {/* <i class='fa fa-fw fa-upload'></i> */}
          {loading ? 'Uploading...' : 'Post'}
        </button>
      </div>
      {/* <input
        type='text'
        value={title}
        onChange={(e) => {
          SetTitle(e.target.value);
        }}
        placeholder='title'
      /> */}
      {/* <input
        type='text'
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder='body'
      /> */}

      {/* <button
        onClick={() => PostDetails()}
        className='btn waves-effect waves-light #64b5f6 blue darken-1'
      >
        Submit
      </button> */}
    </div>
  );
};

export default connect(null, { createPost })(UploadPost);
