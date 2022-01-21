import React, { useState, useEffect } from 'react';
import { dbService } from 'fbase';

const Home = () => {
    const [nweet, setNweet] = useState("")
    const [nweets, setNweets] = useState([])
    const getNweets = async () => {
        // it returns Promise <QuerySnapshot>
        const dbNweets = await dbService.collection("nweets").get()
        // dbNweets.forEach((document) => console.log(document.data()))
        dbNweets.forEach((document) => {
            const nweetObject = {
                ...document.data(),
                id: document.id
            }
            // 값 대신 함수를 전달, 이전 값이 파라미터임
            // react 에서 state array 를 채우는 관례임
            setNweets(prev => [nweetObject, ...prev])
        })
    }

    useEffect(() => {
        getNweets();
    }, [])
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("nweets").add({
            nweet,
            createdAt: Date.now(),
        });
        setNweet("")
    };

    const onChange = (event) => {
        // 객체 구조분해할당
        const { target: { value } } = event;
        setNweet(value);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={nweet}
                    onChange={onChange}
                    type="text"
                    placeholder="What's on your mind?"
                    maxLength={120} />
                <input type="submit" value="Nweet" />
            </form>
            <div>
                {nweets.map((nweet) => (
                    <div key={nweet.id}>
                        {/* 두번째 nweet은 컬럼 이름임 */}
                        <h4>{nweet.nweet}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
};
export default Home;