import { authService, dbService } from 'fbase';
import { useEffect, useCallback, useState } from 'react';
import { useNavigate } from "react-router-dom"

const Profile = ({ userObj, refreshUser }) => {
    const [newDisplayName, setNewDisplayName] = useState(userObj ? userObj.displayName : "")
    const navigate = useNavigate();
    const waiter = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay))

    // signOut 한 뒤에 navigate 를 하면, HOME 으로 route 된 뒤에 auth 로 route 됨. 약간의 딜레이가 필요함
    // - timeout 딜레이를 주면 'Warning: Can't perform a React state update on an unmounted component.' 에러가 사라짐
    // - no routes matched location 에러는 from=* to=/ 를 탈 때 찍히는 것으로 보임
    const onLogOutClick = () => {
        authService.signOut().then(() => {
            waiter(100).then(() => navigate("/"))
        })
    }
    const getMyNweets = useCallback(async () => {
        const nweets = await dbService
            .collection("nweets")
            .where("creatorId", "==", userObj.uid)
            .orderBy("createdAt", "asc")
            .get();

        console.log(nweets.docs.map((doc) => doc.data()))
    }, [userObj])

    useEffect(() => {
        getMyNweets();
    }, [getMyNweets])

    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayName) {
            await userObj.updateProfile({
                displayName: newDisplayName,
            })
            refreshUser();
        }
    }
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewDisplayName(value)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    type="text"
                    placeholder="Display name"
                    value={newDisplayName} />
                <input type="submit" value="Update Profile" />
            </form>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    )
}
export default Profile;