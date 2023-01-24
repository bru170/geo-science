import {
  collection,
  deleteDoc,
  DocumentData,
  onSnapshot,
  doc,
  QuerySnapshot,
} from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../config';
import { PostType } from '../types/postType';

const Home = ({ isAuth }: { isAuth: boolean }) => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const postRef = collection(db, 'posts');

  useEffect(() => {
    onSnapshot(postRef, (snapshot: QuerySnapshot<DocumentData>) => {
      setPosts(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    });
  }, []);

  const deletePost = async (id: any) => {
    const post = doc(db, 'posts', id);
    await deleteDoc(post);
  };

  return (
    <>
      {posts.length &&
        posts.map((post) => (
          <>
            <h1>{post.title}</h1>
            <h3>{post.auth?.name}</h3>
            <p>{post.post}</p>
            {isAuth && auth.currentUser?.uid === post?.auth?.id && (
              <button onClick={() => deletePost(post.id)}>Delete</button>
            )}
          </>
        ))}
    </>
  );
};

export default Home;
