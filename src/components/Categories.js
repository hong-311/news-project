import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; //스타일을 꾸며주는 Link태그
import { GrSearch } from "react-icons/gr";

//스타일 컴포넌트
const CategoriesBlock = styled.div`
display: flex;
padding-top: 6rem;
width: 652px;
margin-left: 180px;
@media screen and (max-width: 652px) {
    width: 100%;
    overflow-x: auto;
}
`;

const Category = styled(NavLink)`
  font-size: 0.875rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: #5F6368;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 400;
    border-bottom: 3px solid #1A73E8;
    color: #1A73E8;
    padding-bottom: 0.7rem;
  
  }

  & + & {
    margin-left: 1rem;
  }
`;

//카테고리 지정
const categories = [
    {
      name: 'all',
      text: (
        <>
          <GrSearch style={{color: "#5F6368", marginRight: "0.25rem" }} /> 전체
        </>
      ),
    },
    {
      name: 'business',
      text: '비즈니스',
    },
    {
      name: 'entertainment',
      text: '엔터테인먼트',
    },
    {
      name: 'health',
      text: '건강',
    },
    {
      name: 'science',
      text: '과학',
    },
    {
      name: 'sports',
      text: '스포츠',
    },
    {
      name: 'technology',
      text: '기술',
    },
  ];


//카테고리 리스트를 표시하는 컴포넌트
function Categories() {
    return (
        <CategoriesBlock>
            {
                categories.map(c => (
                    <Category
                        key={c.name}
                        className={ isActive => isActive ? 'active' : undefined }
                        to={c.name === 'all' ? '/' : `/${c.name}`}
                    >
                        {c.text}
                    </Category>
                ))
            }
        </CategoriesBlock>
    );
}

export default Categories;