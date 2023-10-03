//promise를 처리할 사용자 Hook 제작

import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps){
    //로딩중, 완료, 실패에 대한 state 관리
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    //컴포넌트 마운트시 데이터 확인
    useEffect(() => {
        const process = async () => {
            setLoading(true);
            try{
                const resolved = await promiseCreator();
                setResolved(resolved);
            } catch(e) {
                setError(e);
            }
            setLoading(false);
        };
        process();
    },deps);

    return [loading, resolved, error];
}