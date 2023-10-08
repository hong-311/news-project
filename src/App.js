import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import Header from './components/Header';

function App(props) {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/:category?" element={<NewsPage />} />
    </Routes>
    </>
  );
}

export default App;