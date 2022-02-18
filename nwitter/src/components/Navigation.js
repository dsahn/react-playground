import React from 'react';
import { Link } from "react-router-dom";

const Navigation = ({ userObj }) => <nav>
    <ul>
        <li>
            <Link to="/">HOME</Link>
        </li>
        <li>
            <Link to="/profile">
                {/* Cannot read properties of null (reading 'displayName') 에 대한 버그수정 */}
                {userObj?.displayName?.length ? `${userObj.displayName}'s Profile` : 'Profile'}
            </Link>
        </li>
    </ul>
</nav>
export default Navigation;