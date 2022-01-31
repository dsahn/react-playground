import react from "react";

const Nweet = ({ nweetObj, isOwner }) => (
    <div>
        {/* 두번째 nweet은 컬럼 이름임 */}
        <h4>{nweetObj.text}</h4>
        {isOwner && <>
            <button>Delete</button>
            <button>Edit</button>
        </>}
    </div>
);

export default Nweet;