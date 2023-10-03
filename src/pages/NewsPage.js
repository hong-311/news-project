import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

//뉴스관련 페이지 처리를 할 컴포넌트
//파라미터에 뉴스카테고리를 처리할 예정
//자손컴포넌트 : 카테고리를 보여주는 컴포넌트, 뉴스리스트를 보여주는 컴포넌트
function NewsPage() {
    //파라미터 정보담는 변수
    const { category } = useParams();

    //카테고리가 선택되지 않으면 기본값으로 all처리
    const categoryName = category || 'all';

    return (
        <div>
            <Categories />
            <NewsList category={categoryName} />
        </div>
    );
}

export default NewsPage;