import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import About from './pages/About';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import { signOut } from '@firebase/auth';
import { auth } from './config';

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      setIsAuth(false);
      window.location.pathname = '/login';
    });
  };

  return (
    <Router>
      <nav>
        <Link to='/'> Home </Link>
        <Link to='/about'> About </Link>
        {!isAuth ? (
          <Link to='/login'> Login </Link>
        ) : (
          <>
            <Link to='/createpost'> Create Post </Link>
            <button onClick={signUserOut}>Logout</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/createpost' element={<CreatePost isAuth={isAuth} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
