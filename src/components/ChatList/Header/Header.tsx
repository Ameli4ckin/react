import React from "react";
import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Header.css"


const navigate = [
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
];

export const Header: FC = () => {
    return <>
        <header className="header">
            <ul className="header-list">
                {navigate.map((item, idx) => (
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
            <Outlet />
        </main>
    </>
};