import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App(props) {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category?" element={<NewsPage />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;