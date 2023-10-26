import React, { useState } from 'react';
import { SyncLoader } from "react-spinners";
import NewsItem from './NewsItem';
import styled from 'styled-components';
import axios from 'axios';
import usePromise from '../libs/usePromise';
import Pagination from './PageNation';
import Error from './Error'
import NotFound from './NotFound'; 


//스타일 컴포넌트 생성
const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 652px;
  margin: 180px;
  margin-top: 5rem;
  @media screen and (max-width: 652px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  input {
    width: 660px;
    height: 40px;
    margin-bottom: 20px;
    border-radius: 25px;
    border: 0px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    resize: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    line-height: 40px;
    overflow: hidden;
  }

`;



//뉴스 전체를 보여주는 컴포넌트
//전체데이터
//https://newsapi.org/v2/top-headlines?country=kr&apiKey=발급키

//카테고리별 데이터
//https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=발급키

function NewsList({ category }) {
  const apikey = process.env.REACT_APP_API_KEY;
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // 데이터 받아오기 - 로딩, 성공, 실패
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${apikey}`);
  }, [category]);

  // 로딩 중
  if (loading) {
    return <NewsListBlock><SyncLoader
        color="#1A73E8"
        margin={2}
        size={10}
        style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    /></NewsListBlock>;
  }
  // 에러 발생
  if (error) {
    return <NewsListBlock><Error /></NewsListBlock>;
  }

  // 데이터 없음
  if (!response) {
    return null;
  }

  // 응답 데이터에서 기사 추출
  const { articles } = response.data;

  // 검색어로 기사 필터링
  const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchQuery.toLowerCase()));

  // 페이지네이션을 위한 계산
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredArticles.slice(startIndex, endIndex);

  // JSX 반환
  return (
    <NewsListBlock>
      {/* 검색어 입력 창 */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
      {/* 검색 결과가 없을 때 NotFound 컴포넌트 호출 */}
      {currentItems.length === 0 && searchQuery.trim() !== '' ? (
        <NotFound setSearchQuery={setSearchQuery} setCurrentPage={setCurrentPage} />
      ) : (
        // 검색 결과 기사들을 보여줌
        currentItems.map((article) => <NewsItem key={article.url} article={article} />)
      )}

      {/* 페이지네이션 컴포넌트 */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalItems={filteredArticles.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      )}
    </NewsListBlock>
  );
}

export default NewsList;