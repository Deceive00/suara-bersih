import Home from '@pages/Home';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestCreatePostPage from '@pages/test-create-post/test-create-post-page';
import CreatePost from '@pages/create-post-page';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create/post" element={<TestCreatePostPage />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
