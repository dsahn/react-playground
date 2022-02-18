import React, { useState, useRef } from "react"
import { dbService, storageService } from 'fbase';
import { v4 as uuidv4 } from "uuid";

const NweetFactory = ({ userObj }) => {
    const [nweet, setNweet] = useState("")
    const [attachment, setAttachment] = useState("")
    const fileInput = useRef()

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
    const onClearAttachment = () => {
        setAttachment(null)
        fileInput.current.value = null
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        let attachmentUrl = "";
        if (attachment !== "") {
            const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
            const response = await attachmentRef.putString(attachment, "data_url");
            attachmentUrl = await response.ref.getDownloadURL()
        }
        const nweetObj = {
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl
        };
        await dbService.collection("nweets").add(nweetObj);
        setNweet("")
        setAttachment("")
        fileInput.current.value = null
    };
    return (
        <form onSubmit={onSubmit}>
            <input value={nweet}
                onChange={onChange}
                type="text"
                placeholder="What's on your mind?"
                maxLength={120} />
            <input type="file" accept='image/*' onChange={onFileChange} ref={fileInput} />
            <input type="submit" value="Nweet" />
            {attachment && <div>
                <img src={attachment} width="50px" height="50px" alt="thumbnail" />
                <button onClick={onClearAttachment}>Clear</button>
            </div>}
        </form>
    )
}
export default NweetFactory;