import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postAction } from '../../../Action/postAction';
import PostService from '../../../services/PostService';
const UploadPost = () => {
  const history = useHistory();

  const [title, SetTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, SetImage] = useState('');
  const [postUrl, setPostUrl] = useState('');
  const user = useSelector((state) => state.user);
  console.log('user', user);
  const dispatch = useDispatch();

  const PostDetails = async () => {
    try {
      const user_id = user?.user?.id;
      const postData = {
        user_id,
        title,
        description,
        image,
      };
      const data = await PostService.createPost(postData);
      console.log('upload servise', data);
      // dispatch(postAction({ title, description, image, postUrl }));
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
      <input
        type='text'
        value={title}
        onChange={(e) => {
          SetTitle(e.target.value);
        }}
        placeholder='title'
      />
      <input
        type='text'
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder='body'
      />
      <div className='file-field input-field'>
        <div className='btn'>
          <span>Upload Image</span>
          <input type='file' onChange={(e) => SetImage(e.target.files[0])} />
        </div>
      </div>

      <button
        onClick={() => PostDetails()}
        className='btn waves-effect waves-light #64b5f6 blue darken-1'
      >
        Submit
      </button>
    </div>
  );
};

export default UploadPost;
