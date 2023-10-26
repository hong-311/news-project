import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NewsList from './NewsList';

const NotFoundBlock = styled.div`
 font-size: 14px;
 margin-top: 40px;
 margin-bottom: 130px;
 
 li {
  margin-top: 0.5em; 
  color: #787878;
}
`;

const StyledLink = styled(Link)`
  text-decoration: none; 
  font-size: 18px;
  font-weight: bold;
`;


function NotFound({setSearchQuery, setCurrentPage}) {
  
  const resetSearch = () => {
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <NotFoundBlock>
      <p>검색어와 일치하는 뉴스 검색결과가 없습니다.</p>
      <p>제안 : 
        <li>
          모든 단어의 철자가 정확한지 확인하세요.
        </li>
        <li>
          다른 검색어를 사용해 보세요.
        </li>
        <li>
          더 일반적인 검색어를 사용해 보세요.
        </li>
        <li>
          키워드 수를 줄여보세요.
        </li>
      </p>

      <StyledLink to="/" onClick={resetSearch}>메인 페이지로 이동</StyledLink>
    </NotFoundBlock>
  );
}

export default NotFound;
