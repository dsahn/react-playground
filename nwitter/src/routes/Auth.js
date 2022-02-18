import { authService, firebaseInstance } from 'fbase';
import React, { useState } from 'react';
import AuthForm from 'components/AuthForm';

const Auth = () => {
    const [error, setError] = useState("");
    const onSocialClick = async (event) => {
        const { target: { name } } = event;
        try {
            let provider;
            if (name === "google") {
                provider = new firebaseInstance.auth.GoogleAuthProvider();
            } else if (name === "github") {
                provider = new firebaseInstance.auth.GithubAuthProvider();
            }
            const data = await authService.signInWithPopup(provider);
            console.log(data);
        } catch (e) {
            setError(e.message);
        }
    };
    return (
        <div>
            <div>
                <AuthForm setError={setError} />
                <div style={{ color: 'red', fontSize: '0.7rem' }}>{error}</div>
                <button onClick={onSocialClick} name="google">Continue with Google</button>
                <button onClick={onSocialClick} name="github">Continue with Github</button>
            </div>
        </div >);
}
export default Auth;