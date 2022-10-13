import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { logIn } from "../services/firebase";

export const SignIn: FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await logIn(login, password)
            navigate('/chats');
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } 
        } finally {
            setLoading(false)
        }
    };

    return (
        <>
            <h2>Sign in</h2>
            <form onSubmit={handleSubmit}>
                <p>Ligin:</p>
                <input 
                    type="email" 
                    onChange={e => setLogin(e.target.value)} 
                    value={login} 
                    required
                />
                <p>Password:</p>
                <input 
                    type="password" 
                    onChange={e => setPassword(e.target.value)} 
                    value={password} 
                    required
                />
                <br />
                <button>Login</button>
            </form>
            {loading && <CircularProgress />}
            {error && <p style={{color: 'red'}}>Логин или пароль не верны</p>}
        </>
    );
};