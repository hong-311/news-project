import React from 'react';
import { useParams } from 'react-router-dom';
import NewsList from '../components/NewsList';

//뉴스관련 페이지 처리를 할 컴포넌트
function NewsPage({searchResults}) {
    //파라미터 정보담는 변수
    const { category } = useParams();

    //카테고리가 선택되지 않으면 기본값으로 all처리
    const categoryName = category || 'all';

    return (
        <div>
            <NewsList category={categoryName}  />
        </div>
    );
}

export default NewsPage;