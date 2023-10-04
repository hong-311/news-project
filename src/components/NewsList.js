import React from 'react';
import NewsItem from './NewsItem';
import styled from 'styled-components';
import axios from 'axios';
import usePromise from '../libs/usePromise';
import { SyncLoader } from "react-spinners";

//스타일 컴포넌트 생성
const NewsListBlock = styled.div`
box-sizing: border-box;
padding-bottom: 3rem;
width: 768px;
margin: 0 auto;
margin-top: 2rem;
@media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
}
`;

//뉴스 전체를 보여주는 컴포넌트
//전체데이터
//https://newsapi.org/v2/top-headlines?country=kr&apiKey=발급키

//카테고리별 데이터
//https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=발급키
function NewsList({category}) {
    //데이터 받아오기 - 로딩, 성공, 실패
    const [loading, response, error] = usePromise(() => {
        //카테고리를 담는 변수
        const query = category === 'all' ? '' : `&category=${category}`;

        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`,
        );
    },[category]);

    
    //로딩중
    if(loading){
        return <NewsListBlock><SyncLoader
        color="#22B8CF"
        margin={2}
        size={10}
      /></NewsListBlock>;
    }

    //값이 없으면
    if(!response){
        return null;
    }

    //에러발생
    if(error){
        return <NewsListBlock>에러발생!</NewsListBlock>;
    }

    //값이 유효할 때
    const { articles } = response.data;
    return (
        <NewsListBlock>
            {
                articles.map(article => (
                    <NewsItem key={article.url} article={article} />
                ))
            }
        </NewsListBlock>
    );
}

export default NewsList;