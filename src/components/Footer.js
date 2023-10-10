import React from 'react';
import { FaCog } from 'react-icons/fa';
import styled from 'styled-components';

const FooterBlock = styled.div`
    background-color: #F0F0F0;
    
    hr {
        margin: 0;
        border: none;
        border-top: 1px solid #ccc;
        width: 100%;
    }

    p {
        font-size: 0.9375rem;
        height: 40px;
        margin: 0 0 0 155px;
        padding: 0 0 0 27px;
        color: #70757A;
        display: flex; 
        align-items: center; 
    }

    .quick-settings-text {
        color: #1A0DAB; 
    }

    .icon {
        color: #1A0DAB;
        margin-top: 2px;
    }
`;

function Footer() {
    return (
        <FooterBlock>
            <hr />
            <p>대한민국</p>
            <hr />
            <p><span className="quick-settings-text">빠른 설정</span>(<FaCog className="icon" />)의 옵션 더보기</p>
        </FooterBlock>
    );
}

export default Footer;
