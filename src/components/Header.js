import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
 
//스타일컴포넌트
const HeaderBlock = styled.header`
    position: fixed; top: 0; left: 0; z-index: 5000;
    width: 100%; height: 80px; padding: 0 60px; 
    background: #ffff;
    display: flex; align-items: center;

    transition: background 0.3s;

    &.active{
        width: 100%; height: 50px; padding: 0 60px; 
        background: #ffff;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
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
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <button type="submit">검색</button>
            </form>
        </HeaderBlock>
    )
}

export default Header;