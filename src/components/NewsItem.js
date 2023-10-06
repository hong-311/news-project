import React from 'react';
import styled from 'styled-components';

//스타일 컴포넌트 생성
const NewsItemBlock = styled.div`
display: flex;

.thumbnail {
    margin-left: auto;
    
    img {
        display: block;
        width: 92px;
        height: 92px;
        object-fit: cover;
        border-radius: 10px;
    }
}
.contents {
    h2 {
        margin: 0;
        a {
            font-family: 'AppleSDGothicNeoL', sans-serif;
            color: #1A0dab;
            font-size: 20px;
            font-weight: 500;
            text-decoration: none; /* a 태그의 밑줄 제거 */
            text-align: left;
        }
    }
    p {
        font-size: 14px;
        margin: 0;
        line-height: 1.5;
        margin-top: 0.5rem;
        white-space: normal;
        
    }
}
& + & {
    margin-top: 3rem;
}
`;

//뉴스 한개한개를 표시할 컴포넌트
const NewsItem = ({ article }) => {
    const { title, url, urlToImage } = article;
    let { description } = article;
  
    // description이 2줄을 넘어가면 2줄까지만 자르고 ...을 추가
    if (description && description.length > 60) {
      description = description.substring(0, 60) + "...";
    }

    return (
        <NewsItemBlock>
            {/* urlToImage가 있는 경우 (썸네일) */}
           
            <div className="contents">
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
                </h2>
                <p>{description}</p>
            </div>
            {
                urlToImage && (
                <div className="thumbnail">
                    {/* target="_blank" 있으면 피싱관련 문제가 생겨서 rel붙일것 */}
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                </div>)
            }
        </NewsItemBlock>
    );
}

export default NewsItem;