import { authService } from 'fbase';
import { useNavigate } from "react-router-dom"

const Profile = () => {
    const navigate = useNavigate();

    // FIXME 왜 signOut 한 뒤에 navigate 하는데
    // HOME을 먼저 그린 뒤에 auth 를 하는지 모르겠네...
    const onLogOutClick = () => {
        authService.signOut().then(() => {
            console.log('done!!')
            navigate("/");
        })
    }

    // const onLogOutClick = async () => {
    //     await authService.signOut()
    //     console.log('done!!')
    //     navigate("/");
    // }
    return <><button onClick={onLogOutClick}>Log Out</button></>;
}
export default Profile;