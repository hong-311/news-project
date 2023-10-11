import React from 'react';
import styled from 'styled-components';

const PaginationBlock = styled.div`
  display: flex;
  list-style: none;
  justify-content: center;
  margin: 50px 0px -185px 0px;
`;

const PageButtonBlock = styled.button`
  background-color: transparent;
  border: none;
  color: #4258F4; 
  cursor: pointer;
  margin: 2px; 
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: #202124; 
  }
`;

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  // 전체 페이지 수 
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // 페이지 변경 함수
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <PaginationBlock>
      {/* 첫 페이지가 아닐 때 */}
      {currentPage > 1 && (
        <PageButtonBlock onClick={() => handlePageChange(currentPage - 1)}>이전</PageButtonBlock>
      )}

      {/* 페이지 번호 버튼 표시 */}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <PageButtonBlock
          key={page}
          className={page === currentPage ? 'active' : ''}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </PageButtonBlock>
      ))}
      {/* 마지막 페이지가 아닐 때 */}
      {currentPage < totalPages && (
        <PageButtonBlock onClick={() => handlePageChange(currentPage + 1)}>다음</PageButtonBlock>
      )}
    </PaginationBlock>
  );
};

export default Pagination;
