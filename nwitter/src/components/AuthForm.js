import { authService } from "fbase";
import React, { useState } from "react";

const AuthForm = ({ setError }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);

    const toggleAccount = () => setNewAccount((prev) => !prev);
    const onChange = (event) => {
        const { target: { name, value } } = event;
        if (name === "email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                // create account
                data = await authService.createUserWithEmailAndPassword(email, password);
            } else {
                // log in
                data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    }
    return (<>
        <form onSubmit={onSubmit}>
            <input
                name="email"
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={onChange} />
            <input
                name="password"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={onChange} />
            <input type="submit" value={newAccount ? "Create Account" : "LogIn"} />
        </form>
        <span onClick={toggleAccount}>{newAccount ? "Sign In" : "Create Account"}</span>
    </>)
}
export default AuthForm;