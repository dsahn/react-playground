import React, { useState, useEffect } from 'react';
import { dbService } from 'fbase';

const Home = ({ userObj }) => {
    const [nweet, setNweet] = useState("")
    const [nweets, setNweets] = useState([])

    // snapshot 을 사용하면 re-render 하지 않아도 실시간 출력된다.
    useEffect(() => {
        dbService.collection("nweets").orderBy("createdAt", "desc").onSnapshot(snapshot => {
            const nweetarray = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }))
            setNweets(nweetarray)
        })
    }, [])

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("nweets").add({
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
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
                        <h4>{nweet.text}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
};
export default Home;