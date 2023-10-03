import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Test() {
    //데이터 담을 state선언
    const [datas, setDatas] = useState({
        pageno: '',
        pagesize: '',
        totalcount: '', //빈문자열
        contacts: [] //빈배열
    });

    //컴포넌트가 마운트 되면 한번 가져옴
    useEffect(() => {
        axios.get('http://127.0.0.1:8080/contacts?pageno=1&pagesize=10')
        .then((response) => {
            setDatas(response.data)
        });
    },[]);


    return (
        <div>
            {
                datas.contacts.map(data => (
                    <h1 key={data.no}>{data.name}</h1>
                ))
            }
        </div>
    );
}

export default Test;