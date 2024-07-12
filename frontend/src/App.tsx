import Home from '@pages/Home';
import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import CreatePost from '@pages/create-post-page';
import { useEffect } from 'react';
import { router } from '@lib/routes/routes';

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
