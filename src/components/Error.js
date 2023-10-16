import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ErrorBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;


function Error(props) {
    const navigate = useNavigate();
    return (
        <ErrorBlock>
            <h3>죄송합니다. <span className="red">시스템 에러</span>입니다.</h3>
            <p>
                현재 시스템 오류가 발생했습니다. <br />
                새로 고침 단추를 클릭하거나 나중에 다시 시도하십시오. <br />
            </p>
            <ul>
                <li onClick={() => navigate(-1)}>이전 페이지로 이동</li>
                <li onClick={() => navigate('/')}>메인 페이지로 이동</li>
            </ul>
        </ErrorBlock>
    );
}

export default Error;