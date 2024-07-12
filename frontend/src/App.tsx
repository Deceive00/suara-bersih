import Home from '@pages/Home';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestCreatePostPage from '@pages/test-create-post/test-create-post-page';
import CreatePost from '@pages/create-post-page';
import ThreadDetail from '@pages/thread-detail-page';
import SearchThread from '@pages/search-thread-page';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create/post" element={<TestCreatePostPage />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/threaddetail" element={<ThreadDetail />} />
        <Route path="/searchthread" element={<SearchThread />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
