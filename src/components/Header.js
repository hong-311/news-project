import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GrSearch } from 'react-icons/gr';

 
//스타일컴포넌트
const HeaderBlock = styled.header`
    position: fixed;
    top: ${(props) => (props.visible ? '0' : '-5px')};
    width: 100%;
    height: 100px;
    padding: 0 30px;
    background: #ffff;
    display: flex;
    align-items: center;
    transition: top 0.3s;

    &.active {
        top: 0;
        height: 50px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); 
            img {
                width: 86px; 
                height: 28px;
                padding-top: 10px;
                margin-right: 40px;
            }
            textarea {
                height: 30px;
                line-height: 30px;
                border: 1px solid #ccc;
                box-shadow: none;
            }
    }
`;

const ContainerBlock = styled.div`
display: flex;
align-items: center;

img {
    width: 92px; 
    height: 30px;
    padding-top: 10px;
    margin-right: 40px;
}

textarea {
    width: 690px;
    height: 40px;
    margin-right: 10px;
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

const ButtonBlock = styled.button`
    font-size: 1.2rem;
    background: transparent;
    border: none;
    cursor: pointer;
`;

const IconsBlock = styled.div`
    display: flex;
    gap: 20px;
    position: absolute;
    top: 50%; // 화면의 세로 중앙에 배치
    transform: translateY(-50%);
    right: 100px;
  
    @media screen and (max-width: 768px) {
      right: 10px; 
    }
  
    @media screen and (max-width: 480px) {
      right: 5px; 
    }
  
`;

//header컴포넌트
function Header() {
    const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태를 관리
    const header = useRef(); //header태그 요소 선택

    useEffect(()=>{
        const timer = setInterval(()=>{
            window.addEventListener('scroll',handleScroll);
        },100);
        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll',handleScroll);
        }
    },[]); //페이지 초기실행시 이벤트 발생하기 위해 빈배열 처리

    //스크롤 이벤트 함수
    const handleScroll = () => {
        let windowTop = window.scrollY;

        if(windowTop > 50){
           
            header.current.classList.add('active');
        }else{
            header.current.classList.remove('active');
        }
    };

    
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value); // 검색어 업데이트
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (

            <HeaderBlock ref={header}>
            <form onSubmit={handleSubmit}>
                <ContainerBlock>
                    <Link to="/">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/552px-Google_2015_logo.svg.png"
                            alt="Google Logo"
                        />
                    </Link>
                    <textarea
                        type="text"
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                    <ButtonBlock type="submit"><GrSearch style={{marginTop: "5px"}}/></ButtonBlock>
                    <IconsBlock>
                        <span
                            className="material-symbols-outlined"
                            style={{
                                color: '#5F6368',
                                fontSize: '1.5rem',
                            }}
                        >
                            settings
                        </span>
                        <span
                            className="material-symbols-outlined"
                            style={{
                                color: '#5F6368',
                                fontSize: '1.5rem',
                            }}
                        >
                            apps
                        </span>
                        <span
                            className="material-symbols-outlined"
                            style={{
                                color: '#5F6368',
                                fontSize: '1.5rem',
                            }}
                        >
                            person
                        </span>
                    </IconsBlock>
                </ContainerBlock>
            </form>
        </HeaderBlock>
    )
}

export default Header;