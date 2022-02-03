import React, { useState, useEffect } from 'react';
import { dbService } from 'fbase';
import Nweet from 'components/Nweet';

const Home = ({ userObj }) => {
    const [nweet, setNweet] = useState("")
    const [nweets, setNweets] = useState([])
    const [attachment, setAttachment] = useState()

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
    const onFileChange = (event) => {
        const { target: { files } } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const { currentTarget: { result } } = finishedEvent
            setAttachment(result)
        }
        reader.readAsDataURL(theFile)
    }
    const onClearAttachment = () => setAttachment(null)
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={nweet}
                    onChange={onChange}
                    type="text"
                    placeholder="What's on your mind?"
                    maxLength={120} />
                <input type="file" accept='image/*' onChange={onFileChange} />
                <input type="submit" value="Nweet" />
                {attachment && <div>
                    <img src={attachment} width="50px" height="50px" alt="thumbnail" />
                    <button onClick={onClearAttachment}>Clear</button>
                </div>}
            </form>
            <div>
                {nweets.map((nweet) => (
                    <Nweet key={nweet.id}
                        nweetObj={nweet}
                        isOwner={nweet.creatorId === userObj.uid} />
                ))}
            </div>
        </div>
    )
};
export default Home;