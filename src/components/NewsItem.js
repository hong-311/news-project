import React from 'react';
import styled from 'styled-components';

//스타일 컴포넌트 생성
const NewsItemBlock = styled.div`
display: flex;

.thumbnail {
    margin-right: 1rem;
    img {
        display: block;
        width: 160px;
        height: 100px;
        object-fit: cover;
    }
}
.contents {
    h2 {
        margin: 0;
        a {
            color: black;
        }
    }
    p {
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
function NewsItem({article}) {
    const { title, description, url, urlToImage } = article;

    return (
        <NewsItemBlock>
            {
                urlToImage && (
                <div className="thumbnail">
                    {/* target="_blank" 있으면 피싱관련 문제가 생겨서 rel붙일것 */}
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                </div>)
            }
            <div className="contents">
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    );
}

export default NewsItem;