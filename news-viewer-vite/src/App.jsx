import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NewsPage from './pages/NewsPage.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/:category" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
