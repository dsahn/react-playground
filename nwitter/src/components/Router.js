import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import Navigation from 'components/Navigation';
import Profile from 'routes/Profile';

const AppRouter = ({ isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route path="/" element={<Home userObj={userObj} />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route from="*" to="/" />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Auth />} />
                        <Route from="*" to="/" />
                    </>
                )}
            </Routes>
        </Router>
    )
}

export default AppRouter;