import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Categories from './Categories';

// 스타일 컴포넌트
const HeaderBlock = styled.header`
  position: fixed;
  top: ${(props) => (props.visible ? '0' : '-5px')};
  width: 100%;
  height: 70px;
  padding: 0 30px;
  background: #ffffff;
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
    }
  }
`;

const ContainerBlock = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 92px;
    height: 30px;
    margin-left: 10px;
  }
`;

const IconsBlock = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 100px;

  @media screen and (max-width: 1024px) {
    right: 20px;
  }

  @media screen and (max-width: 768px) {
    right: 10px;
  }

  @media screen and (max-width: 480px) {
    right: 5px;
  }
`;
// header 컴포넌트 
function Header() {
  const header = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const windowTop = window.scrollY;
      const headerClassList = header.current.classList;

      if (windowTop > 50) {
        headerClassList.add('active');
      } else {
        headerClassList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderBlock ref={header}>
      <ContainerBlock>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/552px-Google_2015_logo.svg.png"
            alt="Google Logo"
          />
        </Link>
        <Categories />
        <IconsBlock>
          <span className="material-symbols-outlined" style={{ color: '#5F6368', fontSize: '1.5rem' }}>
            settings
          </span>
          <span className="material-symbols-outlined" style={{ color: '#5F6368', fontSize: '1.5rem' }}>
            apps
          </span>
          <span className="material-symbols-outlined" style={{ color: '#5F6368', fontSize: '1.5rem' }}>
            person
          </span>
        </IconsBlock>
      </ContainerBlock>
    </HeaderBlock>
  );
}

export default Header;
