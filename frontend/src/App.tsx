import Home from '@pages/landing-page';
import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { router } from '@lib/routes/routes';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase/firebase-config';

const App = () => {
  return (
    <BrowserRouter>
      <RouterComponent/>
    </BrowserRouter>
  );
};

function RouterComponent() {
  const location = useLocation();

  useEffect(() => {
     signInWithEmailAndPassword(auth, "rian@gmail.com","rian1234");
    window.scrollTo(0, 0);
  }, [location]);

  
  return (
    <Routes>
      {router.map((route: any, index : number) => {
        return <Route key={index} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
}

export default App;
