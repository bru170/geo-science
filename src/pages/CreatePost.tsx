import { addDoc, collection } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { auth, db } from '../config';

const CreatePost = ({ isAuth }: { isAuth: boolean }) => {
  const [title, setTitle] = useState<string>('');
  const [post, setPost] = useState<string>('');

  const postRef = collection(db, 'posts');

  let navigate = useNavigate();

  // check out protected routes
  useEffect(() => {
    if (!isAuth) {
      navigate('/');
    }
  }, []);

  const createPost = async () => {
    await addDoc(postRef, {
      title,
      post,
      author: {
        name: auth.currentUser?.displayName,
        id: auth.currentUser?.uid,
      },
    });
    navigate('/');
  };

  return (
    <div>
      <div>
        <h1>Create a post</h1>
        <label>Title:</label>
        <input
          placeholder='Title...'
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
        <label>Post:</label>
        <textarea
          placeholder='Post...'
          onChange={(event) => {
            setPost(event.target.value);
          }}
        ></textarea>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
