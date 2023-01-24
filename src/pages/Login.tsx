import React from 'react';
import { auth, provider } from '../config';
import { signInWithPopup } from '@firebase/auth';
import { useNavigate } from 'react-router';

const Login = ({
  setIsAuth,
}: {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      navigate('/');
    });
  };

  return (
    <div>
      <h1>Sign in With google to continue</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
