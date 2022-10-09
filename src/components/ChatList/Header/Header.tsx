import React from "react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { StoreState } from "../../../store";
import { auth } from "../../../store/profile/slice";
import "./Header.css"


const nav = [
    {
        name: 'Main',
        path: '/',
    },
    {
        name: 'Chats',
        path: '/chats',
    },
    {
        name: 'Profile',
        path: '/profile',
    },
    {
        name: 'Articles',
        path: '/articles',
    },
];

export const Header: FC = () => {
    const isAuth = useSelector((state: StoreState) => state.profile.isAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(auth(false));
    };
    const handleLogin = () => {
        dispatch(auth(false));
        navigate('/signin');
    };
    return <>
        <header className="header">
            <ul className="header-list">
                {nav.map((item, idx) => (
                    <li key={idx}>
                        <NavLink 
                            to={item.path} 
                            style={({isActive}) => ({ 
                            color: isActive ? 'green' : 'blue',
                            })}
                            >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </header>
        <main>
            {isAuth ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
            <Outlet />
        </main>
    </>
};