import Home from '@pages/Home';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from '@pages/create-post-page';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
