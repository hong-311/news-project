//promise를 처리할 사용자 Hook 제작

import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps){
    //로딩중, 완료, 실패에 대한 state 관리
    const [loading, setLoading] = useState(true);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    //컴포넌트 마운트시 데이터 확인
    useEffect(() => {
        const process = async () => {
            setLoading(true);   // 로딩중
            try{
                const resolved = await promiseCreator();    // 프로미스를 실행하고 완료된 데이터 받아옴
                setResolved(resolved);  // 완료된 데이터 state에 저장
            } catch(e) {
                setError(e);    // 에러가 발생하면 에러를 state에 저장
            }
            setLoading(false);  // 로딩 완료
        };
        process();
    },deps);

    return [loading, resolved, error];
}