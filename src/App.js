import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App(props) {
  return (
    <Routes>
      <Route path="/:category?" element={<NewsPage />} />
    </Routes>
  );
}

export default App;